using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class SeasonData
    {
        private static Random rnd = new Random();
        public static List<Season> Seasons;

        public static Season GetSeason()
        {
            if (GameData.CurrentSeason == 0 || GameData.CurrentWeek > GameData.WeeksInSeason)
            {
                return NewSeason();
            }
            else
            {
                return Seasons.FirstOrDefault(s => s.Id == GameData.CurrentSeason);
            }
        }

        public static Season NewSeason()
        {
            if (Seasons == null)
            {
                Seasons = new List<Season>();
            }

            var newSeason = new Season
            {
                Id = !Seasons.Any() ? 1 : Seasons.Max(s => s.Id) + 1 
            };

            for (var division = 1; division <= GameData.Divisions; division++)
            {
                TeamStatsData.CreateDivisionData(newSeason.Id, division);
            }

            GameData.CurrentSeason = newSeason.Id;
            GameData.CurrentWeek = 1;

            MatchData.CreateSeasonFixtures(newSeason.Id);

            Seasons.Add(newSeason);

            if (GameData.SkipToLastWeekOfSeason)
            {
                MatchData.PlayAllMatchesForSeason();
                GameData.CurrentWeek = GameData.TeamsPerDivision - 1;
            }

            return newSeason;
        }

        public static Season GetById(int id)
        {
            return Seasons == null ? NewSeason() : Seasons.FirstOrDefault(s => s.Id == id);
        }

        // get list of end of season info
        // update teams, gamedata
        // don't create new season yet, 
        // but advance week so getseason will know to create a new
        public static IEnumerable<ProRel> GetEndOfSeasonData()
        {
            CreateProRelData();
            EndofSeasonUpdates();
            GameData.CurrentWeek++; 
            return ProRelData.GetProRelInfoForSeason(GameData.CurrentSeason);
        }

        public static void EndofSeasonUpdates()
        {
            PromoteOrRelegateTeams();
            var retiredList = PlayersAgeIncrease();
            CashRewards();
            BoostRatings();
            AddNewPlayers();
        }

        private static void PromoteOrRelegateTeams()
        {
            foreach (var prorel in ProRelData.GetProRelInfoForSeason(GameData.CurrentSeason))
            {
                var team = TeamData.GetTeamById(prorel.TeamId);
                if (prorel.Status == "Relegated")
                {
                    team.DivisionId++;
                }
                else
                {
                    team.DivisionId--;
                }
            }
        }

        private static IEnumerable<int> PlayersAgeIncrease()
        {
            var retiredPlayerIdList = new List<int>();

            foreach (var player in PlayerData.GetPlayers())
            {
                player.Age++;
                if (player.Age > 34)
                {
                    if (rnd.Next(1, 4) == 2)
                    {
                        player.Status = PlayerStatusEnum.Retired;
                        player.TeamId = 0;
                        player.Selected = false;
                        player.Value = 0;
                        retiredPlayerIdList.Add(player.Id);
                    }
                }
            }
            return retiredPlayerIdList;
        }

        private static void AddNewPlayers()
        {
            for (var newplayerindex = 1; newplayerindex <= rnd.Next(5, 20); newplayerindex++)
            {
                var names = SetupPlayers.GetNames();
                var forename = names.names[rnd.Next(1, names.names.Count + 1)].forename;
                var surname = names.names[rnd.Next(1, names.names.Count + 1)].surname;

                var name = forename + " " + surname;
                var positionId = rnd.Next(1, Enum.GetNames(typeof(PlayerPositionsEnum)).Length + 1);
                var pos = Enum.GetValues(typeof(PlayerPositionsEnum)).GetValue(positionId);
                
                var age = rnd.Next(18, 25);
                var rating = (rnd.Next(1, 100) + rnd.Next(1, 100)) / 2;
                var val = PlayerData.GetInitialValueFromRating(rating);

                PlayerData.AddNewPlayer(name, 0, rating, (PlayerPositionsEnum)pos, val, age);
            }
        }

        private static void CashRewards()
        {
            foreach (var team in TeamData.GetTeams())
            {
                var pos = team.Position;
                var div = team.DivisionId;

                // div 4 = 40k 
                // div 3 = 135k
                // div 2 = 320k
                // div 1 = 625k
                var baseDivisionCash = (6-div) * (6-div) * (6-div) * 5000;

                // div 4 = 100k, 50k, 25k
                // div 3 = 200k, 100k, 50k
                // div 2 = 300k, 150k, 75k
                // div 1 = 400k, 200k, 100k
                var positionRelated = 0;
                if (pos < 4)
                {
                    positionRelated +=  (pos == 1 ? 1 :0)*100000*(5-div);
                    positionRelated += (pos == 2 ? 1 : 0) * 50000 * (5 - div);
                    positionRelated += (pos == 3 ? 1 : 0) * 25000 * (5 - div);
                }

                team.AddCash(baseDivisionCash + positionRelated);
            }
        }
        private static void BoostRatings()
        {
            // TODO - player attributes adjustments
        }

        public static void CreateProRelData()
        {
            int numPromoted = GameData.TeamsPerDivision / 6;
            int numRelegated = GameData.TeamsPerDivision / 6;

            foreach (var division in DivisionData.GetDivisions())
            {
                if (division.Id != 1)
                {
                    // do promotions
                    for (var teamindex = 1; teamindex <= numPromoted; teamindex++)
                    {
                        var teamid = TeamData.GetTeamsByDivisionId(division.Id)
                            .FirstOrDefault(t => t.Position == teamindex)
                            .Id;

                        ProRelData.AddProRel(
                            GameData.CurrentSeason, 
                            division.Id,
                            teamid,
                            teamindex == 1 ? "Champions" : "Promoted");
                    }
                }
                if (division.Id != DivisionData.GetDivisions().Max(d => d.Id))
                {
                    // do relegations
                    for (var teamindex = GameData.TeamsPerDivision; teamindex > (GameData.TeamsPerDivision - numRelegated); teamindex--)
                    {
                        var teamid = TeamData.GetTeamsByDivisionId(division.Id)
                            .FirstOrDefault(t => t.Position == teamindex)
                            .Id;

                        ProRelData.AddProRel(
                            GameData.CurrentSeason,
                            division.Id,
                            teamid,
                            "Relegated");
                    }
                }
            }
        }
    }
}

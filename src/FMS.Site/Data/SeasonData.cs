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

            TeamData.AutoSelectAllTeams();

            if (GameData.SkipToLastWeekOfSeason)
            {
                MatchData.PlayAllMatchesForSeason();
                GameData.CurrentWeek = GameData.WeeksInSeason;
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
            if (GameData.CurrentWeek == GameData.WeeksInSeason)
            {
                CreateProRelData();
                EndofSeasonUpdates();
                GameData.CurrentWeek++;
            }
            return ProRelData.GetProRelInfoForSeason(GameData.CurrentSeason);
        }

        public static void EndofSeasonUpdates()
        {
            PromoteOrRelegateTeams();
            PlayerData.UnselectAllPlayers();
            var retiredList = PlayerData.PlayersAgeIncrease();
            TeamData.CashRewards();
            PlayerData.BoostRatings();
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

        private static void AddNewPlayers()
        {
            for (var newplayerindex = 1; newplayerindex <= rnd.Next(5, 20); newplayerindex++)
            {
                var names = SetupPlayers.GetNames();
                var forename = names.names[rnd.Next(1, names.names.Count + 1)-1].forename;
                var surname = names.names[rnd.Next(1, names.names.Count + 1)-1].surname;

                var name = forename + " " + surname;
                var positionId = rnd.Next(1, Enum.GetNames(typeof(PlayerPositionsEnum)).Length + 1);
                var pos = Enum.GetValues(typeof(PlayerPositionsEnum)).GetValue(positionId-1);
                
                var age = rnd.Next(17, 22);
                var rating = (rnd.Next(1, 100) + rnd.Next(1, 100)) / 2;
                var val = PlayerData.GetInitialValueFromRating(rating);

                PlayerData.AddNewPlayer(name, 0, rating, (PlayerPositionsEnum)pos, val, age);
            }
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
                        var team = TeamData.GetTeamsByDivisionId(division.Id)
                            .FirstOrDefault(t => t.Position == teamindex);
                        if (team == null)
                        {
                            throw new Exception("No team found at position ");
                        }
                        var teamid = team.Id;

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

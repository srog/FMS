using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public class MatchData 
    {
        static Random rnd = new Random();

        private static readonly List<Match> Matches = new List<Match>();

        ///////////////
        // Get Matches
        ///////////////
        public static Match GetById(int id)
        {
            return Matches.FirstOrDefault(m => m.Id == id);
        }

        public static Match GetOrPlay(int id)
        {
            var match = Matches.FirstOrDefault(m => m.Id == id);
            return match.Completed == "Yes" ? match : PlayMatch(id);
        }

        public static IEnumerable<Match> GetAllMatchesForCurrentWeek()
        {
            return Matches.Where(m => m.WeekId == GameData.CurrentWeek &&
                                    m.SeasonId == GameData.CurrentSeason);
        }

        public static IEnumerable<Match> GetAllMatchesByDivision(int divisionId)
        {
            return Matches.Where(m => m.SeasonId == GameData.CurrentSeason &&
                                    m.DivisionId == divisionId)
                          .OrderBy(m => m.WeekId);
        }

        public static IEnumerable<Match> GetMatchesByDivisionForCurrentWeek(int divisionId)
        {
            return Matches.Where(m => m.WeekId == GameData.CurrentWeek &&
                                      m.SeasonId == GameData.CurrentSeason &&
                                      m.DivisionId == divisionId);
        }

        public static IEnumerable<Match> GetByTeam(int teamId)
        {
            return Matches.Where(m => m.SeasonId == GameData.CurrentSeason &&
                                        m.HomeTeamId == teamId || 
                                        m.AwayTeamId == teamId)
                          .OrderBy(m => m.WeekId);
        }

        ///////////////
        // Play Matches
        ///////////////
        public static IEnumerable<Match> PlayAllMatchesForDivision(int divisionId)
        {
            foreach (var match in Matches.Where(m => m.DivisionId == divisionId &&
                                                m.SeasonId == GameData.CurrentSeason && 
                                                m.WeekId == GameData.CurrentWeek &&
                                                m.Completed == "No"))
            {
                PlayMatch(match.Id);
            }
            return Matches.Where(m => m.DivisionId == divisionId &&
                                                m.SeasonId == GameData.CurrentSeason &&
                                                m.WeekId == GameData.CurrentWeek);
        }

        public static IEnumerable<Match> PlayAllMatchesForCurrentWeek()
        {
            foreach (var match in Matches.Where(m => m.WeekId == GameData.CurrentWeek &&
                                                m.Completed == "No" &&
                                                m.SeasonId == GameData.CurrentSeason))
            {
                PlayMatch(match.Id);
            }
            return Matches.Where(m => m.WeekId == GameData.CurrentWeek &&
                                    m.SeasonId == GameData.CurrentSeason);
        }


        public static Match PlayMatch(int id)
        {
            var match = Matches.FirstOrDefault(m => m.Id == id);

            var homeTeam = TeamData.GetTeamById(match.HomeTeamId);
            var awayTeam = TeamData.GetTeamById(match.AwayTeamId);
            var ratingDiff = homeTeam.TeamRating - awayTeam.TeamRating;
            var homeQuotient = 5
                               + (ratingDiff > 0 ? 1 : 0)
                               + (ratingDiff < 0 ? -1 : 0)
                               + (ratingDiff > 20 ? 1 : 0)
                               + (ratingDiff < -20 ? -1 : 0)
                               + (ratingDiff > 40 ? 1 : 0);

            var awayQuotient = 5
                               + (ratingDiff < 0 ? 1 : 0)
                               + (ratingDiff > 0 ? -1 : 0)
                               + (ratingDiff < 20 ? 1 : 0)
                               + (ratingDiff > -20 ? -1 : 0)
                               + (ratingDiff < 40 ? 1 : 0);
            match.HomeTeamScore = rnd.Next(1, homeQuotient) - 1;
            match.AwayTeamScore = rnd.Next(1, awayQuotient) - 1;

            match.Completed = "Yes";

            MatchEventsData.CreateMatchEvents(match);
            // TODO - Reverse this process so events are generated first

            TeamStatsData.UpdateWithMatch(match);
            PlayerStatsData.UpdateWithMatch(match);

            return match;
        }

        public static int GetNextId()
        {
            if (Matches == null || !Matches.Any())
                return 1;

            return Matches.Max(m => m.Id) + 1;
        }

        ///////////////
        // Fixtures
        ///////////////
        private static void AddFixture(int seasonId, int weekNo, int divisionId, 
                                        int homeTeamId, int awayTeamId)
        {
            Matches.Add(new Match
            {
                Id = GetNextId(),
                Completed = "No",
                SeasonId = seasonId,
                WeekId = weekNo,
                DivisionId = divisionId,
                HomeTeamId = homeTeamId,
                AwayTeamId = awayTeamId
            });
        }

        public static void CreateSeasonFixtures(int seasonId)
        {
            for (var divisionId = 1; divisionId <= GameData.Divisions; divisionId++)
            {
                CreateFixturesForDivision(seasonId, divisionId);   
            }
        }

        public static void CreateFixturesForDivision(int seasonId, int divisionId)
        {
            var MatchesPerRound = GameData.TeamsPerDivision / 2;
            var RoundsPerSeason = GameData.TeamsPerDivision - 1;
            // division 1
            var fixedteamid = TeamData.GetTeamsByDivisionId(divisionId)
                                .OrderBy(t => t.Id)
                                .FirstOrDefault().Id;

            var allteamidlist = TeamData.GetTeamsByDivisionId(divisionId)
                .Select(t => t.Id);

            var teamidlist = TeamData.GetTeamsByDivisionId(divisionId)
                .Where(t => t.Id != fixedteamid)
                .Select(t => t.Id);

            // week one separately
            for (var homeid = 1; homeid <= MatchesPerRound; homeid++)
            {
                AddFixture(seasonId, 1, divisionId, 
                    allteamidlist.ElementAt(homeid - 1), 
                    allteamidlist.ElementAt(GameData.TeamsPerDivision - homeid));
            }

            // week 2 onwards..
            var reverseGameOne = true;
            for (var week = 1; week < RoundsPerSeason; week++)
            {
                // first game with fixed team
                var firstgameaway = RoundsPerSeason - week - 1;
                if (!reverseGameOne)
                {
                    AddFixture(seasonId, week + 1, divisionId,
                                fixedteamid, teamidlist.ElementAt(firstgameaway));
                }
                else
                {
                    AddFixture(seasonId, week + 1, divisionId,
                                teamidlist.ElementAt(firstgameaway), fixedteamid);
                }
                reverseGameOne = !reverseGameOne;

                // other 11 games round robin
                for (var loop = 0; loop < (MatchesPerRound-1); loop++)
                {
                    var hometeamindex = RoundsPerSeason - week + loop;
                    if (hometeamindex > (RoundsPerSeason - 1))
                    {
                        hometeamindex -= RoundsPerSeason;
                    }
                    var hometeamid = teamidlist.ElementAt(hometeamindex);

                    var awayteamindex = (RoundsPerSeason - 2) - week - loop;
                    if (awayteamindex < 0)
                    {
                        awayteamindex += RoundsPerSeason;
                    }
                    var awayteamid = teamidlist.ElementAt(awayteamindex);

                    AddFixture(seasonId, week + 1, divisionId, hometeamid, awayteamid);
                }
            }
        }


        public static string GetForm(int teamId)
        {
            var last5matches = Matches
                .Where(m => m.Completed == "Yes" && 
                        m.SeasonId == GameData.CurrentSeason && 
                        (m.HomeTeamId == teamId || m.AwayTeamId == teamId))
                .Take(5)
                .OrderByDescending(m => m.WeekId);

            string form = "";
            foreach (var match in last5matches)
            {
                string formThisMatch = "D";

                if (match.HomeTeamId == teamId)
                {
                    if (match.HomeTeamScore > match.AwayTeamScore)
                    {
                        formThisMatch = "W";
                    }
                    if (match.HomeTeamScore < match.AwayTeamScore)
                    {
                        formThisMatch = "L";
                    }
                }
                else
                {
                    if (match.HomeTeamScore > match.AwayTeamScore)
                    {
                        formThisMatch = "L";
                    }
                    if (match.HomeTeamScore < match.AwayTeamScore)
                    {
                        formThisMatch = "W";
                    }
                }

                form += formThisMatch;
            }
            return form;
        }
    }
}

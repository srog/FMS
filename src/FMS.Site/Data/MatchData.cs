using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class MatchData
    {
        static Random rnd = new Random();

        private static List<Match> Matches = new List<Match>();

        public static Match GetOrPlay(int id)
        {
            var match = Matches.FirstOrDefault(m => m.Id == id);
            return match.Completed == "Yes" ? match : PlayMatch(id);
        }

        public static Match PlayMatch(int id)
        {
            var match = Matches.FirstOrDefault(m => m.Id == id);

            var homeTeam = TeamData.GetTeamById(match.HomeTeamId);
            var awayTeam = TeamData.GetTeamById(match.AwayTeamId);
            var ratingDiff = homeTeam.TotalRating - awayTeam.TotalRating;
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

            // TODO - Create MatchEvents based on match
            // TODO - Reverse this process so events are generated first

            // TODO - update team stats
            TeamStatsData.UpdateWithMatch(match);
            // TODO - create / update player stats
            //PlayerStatsData.UpdateWithMatch(match);

            return match;
        }

        public static int GetNextId()
        {
            if (Matches == null || !Matches.Any())
                return 1;

            return Matches.Max(m => m.Id) + 1;
        }

        public static void CreateFixtures(int seasonId)
        {
            var week = 1;
            var division = 1;
            for (var homeIndex = 1; homeIndex < 24; homeIndex+=2)
            {
                var newMatch = new Match
                {
                    Id = GetNextId(),
                    Completed = "No",
                    SeasonId = seasonId,
                    WeekId = week,
                    DivisionId = division,
                    HomeTeamId = homeIndex,
                    AwayTeamId = homeIndex+1
                };

                Matches.Add(newMatch);
            }

            division = 2;
            for (var homeIndex = 25; homeIndex < 48; homeIndex += 2)
            {
                var newMatch = new Match
                {
                    Id = GetNextId(),
                    Completed = "No",
                    SeasonId = seasonId,
                    WeekId = week,
                    DivisionId = division,
                    HomeTeamId = homeIndex,
                    AwayTeamId = homeIndex + 1
                };

                Matches.Add(newMatch);
            }

        }

        public static IEnumerable<Match> GetMatchesForCurrentWeek()
        {
            return Matches.Where(m => m.WeekId == GameData.CurrentWeek && m.SeasonId == GameData.CurrentSeason);
        }

        public static IEnumerable<Match> GetMatchesByDivision(int divisionId)
        {
            return Matches.Where(m => m.WeekId == GameData.CurrentWeek && 
                                    m.SeasonId == GameData.CurrentSeason &&
                                    m.DivisionId == divisionId);
        }
    }
}

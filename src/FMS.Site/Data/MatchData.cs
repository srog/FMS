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

        public static IEnumerable<Match> GetMatches()
        {
            return Matches;
        }

        public static IEnumerable<Match> GetMatchById(int id)
        {
            return Matches.Where(m => m.Id == id);
        }

        public static Match PlayMatch(int homeTeamId, int awayTeamId)
        {
            var newMatch = new Match()
            {
                Id = GetNextId(),
                HomeTeamId = homeTeamId,
                AwayTeamId = awayTeamId
            };
            
            // simulate match....
            var homeTeam = TeamData.GetTeamById(homeTeamId);
            var awayTeam = TeamData.GetTeamById(awayTeamId);
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
            newMatch.HomeTeamScore = rnd.Next(1, homeQuotient) - 1;
            newMatch.AwayTeamScore = rnd.Next(1, awayQuotient) - 1;

            // add to list of matches
            Matches.Add(newMatch);
            return newMatch;
        }

        public static int GetNextId()
        {
            if (Matches == null || !Matches.Any())
                return 1;

            return Matches.Max(m => m.Id) + 1;
        }
    }
}

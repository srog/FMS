using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class TeamStatsData
    {
        private static List<TeamStats> TeamStats = new List<TeamStats>();
        
        public static TeamStats GetById(int id)
        {
            return TeamStats.FirstOrDefault(t => t.Id == id);
        }

        public static bool IsEmpty => !TeamStats.Any();

        public static IEnumerable<TeamStats> GetTeamStatsByDivision(int divisionId)
        {
            return TeamStats.Where(t => t.DivisionId == divisionId && 
                                    t.SeasonId == GameData.CurrentSeason)
                             .OrderByDescending(t => t.Points)
                             .ThenByDescending(t => t.GoalDifference)
                             .ThenByDescending(t => t.GoalsFor)
                             .ThenBy(t => t.Name);
        }

        public static TeamStats GetTeamStatsByTeam(int teamId)
        {
            return TeamStats.FirstOrDefault(t => t.TeamId == teamId &&
                                    t.SeasonId == GameData.CurrentSeason);
        }

        public static int GetPositionForTeam(int teamId, int divisionId)
        {
            IEnumerable<TeamStats> divstats = GetTeamStatsByDivision(divisionId);
            var teamstat = GetTeamStatsByTeam(teamId);

            return divstats.ToList().IndexOf(teamstat) + 1;
        }

        public static void CreateDivisionData(int seasonId, int divisionId)
        {
            foreach (var team in TeamData.GetTeamsByDivisionId(divisionId))
            {
                var teamstat = new TeamStats()
                {
                    Id = GetNextId(),
                    DivisionId = divisionId,
                    SeasonId = seasonId,
                    TeamId = team.Id,
                    Played = 0,
                    Won = 0,
                    Drawn = 0,
                    Lost = 0,
                    GoalsFor = 0,
                    GoalsAgainst = 0
                };
                TeamStats.Add(teamstat);
            }
        }

        public static int GetNextId()
        {
            return !TeamStats.Any() ? 1 : TeamStats.Max(ts => ts.Id) + 1;
        }

        public static void UpdateWithMatch(Match match)
        {
            var homeStats = TeamStats.FirstOrDefault(ts => ts.TeamId == match.HomeTeamId && 
                                            ts.SeasonId == GameData.CurrentSeason);

            var awayStats = TeamStats.FirstOrDefault(ts => ts.TeamId == match.AwayTeamId &&
                                            ts.SeasonId == GameData.CurrentSeason);

            homeStats.Played++;
            awayStats.Played++;
            homeStats.GoalsFor += match.HomeTeamScore;
            awayStats.GoalsFor += match.AwayTeamScore;
            homeStats.GoalsAgainst += match.AwayTeamScore;
            awayStats.GoalsAgainst += match.HomeTeamScore;
            homeStats.Won += (match.HomeTeamScore > match.AwayTeamScore) ? 1 : 0;
            awayStats.Won += (match.HomeTeamScore < match.AwayTeamScore) ? 1 : 0;
            homeStats.Lost += (match.HomeTeamScore < match.AwayTeamScore) ? 1 : 0;
            awayStats.Lost += (match.HomeTeamScore > match.AwayTeamScore) ? 1 : 0;
            homeStats.Drawn += (match.HomeTeamScore == match.AwayTeamScore) ? 1 : 0;
            awayStats.Drawn += (match.HomeTeamScore == match.AwayTeamScore) ? 1 : 0;            
        }
    }
}

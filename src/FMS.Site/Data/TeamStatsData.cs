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

        public static IEnumerable<TeamStats> GetTeamStatsByDivision(int divisionId)
        {
            return TeamStats.Where(t => t.DivisionId == divisionId && 
                                    t.SeasonId == GameData.CurrentSeason);
        }

        public static void CreateDivisionData(int seasonId, int divisionId)
        {
            foreach (Team team in TeamData.GetTeamsByDivisionId(divisionId))
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
    }
}

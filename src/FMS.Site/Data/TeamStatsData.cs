using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class TeamStatsData
    {
        private static List<TeamStats> TeamStats;
        
        public static TeamStats GetById(int id)
        {
            return TeamStats.FirstOrDefault(t => t.Id == id);
        }

        public static IEnumerable<TeamStats> GetTeamStatsByDivision(int divisionId)
        {
            return TeamStats.Where(t => t.DivisionId == divisionId && 
                                    t.SeasonId == GameData.CurrentSeason);
        }
    }
}

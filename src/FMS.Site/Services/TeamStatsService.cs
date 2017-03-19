using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class TeamStatsService : ITeamStatsService
    {
        public TeamStats Get(int id)
        {
            return TeamStatsData.GetById(id);
        }

        public IEnumerable<TeamStats> GetByDivision(int id)
        {
            return TeamStatsData.GetTeamStatsByDivision(id);
        }
    }
}
using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface ITeamStatsService
    {
        TeamStats Get(int id);
        IEnumerable<TeamStats> GetByDivision(int id);
    }
}
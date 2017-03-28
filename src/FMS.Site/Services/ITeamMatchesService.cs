using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface ITeamMatchesService
    {
        IEnumerable<Match> GetByTeam(int teamId);
    }
}
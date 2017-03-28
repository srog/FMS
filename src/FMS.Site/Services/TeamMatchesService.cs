using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class TeamMatchesService : ITeamMatchesService
    {
        public IEnumerable<Match> GetByTeam(int teamId)
        {
            return MatchData.GetByTeam(teamId);
        }
    }
}
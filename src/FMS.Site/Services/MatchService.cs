using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class MatchService : IMatchService
    {
        public Match PlayMatch(int homeTeamId, int awayTeamId)
        {
            return MatchData.PlayMatch(homeTeamId, awayTeamId);
        }
    }
}
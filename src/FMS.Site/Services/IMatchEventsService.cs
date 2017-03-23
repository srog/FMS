using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IMatchEventsService
    {
        IEnumerable<MatchEvent> GetForMatch(int matchId);
    }

    public class MatchEventsService : IMatchEventsService
    {
        public IEnumerable<MatchEvent> GetForMatch(int matchId)
        {
            return MatchEventsData.GetForMatch(matchId);
        }
    }
}

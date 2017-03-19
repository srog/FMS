using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IMatchService
    {
        Match PlayMatch(int homeTeamId, int awayTeamId);
        Match Get(int id);
    }
}
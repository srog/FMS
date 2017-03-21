using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IPlayerStatsService
    {
        PlayerStats Get(int playerId);
    }
}

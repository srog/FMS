using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class PlayerStatsService : IPlayerStatsService
    {
        public PlayerStats Get(int playerId)
        {
            return PlayerStatsData.GetByPlayerId(playerId);
        }
    }
}
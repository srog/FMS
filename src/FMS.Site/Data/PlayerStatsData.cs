using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public class PlayerStatsData
    {
        private static Random rnd = new Random();

        private static List<PlayerStats> PlayerStats = new List<PlayerStats>();

        public static PlayerStats GetByPlayerId(int id)
        {
            return PlayerStats.FirstOrDefault(ps => ps.PlayerId == id);
        }

        public static IEnumerable<PlayerStats> GetByTeam(int teamId)
        {
            return PlayerStats;
        }

        public static void AddPlayerStatsForPlayer(Player player)
        {
            var playerStats = new PlayerStats
            {
                Id = GetNextId(),
                PlayerId = player.Id
            };

            PlayerStats.Add(playerStats);
        }

        private static int GetNextId()
        {
            return !PlayerStats.Any() ? 1 : PlayerStats.Max(ps => ps.Id) + 1;
        }
    }
}

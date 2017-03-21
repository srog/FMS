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
            return PlayerStats.Where(ps => ps.Team == TeamData.GetTeamById(teamId).Name);
        }

        public static void AddPlayerStatsForPlayer(Player player)
        {
            int ratingQuotient = player.Rating / 10;
            var playerStats = new PlayerStats
            {
                Id = GetNextId(),
                PlayerId = player.Id,
                Aggression = rnd.Next(1,90) + ratingQuotient,
                Defending = rnd.Next(1, 90) + ratingQuotient,
                Dribbling = rnd.Next(1, 90) + ratingQuotient,
                Experience = rnd.Next(1, 90) + ratingQuotient,
                Handling = rnd.Next(1, 90) + ratingQuotient,
                Heading = rnd.Next(1, 90) + ratingQuotient,
                Leadership = rnd.Next(1, 90) + ratingQuotient,
                Pace = rnd.Next(1, 90) + ratingQuotient,
                Passing = rnd.Next(1, 90) + ratingQuotient,
                Shooting = rnd.Next(1, 90) + ratingQuotient,
                Tackling = rnd.Next(1, 90) + ratingQuotient
            };

            PlayerStats.Add(playerStats);
        }

        private static int GetNextId()
        {
            return !PlayerStats.Any() ? 1 : PlayerStats.Max(ps => ps.Id) + 1;
        }
    }
}

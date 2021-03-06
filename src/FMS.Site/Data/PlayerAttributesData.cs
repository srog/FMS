﻿using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public class PlayerAttributesData
    {
        private static Random rnd = new Random();

        private static readonly List<PlayerAttributes> PlayerAttributes = new List<PlayerAttributes>();

        public static PlayerAttributes GetByPlayerId(int id)
        {
            return PlayerAttributes.FirstOrDefault(ps => ps.PlayerId == id);
        }

        public static IEnumerable<PlayerAttributes> GetByTeam(int teamId)
        {
            return PlayerAttributes.Where(ps => ps.TeamId == teamId);
        }

        public static void AddPlayerAttributesForPlayer(Player player)
        {
            int ratingQuotient = player.Rating / 10;
            var playerAttributes = new PlayerAttributes
            {
                Id = GetNextId(),
                PlayerId = player.Id,
                Fitness = (rnd.Next(1, 100) + rnd.Next(30, 100)) / 2,
                Aggression = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Defending = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Dribbling = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Experience = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Handling = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Heading = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Leadership = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Pace = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Passing = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Shooting = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient,
                Tackling = ((rnd.Next(1, 90) + rnd.Next(1, 90)) / 2) + ratingQuotient
            };

            PlayerAttributes.Add(playerAttributes);
        }

        private static int GetNextId()
        {
            return !PlayerAttributes.Any() ? 1 : PlayerAttributes.Max(ps => ps.Id) + 1;
        }
    }
}

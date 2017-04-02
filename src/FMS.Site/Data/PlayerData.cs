using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class PlayerData 
    {
        private static List<Player> Players = new List<Player>();
        private static Random rnd = new Random();

        public static void Setup()
        {
            SetupPlayers.Setup();
        }

        public static void AddNewPlayer(string name, int teamId, int rating, 
            PlayerPositionsEnum pos, int value, int age)
        {
            var newPlayer = new Player
            {
                Id = GetNextId(),
                Status = PlayerStatusEnum.Active,
                Age = age,
                Name = name,
                Position = pos,
                Value = value,
                Rating = rating,
                Selected = false,
                TeamId = teamId
            };
            Players.Add(newPlayer);

            PlayerAttributesData.AddPlayerAttributesForPlayer(newPlayer);
            PlayerStatsData.AddPlayerStatsForPlayer(newPlayer);
        }

        public static IEnumerable<Player> GetPlayers()
        {
            return Players;
        }

        public static IEnumerable<Player> GetPlayersByTeamId(int teamId)
        {
            return Players
                .Where(p => p.TeamId == teamId)
                .OrderByDescending(p => p.Selected)
                .ThenBy(p => p.Position)
                .ThenByDescending(p => p.Rating);
        }

        public static IEnumerable<Player> GetOutfieldPlayersByTeamId(int teamId, int matchId)
        {
            return Players.Where(p => p.TeamId == teamId && 
                                p.Selected &&
                                p.Position != PlayerPositionsEnum.Goalkeeper &&
                                !MatchEventsData.GetForMatch(matchId)
                                    .Any(me => me.PlayerId == p.Id && 
                                        me.Event == EventTypesEnum.RedCard) );
        }

        public static IEnumerable<Player> GetSelectedPlayersByTeamId(int teamId, int matchId)
        {
            return Players.Where(p => p.TeamId == teamId &&
                                p.Selected &&
                                !MatchEventsData.GetForMatch(matchId)
                                    .Any(me => me.PlayerId == p.Id &&
                                        me.Event == EventTypesEnum.RedCard));
        }

        public static IEnumerable<Player> GetSelectedPlayersByTeamId(int teamId)
        {
            return Players.Where(p => p.TeamId == teamId && p.Selected);
        }

        public static Player GetPlayerById(int id)
        {
            return Players.FirstOrDefault(p => p.Id == id);
        }

        private static int GetNextId()
        {
            return !Players.Any() ? 1 : Players.Max(p => p.Id) + 1;
        }

        public static int GetInitialValueFromRating(int rating)
        {
            int baseval = 0;
            if (rating < 30)
            {
                baseval = 2000 * rating;
            }
            else
            {
                if (rating < 60)
                {
                    baseval = 100000 + (10000 * (rating - 30));
                }
                else
                {
                    if (rating < 80)
                    {
                        baseval = 500000 + (500000 * (rating - 60));
                    }
                    else
                    {
                        if (rating < 90)
                        {
                            baseval = 10000000 + (3000000 * (rating - 80));
                        }
                        else
                        {
                            baseval = 30000000 + (7500000 * (rating - 90));
                        }
                    }
                }
            }

            return baseval;
        }

        public static void UnselectAllPlayers()
        {
            foreach (var player in GetPlayers())
            {
                player.Selected = false;
            }
        }

        public static string PlayersAgeIncrease()
        {
            var retiredPlayerIdList = new List<int>();
            var retiredPlayersDescription = "Retired Players: ";

            foreach (var player in Players)
            {
                player.Age++;
                if (player.Age > 34)
                {
                    if (rnd.Next(1, 5) == 2)
                    {
                        retiredPlayersDescription += player.Name;
                        retiredPlayersDescription += " (" + player.Team + "), ";
                        player.Status = PlayerStatusEnum.Retired;
                        player.TeamId = 0;
                        player.Selected = false;
                        player.Value = 0;
                        retiredPlayerIdList.Add(player.Id);
                    }
                }
            }

            return retiredPlayersDescription.TrimEnd(',');
        }

        public static void BoostRatings()
        {
            // TODO - player attributes adjustments
        }
    }
}

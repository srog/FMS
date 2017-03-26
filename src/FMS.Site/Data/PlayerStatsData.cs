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
            return PlayerStats.Where(ps => ps.Player.TeamId == teamId);
        }

        public static void AddPlayerStatsForPlayer(Player player)
        {
            var playerStats = new PlayerStats
            {
                Id = GetNextId(),
                PlayerId = player.Id,
                Appearances = 0,
                Goals = 0,
                Assists = 0,
                CleanSheets = 0,
                RedCards = 0,
                YellowCards = 0
            };

            PlayerStats.Add(playerStats);
        }

        public static void UpdateWithMatch(Match match)
        {
            bool cleanSheet = (match.AwayTeamScore == 0);
            // add appearance/cleansheet for each player
            var players = PlayerData.GetPlayersByTeamId(match.HomeTeamId).Where(p => p.Selected);
            foreach (var homePlayer in players)
            {
                var homePlayerStat = GetByPlayerId(homePlayer.Id);
                homePlayerStat.Appearances++;
                if (cleanSheet)
                {
                    homePlayerStat.CleanSheets++;
                }
            }
            cleanSheet = (match.HomeTeamScore == 0);
            players = PlayerData.GetPlayersByTeamId(match.AwayTeamId).Where(p => p.Selected);

            foreach (var awayPlayer in players)
            {
                var awayPlayerStat = GetByPlayerId(awayPlayer.Id);
                awayPlayerStat.Appearances++;
                if (cleanSheet)
                {
                    awayPlayerStat.CleanSheets++;
                }
            }

            // add match event stats
            foreach (var matchevent in MatchEventsData.GetForMatch(match.Id))
            {
                var playerStat = PlayerStats.FirstOrDefault(ps => ps.PlayerId == matchevent.PlayerId);

                switch (matchevent.Event)
                {
                    case EventTypesEnum.Goal:
                        playerStat.Goals++;
                        break;

                    case EventTypesEnum.Assist:
                        playerStat.Assists++;
                        break;

                    case EventTypesEnum.RedCard:
                        playerStat.RedCards++;
                        break;

                    case EventTypesEnum.YellowCard:
                        playerStat.YellowCards++;
                        break;
                }
            }
        }

        private static int GetNextId()
        {
            return !PlayerStats.Any() ? 1 : PlayerStats.Max(ps => ps.Id) + 1;
        }
    }
}

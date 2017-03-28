using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class PlayerData 
    {
        private static List<Player> Players;

        public static void Setup()
        {
            Players = SetupPlayers.Setup();
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
    }
}

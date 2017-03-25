using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class PlayerData 
    {
        private static List<Player> Players;

        public static IEnumerable<Player> GetPlayers()
        {
            return Players ?? (Players = SetupPlayers.Setup());
        }

        public static IEnumerable<Player> GetPlayersByTeamId(int teamId)
        {
            if (Players == null)
            {
                Players = SetupPlayers.Setup();
            }
            return Players.Where(p => p.TeamId == teamId);
        }

        public static IEnumerable<Player> GetOutfieldPlayersByTeamId(int teamId, int matchId)
        {
            return Players.Where(p => p.TeamId == teamId && 
                                p.Position != PlayerPositionsEnum.Goalkeeper &&
                                !MatchEventsData.GetForMatch(matchId)
                                    .Any(me => me.PlayerId == p.Id && 
                                        me.Event == EventTypesEnum.RedCard) );
        }

        public static Player GetPlayerById(int id)
        {
            if (Players == null)
            {
                Players = SetupPlayers.Setup();
            }
            return Players.FirstOrDefault(p => p.Id == id);
        }
    }
}

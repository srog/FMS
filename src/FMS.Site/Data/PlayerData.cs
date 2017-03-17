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
            if (Players == null)
            {
                Players = SetupPlayers.Setup();
            }
            return Players;
        }

        public static IEnumerable<Player> GetPlayersByTeamId(int teamId)
        {
            if (Players == null)
            {
                Players = SetupPlayers.Setup();
            }
            return Players.Where(p => p.TeamId == teamId);
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

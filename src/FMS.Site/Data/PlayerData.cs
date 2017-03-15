using System.Collections.Generic;
using System.IO;
using System.Linq;
using FMS.Site.Models;
using FMS.Site.Models.JsonConverters;
using Newtonsoft.Json;

namespace FMS.Site.Data
{
    public static class PlayerData
    {
        private static List<Player> Players;

        public static IEnumerable<Player> GetPlayers()
        {
            if (Players == null)
            {
                SetupPlayers();
            }
            return Players;
        }

        public static Player GetPlayerById(int id)
        {
            if (Players == null)
            {
                SetupPlayers();
            }
            return Players.FirstOrDefault(p => p.Id == id);
        }

        private static void SetupPlayers()
        {
            Names namesData;

            using (StreamReader r = new StreamReader("Configuration/names.json"))
            {
                string data = r.ReadToEnd();
                namesData = JsonConvert.DeserializeObject<Names>(data);
            }
            Players = ConvertConfigToPlayers(namesData);
        }

        private static List<Player> ConvertConfigToPlayers(Names names)
        {
            var playerList = new List<Player>();
            var index = 0;
            foreach (var name in names.names)
            {
                index++;
                var newPlayer = new Player()
                {
                    Id = index,
                    Name = name.forename + name.surname
                };
                playerList.Add(newPlayer);
            }
            return playerList;
        }
    }
}

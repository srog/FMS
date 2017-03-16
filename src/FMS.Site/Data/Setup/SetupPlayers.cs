using FMS.Site.Models.JsonConverters;
using System.Collections.Generic;
using System.IO;
using FMS.Site.Models;
using Newtonsoft.Json;

namespace FMS.Site.Data.Setup
{
    public static class SetupPlayers
    {
        public static List<Player> Setup()
        {
            Names namesData;

            using (StreamReader r = new StreamReader("Configuration/names.json"))
            {
                string data = r.ReadToEnd();
                namesData = JsonConvert.DeserializeObject<Names>(data);
            }
            return ConvertConfigToPlayers(namesData);
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

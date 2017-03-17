using System;
using FMS.Site.Models.JsonConverters;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FMS.Site.Models;
using Newtonsoft.Json;

namespace FMS.Site.Data.Setup
{
    public static class SetupPlayers
    {
        static Random rnd = new Random();

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
            int index = 0;
      
            int teams = TeamData.GetTeams().Count();
            int playersPerTeam = 15;
            int teamcounter = 0;
            int teamid = 1;

            foreach (var forenameLoop in names.names)
            {
                foreach (var surnameLoop in names.names)
                {
                    index++;
                    teamcounter++;
                    if (teamcounter == playersPerTeam)
                    {
                        teamid++;
                        teamcounter = 0;
                        if (teamid > teams)
                        {
                            return playerList;
                        }
                    }
                    var pos = "Striker";
                    if (teamcounter < 12)
                    {
                        pos = "Midfielder";
                    }
                    if (teamcounter < 7)
                    {
                        pos = "Defender";
                    }
                    if (teamcounter < 3)
                    {
                        pos = "Goalkeeper";
                    }
                    var rating = (rnd.Next(1, 100) + rnd.Next(1, 100)) / 2;
                    var val = rating * 1000;
                    
                    var newPlayer = new Player
                    {
                        Id = index,
                        Name = forenameLoop.forename + " " + surnameLoop.surname,
                        Position = pos,
                        Value = val,
                        Rating = rating,
                        TeamId = teamid
                    };
                    playerList.Add(newPlayer);
                }
            }
            return playerList;
        }
    }
}

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
      
            var teams = TeamData.GetTeams().Count();
            var playersPerTeam = 15;
            var teamcounter = 0;
            var teamid = 1;
            var team = TeamData.GetTeamById(teamid);
            var numberOfNames = names.names.Count;

            for (var index = 1; index <= (names.names.Count*names.names.Count) ; index++)
            {
                var forename = names.names[rnd.Next(1, numberOfNames)].forename;
                var surname = names.names[rnd.Next(1, numberOfNames)].surname;
                var age = rnd.Next(18, 35);

                teamcounter++;
                if (teamcounter == playersPerTeam)
                {
                    if (teamid != 0)
                    {
                        teamid++;
                        team = TeamData.GetTeamById(teamid);
                    }
                    else
                    {
                        team = null;
                    }
                    teamcounter = 0;
                    if (teamid > teams)
                    {
                        teamid = 0;
                        team = null;
                        //return playerList;
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
                int rating;
                if (teamid == 0)
                {
                    rating = (rnd.Next(1, 100) + rnd.Next(1, 100)) / 2;
                }
                else
                {
                    rating = (rnd.Next(50 - team.InitialRanking, 100) +
                              rnd.Next(50 - team.InitialRanking, 100))/2;
                }

                var val = (rating * (200000 + rnd.Next(1,200000) + (100000-3000*age))) + (rnd.Next(1,1000) * 1000) - (rnd.Next(1, 1000) * 1000);
                if (val < 0)
                {
                    val = rnd.Next(1, 100)*1000;
                }

                var newPlayer = new Player
                {
                    Id = index,
                    Age = age,
                    Name = forename + " " + surname,
                    Position = pos,
                    Value = val,
                    Rating = rating,
                    TeamId = teamid
                };
                playerList.Add(newPlayer);
            }
            return playerList;
        }
    }
}

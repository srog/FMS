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
            var playersPerTeam = 18;
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
                var pos = PlayerPositionsEnum.Striker;
                if (teamcounter < 14)
                {
                    pos = PlayerPositionsEnum.Midfielder;
                }
                if (teamcounter < 9)
                {
                    pos = PlayerPositionsEnum.Defender;
                }
                if (teamcounter < 3)
                {
                    pos = PlayerPositionsEnum.Goalkeeper;
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

                var baseval = 0;
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
                                baseval = 10000000 +  (3000000 * (rating-80));
                            }
                            else
                            {
                                baseval = 30000000 + (7500000 * (rating - 90));
                            }
                        }
                    }
                }


                var val = baseval;
                // TODO - modify value
                //var val = (rating * (200000 + rnd.Next(1,200000) + (100000-3000*age))) + (rnd.Next(1,1000) * 1000) - (rnd.Next(1, 1000) * 1000);
                
                var newPlayer = new Player
                {
                    Id = index,
                    Age = age,
                    Name = forename + " " + surname,
                    Position = pos,
                    Value = val,
                    Rating = rating,
                    Selected = true,
                    TeamId = teamid
                };
                playerList.Add(newPlayer);

                PlayerAttributesData.AddPlayerAttributesForPlayer(newPlayer);
                PlayerStatsData.AddPlayerStatsForPlayer(newPlayer);
            }
            return playerList;
        }
    }
}

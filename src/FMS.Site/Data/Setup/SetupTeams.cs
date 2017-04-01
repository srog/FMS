using System;
using System.IO;
using FMS.Site.Models.JsonConverters;
using Newtonsoft.Json;

namespace FMS.Site.Data.Setup
{
    public static class SetupTeams
    {
        static Random rnd = new Random();

        public static void Setup()
        {
            Teams teamsData;

            using (StreamReader r = new StreamReader("Configuration/teams.json"))
            {
                string data = r.ReadToEnd();
                teamsData = JsonConvert.DeserializeObject<Teams>(data);
            }
            ConvertConfigToTeams(teamsData);
        }

        private static void ConvertConfigToTeams(Teams teams)
        {
            var index = 0;
            foreach (var team in teams.teams)
            {
                index++;
                GenerateNewTeam(index, team);
            }
        }

        private static void GenerateNewTeam(int index, Models.JsonConverters.Team teamData)
        {
            var divisionId = ((index-1) / GameData.TeamsPerDivision) + 1;
            var cashQuotient = 120 - (teamData.InitialRanking * 2);
            var cash = rnd.Next(1, cashQuotient) * 1000000;
            var formation = FormationData.GetRandomFormation();

            TeamData.AddNewTeam(teamData.TeamName, teamData.InitialRanking, 
                                divisionId, cash, formation);
        }

    }
}

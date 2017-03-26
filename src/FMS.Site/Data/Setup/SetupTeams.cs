using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FMS.Site.Models.JsonConverters;
using Newtonsoft.Json;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data.Setup
{
    public static class SetupTeams
    {
        static Random rnd = new Random();

        public static List<Team> Setup()
        {
            Teams teamsData;

            using (StreamReader r = new StreamReader("Configuration/teams.json"))
            {
                string data = r.ReadToEnd();
                teamsData = JsonConvert.DeserializeObject<Teams>(data);
            }
            return ConvertConfigToTeams(teamsData);
        }

        private static List<Team> ConvertConfigToTeams(Teams teams)
        {
            var teamList = new List<Team>();
            var index = 0;
            foreach (var team in teams.teams)
            {
                index++;
                var newTeam = GenerateNewTeam(index, team);
                
                teamList.Add(newTeam);
            }
            return teamList;
        }

        private static Team GenerateNewTeam(int id, Models.JsonConverters.Team teamData)
        {
            var division = id > 24 ? 2 : 1;
            var newTeam = new Team(id, teamData.TeamName, teamData.InitialRanking, division);

            var cashQuotient = 120 - (teamData.InitialRanking * 2);
            var cash = rnd.Next(1, cashQuotient) * 1000000;
            newTeam.AddCash(cash);

            var formationId = rnd.Next(1, FormationData.GetFormations().Count() + 1);
            newTeam.Formation = FormationData.GetById(formationId);

            return newTeam;
        }
    }
}

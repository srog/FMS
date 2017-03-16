using System.Collections.Generic;
using System.IO;
using FMS.Site.Models.JsonConverters;
using Newtonsoft.Json;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data.Setup
{
    public static class SetupTeams
    {
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

        private static Team GenerateNewTeam(int id, FMS.Site.Models.JsonConverters.Team teamData)
        {
            var newTeam = new Team(id, teamData.TeamName, teamData.InitialRanking);
            newTeam.DivisionId = 1;
            if (id > 24)
            {
                newTeam.DivisionId = 2;
            }
            newTeam.AddCash(500 - teamData.InitialRanking);
            newTeam.Played = 0;
            newTeam.Won = 0;
            newTeam.Drawn = 0;
            newTeam.Lost = 0;
            newTeam.GoalsFor = 0;
            newTeam.GoalsAgainst = 0;

            return newTeam;
        }
    }
}

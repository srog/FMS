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
                var newTeam = new Team(index, team.TeamName, team.InitialRanking);
                
                teamList.Add(newTeam);
            }
            return teamList;
        }
    }
}

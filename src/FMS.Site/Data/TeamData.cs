using System.Collections.Generic;
using System.IO;
using System.Linq;
using FMS.Site.Models.JsonConverters;
using Newtonsoft.Json;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data
{
    public static class TeamData
    {
        private static List<Team> Teams;
            
        public static IEnumerable<Team> GetTeams()
        {
            if (Teams == null)
            {
                SetupTeams();
            }
            return Teams;
        }

        public static Team GetTeamById(int id)
        {
            if (Teams == null)
            {
                SetupTeams();
            }

            return Teams.FirstOrDefault(t => t.Id == id);
        }

        private static void SetupTeams()
        {
            Teams teamsData;

            using (StreamReader r = new StreamReader("Configuration/teams.json"))
            {
                string data = r.ReadToEnd();
                teamsData = JsonConvert.DeserializeObject<Teams>(data);
            }
            Teams = ConvertConfigToTeams(teamsData);
        }

        private static List<Team> ConvertConfigToTeams(Teams teams)
        {
            var teamList = new List<Team>();
            var index = 0;
            foreach (var team in teams.teams)
            {
                index++;
                var newTeam = new Team()
                {
                    Id = index,
                    InitialRanking = team.InitialRanking,
                    Name = team.TeamName
                };
                teamList.Add(newTeam);
            }
            return teamList;
        }
    }
}

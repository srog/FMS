using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data
{
    public static class TeamData
    {
        private static List<Team> Teams;
            
        public static IEnumerable<Team> GetTeams()
        {
            return Teams ?? (Teams = SetupTeams.Setup());
        }

        public static Team GetTeamById(int id)
        {
            if (Teams == null)
            {
                Teams = SetupTeams.Setup();
            }

            return Teams.FirstOrDefault(t => t.Id == id);
        }

        public static IEnumerable<Team> GetTeamsByDivisionId(int divisionId)
        {
            if (Teams == null)
            {
                Teams = SetupTeams.Setup();
            }

            return Teams.Where(t => t.DivisionId == divisionId);
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data
{
    public static class TeamData
    {
        private static List<Team> Teams;

        public static void Setup()
        {
            Teams = SetupTeams.Setup();
        }

        public static IEnumerable<Team> GetTeams()
        {
            return Teams;
        }

        public static Team GetTeamById(int id)
        {
            return Teams.FirstOrDefault(t => t.Id == id);
        }

        public static IEnumerable<Team> GetTeamsByDivisionId(int divisionId)
        {
            return Teams.Where(t => t.DivisionId == divisionId);
        }
    }
}

using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class GetTeamsService : IGetTeamsService
    {
        public IEnumerable<Team> GetAll()
        {
            return TeamData.GetTeams();
        }

        public Team GetById(int id)
        {
            return TeamData.GetTeamById(id);
        }

        public IEnumerable<Team> GetByDivisionId(int divisionId)
        {
            return TeamData.GetTeamsByDivisionId(divisionId);
        }
    }
}
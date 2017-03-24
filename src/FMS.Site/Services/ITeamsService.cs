using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface ITeamsService
    {
        IEnumerable<Team> GetAll();
        Team GetById(int id);
        IEnumerable<Team> GetByDivisionId(int divisionId);
    }
}

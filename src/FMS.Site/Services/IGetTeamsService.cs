using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IGetTeamsService
    {
        IEnumerable<Team> GetAll();
        Team GetById(int id);
    }
}

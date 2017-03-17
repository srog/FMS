using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IGetPlayersService
    {
        IEnumerable<Player> GetAll();
        IEnumerable<Player> GetByTeamId(int teamId);
        Player GetById(int id);
    }
}

using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IGetPlayersService
    {
        IEnumerable<Player> GetAll();
        Player GetById(int id);
    }
}

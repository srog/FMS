using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class GetPlayersService : IGetPlayersService
    {
        public IEnumerable<Player> GetAll()
        {
            return PlayerData.GetPlayers();
        }

        public IEnumerable<Player> GetByTeamId(int teamId)
        {
            return PlayerData.GetPlayersByTeamId(teamId);
        }

        public Player GetById(int id)
        {
            return PlayerData.GetPlayerById(id);
        }
    }
}
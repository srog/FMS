using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly IGetPlayersService _getPlayersService;

        public PlayersController(IGetPlayersService getPlayersService)
        {
            _getPlayersService = getPlayersService;
        }

        [HttpGet]
        public IEnumerable<Player> Get()
        {
            return _getPlayersService.GetAll();
        }
        [HttpGet]
        public IEnumerable<Player> GetByTeamId(int teamid)
        {
            return _getPlayersService.GetByTeamId(teamid);
        }

        [HttpGet("{playerId}")]
        public Player GetById(int playerId)
        {
            return _getPlayersService.GetById(playerId);
        }
    }
}
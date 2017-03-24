using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly IPlayersService _getPlayersService;

        public PlayersController(IPlayersService getPlayersService)
        {
            _getPlayersService = getPlayersService;
        }

        [HttpGet]
        public IEnumerable<Player> Get()
        {
            return _getPlayersService.GetAll();
        }

        [HttpGet("{teamid}")]
        public IEnumerable<Player> Get(int teamId)
        {
            return _getPlayersService.GetByTeamId(teamId);
        }
    }
}
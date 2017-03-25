using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayersAttributesController : Controller
    {
        private readonly IPlayerAttributesService _playerAttributesService;

        public PlayersAttributesController(IPlayerAttributesService playerAttributesService)
        {
            _playerAttributesService = playerAttributesService;
        }

        [HttpGet("{playerid}")]
        public PlayerAttributes Get(int playerId)
        {
            return _playerAttributesService.Get(playerId);
        }
    }
}
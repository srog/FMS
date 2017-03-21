using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayersStatsController : Controller
    {
        private readonly IPlayerStatsService _playerStatsService;

        public PlayersStatsController(IPlayerStatsService playerStatsService)
        {
            _playerStatsService = playerStatsService;
        }

        //[HttpGet]
        //public IEnumerable<PlayerStats> Get(int id)
        //{
        //    return _playerStatsService.Get(id);
        //}

        [HttpGet("{playerid}")]
        public PlayerStats Get(int playerId)
        {
            return _playerStatsService.Get(playerId);
        }
    }
}
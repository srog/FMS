using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly IPlayerStatsService _playerStatsService;

        public PlayerController(IPlayerStatsService playerStatsService)
        {
            _playerStatsService = playerStatsService;
        }
        
        [HttpGet("{playerid}")]
        public PlayerStats GetById(int playerId)
        {
            return _playerStatsService.Get(playerId);
        }
    }
}
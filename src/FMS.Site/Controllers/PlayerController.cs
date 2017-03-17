using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly IGetPlayersService _getPlayersService;

        public PlayerController(IGetPlayersService getPlayersService)
        {
            _getPlayersService = getPlayersService;
        }
        
        [HttpGet("{playerId}")]
        public Player GetById(int playerId)
        {
            return _getPlayersService.GetById(playerId);
        }
    }
}
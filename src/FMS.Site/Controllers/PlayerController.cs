using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly IPlayerAttributesService _playerAttributesService;

        public PlayerController(IPlayerAttributesService playerAttributesService)
        {
            _playerAttributesService = playerAttributesService;
        }
        
        [HttpGet("{playerid}")]
        public PlayerAttributes GetById(int playerId)
        {
            return _playerAttributesService.Get(playerId);
        }

        [HttpPut]
        public void ToggleSelected(int playerId)
        {
            _playerAttributesService.ToggleSelected(playerId);
        }
    }
}
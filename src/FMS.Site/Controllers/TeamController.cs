using FMS.Site.Data;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        private readonly ITeamsService _getTeamsService;

        public TeamController(ITeamsService getTeamsService)
        {
            _getTeamsService = getTeamsService;
        }
        
        [HttpGet("{teamid}")]
        public Team Get(int teamid)
        {
            return _getTeamsService.GetById(teamid);
        }

        public IActionResult Put([FromBody]object teamData)
        {
            if (ModelState.IsValid)
            {
                var team = JsonConvert.DeserializeObject<Team>(teamData.ToString());
                GameData.PlayersTeam = team.Id;
                return Ok();
            }

            return BadRequest("Validation failed");
        }
    }
}
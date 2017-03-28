using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class TeamMatchesController : Controller
    {
        private readonly ITeamMatchesService _teamMatchesService;

        public TeamMatchesController(ITeamMatchesService teamMatchesService)
        {
            _teamMatchesService = teamMatchesService;
        }

        [HttpGet("{teamId}")]
        public IEnumerable<Match> Get(int teamId)
        {
            var matches = _teamMatchesService.GetByTeam(teamId);
            return _teamMatchesService.GetByTeam(teamId);
        }
    }
}
using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

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
    }
}
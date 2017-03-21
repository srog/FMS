using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        private readonly IGetTeamsService _getTeamsService;

        public TeamController(IGetTeamsService getTeamsService)
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
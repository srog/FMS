using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class TeamsController : Controller
    {
        private readonly IGetTeamsService _getTeamsService;

        public TeamsController(IGetTeamsService getTeamsService)
        {
            _getTeamsService = getTeamsService;
        }

        [HttpGet]
        public IEnumerable<Team> Get()
        {
            return _getTeamsService.GetAll();
        }

        [HttpGet("{teamId}")]
        public Team Get(int teamId)
        {
            return _getTeamsService.GetById(teamId);
        }
    }
}
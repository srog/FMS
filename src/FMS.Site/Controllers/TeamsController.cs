using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class TeamsController : Controller
    {
        private readonly ITeamsService _getTeamsService;

        public TeamsController(ITeamsService getTeamsService)
        {
            _getTeamsService = getTeamsService;
        }

        [HttpGet]
        public IEnumerable<Team> Get()
        {
            return _getTeamsService.GetAll();
        }
    }
}
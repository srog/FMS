using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class DivisionController : Controller
    {
        private readonly IGetTeamsService _getTeamsService;

        public DivisionController(IGetTeamsService getTeamsService)
        {
            _getTeamsService = getTeamsService;
        }
        
        [HttpGet("{divisionid}")]
        public IEnumerable<Team> Get(int divisionid)
        {
            return _getTeamsService.GetByDivisionId(divisionid);
        }
    }
}
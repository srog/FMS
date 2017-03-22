using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class ResultsController : Controller
    {
        private readonly IMatchesService _matchesService;

        public ResultsController(IMatchesService matchesService)
        {
            _matchesService = matchesService;
        }

        [HttpGet("{divisionId}")]
        public IEnumerable<Match> Get(int divisionId)
        {
            return _matchesService.PlayAll(divisionId); 
        }
    }
}
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

        [HttpGet("{id}")]
        public IEnumerable<Match> Get(int id)
        {
            return _matchesService.PlayAll(id); 
        }
    }
}
using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class MatchesController : Controller
    {
        private readonly IMatchesService _matchesService;

        public MatchesController(IMatchesService matchesService)
        {
            _matchesService = matchesService;
        }

        [HttpGet("{divisionId}")]
        public IEnumerable<Match> Get(int divisionId)
        {
            if (divisionId == 0)
            {
                return _matchesService.GetForCurrentWeek();
            }
            return _matchesService.GetByDivision(divisionId);
        }

    }
}
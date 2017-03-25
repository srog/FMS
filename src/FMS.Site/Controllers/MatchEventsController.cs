using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class MatchEventsController : Controller
    {
        private readonly IMatchEventsService _matchEventsService;

        public MatchEventsController(IMatchEventsService matchEventsService)
        {
            _matchEventsService = matchEventsService;
        }

        [HttpGet("{id}")]
        public IEnumerable<MatchEvent> Get(int id)
        {
            return _matchEventsService.GetForMatch(id);
        }

    }

}
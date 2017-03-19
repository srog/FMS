using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class MatchController : Controller
    {
        private readonly IMatchService _matchService;

        public MatchController(IMatchService matchService)
        {
            _matchService = matchService;
        }

        [HttpGet]
        public Match Get()
        {
            return _matchService.PlayMatch(1, 2);
        }

        //[HttpGet("{matchId")]
        //public Match Get(int matchId)
        //{
        //    return _matchService.GetMatchById(matchId);
        //}

        [HttpGet("{id}")]
        public Match Get(int id)
        {
            return _matchService.Get(id);
        }


    }
}
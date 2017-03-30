using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class EndSeasonController : Controller
    {
        private readonly IEndSeasonService _endSeasonService;

        public EndSeasonController(IEndSeasonService endSeasonService)
        {
            _endSeasonService = endSeasonService;
        }
        [HttpGet]
        public IEnumerable<ProRel> Get()
        {
            return _endSeasonService.DoSeasonEnd();
        }
    }
}
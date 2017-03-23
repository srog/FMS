using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class SeasonController : Controller
    {
        private readonly ISeasonService _seasonService;

        public SeasonController(ISeasonService seasonService)
        {
            _seasonService = seasonService;
        }

        [HttpGet]
        public Season Get()
        {
            return _seasonService.Get();
        }

        [HttpPut]
        public IActionResult Put([FromBody]object season)
        {
            if (ModelState.IsValid)
            {
                _seasonService.AdvanceWeek();

                return Ok();
            }

            return BadRequest("Validation failed");
        }
    }
}
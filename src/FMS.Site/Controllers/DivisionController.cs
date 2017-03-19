﻿using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class DivisionController : Controller
    {
        private readonly ITeamStatsService _teamStatsService;

        public DivisionController(ITeamStatsService teamStatsService)
        {
            _teamStatsService = teamStatsService;
        }
        
        [HttpGet("{divisionid}")]
        public IEnumerable<TeamStats> Get(int divisionid)
        {
            return _teamStatsService.GetByDivision(divisionid);
        }
    }
}
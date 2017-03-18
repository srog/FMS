﻿using System.Collections.Generic;
using FMS.Site.Models;
using FMS.Site.Services;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Controllers
{
    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly IGetPlayersService _getPlayersService;

        public PlayersController(IGetPlayersService getPlayersService)
        {
            _getPlayersService = getPlayersService;
        }

        [HttpGet]
        public IEnumerable<Player> Get()
        {
            return _getPlayersService.GetAll();
        }

        [HttpGet("{id}")]
        public IEnumerable<Player> Get(int id)
        {
            return _getPlayersService.GetByTeamId(id);
        }
    }
}
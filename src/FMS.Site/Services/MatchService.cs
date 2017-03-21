using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Services
{
    public class MatchService : IMatchService
    {
        [HttpGet]
        public Match Get(int id)
        {
            return MatchData.GetOrPlay(id);
        }
    }
}
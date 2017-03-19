using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Services
{
    public class MatchesService : IMatchesService
    {
        [HttpGet]
        public IEnumerable<Match> Get(int id)
        {
            return MatchData.GetMatchesByWeek(id);
        }
    }
}
using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Services
{
    public class MatchService : IMatchService
    {
        public Match PlayMatch(int homeTeamId, int awayTeamId)
        {
            return MatchData.PlayMatch(homeTeamId, awayTeamId);
        }
        [HttpGet]
        public Match Get(int id)
        {
            return MatchData.GetMatchById(id);
        }
    }
}
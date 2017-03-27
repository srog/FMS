using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;
using Microsoft.AspNetCore.Mvc;

namespace FMS.Site.Services
{
    public class MatchesService : IMatchesService
    {
        [HttpGet]
        public IEnumerable<Match> GetByDivisionForCurrentWeek(int id)
        {
            return MatchData.GetMatchesByDivisionForCurrentWeek(id);
        }

        public IEnumerable<Match> GetForCurrentWeek()
        {
            return MatchData.GetAllMatchesForCurrentWeek();
        }

        public IEnumerable<Match> PlayAll(int divisionId)
        {
            if (divisionId != 0)
            {
                return MatchData.PlayAllMatchesForDivision(divisionId);
            }
            else
            {
                return MatchData.PlayAllMatchesForCurrentWeek();
            }
        }
    }
}
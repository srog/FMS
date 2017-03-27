using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IMatchesService
    {
        IEnumerable<Match> GetByDivisionForCurrentWeek(int id);
        IEnumerable<Match> GetForCurrentWeek();
        IEnumerable<Match> PlayAll(int divisionId);
    }
}
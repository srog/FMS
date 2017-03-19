using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IMatchesService
    {
        IEnumerable<Match> Get(int id);
    }
}
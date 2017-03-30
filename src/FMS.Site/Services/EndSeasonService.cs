using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class EndSeasonService : IEndSeasonService
    {
        public IEnumerable<ProRel> DoSeasonEnd()
        {
            return SeasonData.GetEndOfSeasonData();
        }
    }
}
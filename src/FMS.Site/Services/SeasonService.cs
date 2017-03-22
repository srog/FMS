using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class SeasonService : ISeasonService
    {
        public Season Get()
        {
            return SeasonData.GetSeason();
        }

        public Season Get(int id)
        {
            return SeasonData.GetById(id);
        }
    }
}
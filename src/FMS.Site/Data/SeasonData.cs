using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class SeasonData
    {
        public static List<Season> Seasons;

        public static Season GetSeason()
        {
            if (GameData.CurrentSeason == 0)
            {
                SetupGame.Initialise();
                return NewSeason();
            }
            else
            {
                return Seasons.FirstOrDefault(s => s.Id == GameData.CurrentSeason);
            }
        }

        public static Season NewSeason()
        {
            if (Seasons == null)
            {
                Seasons = new List<Season>();
            }

            var newSeason = new Season
            {
                Id = !Seasons.Any() ? 1 : Seasons.Max(s => s.Id) + 1 
            };

            for (var division = 1; division <= GameData.Divisions; division++)
            {
                TeamStatsData.CreateDivisionData(newSeason.Id, division);
            }

            GameData.CurrentSeason = newSeason.Id;
            GameData.CurrentWeek = 1;

            MatchData.CreateFixtures(newSeason.Id);
            // TODO - create player season stats

            Seasons.Add(newSeason);
            return newSeason;
        }

        public static Season GetById(int id)
        {
            return Seasons == null ? NewSeason() : Seasons.FirstOrDefault(s => s.Id == id);
        }        
    }
}

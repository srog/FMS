
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class GameData
    {
        public static int CurrentSeason { get; set; }
        public static int CurrentWeek { get; set;}
        public static int StartSeason => 2017;
        public static int Divisions => 2;
        public static int TeamsPerDivision = 24;

        public static Formation Formations { get; set; }
        
    }
}

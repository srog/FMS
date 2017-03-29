
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class GameData
    {
        public static bool TestMode => true;
        public static bool SkipToLastWeekOfSeason => true;

        public static int CurrentSeason { get; set; }
        public static int CurrentWeek { get; set;}
        public static int StartSeason => 2017;
        public static int Divisions => 4;
        public static int TeamsPerDivision = 12;

        public static Formation Formations { get; set; }
        
    }
}

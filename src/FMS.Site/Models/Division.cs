using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Division
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Week => GameData.CurrentWeek;
        public int Season => GameData.CurrentSeason;
        
    }
}

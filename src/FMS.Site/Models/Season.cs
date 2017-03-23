using System.Linq;
using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Season
    {
        public int Id { get; set; }
        public string Name => (GameData.StartSeason + Id) + "/" + (GameData.StartSeason + Id + 1);
        public int CurrentWeek => GameData.CurrentWeek;

        public bool AllWeeklyMatchesPlayed => MatchData.GetMatchesForCurrentWeek().All(m => m.Completed != "No");
    }
}

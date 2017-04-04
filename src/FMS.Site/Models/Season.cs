using System.Linq;
using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Season
    {
        public int Id { get; set; }
        public string Name => (GameData.StartSeason + Id) + "/" + (GameData.StartSeason + Id + 1);
        public int CurrentWeek => GameData.CurrentWeek;

        public bool AllWeeklyMatchesPlayed => MatchData.GetAllMatchesForCurrentWeek().All(m => m.Completed != "No");
        public bool CanAdvanceSeason => (CurrentWeek == GameData.WeeksInSeason && AllWeeklyMatchesPlayed);
        public int PlayersTeamId => GameData.PlayersTeam;
        public string PlayersTeam => GameData.PlayersTeam == 0 ? "No Team" :
                                    TeamData.GetTeamById(GameData.PlayersTeam).Name;
        public string PlayersTeamDetail => GameData.PlayersTeam == 0 ? "" :
                                    ": " + TeamData.GetTeamById(GameData.PlayersTeam).Division + " (" +
                                    TeamData.GetTeamById(GameData.PlayersTeam).Position + ")";
    }
}

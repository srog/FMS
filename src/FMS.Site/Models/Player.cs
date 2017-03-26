using FMS.Site.Data;
using FMS.Site.Data.Setup;

namespace FMS.Site.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TeamId { get; set; }
        public PlayerPositionsEnum Position { get; set; }
        public string PositionDisplay => Position.ToString();
        public int Rating { get; set; }
        public int Value { get; set; }
        public int Age { get; set; }

        // methods
        public string Team => TeamId == 0 ? "No Team" : TeamData.GetTeamById(TeamId).Name;
        public string ValueDisplay => Value > 1000000 ? Value.ToString("#,##0,,M") : Value.ToString("###,###");
        public int Goals => PlayerStatsData.GetByPlayerId(Id).Goals;
        public int Assists => PlayerStatsData.GetByPlayerId(Id).Assists;
        public int Appearances => PlayerStatsData.GetByPlayerId(Id).Appearances;
        public int Redcards => PlayerStatsData.GetByPlayerId(Id).RedCards;
    }
}

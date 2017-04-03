using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class PlayerAttributes
    {
        public int Id { get; set; }
        public int PlayerId { get; set; }

        public int Fitness { get; set; }
        
        public int Pace { get; set; }
        public int Passing { get; set; }
        public int Shooting { get; set; }
        public int Heading { get; set; }
        public int Defending { get; set; }
        public int Handling { get; set; }
        public int Tackling { get; set; }
        public int Aggression { get; set; }
        public int Leadership { get; set; }
        public int Dribbling { get; set; }
        public int Experience { get; set; }

        // methods
        public string Team => TeamId == 0 ? "No Team" : TeamData.GetTeamById(TeamId).Name;
        public int TeamId => PlayerData.GetPlayerById(PlayerId).TeamId;
        public string Name => PlayerData.GetPlayerById(PlayerId).Name;
        public string Position => PlayerData.GetPlayerById(PlayerId).PositionDisplay;
        public int OverallRating => PlayerData.GetPlayerById(PlayerId).Rating;
        public string Value => PlayerData.GetPlayerById(PlayerId).ValueDisplay;
        public string Status => PlayerData.GetPlayerById(PlayerId).StatusDisplay;
        public int Contract => PlayerData.GetPlayerById(PlayerId).Contract;

    }
}

using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class PlayerStats
    {
        public int Id { get; set; }
        public int PlayerId { get; set; }

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
        public string Team => PlayerData.GetPlayerById(PlayerId).TeamId == 0 ? "No Team" : TeamData.GetTeamById(PlayerData.GetPlayerById(PlayerId).TeamId).Name;
        public string Name => PlayerData.GetPlayerById(Id).Name;
        public string Position => PlayerData.GetPlayerById(Id).Position;
        public int OverallRating => PlayerData.GetPlayerById(Id).Rating;
        public string Value => PlayerData.GetPlayerById(Id).ValueDisplay;


    }
}

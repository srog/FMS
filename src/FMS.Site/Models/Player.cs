using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TeamId { get; set; }
        public string Position { get; set; }
        public int Rating { get; set; }
        public int Value { get; set; }

        // methods
        public string Team => TeamData.GetTeamById(TeamId).Name;

    }
}

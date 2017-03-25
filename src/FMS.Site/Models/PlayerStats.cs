using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class PlayerStats
    {
        public int Id { get; set; }
        public int PlayerId { get; set; }
        public int Appearances { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int RedCards { get; set; }
        public int YellowCards { get; set; }
        public int CleanSheets { get; set; }

        public Player Player => PlayerData.GetPlayerById(PlayerId);
    }
}

using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class ProRel
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
        public int DivisionId { get; set; }
        public string Status { get; set; }
        public int SeasonId { get; set; }

        public string Team => TeamData.GetTeamById(TeamId).Name;
        public string Division => DivisionData.GetDivisionById(DivisionId).Name;
    }
}

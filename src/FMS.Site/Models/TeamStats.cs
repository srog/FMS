using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class TeamStats
    {
        public int Id { get; set; }
        public int SeasonId { get; set; }
        public int DivisionId { get; set; }
        public int Played { get; set; }
        public int Won { get; set; }
        public int Drawn { get; set; }
        public int Lost { get; set; }
        public int GoalsFor { get; set; }
        public int GoalsAgainst { get; set; }

        public int Points => (Won * 3 + Drawn);
        public int GoalDifference => GoalsFor - GoalsAgainst;

        public string Name => TeamData.GetTeamById(Id).Name;

    }
}

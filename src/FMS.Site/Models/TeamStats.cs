using System.Linq;
using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class TeamStats
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
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

        // TODO - amend so no 'joint positions'
        public int Position_old => TeamStatsData
            .GetTeamStatsByDivision(DivisionId)
            .Count(ts => ts.SeasonId == SeasonId && 
                    (ts.Points > Points || 
                    (ts.Points == Points && ts.GoalDifference > GoalDifference) )) + 1;

        public int Position => TeamStatsData.GetPositionForTeam(TeamId, DivisionId);
        
        public string Name => TeamData.GetTeamById(TeamId).Name;

    }
}

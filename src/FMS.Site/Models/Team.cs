using System.Linq;
using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Team
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public int InitialRanking { get; set; }
        public int DivisionId { get; set; }
        public int Position => TeamStatsData.IsEmpty ? 0 : TeamStatsData.GetTeamStatsByTeam(Id).Position;
        public Formation Formation { get; set; }
        public string FormationDisplay => FormationData.GetById(Formation.Id).Description;

        public int Cash { get; set; }
        public string CashDisplay => Cash.ToString("#,##0,,M");
        public int SquadRating => CalculateRating(null, false);
        public int TeamRating => CalculateRating(null, true);
        public int GkRating => CalculateRating(PlayerPositionsEnum.Goalkeeper, false);
        public int DefRating => CalculateRating(PlayerPositionsEnum.Defender, false);
        public int MidRating => CalculateRating(PlayerPositionsEnum.Midfielder, false);
        public int StkRating => CalculateRating(PlayerPositionsEnum.Striker, false);

        public int GKSquadRating => CalculateRating(PlayerPositionsEnum.Goalkeeper, true);
        public int DefSquadRating => CalculateRating(PlayerPositionsEnum.Defender, true);
        public int MidSquadRating => CalculateRating(PlayerPositionsEnum.Midfielder, true);
        public int StkSquadRating => CalculateRating(PlayerPositionsEnum.Striker, true);


        public string Division => DivisionData.GetDivisionById(DivisionId).Name;

        public string RecentForm => MatchData.GetForm(Id);
        // Methods
        public void AddCash(int amount)
        {
            Cash += amount;
        }
        public void TakeCash(int amount)
        {
            Cash -= amount;
        }

        private int CalculateRating(PlayerPositionsEnum? pos, bool selectedOnly)
        {
            var players = PlayerData.GetPlayersByTeamId(Id)
                .Where(p => (p.Selected || !selectedOnly)  && (p.Position == pos || pos == null));

            if (!players.Any())
            {
                return 0;
            }
            return players.Sum(p => p.Rating) / players.Count();
        }

    }
}

using System.Linq;
using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Team
    {
        private int _cash = 0;

        public Team(int id, string name, int initialRanking, int division)
        {
            Id = id;
            Name = name;
            InitialRanking = initialRanking;
            DivisionId = division;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int InitialRanking { get; set; }
        public int DivisionId { get; set; }
        public int Position => TeamStatsData.IsEmpty ? 0 : TeamStatsData.GetTeamStatsByTeam(Id).Position;
        public Formation Formation { get; set; }
        public string FormationDisplay => FormationData.GetById(Formation.Id).Description;

        public int Cash => _cash;
        public string CashDisplay => _cash.ToString("#,##0,,M");
        public int TotalRating => CalculateRating();
        
        public string Division => DivisionData.GetDivisionById(DivisionId).Name;

        public string RecentForm => MatchData.GetForm(Id);
        // Methods
        public void AddCash(int amount)
        {
            _cash += amount;
        }
        public void TakeCash(int amount)
        {
            _cash -= amount;
        }

        private int CalculateRating()
        {
            var players = PlayerData.GetPlayersByTeamId(Id);
            
            return players.Sum(p => p.Rating) / players.Count();
        }
    }
}

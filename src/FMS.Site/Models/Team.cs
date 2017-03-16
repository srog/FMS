namespace FMS.Site.Models
{
    public class Team
    {
        public Team(int id, string name, int initialRanking)
        {
            Id = id;
            Name = name;
            InitialRanking = initialRanking;
            DivisionId = 1;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int InitialRanking { get; set; }
        public int DivisionId { get; set; }
        public int Played { get; set; }
        public int Won { get; set; }
        public int Drawn { get; set; }
        public int Lost { get; set; }
        public int GoalsFor { get; set; }
        public int GoalsAgainst { get; set; }

        private int _cash = 0;
        private int _totalRating;

        public int Cash => _cash;
        public int Rating => _totalRating;
        public void AddCash(int amount)
        {
            _cash += amount;
        }

        public void TakeCash(int amount)
        {
            _cash -= amount;
        }

        
        public int Points => (Won*3 + Drawn);
        public int GoalDifference => GoalsFor - GoalsAgainst;
    }
}

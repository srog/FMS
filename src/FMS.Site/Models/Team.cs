namespace FMS.Site.Models
{
    public class Team
    {
        public Team(int id, string name, int initialRanking)
        {
            Id = id;
            Name = name;
            InitialRanking = initialRanking;
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int InitialRanking { get; set; }
    }
}

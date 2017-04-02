namespace FMS.Site.Models
{
    public class NewsItem
    {
        public int Id { get; set; }
        public int SeasonId { get; set; }
        public int WeekId { get; set; }
        public string News { get; set; }
    }
}

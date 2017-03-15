using Newtonsoft.Json;

namespace FMS.Site.Models.JsonConverters
{
    public class Team
    {
        [JsonProperty]
        public string TeamName { get; set; }
        [JsonProperty]
        public int InitialRanking { get; set; }
    }
}

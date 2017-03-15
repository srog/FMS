using Newtonsoft.Json;

namespace FMS.Site.Models
{
    public class Name
    {
        [JsonProperty]
        public string forename { get; set; }
        [JsonProperty]
        public string surname { get; set; }
    }
}
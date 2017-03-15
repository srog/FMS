using Newtonsoft.Json;

namespace FMS.Site.Models.JsonConverters
{
    public class Name
    {
        [JsonProperty]
        public string forename { get; set; }
        [JsonProperty]
        public string surname { get; set; }
    }
}
using System.Collections.Generic;
using Newtonsoft.Json;

namespace FMS.Site.Models.JsonConverters
{
    public class Names
    {
        [JsonProperty]
        public List<Name> names { get; set; }
    }
}

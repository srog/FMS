using System.IO;
using FMS.Site.Models;
using Newtonsoft.Json;

namespace FMS.Site.Services
{
    public class GetNames : IGetNames
    {
        public Names GetAll()
        {
            Names names;

            using (StreamReader r = new StreamReader("Configuration/names.json"))
            {
                string data = r.ReadToEnd();
                names = JsonConvert.DeserializeObject<Names>(data);

            }
            return names;
        }
    }
}

using System.IO;
using FMS.Site.Models;
using Newtonsoft.Json;

namespace FMS.Site.Services
{
    public class GetTeams : IGetTeams
    {
        public Teams GetAll()
        {
            Teams teams;

            using (StreamReader r = new StreamReader("Configuration/teams.json"))
            {
                string data = r.ReadToEnd();
                teams = JsonConvert.DeserializeObject<Teams>(data);

            }
            return teams;

        }
    }
}
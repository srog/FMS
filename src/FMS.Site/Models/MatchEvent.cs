using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FMS.Site.Models
{
    public class MatchEvent
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public int Minute { get; set; }
        public int Event { get; set; }
        public int PlayerId { get; set; }
        public bool HomeTeam { get; set; }
    }
}

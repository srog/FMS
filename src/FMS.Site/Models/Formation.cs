using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FMS.Site.Models
{
    public class Formation
    {
        public int Id { get; set; }
        public string Description => Defenders + "-" + Midfielders + "-" + Strikers;
        public int Goalkeepers => 1;
        public int Defenders { get; set; }
        public int Midfielders { get; set; }
        public int Strikers { get; set; }
    }
}

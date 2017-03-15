using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IGetTeams
    {
        Teams GetAll();
    }
}

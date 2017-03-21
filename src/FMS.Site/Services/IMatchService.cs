using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IMatchService
    {
       Match Get(int id);
    }
}
using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IDivisionService
    {
        IEnumerable<Division> GetAll();
        Division GetById(int id);
    }
}
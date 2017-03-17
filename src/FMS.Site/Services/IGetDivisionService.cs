using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IGetDivisionService
    {
        IEnumerable<Division> GetAll();
        Division GetById(int id);
    }
}
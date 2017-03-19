using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using Division = FMS.Site.Models.Division;

namespace FMS.Site.Data
{
    public static class DivisionData
    {
        private static List<Division> Divisions;

        public static IEnumerable<Division> GetDivisions()
        {
            return Divisions ?? (Divisions = SetupDivisions.Setup());
        }

        public static Division GetDivisionById(int id)
        {
            if (Divisions == null)
            {
                Divisions = SetupDivisions.Setup();
            }

            return Divisions.FirstOrDefault(d => d.Id == id);
        }

    }
}

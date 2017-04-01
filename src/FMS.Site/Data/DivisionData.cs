using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using Division = FMS.Site.Models.Division;

namespace FMS.Site.Data
{
    public static class DivisionData
    {
        private static List<Division> Divisions = new List<Division>();

        public static void Setup()
        {
            SetupDivisions.Setup();
        }

        public static void AddDivision(int index)
        {
            Divisions.Add(new Division { Id = index, Name = "Division " + index});
        }

        public static IEnumerable<Division> GetDivisions()
        {
            return Divisions;
        }

        public static Division GetDivisionById(int id)
        {
            return Divisions.FirstOrDefault(d => d.Id == id);
        }
    }
}

using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Data.Setup
{
    public static class SetupDivisions
    {
        public static List<Division> Setup()
        {
            var divisionList = new List<Division>();

            for (var index = 1; index <= GameData.Divisions; index++)
            {
                var division = new Division
                {
                    Id = index,
                    Name = "Division " + index
                };
                divisionList.Add(division);
            }

            return divisionList;
        }
    }
}

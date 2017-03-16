using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Data.Setup
{
    public static class SetupDivisions
    {
        public static List<Division> Setup()
        {
            var divisionList = new List<Division>();

            var div1 = new Division()
            {
                Id = 1,
                Name = "Premier League"
            };
            var div2 = new Division()
            {
                Id = 2,
                Name = "Championship"
            };
            divisionList.Add(div1);
            divisionList.Add(div2);
            return divisionList;
        }
    }
}

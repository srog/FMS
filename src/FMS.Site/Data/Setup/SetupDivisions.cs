namespace FMS.Site.Data.Setup
{
    public static class SetupDivisions
    {
        public static void Setup()
        {
            for (var index = 1; index <= GameData.Divisions; index++)
            {
                DivisionData.AddDivision(index);
            }
        }
    }
}

namespace FMS.Site.Data.Setup
{
    public static class SetupGame
    {
        public static void Initialise()
        {
            DivisionData.Setup();
            FormationData.Setup();
            TeamData.Setup();
            PlayerData.Setup();
        }
    }
}
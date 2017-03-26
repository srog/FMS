using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data
{
    public static class TeamData
    {
        private static List<Team> Teams;

        public static void Setup()
        {
            Teams = SetupTeams.Setup();
        }

        public static IEnumerable<Team> GetTeams()
        {
            return Teams;
        }

        public static Team GetTeamById(int id)
        {
            return Teams.FirstOrDefault(t => t.Id == id);
        }

        public static IEnumerable<Team> GetTeamsByDivisionId(int divisionId)
        {
            return Teams.Where(t => t.DivisionId == divisionId);
        }

        public static void AutoSelectAllTeams()
        {
            foreach (var player in PlayerData.GetPlayers())
            {
                player.Selected = false;
            }

            foreach (var team in GetTeams())
            {
                SetBestPlayerAsSelected(PlayerPositionsEnum.Goalkeeper, 1, team.Id);
                SetBestPlayerAsSelected(PlayerPositionsEnum.Defender, team.Formation.Defenders, team.Id);
                SetBestPlayerAsSelected(PlayerPositionsEnum.Midfielder, team.Formation.Midfielders, team.Id);
                SetBestPlayerAsSelected(PlayerPositionsEnum.Striker, team.Formation.Strikers, team.Id);
            }
        }

        private static void SetBestPlayerAsSelected(PlayerPositionsEnum pos, int numPlayers, int teamId)
        {
            for (var playerIndex = 1; playerIndex <= numPlayers; playerIndex++)
            {
                var player = PlayerData.GetPlayersByTeamId(teamId)
                    .Where(p => !p.Selected && p.Position == pos)
                    .OrderByDescending(p => p.Rating)
                    .First();

                player.Selected = true;
            }
        }
    }
}

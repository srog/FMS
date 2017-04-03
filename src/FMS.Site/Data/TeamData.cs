using System.Collections.Generic;
using System.Linq;
using FMS.Site.Data.Setup;
using FMS.Site.Models;
using Team = FMS.Site.Models.Team;

namespace FMS.Site.Data
{
    public static class TeamData
    {
        private static List<Team> Teams = new List<Team>();

        public static void Setup()
        {
            SetupTeams.Setup();
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

        public static void AutoSelectTeam(int teamId)
        {
            PlayerData.UnselectPlayers(teamId);
            var team = GetTeamById(teamId);

            ValidateTeamFormation(team);
            SetBestPlayerAsSelected(PlayerPositionsEnum.Goalkeeper, 1, team.Id);
            SetBestPlayerAsSelected(PlayerPositionsEnum.Defender, team.Formation.Defenders, team.Id);
            SetBestPlayerAsSelected(PlayerPositionsEnum.Midfielder, team.Formation.Midfielders, team.Id);
            SetBestPlayerAsSelected(PlayerPositionsEnum.Striker, team.Formation.Strikers, team.Id);
        }
        public static void AutoSelectAllTeams()
        {
            foreach (var team in Teams)
            {
                AutoSelectTeam(team.Id);
            }
        }

        private static void ValidateTeamFormation(Team team)
        {
            var players = PlayerData.GetPlayersByTeamId(team.Id)
                            .Where(p => p.Contract > 0 && p.Status == PlayerStatusEnum.Active);

            // check if formation is valid, if not then change formation
            // TODO , if not valid then play players out of position 
            while (true)
            {
                if ((team.Formation.Defenders > players.Count(p => p.Position == PlayerPositionsEnum.Defender)) ||
                    (team.Formation.Midfielders > players.Count(p => p.Position == PlayerPositionsEnum.Midfielder)) ||
                    (team.Formation.Strikers > players.Count(p => p.Position == PlayerPositionsEnum.Striker)))
                {
                    team.Formation = FormationData.GetRandomFormation();
                }
                else
                {
                    break;
                }
            }
        }

        private static void SetBestPlayerAsSelected(PlayerPositionsEnum pos, int numPlayers, int teamId)
        {
            for (var playerIndex = 1; playerIndex <= numPlayers; playerIndex++)
            {
                var player = PlayerData.GetPlayersByTeamId(teamId)
                    .Where(p => !p.Selected && 
                            p.Position == pos && 
                            p.Contract > 0 && 
                            p.Status == PlayerStatusEnum.Active)
                    .OrderByDescending(p => p.Rating)
                    .FirstOrDefault();

                if (player != null)
                {
                    player.Selected = true;
                }
                else
                {
                    // TODO - select player from different position ?
                }
            }
        }

        public static void AddNewTeam(string name, int ranking, int divisionId, int cash, Formation formation)
        {
            Teams.Add(new Team
            {
                Id = GetNextId(),
                Formation = formation,
                DivisionId = divisionId, 
                Name = name, 
                InitialRanking = ranking,
                Cash = cash
            });
        }

        private static int GetNextId()
        {
            return !Teams.Any() ? 1 : Teams.Max(t => t.Id) + 1;
        }

        public static void CashRewards()
        {
            foreach (var team in Teams)
            {
                var pos = team.Position;
                var div = team.DivisionId;

                // div 4 = 40k 
                // div 3 = 135k
                // div 2 = 320k
                // div 1 = 625k
                var baseDivisionCash = (6 - div) * (6 - div) * (6 - div) * 5000;

                // div 4 = 100k, 50k, 25k
                // div 3 = 200k, 100k, 50k
                // div 2 = 300k, 150k, 75k
                // div 1 = 400k, 200k, 100k
                var positionRelated = 0;
                if (pos < 4)
                {
                    positionRelated += (pos == 1 ? 1 : 0) * 100000 * (5 - div);
                    positionRelated += (pos == 2 ? 1 : 0) * 50000 * (5 - div);
                    positionRelated += (pos == 3 ? 1 : 0) * 25000 * (5 - div);
                }

                team.AddCash(baseDivisionCash + positionRelated);
            }
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class ProRelData
    {
        private static List<ProRel>  ProRels = new List<ProRel>();

        public static IEnumerable<ProRel> GetProRelInfoForSeason(int seasonId)
        {
            return ProRels.Where(pr => pr.SeasonId == seasonId);
        }

        public static void AddProRel(int seasonId, int divisionId, int teamId, string status)
        {
            ProRels.Add(new ProRel
            {
                Id = GetNextId(),
                DivisionId = divisionId,
                Status = status,
                SeasonId = GameData.CurrentSeason,
                TeamId = teamId
            });
        }

        private static int GetNextId()
        {
            return !ProRels.Any() ? 1 : ProRels.Max(pr => pr.Id) + 1;
        }

    }
}

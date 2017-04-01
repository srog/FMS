using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class FormationData
    {
        private static List<Formation> Formations;
        private static Random rnd = new Random();

        public static void Setup()
        {
            Formations = new List<Formation>();

            Create(4, 3, 3);
            Create(4, 4, 2);
            Create(4, 2, 4);
            Create(4, 5, 1);
            Create(5, 3, 2);
            Create(5, 2, 3);
            Create(5, 4, 1);
            Create(3, 4, 3);
            Create(3, 5, 2);
            Create(3, 3, 4);
        }

        public static IEnumerable<Formation> GetFormations()
        {
            return Formations;
        }

        public static Formation GetById(int id)
        {
            return Formations.FirstOrDefault(f => f.Id == id);
        }

        public static void Create(int defenders, int midfielders, int strikers)
        {
            Formations.Add(new Formation
            {
                Id = GetNextId(),
                Defenders = defenders, 
                Midfielders = midfielders,
                Strikers = strikers
            });
        }

        private static int GetNextId()
        {
            return !Formations.Any() ? 1 : Formations.Max(f => f.Id) + 1;
        }

        public static Formation GetRandomFormation()
        {
            return FormationData.GetById(rnd.Next(1, FormationData.GetFormations().Count() + 1));
        }

    }
}
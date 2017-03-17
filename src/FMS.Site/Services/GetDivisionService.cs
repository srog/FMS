﻿using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class GetDivisionService : IGetDivisionService
    {
        public IEnumerable<Division> GetAll()
        {
            return DivisionData.GetDivisions();
        }

        public Division GetById(int id)
        {
            return DivisionData.GetDivisionById(id);
        }
    }
}
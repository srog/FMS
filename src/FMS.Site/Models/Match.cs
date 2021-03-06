﻿using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class Match
    {
        public int Id { get; set; }
        public int SeasonId { get; set; }
        public int WeekId { get; set; }
        public int DivisionId { get; set; }
        public string Completed { get; set; }

        public int HomeTeamId { get; set; }
        public int AwayTeamId { get; set; }
        public int HomeTeamScore { get; set; }
        public int AwayTeamScore { get; set; }

        public string HomeTeam => TeamData.GetTeamById(HomeTeamId).Name;
        public string AwayTeam => TeamData.GetTeamById(AwayTeamId).Name;

        public int CurrentWeek => GameData.CurrentWeek;
        public string Season => SeasonData.GetById(SeasonId).Name;

        // public List<MatchEvent> matchEvents { get; set; }
    }
}

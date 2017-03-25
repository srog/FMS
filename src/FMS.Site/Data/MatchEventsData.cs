using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class MatchEventsData
    {
        static Random rnd = new Random();

        private static List<MatchEvent> MatchEvents = new List<MatchEvent>();

        public static IEnumerable<MatchEvent> GetForMatch(int matchId)
        {
            return MatchEvents.Where(me => me.MatchId == matchId).OrderBy(me => me.Minute);
        }

        public static IEnumerable<MatchEvent> GetForPlayer(int playerId)
        {
            return MatchEvents.Where(me => me.PlayerId == playerId);
        }

        public static void CreateMatchEvents(Match match)
        {
            CreateGoalEvents(match.Id, match.HomeTeamScore, match.HomeTeamId, true);
            CreateGoalEvents(match.Id, match.AwayTeamScore, match.AwayTeamId, false);
            CreateCardEvents(match);
        }

        private static void CreateCardEvents(Match match)
        {
            for (var index = 1; index <= (rnd.Next(1, 15) - 1); index++)
            {
                int homeTeam = rnd.Next(1, 3);
                AddCardEvent(match, homeTeam == 1);
            }
        }

        private static void AddCardEvent(Match match, bool home)
        { 
            var players = PlayerData.GetPlayersByTeamId(home ? match.HomeTeamId : match.AwayTeamId);
            var playerNum = rnd.Next(1, players.Count());
            var playerid = players.ElementAt(playerNum - 1).Id;

            var cardQuotient = rnd.Next(1, 10);
            var eventId = cardQuotient < 8 ? EventTypesEnum.YellowCard : EventTypesEnum.RedCard;

            var cardEvent = new MatchEvent
            {
                Id = GetNextId(),
                Event = eventId,
                HomeTeam = home,
                MatchId = match.Id,
                Minute = rnd.Next(1, 90),
                PlayerId = playerid
            };
            MatchEvents.Add(cardEvent);
        }

        private static void CreateGoalEvents(int matchId, int score, int teamId, bool home)
        { 
            for (var index = 1; index <= score; index++)
            {
                var minute = rnd.Next(1, 90);
                var players = PlayerData.GetPlayersByTeamId(teamId);
                var playerNum = rnd.Next(1, players.Count());
                var playerid = players.ElementAt(playerNum-1).Id;

                var goalEvent = new MatchEvent
                {
                    Id = GetNextId(),
                    Event = EventTypesEnum.Goal,
                    HomeTeam = home,
                    MatchId = matchId,
                    Minute = minute,
                    PlayerId = playerid
                };
                MatchEvents.Add(goalEvent);
            }
        }

        private static int GetNextId()
        {
            return !MatchEvents.Any() ? 1 : MatchEvents.Max(me => me.Id) + 1;
        }
    }
}
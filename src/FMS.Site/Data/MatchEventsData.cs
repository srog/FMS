using System;
using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class MatchEventsData
    {
        static Random rnd = new Random();

        private static readonly List<MatchEvent> MatchEvents = new List<MatchEvent>();

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
            CreateCardEvents(match);
            CreateGoalAndAssistEvents(match.Id, match.HomeTeamScore, match.HomeTeamId, true);
            CreateGoalAndAssistEvents(match.Id, match.AwayTeamScore, match.AwayTeamId, false);
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
            var players = PlayerData.GetSelectedPlayersByTeamId(home ? match.HomeTeamId : match.AwayTeamId, match.Id);
            var playerNum = rnd.Next(1, players.Count());
            var playerid = players.ElementAt(playerNum - 1).Id;

            var cardQuotient = rnd.Next(1, 10);
            var eventId = cardQuotient < 8 ? EventTypesEnum.YellowCard : EventTypesEnum.RedCard;
            var minute = rnd.Next(1, 90);

            var cardEvent = new MatchEvent
            {
                Id = GetNextId(),
                Event = eventId,
                HomeTeam = home,
                MatchId = match.Id,
                Minute = minute,
                PlayerId = playerid
            };
            MatchEvents.Add(cardEvent);

            if (cardEvent.Event == EventTypesEnum.YellowCard &&
                MatchEvents.Count(me => me.MatchId == match.Id &&
                                        me.PlayerId == playerid &&
                                        me.Event == EventTypesEnum.YellowCard) == 2)
            {
                MatchEvents.Add(new MatchEvent
                {
                    Id = GetNextId(),
                    Event = EventTypesEnum.RedCard,
                    HomeTeam = home,
                    MatchId = match.Id,
                    Minute = minute,
                    PlayerId = playerid
                });
            }
        }

        private static void CreateGoalAndAssistEvents(int matchId, int score, int teamId, bool home)
        { 
            for (var index = 1; index <= score; index++)
            {
                var minute = rnd.Next(1, 90);
                var players = PlayerData.GetOutfieldPlayersByTeamId(teamId, matchId);
                var playerNum = rnd.Next(1, players.Count()+1);
                var playerid = players.ElementAt(playerNum-1).Id;

                var hasAssist = rnd.Next(1, 3) == 2;
                if (hasAssist)
                {
                    var assistplayerNum = rnd.Next(1, players.Count()+1);
                    if (assistplayerNum == playerNum)
                    {
                        assistplayerNum--;
                        if (assistplayerNum == 0)
                        {
                            assistplayerNum = players.Count();
                        }
                    }
                    var assistplayerid = players.ElementAt(assistplayerNum - 1).Id;

                    var assistEvent = new MatchEvent
                    {
                        Id = GetNextId(),
                        Event = EventTypesEnum.Assist,
                        HomeTeam = home,
                        MatchId = matchId,
                        Minute = minute,
                        PlayerId = assistplayerid
                    };
                    MatchEvents.Add(assistEvent);
                }

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
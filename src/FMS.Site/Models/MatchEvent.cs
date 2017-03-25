using FMS.Site.Data;

namespace FMS.Site.Models
{
    public class MatchEvent
    {
        public int Id { get; set; }
        public int MatchId { get; set; }
        public int Minute { get; set; }
        public EventTypesEnum Event { get; set; }
        public int PlayerId { get; set; }
        public bool HomeTeam { get; set; }

        public string Team => HomeTeam ? 
                            MatchData.Get(MatchId).HomeTeam : 
                            MatchData.Get(MatchId).AwayTeam;

        public string Player => PlayerData.GetPlayerById(PlayerId).Name;
        public int Division => MatchData.Get(MatchId).DivisionId;
        public string EventDescription => Event.ToString();
    }
}

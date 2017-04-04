using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class PlayerAttributesService : IPlayerAttributesService
    {
        public PlayerAttributes Get(int playerId)
        {
            return PlayerAttributesData.GetByPlayerId(playerId);
        }

        public void ToggleSelected(int playerId)
        {
            PlayerData.ToggleSelected(playerId);
        }
    }
}
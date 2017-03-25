using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface IPlayerAttributesService
    {
        PlayerAttributes Get(int playerId);
    }
}
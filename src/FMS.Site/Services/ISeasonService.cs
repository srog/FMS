using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface ISeasonService
    {
        Season Get();
        Season Get(int id);
    }
}
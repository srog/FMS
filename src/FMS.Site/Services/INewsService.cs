using System.Collections.Generic;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public interface INewsService
    {
        IEnumerable<NewsItem> GetForCurrentWeek();

        IEnumerable<NewsItem> GetMostRecent(int number);
    }
}
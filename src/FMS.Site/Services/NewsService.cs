using System.Collections.Generic;
using FMS.Site.Data;
using FMS.Site.Models;

namespace FMS.Site.Services
{
    public class NewsService : INewsService
    {
        public IEnumerable<NewsItem> GetForCurrentWeek()
        {
            return NewsData.GetForCurrentWeek();
        }

        public IEnumerable<NewsItem> GetMostRecent(int number)
        {
            return NewsData.GetMostRecent(number);
        }
    }
}
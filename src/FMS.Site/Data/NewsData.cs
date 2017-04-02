using System.Collections.Generic;
using System.Linq;
using FMS.Site.Models;

namespace FMS.Site.Data
{
    public static class NewsData
    {
        public static List<NewsItem> NewsItems = new List<NewsItem>();

        public static void AddNewsItem(string news)
        {
            AddNewsItem(GameData.CurrentSeason, GameData.CurrentWeek, 0, 0, 0, news);
        }

        public static void AddNewsItem(int seasonId, int weekId, int divisionId, 
                                    int teamId, int playerId, string news)
        {
            NewsItems.Add(new NewsItem
            {
                Id = GetNextId(),
                SeasonId = seasonId,
                WeekId = weekId,
                News = news
            });
        }

        private static int GetNextId()
        {
            return !NewsItems.Any() ? 1 : NewsItems.Max(n => n.Id) + 1;
        }

        public static IEnumerable<NewsItem> GetForCurrentWeek()
        {
            return NewsItems.Where(n => n.SeasonId == GameData.CurrentSeason &&
                                        n.WeekId == GameData.CurrentWeek);
        }

        public static IEnumerable<NewsItem> GetMostRecent(int number)
        {
            return NewsItems.OrderByDescending(n => n.Id).Take(number);
        }
    }
}

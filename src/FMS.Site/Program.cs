using System.IO;
using FMS.Site.Data.Setup;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace FMS.Site
{
    public class Program
    {
        public static IConfigurationRoot Configuration { get; set; }

        public static void Main(string[] args)
        {
            Configuration = new ConfigurationBuilder()
                .AddCommandLine(args)
                .AddEnvironmentVariables("ASPNETCORE_")
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("Configuration/generalconfig.json")
                .Build();
            
            var host = new WebHostBuilder()
                .UseConfiguration(Configuration)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            SetupGame.Initialise();

            host.Run();
        }
    }
}
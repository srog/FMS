using System;
using System.IO;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using FMS.Site.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using ILogger = Microsoft.Extensions.Logging.ILogger;

namespace FMS.Site
{
    public class Startup
    {
        public ILogger Logger { get; set; }
        
        public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            Log.Logger = ConfigureSerilog(env);
            loggerFactory.AddConsole();
            loggerFactory.AddSerilog();
            Logger = loggerFactory.CreateLogger("startup");
            
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            try
            {
                var builder = new ContainerBuilder();
                builder.RegisterType<GetTeamsService>().As<IGetTeamsService>();
                builder.RegisterType<GetPlayersService>().As<IGetPlayersService>();
                builder.RegisterType<MatchService>().As<IMatchService>();
                builder.RegisterType<SeasonService>().As<ISeasonService>();
                builder.Populate(services);
                var container = builder.Build();
                return container.Resolve<IServiceProvider>();
            }
            catch (Exception exception)
            {
                Logger.LogError(0, exception, "Unhandled Exception");
                return null;
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                try
                {
                    await next();
                }
                catch (Exception exception)
                {
                    Logger.LogError(0, exception, "Unhandled Exception");
                }
            });

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404  && (!IsResourceRequest(context.Request.Path) || !IsApiRequest(context.Request.Path)))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }

        private Serilog.ILogger ConfigureSerilog(IHostingEnvironment hostingEnvironment)
        {
            var config = new LoggerConfiguration();
            config = hostingEnvironment.IsDevelopment() ? config.MinimumLevel.Verbose() : config.MinimumLevel.Information();
            return config
                .WriteTo.RollingFile(Path.Combine(hostingEnvironment.ContentRootPath, "fms-log\\log-{Date}.txt"))
                .WriteTo.Trace()
                .CreateLogger();
        }

        private bool IsResourceRequest(PathString requestPath)
        {
            return Path.HasExtension(requestPath.Value);
        }

        private bool IsApiRequest(PathString requestPath)
        {
            return requestPath.Value.StartsWith("/api/");
        }
    }
}

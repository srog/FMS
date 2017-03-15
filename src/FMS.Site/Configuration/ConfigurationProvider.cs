using System;
using Microsoft.Extensions.Configuration;
using System.Configuration;

namespace FMS.Site.Configuration
{
    public class ConfigurationProvider : IProvideConfiguration
    {
        private readonly string _prefix;
        private readonly IConfiguration _configuration;

        public ConfigurationProvider(string prefix, IConfiguration configuration)
        {
            _prefix = prefix;
            _configuration = configuration;
        }

        public T GetValue<T>(string configurationName)
        {
            var value = _configuration[configurationName] ?? _configuration[$"{_prefix}:{configurationName}"];
            return (T)Convert.ChangeType(value, typeof(T));
        }

        public string GetStringValue(string configurationName)
        {
            return _configuration[configurationName] ?? _configuration[$"{_prefix}:{configurationName}"];
        }
    }
}
namespace FMS.Site.Configuration
{
    public interface IProvideConfiguration
    {
        string GetStringValue(string configurationName);
    }
}
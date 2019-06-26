using ContactBook.Services.Infrastructure;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ContactBook1
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            SimpleInjectorConfig.Register();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AutoMapperWebProfile.Run();
        }
    }
}

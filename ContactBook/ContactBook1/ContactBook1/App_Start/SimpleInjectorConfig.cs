using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System.Web.Http;
using ContactBook.DapperServices;

namespace ContactBook1
{
    public static class SimpleInjectorConfig
    {
        public static void Register()
        {
            // Create the container as usual.
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            // Register your types, for instance using the scoped lifestyle:
            container.Register<IContactBookDapperService, ContactBookDapperService>(Lifestyle.Scoped);

            // This is an extension method from the integration package.
            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            container.Verify();

            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);

            //
        }
    }
}
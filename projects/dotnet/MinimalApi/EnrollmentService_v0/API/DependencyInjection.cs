using Application.Interfaces;
using Infrastructure.Navitaire;

namespace API
{
    internal static class DependencyInjection
    {
        internal static IServiceCollection AddApplication(this IServiceCollection services)
        {
            
            return services;
        }

        internal static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddSingleton<IAccountService, AccountService>();
            return services;
        }
    }
}

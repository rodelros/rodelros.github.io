using Application.ExternalInterfaces;
using Infrastructure.AccountService;

namespace API.DependencyInjection
{
    public static class Infrastructure
    {
        internal static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddSingleton<IAccountService, InMemoryAccountService>();
            return services;
        }
    }
}

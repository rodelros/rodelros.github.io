using Application.ExternalInterfaces;
using Application.Tasks;
using Domain.Models;

namespace Application.UseCases
{
    public static class UpdateSubscriptionNextBillingDate
    {
        public static Account UpdateVClub(IAccountService accountService, string email)
        {
            var account = accountService.GetAccountFromEmail(email);

            account.VClubSubscription?
                .SetNextBillingDate()
                .SetToActive();

            return account;

        }

        public static Account UpdateVPass(IAccountService accountService, string email)
        {
            var account = accountService.GetAccountFromEmail(email);

            account.VPassSubscription?
                .SetNextBillingDate()
                .SetToActive();

            return account;

        }
    }
}

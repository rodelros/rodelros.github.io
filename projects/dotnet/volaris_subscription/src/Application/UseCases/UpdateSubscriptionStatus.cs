

using Application.ExternalInterfaces;
using Application.Tasks;
using Domain.Models;

namespace Application.UseCases
{
    public static class UpdateSubscriptionStatus
    {
        public static Account DeactivateVClub(IAccountService accountService, string email)
        {
            var account = accountService.GetAccountFromEmail(email);
            account.VClubSubscription?.SetToInactive();
            return account;
        }

        public static Account DeactivateVPass(IAccountService accountService, string email)
        {
            var account = accountService.GetAccountFromEmail(email);
            account.VPassSubscription?.SetToInactive();
            return account;
        }
    }
}

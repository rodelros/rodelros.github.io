using Domain.Models;
using Domain.Enums;
using Application.Tasks;
using Application.ExternalInterfaces;


namespace Application.UseCases
{
    public static class AddNewSubscriptionToAccount
    {
        public static Account AddVPass(IAccountService accountService, string email, VPass vpass)
        {
            var account = accountService.GetAccountFromEmail(email); 
            var subscription = CreateSubscription.NewVPass(vpass);
            return account.AddSubscription(subscription);
        }

        public static Account AddVClub(IAccountService accountService, string email, VClub vclub)
        {
            var account = accountService.GetAccountFromEmail(email);
            var subscription = CreateSubscription.NewVClub(vclub);
            return account.AddSubscription(subscription);
        }
    }
}

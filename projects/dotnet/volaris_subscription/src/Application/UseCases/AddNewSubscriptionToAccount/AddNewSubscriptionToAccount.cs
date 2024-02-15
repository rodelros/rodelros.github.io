using Application.UseCases.AddSubscriptionToAccount;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Domain.Enums;

namespace Application.UseCases.AddNewSubscriptionToAccount
{
    public static class AddNewSubscriptionToAccount
    {
        public static Account AddVPassSubscriptionToAccount(this Account account, VPass vpass)
        {
            var subscription = CreateSubscription.NewVPass(vpass);
            return account.AddSubscription(subscription);
        }

        public static Account AddVClubSubscriptionToAccount(this Account account, VClub vclub)
        {
            var subscription = CreateSubscription.NewVClub(vclub);
            return account.AddSubscription(subscription);
        }
    }
}

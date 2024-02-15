using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

using Domain.Exceptions;
using Domain.Enums;

namespace Application.UseCases.AddSubscriptionToAccount
{
    internal static class AddSubscriptionToAccount
    {
        public static Account AddSubscription(this Account account, VClubSubscription subscription)
        {
            // Validation
            if (! subscription.IsValid())
            {
                throw new InvalidVClubDateException(subscription);
            }

            account.VClubSubscription = subscription;
            return account;
        }

        public static Account AddSubscription(this Account account, VPassSubscription subscription)
        {
            // Validation
            if (!subscription.IsValid())
            {
                throw new InvalidVPassDateException(subscription);
            }

            account.VPassSubscription = subscription;
            return account;
        }

        private static bool IsValid(this SubscriptionBase subscription)
        {
            var now = DateOnly.FromDateTime(DateTime.Now);
            return !(subscription.EnrollDate < now
                || subscription.NextBillingDate < now
                || subscription.NextBillingDate < subscription.EnrollDate);
        }



    }
}

using Domain.Enums;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases.UpdateSubscriptionNextBillingDate
{
    public static class UpdateNextBillingDate
    {
        public static VClubSubscription SetNextBillingDate(this VClubSubscription subscription)
        {
            var nextBillingDate = subscription.Vclub switch
            {
                VClub.IndividualMonthly or VClub.DuoMonthly or VClub.FriendsFamilyMonthly => subscription.LastBillingDate.AddMonths(1),
                VClub.IndividualAnnual or VClub.DuoAnnual or VClub.FriendsFamilyAnnual => subscription.LastBillingDate.AddYears(1),
                _ => subscription.LastBillingDate,
            };

            subscription.NextBillingDate = nextBillingDate;
            return subscription;
        }

        public static VPassSubscription SetNextBillingDate(this VPassSubscription subscription)
        {
            subscription.NextBillingDate = subscription.LastBillingDate.AddMonths(1);
            return subscription;
        }
    }
}

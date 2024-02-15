using Domain.Enums;
using Domain.Exceptions;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases.UpdateSubscriptionNextBillingDate
{
    public static class UpdateSubscriptionNextBillingDate
    {
        public static Account SetVClubNextBillingDate(this Account account, DateOnly nextBillingDate)
        {
            var subscription = account.VClubSubscription ?? throw new VClubSubscriptionNotFoundException();

            if ( ! IsValidVclubNextBillingDate(subscription, nextBillingDate))
            {
                throw new InvalidVClubDateException(subscription);
            }
            account.VClubSubscription.NextBillingDate = nextBillingDate;
            return account;
        }

        public static Account SetVPassNextBillingDate(this Account account, DateOnly nextBillingDate)
        {
            var subscription = account.VPassSubscription ?? throw new VPassSubscriptionNotFoundException();

            if (subscription.NextBillingDate.AddMonths(1) != nextBillingDate)
            {
                throw new InvalidVPassDateException(subscription);
            }

            account.VPassSubscription.NextBillingDate = nextBillingDate;

            return account;
        }

        private static bool IsValidVclubNextBillingDate(VClubSubscription subscription, DateOnly nextBillingDate) 
        {
            if (subscription.Vclub == VClub.DuoAnnual
                || subscription.Vclub == VClub.IndividualAnnual
                || subscription.Vclub == VClub.FriendsFamilyAnnual)
            {
                return subscription.LastBillingDate.AddYears(1) == nextBillingDate;
            }

            if (subscription.Vclub == VClub.DuoMonthly
                || subscription.Vclub == VClub.IndividualMonthly
                || subscription.Vclub == VClub.FriendsFamilyMonthly)
            { 
                return subscription.LastBillingDate.AddMonths(1) == nextBillingDate;
            }

            return false;
        }

    }
}

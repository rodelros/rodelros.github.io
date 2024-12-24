using Domain.Enums;
using Domain.Exceptions;
using Domain.Models;

namespace Application.Tasks
{
    public static class NextBillingDate
    {
        public static VClubSubscription SetNextBillingDate(this VClubSubscription subscription)
        {

            var nextBillingDate = subscription.Vclub switch
            {
                VClub.IndividualMonthly or VClub.DuoMonthly or VClub.FriendsFamilyMonthly => subscription.LastBillingDate.AddMonths(1),
                VClub.IndividualAnnual or VClub.DuoAnnual or VClub.FriendsFamilyAnnual => subscription.LastBillingDate.AddYears(1),
                _ => subscription.LastBillingDate,
            };

            if (nextBillingDate < DateOnly.FromDateTime(DateTime.Now))
            {
                throw new VClubNotDueException(subscription);
            }

            subscription.NextBillingDate = nextBillingDate;
            return subscription;
        }

        public static VPassSubscription SetNextBillingDate(this VPassSubscription subscription)
        {
            var nextBillingDate = subscription.LastBillingDate.AddMonths(1);

            if (nextBillingDate < DateOnly.FromDateTime(DateTime.Now))
            {
                throw new VPassNotDueException(subscription);
            }

            subscription.NextBillingDate = nextBillingDate;
            return subscription;
        }

    }

}

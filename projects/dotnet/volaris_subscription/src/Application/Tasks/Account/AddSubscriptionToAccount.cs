using Domain.Exceptions;
using Domain.Models;


namespace Application.Tasks
{
    internal static class AddSubscriptionToAccount
    {
        public static Account AddSubscription(this Account account, VClubSubscription subscription)
        {
            // Validation
            if (!subscription.IsValid())
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

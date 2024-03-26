using Domain.Enums;
using Domain.Exceptions;
using Domain.Models;

namespace Application.Tasks
{
    public static partial class Status
    {
        public static VClubSubscription SetToInactive(this VClubSubscription subscription)
        {
            if (subscription == null)
            {
                throw new VClubSubscriptionNotFoundException();
            }

            subscription.Status = SubscriptionStatus.Inactive;

            return subscription;
        }

        public static VPassSubscription SetToInactive(this VPassSubscription subscription)
        {
            if (subscription == null)
            {
                throw new VPassSubscriptionNotFoundException();
            }

            subscription.Status = SubscriptionStatus.Inactive;

            return subscription;
        }

        public static VClubSubscription SetToActive(this VClubSubscription subscription)
        {
            if (subscription == null)
            {
                throw new VClubSubscriptionNotFoundException();
            }

            subscription.Status = SubscriptionStatus.Active;

            return subscription;
        }

        public static VPassSubscription SetToActive(this VPassSubscription subscription)
        {
            if (subscription == null)
            {
                throw new VPassSubscriptionNotFoundException();
            }

            subscription.Status = SubscriptionStatus.Active;

            return subscription;
        }

    }
}

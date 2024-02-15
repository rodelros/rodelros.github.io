using Domain.Enums;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases.UpdateSubscriptionStatus
{
    public static class UpdateSubscriptionStatus
    {
        public static Account SetVClubSubscriptionToInactive(this Account account)
        {
            if (account.VClubSubscription != null)
            {
                account.VClubSubscription.Status = SubscriptionStatus.Inactive;
            }
            
            return account;
        }

        public static Account SetVPassSubscriptionToInactive(this Account account)
        {
            if (account.VPassSubscription != null)
            {
                account.VPassSubscription.Status = SubscriptionStatus.Inactive;
            }

            return account;
        }

        public static Account SetVClubSubscriptionToActive(this Account account)
        {
            if (account.VClubSubscription != null)
            {
                account.VClubSubscription.Status = SubscriptionStatus.Active;
            }

            return account;
        }

        public static Account SetVPassSubscriptionToActive(this Account account)
        {
            if (account.VPassSubscription != null)
            {
                account.VPassSubscription.Status = SubscriptionStatus.Active;
            }

            return account;
        }

    }
}

using Domain.Enums;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.UseCases.AddNewSubscriptionToAccount
{
    internal class CreateSubscription
    {
        public static DateOnly NextMonth(DateOnly startDate) => startDate.AddMonths(1);

        public static VClubSubscription NewVClub(VClub vclub)
        {
            var now = DateOnly.FromDateTime(DateTime.Now);
            var nextBillingDate = vclub switch
            {
                VClub.IndividualMonthly or VClub.DuoMonthly or VClub.FriendsFamilyMonthly => NextMonth(now),
                VClub.IndividualAnnual or VClub.DuoAnnual or VClub.FriendsFamilyAnnual => now.AddYears(1),
                _ => now,
            };

            return new VClubSubscription(now, nextBillingDate, now, SubscriptionStatus.Active, vclub);
        }
        public static VPassSubscription NewVPass(VPass vpass)
        {
            var now = DateOnly.FromDateTime(DateTime.Now);
            return new VPassSubscription(now, NextMonth(now), now, SubscriptionStatus.Active, vpass);
        }
    }
}

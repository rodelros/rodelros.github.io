using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Domain.Enums;

namespace Domain.Models
{
    public class SubscriptionBase(DateOnly enrollDate, DateOnly nextBillingDate, DateOnly lastBillingDate, SubscriptionStatus status)
    {
        public DateOnly EnrollDate { get; private set; } = enrollDate;
        public DateOnly NextBillingDate { get; set; } = nextBillingDate;

        public DateOnly LastBillingDate { get; set; } = lastBillingDate;

        public SubscriptionStatus Status { get; set; } = status;

    }

    public class VClubSubscription(
          DateOnly enrollDate
         ,DateOnly nextBillingDate
         ,DateOnly lastBillingDate
         ,SubscriptionStatus status
         ,VClub vClub) : SubscriptionBase(enrollDate , nextBillingDate, lastBillingDate, status)
    {
        public VClub Vclub { get; private set; } = vClub;

    }

    public class VPassSubscription(
          DateOnly enrollDate
         ,DateOnly nextBillingDate
         ,DateOnly lastBillingDate
         ,SubscriptionStatus status
         ,VPass vpass) : SubscriptionBase(enrollDate, nextBillingDate, lastBillingDate, status)
    {
        public VPass Vpass { get; private set; } = vpass;
    }
}

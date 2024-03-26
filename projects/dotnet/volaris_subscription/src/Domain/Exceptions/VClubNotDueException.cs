using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Exceptions
{
    public class VClubNotDueException(VClubSubscription subscription) : Exception("VClub subscription not due yet.")
    {
        public VClubSubscription Subscription { get; set; } = subscription;
    }
}

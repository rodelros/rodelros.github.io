using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Exceptions
{
    public class InvalidVClubDateException(VClubSubscription subscription) : Exception("Invalid VClub subscription date.")
    {
        public VClubSubscription Subscription { get; set; } = subscription;
    }
}

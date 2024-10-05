using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Exceptions
{
    public class InvalidVPassDateException(VPassSubscription subscription) : Exception("Invalid VPass subscription date.")
    {
        public VPassSubscription Subscription { get; set; } = subscription;
    }
}

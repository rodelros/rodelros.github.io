using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Exceptions
{
    public class VPassNotDueException(VPassSubscription subscription) : Exception("VPass subscription not due yet.")
    {
        public VPassSubscription VPassSubscription { get; set; } = subscription;
    }
}

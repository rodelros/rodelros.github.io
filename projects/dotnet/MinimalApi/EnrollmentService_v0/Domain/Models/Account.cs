using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Account
    {
        public string PersonKey { get; private set; } = string.Empty;
        public string CustomerNumber { get; private set; } = string.Empty;
        public int Status { get; private set; } = 0;

    }
}

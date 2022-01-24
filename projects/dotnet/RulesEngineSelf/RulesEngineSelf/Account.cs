using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RulesEngineSelf
{
    public class Account
    {
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; } = decimal.Zero;

        public int Age { get; set; } = 0;

        public int YearsOfService { get; set; } = 0;

        public string Address { get; set; } = string.Empty;

        public DateTime JoinDate { get; set; } = DateTime.Now;
    }
}

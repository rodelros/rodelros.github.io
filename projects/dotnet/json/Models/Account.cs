using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace json.Models
{
    public class Name
    {
        public string First { get; set; }
        public string Middle { get; set; }
        public string Last { get; set; }
        public string Prefix { get; set; }
    }

    public class Transaction
    { 
        public DateTime Date { get; set; }
        public double Amount { get; set; }
    }

    public class Account
    {
        public Name Name { get; set; }
        public int Id { get; set; }
        public List<Transaction> Transactions { get; set; }
        public string Description { get; set; }
    }
}

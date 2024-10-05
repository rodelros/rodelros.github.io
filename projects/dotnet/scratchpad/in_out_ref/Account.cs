using System;

namespace in_out_ref
{
    public class Account
    {
        public string Name { get; set; } = string.Empty;
        public decimal Balance { get; set; } = 0;
        public string Status { get; set; } = string.Empty;
    }

    public struct Entry
    {
        public Entry(string name, decimal amount)
        {
            Name = name;
            Amount = amount;
        }
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; } = 0;
    }

    public record Transaction
    {
        public string Name { get; set; } = string.Empty;
    }
}
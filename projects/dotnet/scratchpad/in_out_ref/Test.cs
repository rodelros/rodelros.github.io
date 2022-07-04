namespace in_out_ref
{
    public static class Test
    {
        public static void Run()
        {
            var account = new Account();
            account.Name = "John";
            account.Balance = 100;
            account.Status = "Active";

            ChangeOrNot(ref account, true);
            Display(account);

            Out(out account);
            Display(account);

            In(account);
            Display(account);

            
        }

        private static void InStruct(in Entry entry)
        {
            // This will fail to compile becase the entry is a struct
            //entry.Amount = 9;
        }

        private static void InRecord(in Transaction transaction)
        {
            transaction.Name ="changed";
        }

        private static void Display(Account account)
        {
            Console.WriteLine($"Name: {account.Name}");
            Console.WriteLine($"Balance: {account.Balance}");
            Console.WriteLine($"Status: {account.Status}");
        }
        private static void ChangeOrNot(ref Account account, bool shouldChange)
        {
            if (shouldChange)
            {
                account = new Account();
                account.Name = "Changed";
            }
        }

        private static void Out(out Account account)
        {
            account = new Account();
            account.Name = "From Out";
        }

        private static void In(in Account account)
        {
            account.Name = "From In";
            // This will fail because the account is read-only.
            // Only the properties may be changed.
            // account = new Account();

        }
    }
}
using Application.ExternalInterfaces;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.AccountService
{
    public class InMemoryAccountService : IAccountService
    {
        private readonly List<Account> _accounts =
        [
             new("HGFTRE", "One", "Surnameone", "one@test.com")
            ,new("BVDFGE", "Second", "What", "second@mail.org")
        ];

        public Account? GetAccount(string email)
        {
            return _accounts.FirstOrDefault(account => account.Email.Equals(email, StringComparison.OrdinalIgnoreCase));
        }

        public void UpdateAccount(Account account)
        {
            
            var found = _accounts.First(acc => account.Email.Equals(acc.Email, StringComparison.OrdinalIgnoreCase));
            if (found != null)
            { 
                found.VPassSubscription = account.VPassSubscription;
                found.VClubSubscription = account.VClubSubscription;
            }

        }
    }
}

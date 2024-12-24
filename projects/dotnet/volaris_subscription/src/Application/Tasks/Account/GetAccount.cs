using Application.ExternalInterfaces;
using Domain.Exceptions;
using Domain.Models;

namespace Application.Tasks
{
    public static class GetAccount
    {
        public static Account GetAccountFromEmail(this IAccountService accountService, string email)
        {
            var account = accountService.GetAccount(email);
            return account ?? throw new AccountNotFoundException(email);
        }
    }
}

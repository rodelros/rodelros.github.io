namespace Loyalty.Contracts.Interfaces;

using Models;
public interface IAccountService
{
    Task<bool> SaveAccount(Account account);
    Task<bool> UpdateAccount(Account account);
    Task<bool> DeleteAccount(Account account);
    Task<Account> GetAccount(Guid id);
    Task<int> GetAccountPoints(Guid id);
}
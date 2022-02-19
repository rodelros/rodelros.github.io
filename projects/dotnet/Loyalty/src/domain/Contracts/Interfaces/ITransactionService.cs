namespace Loyalty.Contracts.Interfaces;

using Models;
public interface ITransactionService
{
    EvaluationResult GetLoyaltyPoints(Account account, Ruleset ruleset);
}
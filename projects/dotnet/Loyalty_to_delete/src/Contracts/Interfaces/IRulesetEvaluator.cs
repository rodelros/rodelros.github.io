namespace Loyalty.Contracts.Interfaces;

using Loyalty.Contracts.Models;

public interface IRulesetEvaluator
{
    // Returns the points from the ruleset evaluation.
    Task<int> EvaluateAsync(Account account, Ruleset ruleset);
}
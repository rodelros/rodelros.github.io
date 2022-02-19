namespace Loyalty.Contracts.Interfaces;

using Loyalty.Contracts.Models;
public interface IRuleset
{
    Task<Ruleset> GetRulesetByIdAsync(Guid id);
    Task SaveRulesetAsync(Ruleset ruleset);
    Task<IQueryable<Ruleset>> GetRulesetsByDateAsync(DateTime date);
}
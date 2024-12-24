namespace Loyalty.Contracts.Interfaces;

using Models;
public interface IRulesService
{
    Task<bool> SaveRuleset(Ruleset ruleset);
    Task<Ruleset> CreateRuleset(IEnumerable<Rule> rules);
    Task<IEnumerable<Ruleset>> GetRulesetsByCreationDate(DateTime createdOn);
    Task<IEnumerable<Ruleset>> GetRulesetsByEffectiveDate(DateTime effectiveOn);
    
}
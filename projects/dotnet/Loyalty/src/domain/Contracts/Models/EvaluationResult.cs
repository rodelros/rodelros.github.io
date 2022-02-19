namespace Loyalty.Contracts.Models;

public class EvaluationResult : BaseModel
{
    public Dictionary<Rule, int> RulePoints { get; set; } = new Dictionary<Rule, int>();
    public Ruleset Ruleset { get; set; } = new Ruleset();
    public int TotalPoints { get; set; } = 0;
}
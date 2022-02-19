namespace Loyalty.Contracts.Models;

public class Transaction
{
    public DateTime CreatedOn { get; set; }
    public Ruleset Ruleset { get; set; } = new Ruleset();   
    
    // RulePoints will contain the individual points for each rule that was evaluated.
    public IEnumerable<Tuple<Rule, int>> RulePoints { get; set; } = new List<Tuple<Rule, int>>();
}
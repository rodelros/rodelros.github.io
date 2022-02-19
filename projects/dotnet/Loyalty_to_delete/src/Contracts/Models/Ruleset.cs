namespace Loyalty.Contracts.Models;

public class Ruleset
{
    public Guid Id { get; set; }
    public IEnumerable<Rule> Rules { get; set; } = new List<Rule>();
    public DateTime CreatedOn { get; set; }

}

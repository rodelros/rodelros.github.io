namespace Loyalty.Contracts.Models;

public class Ruleset : BaseModel
{
    public IEnumerable<Rule> Rules { get; set; } = new List<Rule>();
    public DateTime? CreatedOn { get; set; }
    public DateTime? EffectiveFrom { get; set; }
    public DateTime? EffectiveUntil { get; set; }
}
namespace Loyalty.Contracts.Models;

public class Rule
{
    public Guid Id { get; set; }
    public string Expression { get; set; } = string.Empty;
    public DateTime CreatedOn { get; set; }
}
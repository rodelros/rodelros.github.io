namespace Loyalty.Contracts.Models;

public class Rule : BaseModel
{
    public string Expression { get; set; } = string.Empty;
}
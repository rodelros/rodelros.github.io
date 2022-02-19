namespace Loyalty.Contracts.Models;

public class Account
{
    public Guid Id { get; set; }
    public long Points { get; set; }

    public IEnumerable<Transaction> Transactions { get; set; } = new List<Transaction>();
    public DateTime CreatedOn { get; set; }
}
namespace fp;

public enum AccountType
{
    Admin
    ,Manager
    ,Supervisor
    ,Customer
}
public abstract record Account(AccountType AccountType, DateOnly JoinDate);
public record Auditor(AccountType AccountType, DateOnly JoinDate, string LicenseNumber): Account(AccountType, JoinDate); 
public record Supplier(AccountType AccountType, DateOnly JoinDate, string ShopId): Account(AccountType, JoinDate);

public static class PatternMatching
{
    public static void Run()
    {
        Console.WriteLine("\n-- PatternMatching --\n");
        var auditor = new Auditor(AccountType.Supervisor, new DateOnly(2022, 1, 31), "LIC3452376");
        var supplier = new Supplier(AccountType.Manager, new DateOnly(2023, 5, 8), "SHP63524");

        Console.WriteLine($"Is auditor allowed {IsAllowed(auditor)}");

        var isActive = auditor is { JoinDate.Year: >= 2022 };
        Console.WriteLine($"Is auditor active, {isActive}");

        Console.WriteLine($"Is auditor active, {IsActive(auditor)}");

    }

    public static bool IsActive(Account account)
    {
        return account.JoinDate.Year switch
        {
             < 2023 => false
            ,>= 2023 => true

        };
    }

    public static bool IsAllowed(Account account)
    {
        return account switch
        {
            Auditor => true,
            Supplier => true,
            _ => false
        };
}
}


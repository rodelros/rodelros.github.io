namespace fp;

using System.IO.Pipes;
using System.Linq;

public static class IEnumerableAsOption
{
    record Account(string Id)
    {
        public string? Name {get; set;}
        public uint? Line{get; set;} = null;
    }

    public static void Run()
    {
        Console.WriteLine("\n-- IEnumerableAsOption --\n");
        var account = new Account("first"){Name = "Una", Line = 3};
        var updatedLine = UpdateLine(account);
        if(updatedLine.Any())
        {
            Console.WriteLine(account);
            Console.WriteLine(updatedLine.First());
        }
    }

    static IEnumerable<Account> UpdateLine(Account account)
    {
        account.Line = 4;
        return new Account[] {account};
    }

}

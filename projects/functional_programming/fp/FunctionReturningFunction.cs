using System.Data.Common;
using System.Net;
using System.Runtime.CompilerServices;

namespace fp;

public static class FunctionReturningFunction
{
    record Account
    {
        public required string? Id {get; init;}
        public string? Name {get; set;}
    }

    static bool IsValid(this Account account)
    {
        return !String.IsNullOrWhiteSpace(account.Id);
    }

    public static void Run()
    {
        Console.WriteLine("\n-- FunctionReturningFunction --\n");
        Account account = new(){Id = "first", Name = "Juan"};
        if(account.IsValid())
        {
            Console.WriteLine("Account is valid.");
        }
    }
}

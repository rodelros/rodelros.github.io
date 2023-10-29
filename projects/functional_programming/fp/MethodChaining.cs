namespace fp;

using System.Security.Cryptography;
using static System.Console;
public static class MethodChaining
{
    private record Account
    {
        public string Id {get; init;} = string.Empty;
        public int Age {get; init;}
    }
    public static void Run()
    {
        WriteLine("\n-- MethodChaining --\n");
        var account = new Account{Id = "one", Age = 32};
        var account2 = account.AgePlusOne().IdSuffix("xxx");

        Console.WriteLine(account);
        Console.WriteLine(account2);
    }

    static Account AgePlusOne(this Account account) => new (){Id = account.Id, Age = account.Age + 1};
    static Account IdSuffix(this Account account, string suffix) => new (){Id = $"{account.Id}{suffix}", Age = account.Age};

}

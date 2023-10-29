namespace fp;

using System.Data.Common;
using System.Linq;

public static class MapForEach
{

    internal class Account
    {
        public string Id {get; init;} = string.Empty;
        public string? Name {get;set;}
    } 
    

    internal class Display
    {
        public Display(string str)
        {
            // Console functions are not called within the constructor
            Console.WriteLine(str);
        }
    }


    public static void Run()
    {
        Console.WriteLine("\n-- MapForEach --\n");
        List<int> ints = new(){4, 3, 2, 6};

        var timesTwo =   (from i in ints
                        select i * 2).ToList();
        
        timesTwo.ForEach(i => Console.WriteLine($"{i}"));
        AccountRun();

    }

    public static void AccountRun()
    {
        List<Account> accounts = new()
            {
                 new (){Id = "one", Name = "Juan"}
                ,new (){Id = "two", Name = "Pedro"}
                ,new (){Id = "three", Name = "Jose"}
            };

        var helloAccounts = accounts.Select(acct => acct.Name = $"Hello {acct.Name}");   
         var displays = from helloAcct in helloAccounts
             select new Display(helloAcct);

        Console.WriteLine("here");
    }

}
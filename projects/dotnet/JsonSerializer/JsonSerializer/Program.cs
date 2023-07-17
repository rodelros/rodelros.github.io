using JsonSerializer;
using System.Dynamic;

var memo = new Memo {
     Deadline = DateTime.Now
    ,Content = @"Commit changes to repo"
    ,Status = Status.New
    ,Owner = new Owner { 
         Name = "Rodel"
        ,JoinDate = new DateTime(1980, 1, 1)
        ,Address= new Address {
             Id = 1
            ,State = "NCR"
        }
    }
    ,Ints = new int[] { 1, 2,3 }
    ,Tags = new List<string> { 
         "main"
        ,"first"
    }
};

var memoStr = System.Text.Json.JsonSerializer.Serialize(memo);

using var document = System.Text.Json.JsonDocument.Parse(memoStr);

var root = document.RootElement;

var stateStr = root
    .GetProperty("Owner")
    .GetProperty("Address")
    .GetProperty("State")
    .GetString();

var status = root
    .GetProperty("Status")
    .GetInt16();

foreach (var el in root.GetProperty("Ints").EnumerateArray())
{
    Console.WriteLine(el.GetInt16());
}

foreach (var el in root.GetProperty("Tags").EnumerateArray())
{ 
    Console.WriteLine($"{el.GetString()}");
}

Console.WriteLine($"{stateStr} {status}");

Console.ReadKey();


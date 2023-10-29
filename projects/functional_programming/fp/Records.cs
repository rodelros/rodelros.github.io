using System.ComponentModel;

namespace fp;

public record Person(string FirstName, string LastName)
{
    private string[] PhoneNumbers {get; init;} = new string[1];
    public Func<char> FirstLetter = () => FirstName[0];
}

public record Subscriber
{
    public string? Name {get; set;}
    public string? Email {get; init;}
    public Nullable<int> Number {get;set;}
}

public static class Records
{
    private record Age
    {
        public int Value{ get;}
        public Age(int age) => Value = IsValid(age) ? age : throw new ArgumentOutOfRangeException(nameof(age));

        private static bool IsValid(int age) => age >= 10 && age <= 120;
        
        public static bool operator <(Age l, Age r) => l.Value < r.Value;
        public static bool operator >(Age l, Age r) => l.Value > r.Value;
        public static bool operator <(Age l, int r) => l.Value < r;
        public static bool operator >(Age l, int r) => l.Value > r;        
    }
    public static void Run()
    {
        Console.WriteLine("\n-- Records --");
        var age = new Age(10);
        var age2 = new Age(70);
        Console.WriteLine($"{age > 70}");
        Console.WriteLine($"age's Value is {age.Value}");
        NullTest();
    }

    public static void NullTest()
    {
        Console.WriteLine("\n-- NullTest --");
        var subscriber = new Subscriber();
        ShowSubscriberEmail(subscriber);
        if(subscriber.Number.HasValue)
        {
            Console.WriteLine($"subscriber number has a value.");
        }
    }

    public static void ShowSubscriberEmail(Subscriber subscriber)
    {
        var disp = "Subscriber email is ";
        disp += subscriber.Email?.ToLower();
        Console.WriteLine(disp);
    }
}

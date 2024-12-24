using Functional;

// See https://aka.ms/new-console-template for more information
Func<int, int> Triple = x => x * 3;
static int Tripled(int x) => x * 3;

Console.WriteLine($"Tripled(5) = {Tripled(5)}");
Console.WriteLine($"Triple(5) = {Triple(5)}");

// dictionary of functions
var funcs = new Dictionary<string, Func<int, int>>
{
    ["Add"] = (x) => x + 1,
    ["Subtract"] = (x) => x - 1,
    ["Multiply"] = (x) => x * 2,
};

Console.WriteLine($"Add(5) = {funcs["Add"](5)}");
Console.WriteLine($"Subtract(5) = {funcs["Subtract"](5)}");
Console.WriteLine($"Multiply(5) = {funcs["Multiply"](5)}");

AdapterFunction.Run();

Action<int> ShowNumber = x => Console.WriteLine(x);
static void ShowNum(int x) => Console.WriteLine(x);

ShowNumber(5);
ShowNum(5);

var ordered = Enumerable.Range(1, 100).
Where(i => i % 20 == 0).
OrderBy(i => i).
Select(i => $"{i}%");

foreach (var item in ordered)
{
    Console.WriteLine(item);
}

ExpressionBody.Run();
Negation.Run();
Counter.Run();

var person = new Person("John", 30);
Console.WriteLine(person.GetFullName());
person = person.UpdatedAge(40);
Console.WriteLine(person.Age);
record Person(string Name, int Age);
static class PersonExtensions
{
    public static string GetFullName(this Person person) => $"{person.Name} {person.Age}";
    public static Person UpdatedAge(this Person person, int age) => new(person.Name, age);
}




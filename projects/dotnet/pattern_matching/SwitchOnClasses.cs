
using System.Diagnostics.CodeAnalysis;

public abstract class Content<T>
{
    public  T? Value{get; set;}
}

public class Left<T> : Content<T>
{

    public Left(T value) => Value = value;
}

public class Right<T> : Content<T>
{
    public Right(T value) => Value = value;
}

public static class SwitchOnClasses
{
    public static void Run()
    {
        Console.WriteLine("\n----- SwitchOnClasses -----\n");
        Console.WriteLine($"{Which(new Right<string>("hello"))}");
        Console.WriteLine(Which("now what?"));
        Console.WriteLine(Which(new Left<int>(42)));
    }

    public static string Which<T>(T param) => param switch
    {
        Left<int> left => $"Left is {left.Value}"
        ,Right<string> right => right.Value ?? ""
        ,_ => string.Empty
    };
    

}


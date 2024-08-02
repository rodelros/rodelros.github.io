using Functional;

public static class Counter
{
    public static Func<int> Create(int seed) => 
        () => seed++;

    public static void Run()
    {
        var next = Create(0);
        Console.WriteLine(next());
        Console.WriteLine(next());
        Console.WriteLine(next());
    }

}
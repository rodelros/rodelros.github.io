using Functional;

public static class Negation
{
    private static bool IsTrue<T>(Func<T, bool> f, T x) => !f(x);

    public static void Run()
    {
        static bool isEven(int x) => x % 2 == 0;
        Console.WriteLine(IsTrue(isEven, 5));
        Console.WriteLine(IsTrue(isEven, 6));
    }

}
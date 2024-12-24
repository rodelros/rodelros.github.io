namespace Functional;

static public class AdapterFunction
{
    static public void Run()
    {
        Func<int, int, int> divide = (x, y) => x / y;

        var f = divide.SwapArgs();
        Console.WriteLine(f(5, 2));

        var f2 = divide.SwapArgsv2();
        Console.WriteLine(f2(2, 10));
    }
}

internal static class AdapterFunctionExtensions
{
    public static Func<T2, T1, R> SwapArgs<T1, T2, R>(this Func<T1, T2, R> f)
    {
        return (t2, t1) => f(t1, t2);
    }

    public static Func<T2, T1, R> SwapArgsv2<T1, T2, R>(this Func<T1, T2, R> f) =>
        (t2, t1) => f(t1, t2);
}
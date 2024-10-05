namespace Functional;

public class Method
{
    public static int Add(int x) => x + 1;
    public static int Subtract(int x) => x - 1;
    public static int Multiply(int x) => x * 2;
    public static void Run() => Console.WriteLine(Add(5));
}

public class ReadOnlyProperty(int value)
{
    public int Value { get; } = value;
    public int PlusOne => Value + 1; // Readonly property
}

    public static class ExpressionBody
{
    public static void Run()
    {
        Method.Run();
        ReadOnlyProperty readOnlyProperty = new(7);
        var plusOne = readOnlyProperty.PlusOne;
        Console.WriteLine(plusOne);
    }

}
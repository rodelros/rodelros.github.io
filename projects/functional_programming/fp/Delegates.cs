namespace fp;

internal class MethodClass
{
    public void Method1(string message) => Console.WriteLine($"MethodClass.Method1: message is {message}");
    public static void Method2(string message) => Console.WriteLine($"MethodClass::Method2: message is {message}");
}


public static class Delegates
{
    public delegate void Callback(string message);

    public static void DelegateMethod(string message)
    {
        Console.WriteLine($"message is {message}");
    }
    public static void Run() 
    {
        Callback handler = DelegateMethod;
        handler("from here");

        Console.WriteLine("\n  Calling a member method of a class");
        var methodClass = new MethodClass();
        handler = methodClass.Method1;
        handler("here too");

        Console.WriteLine("\n  Calling a static method of a class");
        handler = MethodClass.Method2;
        handler("from a static method");

        UsingAction();
        PredicatesAndInterfaces();

    }

    public static void UsingAction()
    {
        Console.WriteLine("\n  Using an Action delegate");
        Action<string> action;
        MethodClass methodClass = new();
        action = methodClass.Method1;
        action("action to a member method");

        Console.WriteLine("\n Using an Action to a static member method");
        action = MethodClass.Method2;
        action("action to a static member method");

    }

    internal interface IDisplayable
    {
        void Show(string message);
    }

    internal class Implementation : IDisplayable
    {
        public void Show(string message) => Console.WriteLine($"Implementation.Show: message is {message}");
    }


    public static void PredicatesAndInterfaces()
    {
        Console.WriteLine("\n  Action predicate from an interface");
        Action<string> action;
        IDisplayable displayable = new Implementation();
        action = displayable.Show;
        action("this is from a predicate to an interface");
    }

}

using System.Reflection.Metadata.Ecma335;

namespace fp;

public static class Closure
{
    static Func<char> Visitor(in string s) {
        int i = 0;
        var str = s;
        char ch;
        return () => {
             ch = i < str.Length ? str[i++] : ' ';
            return ch;
        };
    }
    public static void Run()
    {
        Console.WriteLine("\n--  Closure --");

        var next = Visitor("What now?");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
        Console.WriteLine($"next: {next()}");
    }

}

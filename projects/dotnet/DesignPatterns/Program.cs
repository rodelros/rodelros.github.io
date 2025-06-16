

Action<string> appendLine = str => Console.WriteLine($"\n{new string('=', str.Length)}\n{str}\n{new string('=', str.Length)}\n");

// Specification Pattern

appendLine("Specification Pattern");
DesignPatterns.Specification.Test.Run();


appendLine("Strategy Pattern");
DesignPatterns.Strategy.Test.Run();


appendLine("Composite Strategy Pattern");
DesignPatterns.CompositeStrategy.Test.Run();




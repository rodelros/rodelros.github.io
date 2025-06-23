

Action<string> appendLine = str => Console.WriteLine($"\n{new string('=', str.Length)}\n{str}\n{new string('=', str.Length)}\n");

// Specification Pattern

appendLine("Specification Pattern");
DesignPatterns.Specification.Test.Run();


appendLine("Strategy Pattern");
DesignPatterns.Strategy.Test.Run();


appendLine("Composite Strategy Pattern");
DesignPatterns.CompositeStrategy.Test.Run();

appendLine("Command Pattern");
DesignPatterns.Command.Test.Run();

appendLine("Command History Pattern");
DesignPatterns.CommandHistory.Test.Run();



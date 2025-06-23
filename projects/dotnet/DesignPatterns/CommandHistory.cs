namespace DesignPatterns.CommandHistory;

public static class Test
{
    public static void Run()
    {
        var account = new Account(1000);
        var commandHistory = new CommandHistory();

        // Create commands
        var depositCommand = new DepositCommand(account, 200);
        var withdrawCommand = new WithdrawCommand(account, 150);

        // Execute commands
        commandHistory.ExecuteCommand(depositCommand);
        Console.WriteLine($"Balance after deposit: {account.Balance}");

        commandHistory.ExecuteCommand(withdrawCommand);
        Console.WriteLine($"Balance after withdrawal: {account.Balance}");

        // Undo last command (withdrawal)
        commandHistory.UndoLastCommand();
        Console.WriteLine($"Balance after undoing withdrawal: {account.Balance}");

        // Undo last command (deposit)
        commandHistory.UndoLastCommand();
        Console.WriteLine($"Balance after undoing deposit: {account.Balance}");
    }

}

public interface ICommand
{
    void Execute();
    void Undo();
}

public class Account(decimal initialBalance)
{
    private decimal _balance = initialBalance;
    public decimal Balance { get => _balance; }
    public void Deposit(decimal amount) => _balance += amount;
    public void Withdraw(decimal amount) => _balance -= amount;
}

public class DepositCommand(Account account, decimal amount) : ICommand
{
    private readonly Account _account = account;
    private readonly decimal _amount = amount;

    public void Execute()
    {
        _account.Deposit(_amount);
    }

    public void Undo()
    {
        _account.Withdraw(_amount);
    }
}

public class WithdrawCommand(Account account, decimal amount) : ICommand
{
    private readonly Account _account = account;
    private readonly decimal _amount = amount;

    public void Execute()
    {
        _account.Withdraw(_amount);
    }

    public void Undo()
    {
        _account.Deposit(_amount);
    }
}

public class CommandHistory
{
    private readonly Stack<ICommand> _commandStack = new();

    public void ExecuteCommand(ICommand command)
    {
        command.Execute();
        _commandStack.Push(command);
    }

    public void UndoLastCommand()
    {
        if (_commandStack.Count > 0)
        {
            var lastCommand = _commandStack.Pop();
            lastCommand.Undo();
        }
        else
        {
            Console.WriteLine("No commands to undo.");
        }
    }
}
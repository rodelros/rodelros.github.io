public interface IAccount
{
    static void Subscribe(string id) { Console.WriteLine($"IAccount - {id} subscribed."); }
}

public interface IUser
{
    void Login(){ Console.WriteLine("Logged in");}
    int InitializeId();
}

public class Person : IAccount, IUser
{
    public int InitializeId()
    {
        return new Random().Next();
    }

    public void Subscribe(string id)
    {
        IAccount.Subscribe(id);
    }
}

public static class Test
{
    public static void Run()
    {
        var person = new Person();
        var id = person.InitializeId();
        person.Subscribe(id.ToString());
    }
}
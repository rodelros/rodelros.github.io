namespace DefaultImpl;

public interface IPerson
{
    string Greet();
    void ShowId() => Console.WriteLine("IPerson Id");
}
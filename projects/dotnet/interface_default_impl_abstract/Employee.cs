namespace DefaultImpl;

public class Employee: AbstractEmployee
{
    public override void Assign()
    {
        Console.WriteLine("From Employee -> Assign");
    }
}
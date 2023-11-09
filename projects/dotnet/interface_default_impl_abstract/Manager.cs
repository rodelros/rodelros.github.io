namespace DefaultImpl;

public class Manager : IManager, IPerson
{
    public int UnusedLeaves()
    {
        return 5;
    }


    public string Greet()
    {
        return "Hello";
    }

    public void DisplayPersonId()
    {
        static void showId(IPerson person) => person.ShowId();
        showId(this);
    }

    public void DisplayManagerId()
    {
        static void showId(IManager manager) => manager.ShowId();
        showId(this);       
    }
}
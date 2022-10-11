public class Manager: IManager, IPerson
{
    public int UnusedLeaves()
    {
        return 5;
    }


    public string Greet()
    {
        return "Hello";
    }
}
using System.Data.SqlTypes;

public class Manager: IManager, IPerson
{
    public int UnusedLeaves()
    {
        return 5;
    }

}
namespace DefaultImpl;

public interface IManager
{
    int UnusedLeaves();
    bool IsApproved(int leaveCount)
    {
        return leaveCount > 0;
    }

    void ShowId() => Console.WriteLine("IManager Id");
}
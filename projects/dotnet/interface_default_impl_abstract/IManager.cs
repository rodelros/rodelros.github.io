public interface IManager
{
    int UnusedLeaves();
    bool IsApproved(int leaveCount)
    {
        return leaveCount > 0 ? true : false;
    }
}
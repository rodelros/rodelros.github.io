namespace Api.Services.Singleton;

public class AccountService : IAccountService
{
    private readonly Guid _guid;

    public AccountService()
    {
        _guid = Guid.NewGuid();
    }

    public Guid GetGuid()
    {
        return _guid;
    }
}
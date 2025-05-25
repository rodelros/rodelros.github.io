namespace Api.Services.Transient;

public class ProgramService(IAccountService accountService) : IProgramService
{
    public UserProgram NewProgram(string name) 
        => new(accountService.GetGuid(), name);
}
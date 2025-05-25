namespace Api.Services.Singleton;

public class ProjectService(IAccountService accountService) : IProjectService
{
    public Project NewProject(string name) =>
     new(accountService.GetGuid(), name);
}
using FireForget.Services;
using Microsoft.AspNetCore.Mvc;

namespace FireForget.Controllers;

[ApiController]
[Route("[controller]")]
public class LogController : ControllerBase
{

    private readonly IDisplayService _displayService;
    public LogController(IDisplayService displayService)
    {
        _displayService = displayService;
    }

    [HttpGet]
    public  IActionResult Display([FromServices] IServiceScopeFactory serviceScopeFactory)
    {
        // This function will return HTTP 202 but the process in displayService.Show method will continue
        // on the server until completion
        _ = Task.Run(async () => {
            using var scope = serviceScopeFactory.CreateScope();
            var displayService = scope.ServiceProvider.GetRequiredService<IDisplayService>();
            await displayService.Show();
        });
        //await _displayService.Show();

        return Accepted();

    }


}

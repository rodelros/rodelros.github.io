namespace LoggerMessage;
public static class LoggerMessageTest
{
    public static void SetEndpoints(this WebApplication app)
    {
        app.MapGet("/logger", (ILogger logger) => 
        {
            
        })
        .WithName("LoggerMessageTest")
        .WithOpenApi();
    }


}
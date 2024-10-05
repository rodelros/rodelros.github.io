

namespace FireForget.Services;

public class DisplayService : IDisplayService
{
    public async Task Show()
    {
        await Task.Run(async () => {
            await Task.Delay(1000 * 60); 
            Console.WriteLine("This is the display");

        });
    }
}
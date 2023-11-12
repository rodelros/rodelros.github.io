
static partial class UsingLoggerMessage
{

    private static readonly Action<ILogger, Exception> s_failedToProcess = LoggerMessage.Define(
        LogLevel.Information,
        new EventId(1, nameof(FailedToProcess)),
        "Processing Failed."
    );

    public static void FailedToProcess(this ILogger logger, Exception ex) =>
        s_failedToProcess(logger, ex);

}
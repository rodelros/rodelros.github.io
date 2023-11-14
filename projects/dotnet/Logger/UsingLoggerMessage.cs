
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

public interface ILoggableOperationReceipt
{

    string LogMessage { get; }
    string LogDetail { get; }
}

public class LoggableOperationReceipt : ILoggableOperationReceipt
{
    public string LogMessage {get; set;} = string.Empty;

    public string LogDetail {get; set;} = string.Empty;
}

/*****
static partial class OperationReceipt
{
        [LoggerMessage(
        EventId = 0,
        Level = LogLevel.Information,
        Message = "{receipt}")]
    public static partial void LogOperationReceipt(
        this ILogger logger, ILoggableOperationReceipt receipt);
}
*****/

static partial class OperationReceipt
{

    [LoggerMessage(EventId = 23, Message = "{Message}")]
    public static partial void LogOperation(
        this ILogger logger,
        LogLevel logLevel,
        string message);

/*****
    private static readonly Action<ILogger, string> s_failedToProcess = LoggerMessage.Define(
        new EventId(1, nameof(LogOperationReceipt)),
        "{Message}"
    );

    public static void LogOperationReceipt(this ILogger logger, ILoggableOperationReceipt receipt, LogLevel logLevel) =>
        s_failedToProcess(logger, "");
        *****/

    public static void LogOperationReceipt(this ILogger logger, ILoggableOperationReceipt receipt, LogLevel logLevel)    
    {
        var message = receipt.LogDetail + " " + receipt.LogMessage;
        logger.LogOperation(logLevel, message);
    }

}

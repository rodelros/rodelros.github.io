using Microsoft.AspNetCore.Diagnostics;
using System.Net;
using Domain.Exceptions;

namespace API
{
    public class ExceptionHandler : IExceptionHandler
    {
        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext, 
            Exception exception, 
            CancellationToken cancellationToken)
        {
            httpContext.Response.StatusCode = exception.StatusCode();
            await httpContext.Response.WriteAsJsonAsync(exception, cancellationToken);
            return true;
        }

    }

    internal static class ExceptionStatusCodeMapper
    {
        internal static int StatusCode(this Exception exception) => exception switch
        {
            InvalidVClubDateException => (int)HttpStatusCode.BadRequest,
            InvalidVPassDateException => (int)HttpStatusCode.BadRequest,
            VClubNotDueException => (int)HttpStatusCode.BadRequest,
            VClubSubscriptionNotFoundException => (int)HttpStatusCode.BadRequest,
            VPassNotDueException => (int)HttpStatusCode.BadRequest,
            VPassSubscriptionNotFoundException => (int)HttpStatusCode.BadRequest,
            AccountNotFoundException => (int)HttpStatusCode.BadRequest,
            _ => (int)HttpStatusCode.InternalServerError
        };

    }
}

using API.Requests;
using Application.ExternalInterfaces;
using Application.UseCases.AddNewSubscriptionToAccount;
using Domain.Enums;
using Domain.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Runtime.CompilerServices;

namespace API
{
    public static class AccountSubscription
    {
        public static void MapAccountEndpoints(this WebApplication app)
        {
            app.MapGet("/account/{email}", GetAccount);
            app.MapPost("/account/vclub/", AddVclubSubscription);
        }

        public static Results<Ok<Account>, NotFound> GetAccount(string email, IAccountService accountService)
        {
            var account = accountService.GetAccount(email);

            return account == null ? TypedResults.NotFound() : TypedResults.Ok(account);
        }

        public static Results<Ok<Account>, NotFound, BadRequest> AddVclubSubscription(AddVClubRequest request, IAccountService accountService)
        {
            var account = accountService.GetAccount(request.Email);
            if (account == null)
            { 
                return TypedResults.NotFound();
            }
            if (Enum.TryParse<VClub>(request.Vclub, out VClub vclub))
            {
                account.AddVClubSubscriptionToAccount(vclub);
                return TypedResults.Ok(account);
            }
            return TypedResults.BadRequest();

        }
    }
}

using API.Requests;
using Application.ExternalInterfaces;
using Application.UseCases;
using Domain.Enums;
using Domain.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Runtime.CompilerServices;
using System.Security.Principal;


namespace API
{
    public static class AccountSubscription
    {
        public static void MapAccountEndpoints(this WebApplication app)
        {
            app.MapPost("/account/vclub/", AddVclubSubscription);
            app.MapPost("/account/vpass", AddVPassSubscription);
            app.MapPost("/acconut/vpass/refresh/{email}", UpdateVPassSubscription);
            app.MapPost("/acconut/vclub/refresh/{email}", UpdateVClubSubscription);
            app.MapPost("/acconut/vpass/deactivate/{email}", DeactivateVPassSubscription);
            app.MapPost("/acconut/vclub/dectivate/{email}", DeactivateVClubSubscription);
        }

        public static Results<Ok<Account>, NotFound, UnauthorizedHttpResult> DeactivateVClubSubscription(
            IAccountService accountService, 
            string email)
        {
            var account = UpdateSubscriptionStatus.DeactivateVClub(accountService, email);

            return TypedResults.Ok(account);
        }

        public static Results<Ok<Account>, NotFound, UnauthorizedHttpResult> DeactivateVPassSubscription(
            IAccountService accountService, 
            string email)
        {
            var account = UpdateSubscriptionStatus.DeactivateVPass(accountService, email);

            return TypedResults.Ok(account);
        }

        public static Results<Ok<Account>, NotFound, UnauthorizedHttpResult> UpdateVPassSubscription(
            IAccountService accountService, 
            string email)
        {
            var account = UpdateSubscriptionNextBillingDate.UpdateVPass(accountService, email);

            return TypedResults.Ok(account);
        }

        public static Results<Ok<Account>, NotFound, UnauthorizedHttpResult> UpdateVClubSubscription(
            IAccountService accountService, 
            string email)
        {
            var account = UpdateSubscriptionNextBillingDate.UpdateVClub(accountService, email);

            return TypedResults.Ok(account);
        }

        public static Results<Ok<Account>, NotFound, BadRequest> AddVPassSubscription(
            IAccountService accountService, 
            AddVPassRequest request)
        {
            var vpass = request.Vpass.ToVpass();
            if (vpass != VPass.None)
            {
                var account = AddNewSubscriptionToAccount.AddVPass(accountService, request.Email, request.Vpass.ToVpass());
                return TypedResults.Ok(account);
            }

            return TypedResults.NotFound();

        }

        private static VPass ToVpass(this string strVpass)
        {
            if (Enum.TryParse<VPass>(strVpass, out VPass vpass))
            {
                return vpass;
            }

            return VPass.None;
        }


        public static Results<Ok<Account>, NotFound, BadRequest> AddVclubSubscription(
            IAccountService accountService, 
            AddVClubRequest request)
        {
            var vclub = request.Vclub.ToVClub();
            if (vclub != VClub.None)
            {
                var account = AddNewSubscriptionToAccount.AddVClub(accountService, request.Email, request.Vclub.ToVClub());
                return TypedResults.Ok(account);
            }

            return TypedResults.NotFound();
        }

        private static VClub ToVClub(this string strVclub)
        {
            if (Enum.TryParse<VClub>(strVclub, out VClub vclub))
            {
                return vclub;
            }

            return VClub.None;
        }
    }
}

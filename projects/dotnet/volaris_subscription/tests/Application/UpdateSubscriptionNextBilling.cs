using Domain.Models;
using Application.UseCases.AddNewSubscriptionToAccount;
using Application.UseCases.UpdateSubscriptionNextBillingDate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Enums;
using Domain.Exceptions;

namespace Application.Tests
{
    public class UpdateSubscriptionNextBilling
    {
        [Fact]
        public void InvalidNextBillingDate_ShouldThrowException()
        {
            try 
            {
                new Account("JHGDTR", "Test", "Unit", "unit@test.net")
                    .AddVClubSubscriptionToAccount(VClub.DuoAnnual)
                    .SetVClubNextBillingDate(DateOnly.FromDateTime(DateTime.Now.AddDays(-1)));
            }
            catch (Exception ex) 
            {
                Assert.True(ex is InvalidVClubDateException);
            }


            
        }
    }
}

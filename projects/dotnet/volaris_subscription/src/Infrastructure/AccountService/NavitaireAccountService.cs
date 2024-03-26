using Application.ExternalInterfaces;
using Domain.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Infrastructure.AccountService
{
    public class NavitaireAccountService(HttpClient httpClient, IConfiguration configuration) 
        : IAccountService
    {

        private readonly HttpClient _httpClient = httpClient;
        private readonly IConfiguration _configuration = configuration;

        public Account GetAccount(string email)
        {

            throw new NotImplementedException();
        }

        public void UpdateAccount(Account account)
        {
            throw new NotImplementedException();
        }
    }
}

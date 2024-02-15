using Application.Interfaces;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace Infrastructure.Navitaire
{
    public class AccountService(HttpClient httpClient) : IAccountService
    {
        private readonly HttpClient _httpClient = httpClient;


        public Account GetAccountByPersonKey(string personKey)
        {
            throw new NotImplementedException();
        }

    }
}

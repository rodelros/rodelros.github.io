using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using json.Extensions;
using json.Models;

namespace json.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountsController : ControllerBase
    {

        private readonly ILogger<AccountsController> _logger;

        public AccountsController(ILogger<AccountsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult GetAccounts()
        {
            /*****/
            var result = new[]
            {
                new {Name = "Rodel", Id = "001"},
                new {Name = "Ros", Id = "002"}
            } ;

            var jsonStr = JsonSerializer.Serialize<dynamic>(result, 
                new JsonSerializerOptions {
                      IgnoreNullValues = true
                });

            dynamic obj = Deserialize(jsonStr);

            return Ok(jsonStr);
            /*****/

            /*****
            //return Ok(GetAccountJson());
            *****/
            
        }

        private object Deserialize(string jsonStr)
        {
            return JsonSerializer.Deserialize<object>(jsonStr, new JsonSerializerOptions { AllowTrailingCommas = true, IgnoreNullValues = true });
        }

        private string GetAccountJson()
        {
            var account = new Account {
                Name = new Name { First = "Rodel", Middle = "Carr", Last = "Ros" },
                Transactions = new List<Transaction> { new Transaction { Date = DateTime.Now, Amount = 3.4} },
                Id = 5
            };
           

            return JsonSerializer.Serialize<Account>(account,
                new JsonSerializerOptions
                {
                    IgnoreNullValues = true
                });
        }

        [HttpGet]
        [Route("Complex")]
        public ActionResult GetComplex()
        {
            var jsonStr = @"{
                ""data"":[
                    {""id"":504, ""value"":""first""},
                    {""id"":654, ""value"":""second"", ""optional"":{""name"":""then""}}
                ],
                ""properties"":{
                    ""content"":""some content""
                }
            }";

            using var jd = JsonDocument.Parse(jsonStr);
            var data = jd.RootElement.GetProperty("data");
            var properties = jd.RootElement.GetProperty("properties");

            if(properties.TryGetProperty("content", out var content))
            {
                // do something with content
                var str = content.GetString();
            }

            if(properties.TryGetProperty("notAgain", out var notAgain))
            {
                // this block will not be executed
            }
            return Ok(jsonStr);
        }


    }
}

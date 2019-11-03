using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;

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
            var result = new[]
            {
                new {Name = "Rodel", Id = "001"},
                new {Name = "Ros", Id = "002"}
            } ;

            return Ok(result);
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

            var jd = JsonDocument.Parse(jsonStr);

            return Ok();
        } 
    }
}

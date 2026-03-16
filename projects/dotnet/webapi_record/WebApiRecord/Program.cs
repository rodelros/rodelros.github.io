using WebApiRecord.Models;
using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapPost("api/v1/account", (Account account) =>
    {
        Console.WriteLine($"Account: {account}");
        return TypedResults.Ok(account);
    })
    .WithName("SetAccount");

app.MapPost("api/v1/division", 
    Results<Ok<Division>, BadRequest<string>>
    (Division division) =>
    {
        Console.WriteLine($"Division: {division}");
        if (!division.IsValid())
        {
            return TypedResults.BadRequest("Invalid division");
        }
        return TypedResults.Ok(division);
    })
    .WithName("SetDivision");

await app.RunAsync();

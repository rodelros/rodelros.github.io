using WebApp;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();


builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();



var app = builder.Build();

app.UseExceptionHandler();

app.UseExceptionHandler();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(); // https://localhost:7066/scalar/v1
}

app.UseHttpsRedirection();

app.MapPost("/accounts", (Account account) =>
{
    if (account == null)
    {
        return Results.BadRequest("Account cannot be null.");
    }

    // Simulate saving the account to a database
    return Results.Created($"/accounts/{account.Id}", account);
});

await app.RunAsync();

record Account
{
    public int Id { get; init; }

    private string _name = default!;
    public string Name
    {
        get => _name;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Name cannot be null or empty.", nameof(Name));
            _name = value;
        }
    }
}


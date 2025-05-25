

using Scoped =Api.Services.Scoped;
using Singleton = Api.Services.Singleton;
using Transient = Api.Services.Transient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddScoped<Scoped.IAccountService, Scoped.AccountService>();
builder.Services.AddScoped<Scoped.IProgramService, Scoped.ProgramService>();
builder.Services.AddScoped<Scoped.IProjectService, Scoped.ProjectService>();


builder.Services.AddSingleton<Singleton.IAccountService, Singleton.AccountService>();
builder.Services.AddSingleton<Singleton.IProgramService, Singleton.ProgramService>();
builder.Services.AddSingleton<Singleton.IProjectService, Singleton.ProjectService>();


builder.Services.AddTransient<Transient.IAccountService, Transient.AccountService>();
builder.Services.AddTransient<Transient.IProgramService, Transient.ProgramService>();
builder.Services.AddTransient<Transient.IProjectService, Transient.ProjectService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapGet("/singleton", (Singleton.IProjectService projectService, Singleton.IProgramService programService) => {



    var project = projectService.NewProject("Project 1");
    var program = programService.NewProgram("Program 1");

    return Results.Ok(new{Lifetime = "Singleton", Project = project, Program = program});
});

app.MapGet("/scoped", (IServiceProvider serviceProvider) => {

    using var scope = serviceProvider.CreateScope();
    var accountService = scope.ServiceProvider.GetRequiredService<Scoped.IAccountService>();
    var projectService = scope.ServiceProvider.GetRequiredService<Scoped.IProjectService>();
    var programService = scope.ServiceProvider.GetRequiredService<Scoped.IProgramService>();

    var project = projectService.NewProject("Project 1");
    var program = programService.NewProgram("Program 1");

    return Results.Ok(new{Lifetime = "Scoped", Project = project, Program = program});
});

app.MapGet("/transient", (Transient.IProjectService projectService, Transient.IProgramService programService) => {

    var project = projectService.NewProject("Project 1");
    var program = programService.NewProgram("Program 1");

    return Results.Ok(new{Lifetime = "Transient", Project = project, Program = program});
});

app.UseHttpsRedirection();

app.Run();

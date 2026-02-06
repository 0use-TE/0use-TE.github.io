using AspNet.Security.OAuth.GitHub;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OusePersonalWebBackend.DbModel;
using System;
using System.Security.Claims;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlite("Data Source=app.db");
});

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    //无需配置密码规则

})
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.ExpireTimeSpan = TimeSpan.FromDays(120);
    options.SlidingExpiration = true;
});
builder.Services.AddAuthentication(options =>
{
    options.DefaultChallengeScheme = GitHubAuthenticationDefaults.AuthenticationScheme;
})
    .AddGitHub(options =>
    {
        options.ClientId = builder.Configuration["OpenAuthentication:ClientId"] ?? "";
        options.ClientSecret = builder.Configuration["OpenAuthentication:ClientSecret"] ?? "";
        options.Events.OnTicketReceived += async delegate (TicketReceivedContext context)
        {
            context.ReturnUri = "/api/account/GithubCallBack";
        };
    });


builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

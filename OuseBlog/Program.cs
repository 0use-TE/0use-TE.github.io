﻿using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Options;
using MudBlazor;
using MudBlazor.Services;
using OuseBlog;
using OuseBlog.Misc;
using OuseBlog.Models;

var builder = WebAssemblyHostBuilder.CreateDefault(args);


builder.RootComponents.Add<App>("#app");

builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddBlazoredLocalStorage();

builder.Services.Configure<AppSettingsModel>(builder.Configuration);

var config = builder.Configuration.Get<AppSettingsModel>();

builder.Services.AddHttpClient(Settings.ProjectUrl, http =>
    {
        http.BaseAddress = new Uri(config?.ContentRootPath + "/Projects/");
    });

builder.Services.AddHttpClient(Settings.BlogUrl, http =>
{
    http.BaseAddress = new Uri(config?.ContentRootPath + "/Blogs/");
});

builder.Services.AddMudServices(config => config.SnackbarConfiguration = new SnackbarConfiguration
{
    PositionClass = Defaults.Classes.Position.BottomLeft
});

builder.Services.AddMudMarkdownServices();

builder.Services.AddScoped(sp => new HttpClient {  BaseAddress=new(builder.HostEnvironment.BaseAddress)});

await builder.Build().RunAsync();
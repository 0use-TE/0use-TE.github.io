using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor;
using MudBlazor.Services;
using OuseBlog;
using OuseBlog.Misc;
using OuseBlog.Models;
using System.Net.Http.Json;

var builder = WebAssemblyHostBuilder.CreateDefault(args);


builder.RootComponents.Add<App>("#app");

builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddMudMarkdownServices();


builder.Services.AddMudServices(config => config.SnackbarConfiguration = new SnackbarConfiguration
{
    PositionClass = Defaults.Classes.Position.BottomLeft
});

await builder.Build().RunAsync();
using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor;
using MudBlazor.Services;
using OusePersonalWeb;

var builder = WebAssemblyHostBuilder.CreateDefault(args);


builder.RootComponents.Add<App>("#app");

builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddBlazoredLocalStorage();

builder.Services.AddHttpClient();

builder.Services.AddMudServices(config => config.SnackbarConfiguration = new SnackbarConfiguration
{
    PositionClass = Defaults.Classes.Position.BottomLeft
});

builder.Services.AddMudMarkdownServices();

builder.Services.AddScoped(sp => new HttpClient {  BaseAddress=new(builder.HostEnvironment.BaseAddress)});

await builder.Build().RunAsync();
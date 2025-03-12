using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor;
using MudBlazor.Services;
using OuseBlog;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddMudServices(config=>config.SnackbarConfiguration=new SnackbarConfiguration
{
    PositionClass=Defaults.Classes.Position.BottomLeft  
});

builder.RootComponents.Add<App>("#app");

builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });


builder.Services.AddMudMarkdownServices();

await builder.Build().RunAsync();
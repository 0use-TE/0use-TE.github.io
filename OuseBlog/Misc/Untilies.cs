using HtmlAgilityPack;
using Microsoft.JSInterop;
using MudBlazor;
using OuseBlog.Models;

namespace OuseBlog.Misc;

public static class Untilies
{
    public static MudBlazor.Color GetRandomColor()
    {
        Random random = new Random();
        var value = random.Next(4); // Generates a number between 0 and 3
        switch (value)
        {
            case 0: return MudBlazor.Color.Primary;
            case 1: return MudBlazor.Color.Error;
            case 2: return MudBlazor.Color.Warning;
            case 3: return MudBlazor.Color.Info;
            default: return MudBlazor.Color.Success;
        }
    }
}

using MudBlazor;

namespace OuseBlog.Misc
{
    public static class Settings
    {
        public static DialogOptions DialogOptions { get; set; } = new DialogOptions()
        {
            FullWidth = true,
            NoHeader = true,
            BackdropClick = true,
        };

    }
}

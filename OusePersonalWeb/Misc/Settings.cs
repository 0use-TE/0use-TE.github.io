using MudBlazor;

namespace OusePersonalWeb.Misc
{

    public enum SvgType
    {
        Github,
        Gitee,
        QQ,
        Microsoft,
        Download,
        Go,
        Blog,
    }
    public static class Settings
    {
        public static DialogOptions DialogOptions { get; set; } = new DialogOptions()
        {
            FullWidth = true,
            NoHeader = true,
            BackdropClick = true,
        };
        public static string DrakMode { get; set; } = nameof(DrakMode);
        public static string CodeBlockTheme { get; set; } = nameof(CodeBlockTheme);
    }
}

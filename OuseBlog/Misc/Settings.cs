using MudBlazor;

namespace OuseBlog.Misc
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
        public static string ProjectUrl { get; set; }=nameof(ProjectUrl);
        public static string BlogUrl { get; set; } = nameof(BlogUrl);
    }
}

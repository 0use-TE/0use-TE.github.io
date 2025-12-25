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

        // --- 修改为你自己的 GitHub 信息 ---
        private const string UserName = "0use-TE";
        private const string RepoName = "OuseBlog";

        // 索引文件在 generated 分支
        public static string BlogIndexUrl => $"https://raw.githubusercontent.com/{UserName}/{RepoName}/refs/heads/generated/index.json";
        // 博客正文在 main 分支
        public static string BlogRawRoot => $"https://raw.githubusercontent.com/{UserName}/{RepoName}/refs/heads/main/";
    }
}

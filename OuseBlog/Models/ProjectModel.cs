namespace OuseBlog.Models
{
    public class ProjectModel
    {
        public string Name { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
        
        public string Description { get; set; } = string.Empty;
        public string Platform { get; set; } = string.Empty;
        public string  DevelpmentTools { get; set; } = string.Empty;
        public string? Link { get; set; }
        public string? GithubLink { get; set; }
        public string? GiteeLink { get; set; }
        public string? DownloadLink { get; set; }
        public string? BlogLink { get; set; }
    }
}

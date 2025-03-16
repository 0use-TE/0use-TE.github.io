namespace OuseBlog.Models
{
    public class ProjectModel
    {
        public string Name { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
        
        public string Description { get; set; } = string.Empty;
        public string Platform { get; set; } = string.Empty;
        public string  DevelpmentTools { get; set; } = string.Empty;
        public string? ImageUrl { get; set; } 

        public string? Link { get; set; }
    }
}

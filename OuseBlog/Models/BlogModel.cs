namespace OuseBlog.Models
{
	public class BlogModel
	{
		public string Name { get; set; } = string.Empty;
		public string Url { get; set; } = "/blog";
		public string Label { get; set; } = "暂无";
		public string Description { get; set; } = string.Empty;

		public string DateTime { get; set; } = string.Empty;
		public string Weather { get; set; } = string.Empty;

	}
}

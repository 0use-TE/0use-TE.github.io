using HtmlAgilityPack;
using MudBlazor;

namespace OuseBlog.Models
{
    public class TocItem
    {
        public int Level { get; set; }
        public string? Id { get; set; }
        public string? Title { get; set; }
    }
    public class TocNode:TreeItemData<string>
    {
        public string? Id { get; set; }
        public int Level { get; set; }
    }
}

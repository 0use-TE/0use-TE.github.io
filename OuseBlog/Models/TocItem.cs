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
    public class TocNode
    {
        public int Level { get; set; }
        public string? Id { get; set; }
        public string? Title{ get; set; }
        public List<TocNode> Children { get; set; } = new List<TocNode>();
    }
    public class TreeTocItem:TreeItemData<string>
    {
        public string? Id { get; set; }
    }
}

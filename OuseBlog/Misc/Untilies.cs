using HtmlAgilityPack;
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
    public static List<TocItem> GenerateTocItems(string html)
    {
        var toc = new List<TocItem>();
        var doc = new HtmlDocument();
        doc.LoadHtml(html);
        // 选择所有 h1 到 h6，按文档顺序
        var headers = doc.DocumentNode.SelectNodes("//*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6]");
        if (headers != null)
        {
            foreach (var header in headers)
            {
                int level = int.Parse(header.Name.Substring(1)); 
                toc.Add(new TocItem
                {
                    Level = level,
                    Title = header.InnerText.Trim(),
                    Id = header.Id ?? $"header-{toc.Count}"
                });
            }
        }

        return toc;
    }
    public static  List<TocNode> BuildTree(List<TocItem> items)
    {
        List<TocNode> tree= new List<TocNode>();
         Stack<TocNode> stack = new Stack<TocNode>();
        foreach (var item in items)
        {
            TocNode node = new TocNode
            {
                Level = item.Level,
                Id = item.Id,
                Title = item.Title,
            };
            if(item.Level == 1)
            {
                tree.Add(node);
                stack.Clear();
                stack.Push(node);
                continue;
            }
            while (stack.Count > 0 && stack.Peek().Level >= item.Level)
                stack.Pop();
            if (stack.Count > 0)
                stack.Peek().Children.Add(node);
            else
                tree.Add(node);
            stack.Push(node);
        }
        return tree;
    }
}

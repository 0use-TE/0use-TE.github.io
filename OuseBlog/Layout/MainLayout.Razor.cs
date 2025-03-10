using BlazorApp1.Layout;
using Microsoft.AspNetCore.Components;
using MudBlazor;
using SpawnDev.BlazorJS;
using SpawnDev.BlazorJS.JSObjects;

namespace OuseBlog.Layout
{
	public partial class MainLayout
	{
        private MudTheme theme = ThemeTools.Lumentheme;
		private bool isDarkMode = false;
		private bool isAnimating = false;
		[Inject]
		private BlazorJSRuntime JS { get; set; } = null!;
		private bool isHidden = false;

		// 根据当前状态返回主题
		private async Task ToggleTheme()
		{
			isAnimating = true;
			StateHasChanged();
			// 动画时长，比如 600 毫秒，根据实际需要调整
			await Task.Delay(600);
			// 切换主题
			isDarkMode = !isDarkMode;
			// 结束动画：隐藏 overlay
			isAnimating = false;
			StateHasChanged();
		}

		protected override Task OnAfterRenderAsync(bool firstRender)
		{
			if (firstRender)
			{
				var appbar = JS.GetDocument()?.GetElementById<HTMLElement>("appbar");
				appbar?.ClassList.Add("visible");
				var window = JS.GetWindow();
				window?.AddEventListener<WheelEvent>("wheel", wheel =>
				{
					// 根据滚动方向来隐藏或显示应用栏
					if (wheel.DeltaY > 0 && !isHidden)
					{
						appbar?.ClassList.Remove("visible");
						appbar?.ClassList.Add("hidden");
						isHidden = true;
					}
					else if (wheel.DeltaY < 0 && isHidden)
					{
						appbar?.ClassList.Remove("hidden");
						appbar?.ClassList.Add("visible");
						isHidden = false;
					}
				});
			}
			return base.OnAfterRenderAsync(firstRender);
		}
	}
}

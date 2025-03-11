using BlazorApp1.Layout;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using MudBlazor;

namespace OuseBlog.Layout
{
	public partial class MainLayout
	{
        private MudTheme theme = ThemeTools.Lumentheme;
		private bool isDarkMode = false;
		private bool isAnimating = false;
		private bool isHidden = false;

		public MainLayout()
		{
		}

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

		[Inject]
		private IJSRuntime JS { get; set; } // 注入 IJSRuntime
		protected override async Task OnAfterRenderAsync(bool firstRender)
		{
			if (firstRender)
			{
				// 调用 JavaScript 函数
				await JS.InvokeVoidAsync("initappbar");
			}
			await base.OnAfterRenderAsync(firstRender);
		}
	}
}

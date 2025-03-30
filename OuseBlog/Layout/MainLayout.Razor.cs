using BlazorApp1.Layout;
using Microsoft.JSInterop;
using MudBlazor;
using OuseBlog.Misc;

namespace OuseBlog.Layout
{
    public partial class MainLayout
    {
        private MudTheme theme = ThemeTools.Lumentheme;
        private bool isDarkMode = false;
        private bool isAnimating = false;
        protected override async Task OnInitializedAsync()
        {
            isDarkMode =await localStorage.GetItemAsync<bool>(Settings.DrakMode);
            await base.OnInitializedAsync();
        }
        // 根据当前状态返回主题
        private async Task ToggleTheme()
        {
            isAnimating = true;
            StateHasChanged();
            await Task.Delay(600);
            isDarkMode = !isDarkMode;
            await localStorage.SetItemAsync(Settings.DrakMode, isDarkMode);
            isAnimating = false;
            StateHasChanged();
        }
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

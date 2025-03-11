// 在页面加载完成后执行
document.addEventListener("DOMContentLoaded", function () {
    // 获取 appbar 元素
    const appbar = document.getElementById("appbar");
    console.log('player')
    // 如果找到 appbar，则添加 "visible" 类
    if (appbar) {
        appbar.classList.add("visible");
    }
    else
    {
        console.log('找不到appbar')
    }

    // 跟踪 appbar 是否隐藏的状态
    let isHidden = false;

    // 为 window 添加滚轮事件监听器
    window.addEventListener("wheel", function (event) {
        console.log('wheel');
        // 根据滚动方向（DeltaY）切换 appbar 的显示状态
        if (event.deltaY > 0 && !isHidden) {
            // 向下滚动，且当前未隐藏
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        } else if (event.deltaY < 0 && isHidden) {
            // 向上滚动，且当前已隐藏
            appbar?.classList.remove("hidden");
            appbar?.classList.add("visible");
            isHidden = false;
        }
    });
});
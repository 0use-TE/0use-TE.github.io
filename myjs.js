// 在页面加载完成后执行
window.initappbar = function () {
    const appbar = document.getElementById("appbar");
    if (appbar) {
        appbar.classList.add("visible");
    } else {
        console.log('找不到appbar');
    }

    let isHidden = false;

    // 滚轮事件监听器
    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0 && !isHidden) {
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        } else if (event.deltaY < 0 && isHidden) {
            appbar?.classList.remove("hidden");
            appbar?.classList.add("visible");
            isHidden = false;
        }
    });

    // 添加手动控制函数到 window 对象
    window.showAppbar = function () {
        if (appbar) {
            appbar.classList.remove("hidden");
            appbar.classList.add("visible");
            isHidden = false;
        }
    };

    window.hideAppbar = function () {
        if (appbar) {
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        }
    };
};
const customWindow = window;
customWindow.initappbar = function () {
    const appbar = document.getElementById("appbar");
    if (appbar) {
        appbar.classList.add("visible");
    }
    else {
        console.log('找不到appbar');
    }
    let isHidden = false;
    let touchStartY = 0; // 记录触摸开始的 Y 坐标
    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0 && !isHidden) {
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.remove("visible");
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.add("hidden");
            isHidden = true;
        }
        else if (event.deltaY < 0 && isHidden) {
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.remove("hidden");
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.add("visible");
            isHidden = false;
        }
    });
    window.addEventListener("touchstart", function (event) {
        touchStartY = event.touches[0].clientY;
    });
    window.addEventListener("touchmove", function (event) {
        const touchCurrentY = event.touches[0].clientY;
        const deltaY = touchStartY - touchCurrentY; // 计算滑动方向和距离
        if (deltaY > 10 && !isHidden) {
            // 向下划（deltaY > 0），隐藏 appbar
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.remove("visible");
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.add("hidden");
            isHidden = true;
        }
        else if (deltaY < -10 && isHidden) {
            // 向上划（deltaY < 0），显示 appbar
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.remove("hidden");
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.add("visible");
            isHidden = false;
        }
    });
    window.addEventListener("touchend", function (event) {
        touchStartY = 0; // 重置触摸起始点
    });
    customWindow.showAppbar = function () {
        if (appbar) {
            appbar.classList.remove("hidden");
            appbar.classList.add("visible");
            isHidden = false;
        }
    };
    customWindow.hideAppbar = function () {
        if (appbar) {
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        }
    };
};
//# sourceMappingURL=common.js.map
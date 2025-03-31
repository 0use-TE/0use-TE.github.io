var customWindow = window;
export function initappbar() {
    var appbar = document.getElementById("appbar");
    if (appbar) {
        appbar.classList.add("visible");
    }
    else {
        console.log('找不到appbar');
    }
    var isHidden = false;
    var touchStartY = 0;
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
        var touchCurrentY = event.touches[0].clientY;
        var deltaY = touchStartY - touchCurrentY;
        if (deltaY > 10 && !isHidden) {
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.remove("visible");
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.add("hidden");
            isHidden = true;
        }
        else if (deltaY < -10 && isHidden) {
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.remove("hidden");
            appbar === null || appbar === void 0 ? void 0 : appbar.classList.add("visible");
            isHidden = false;
        }
    });
    window.addEventListener("touchend", function (event) {
        touchStartY = 0;
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
}
customWindow.initappbar = initappbar;
//# sourceMappingURL=common.js.map
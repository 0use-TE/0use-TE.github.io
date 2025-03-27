// 在页面加载完成后执行
window.initappbar = function () {
    const appbar = document.getElementById("appbar");
    if (appbar) {
        appbar.classList.add("visible");
    } else {
        console.log('找不到appbar');
    }

    let isHidden = false;
    let touchStartY = 0; // 记录触摸开始的 Y 坐标

    // 滚轮事件监听器（PC 端）
    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0 && !isHidden) {
            // 向下滚动，隐藏 appbar
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        } else if (event.deltaY < 0 && isHidden) {
            // 向上滚动，显示 appbar
            appbar?.classList.remove("hidden");
            appbar?.classList.add("visible");
            isHidden = false;
        }
    });

    // 触摸事件监听器（手机端）
    window.addEventListener("touchstart", function (event) {
        // 记录触摸开始的 Y 坐标
        touchStartY = event.touches[0].clientY;
    });

    window.addEventListener("touchmove", function (event) {
        const touchCurrentY = event.touches[0].clientY;
        const deltaY = touchStartY - touchCurrentY; // 计算滑动方向和距离

        if (deltaY > 10 && !isHidden) {
            // 向下划（deltaY > 0），隐藏 appbar
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        } else if (deltaY < -10 && isHidden) {
            // 向上划（deltaY < 0），显示 appbar
            appbar?.classList.remove("hidden");
            appbar?.classList.add("visible");
            isHidden = false;
        }
    });

    // 可选：触摸结束事件（如果需要额外逻辑）
    window.addEventListener("touchend", function (event) {
        // 可以在这里添加触摸结束后的处理，例如重置变量
        touchStartY = 0; // 重置触摸起始点
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
function getHeadingTagsString(elementSelector, separator = '') {
    // 获取目标元素
    const element = document.querySelector(elementSelector);
    if (!element) {
        return null; // 如果元素不存在，返回 null
    }
    else {
    }
    // 获取所有 h 标签（h1 到 h6）
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0)
    {
    return ''; // 如果没有 h 标签，返回空字符串
    }
    // 提取每个 h 标签的完整 HTML 并拼接
    const headingHtmls = Array.from(headings)
        .map(h => h.outerHTML) // 获取完整标签，包括标签本身
        .filter(html => html.trim().length > 0); // 过滤空字符串
    // 用分隔符连接
    return headingHtmls.join(separator);
}
// 滚动到指定 id
window.scrollToSection = function (id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('目标元素不存在: ' + id);
    }
};
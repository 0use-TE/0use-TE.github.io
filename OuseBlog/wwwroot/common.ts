interface CustomWindow extends Window {
    initappbar: () => void;
    showAppbar: () => void;
    hideAppbar: () => void;
}
const customWindow = window as unknown as CustomWindow;

export function initappbar(): void {
    const appbar: HTMLElement | null = document.getElementById("appbar");
    if (appbar) {
        appbar.classList.add("visible");
    } else {
        console.log('找不到appbar');
    }
    let isHidden: boolean = false;
    let touchStartY: number = 0;
    window.addEventListener("wheel", function (event: WheelEvent): void {
        if (event.deltaY > 0 && !isHidden) {
            appbar?.classList.remove("visible");
            appbar?.classList.add("hidden");
            isHidden = true;
        } else if (event.deltaY < 0 && isHidden) {
            appbar?.classList.remove("hidden");
            appbar?.classList.add("visible");
            isHidden = false;
        }
    });
    window.addEventListener("touchstart", function (event: TouchEvent): void {
        touchStartY = event.touches[0].clientY;
    });
    window.addEventListener("touchmove", function (event: TouchEvent): void {
        const touchCurrentY: number = event.touches[0].clientY;
        const deltaY: number = touchStartY - touchCurrentY;
        if (deltaY > 10 && !isHidden) {
            appbar?.classList.remove("visible");
            appbar?.classList.add("hidden");
            isHidden = true;
        } else if (deltaY < -10 && isHidden) {
            appbar?.classList.remove("hidden");
            appbar?.classList.add("visible");
            isHidden = false;
        }
    });
    window.addEventListener("touchend", function (event: TouchEvent): void {
        touchStartY = 0;
    });

    customWindow.showAppbar = function (): void {
        if (appbar) {
            appbar.classList.remove("hidden");
            appbar.classList.add("visible");
            isHidden = false;
        }
    };
    customWindow.hideAppbar = function (): void {
        if (appbar) {
            appbar.classList.remove("visible");
            appbar.classList.add("hidden");
            isHidden = true;
        }
    };
}

customWindow.initappbar = initappbar;
let dotNetHelper: any;
let isDragging = false;

export function initMusicPlayer(helper: any) {
    dotNetHelper = helper;
    const audio = document.getElementById('m-audio-core') as HTMLAudioElement;
    const playBtn = document.getElementById('m-play-btn');
    const nextBtn = document.getElementById('m-next-btn');
    const progressContainer = document.getElementById('m-progress-container');
    const progressBar = document.getElementById('m-progress-bar');

    if (!audio || !playBtn || !nextBtn || !progressContainer || !progressBar) return;

    // --- 1. 播放/暂停控制 ---
    playBtn.onclick = () => {
        if (audio.paused) {
            audio.play().then(() => playBtn.innerText = '⏸');
        } else {
            audio.pause();
            playBtn.innerText = '▶';
        }
    };

    // --- 2. 切歌回调 C# ---
    nextBtn.onclick = () => {
        dotNetHelper.invokeMethodAsync('OnNextTrack');
    };

    // --- 3. 进度调节逻辑 (支持拖拽) ---
    const updateSeeking = (e: MouseEvent | PointerEvent) => {
        const rect = progressContainer.getBoundingClientRect();
        let bnt = (e.clientX - rect.left) / rect.width;
        bnt = Math.max(0, Math.min(1, bnt));
        progressBar.style.width = `${bnt * 100}%`;
        if (!isNaN(audio.duration)) {
            audio.currentTime = bnt * audio.duration;
        }
    };

    progressContainer.onpointerdown = (e) => {
        isDragging = true;
        updateSeeking(e);
        progressContainer.setPointerCapture(e.pointerId); // 允许滑出进度条范围继续拖动
    };

    progressContainer.onpointermove = (e) => {
        if (isDragging) updateSeeking(e);
    };

    progressContainer.onpointerup = () => {
        isDragging = false;
    };

    // --- 4. 自动更新进度条 & 自动切歌 ---
    audio.ontimeupdate = () => {
        if (!isDragging && audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${percent}%`;
        }
    };

    audio.onended = () => {
        dotNetHelper.invokeMethodAsync('OnNextTrack'); // 播放结束自动切歌
    };
}

// C# 调用的更新方法
export function loadTrack(url: string, title: string) {
    const audio = document.getElementById('m-audio-core') as HTMLAudioElement;
    const titleEl = document.getElementById('m-title-display');
    const playBtn = document.getElementById('m-play-btn');

    if (audio && titleEl) {
        audio.src = url;
        titleEl.innerText = title;
        audio.play().then(() => {
            if (playBtn) playBtn.innerText = '⏸';
        }).catch(() => {
            // 浏览器拦截自动播放时显示播放图标
            if (playBtn) playBtn.innerText = '▶';
        });
    }
}
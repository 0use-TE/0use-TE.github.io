var dotNetHelper;
var isDragging = false;
export function initMusicPlayer(helper) {
    dotNetHelper = helper;
    var audio = document.getElementById('m-audio-core');
    var playBtn = document.getElementById('m-play-btn');
    var nextBtn = document.getElementById('m-next-btn');
    var progressContainer = document.getElementById('m-progress-container');
    var progressBar = document.getElementById('m-progress-bar');
    if (!audio || !playBtn || !nextBtn || !progressContainer || !progressBar)
        return;
    // --- 1. 播放/暂停控制 ---
    playBtn.onclick = function () {
        if (audio.paused) {
            audio.play().then(function () { return playBtn.innerText = '⏸'; });
        }
        else {
            audio.pause();
            playBtn.innerText = '▶';
        }
    };
    // --- 2. 切歌回调 C# ---
    nextBtn.onclick = function () {
        dotNetHelper.invokeMethodAsync('OnNextTrack');
    };
    // --- 3. 进度调节逻辑 (支持拖拽) ---
    var updateSeeking = function (e) {
        var rect = progressContainer.getBoundingClientRect();
        var bnt = (e.clientX - rect.left) / rect.width;
        bnt = Math.max(0, Math.min(1, bnt));
        progressBar.style.width = "".concat(bnt * 100, "%");
        if (!isNaN(audio.duration)) {
            audio.currentTime = bnt * audio.duration;
        }
    };
    progressContainer.onpointerdown = function (e) {
        isDragging = true;
        updateSeeking(e);
        progressContainer.setPointerCapture(e.pointerId); // 允许滑出进度条范围继续拖动
    };
    progressContainer.onpointermove = function (e) {
        if (isDragging)
            updateSeeking(e);
    };
    progressContainer.onpointerup = function () {
        isDragging = false;
    };
    // --- 4. 自动更新进度条 & 自动切歌 ---
    audio.ontimeupdate = function () {
        if (!isDragging && audio.duration) {
            var percent = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = "".concat(percent, "%");
        }
    };
    audio.onended = function () {
        dotNetHelper.invokeMethodAsync('OnNextTrack'); // 播放结束自动切歌
    };
}
// C# 调用的更新方法
export function loadTrack(url, title) {
    var audio = document.getElementById('m-audio-core');
    var titleEl = document.getElementById('m-title-display');
    var playBtn = document.getElementById('m-play-btn');
    if (audio && titleEl) {
        audio.src = url;
        titleEl.innerText = title;
        audio.play().then(function () {
            if (playBtn)
                playBtn.innerText = '⏸';
        }).catch(function () {
            // 浏览器拦截自动播放时显示播放图标
            if (playBtn)
                playBtn.innerText = '▶';
        });
    }
}
//# sourceMappingURL=MusicComponent.razor.js.map
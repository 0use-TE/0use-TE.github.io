<script lang="ts">
  import { onMount } from 'svelte';

  let isPlaying = $state(false);
  let currentTitle = $state('未在播放');
  let progress = $state(0);
  let audio: HTMLAudioElement;

  const musics = [
    { name: '因为喜欢你', path: '/music/因为喜欢你.mp3' },
    { name: '出山', path: '/music/出山.mp3' },
    { name: '若水三千', path: '/music/若水三千.mp3' }
  ];
  let currentIndex = Math.floor(Math.random() * musics.length);

  function loadTrack(index: number) {
    currentIndex = index;
    const music = musics[currentIndex];
    currentTitle = music.name;
    if (audio) {
      audio.src = music.path;
      audio.load();
    }
  }

  function togglePlay() {
    if (!audio.src) {
      loadTrack(currentIndex);
    }
    if (audio.paused) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  }

  function nextTrack() {
    currentIndex = (currentIndex + 1) % musics.length;
    loadTrack(currentIndex);
    if (isPlaying) {
      audio.play();
    }
  }

  function handleTimeUpdate() {
    if (audio && audio.duration) {
      progress = (audio.currentTime / audio.duration) * 100;
    }
  }

  function handleEnded() {
    nextTrack();
  }

  function handleProgressClick(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    if (audio && audio.duration) {
      audio.currentTime = percent * audio.duration;
    }
  }

  onMount(() => {
    loadTrack(currentIndex);
  });
</script>

<div class="music-player-bar">
  <!-- 进度条 -->
  <div class="progress-container" onclick={handleProgressClick} role="slider" tabindex="0" aria-valuenow={progress}>
    <div class="progress-bar" style="width: {progress}%"></div>
  </div>

  <!-- 控制栏 -->
  <div class="controls">
    <div class="left">
      <button class="play-btn" onclick={togglePlay}>
        {isPlaying ? '⏸' : '▶'}
      </button>
      <span class="title">{currentTitle}</span>
    </div>
    <div class="right">
      <button class="next-btn" onclick={nextTrack}>下一首</button>
    </div>
  </div>
</div>

<audio bind:this={audio} ontimeupdate={handleTimeUpdate} onended={handleEnded} preload="metadata"></audio>

<style>
  .music-player-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 9999;
    display: flex;
    flex-direction: column;
  }

  :global([data-theme="dark"]) .music-player-bar {
    background: rgba(0, 0, 0, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .progress-container {
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    position: absolute;
    top: 0;
  }

  :global([data-theme="dark"]) .progress-container {
    background: rgba(255, 255, 255, 0.1);
  }

  .progress-bar {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    box-shadow: 0 0 8px rgba(79, 172, 254, 0.6);
    transition: width 0.1s linear;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    flex: 1;
    margin-top: 4px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .play-btn, .next-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #333;
    padding: 5px 10px;
  }

  :global([data-theme="dark"]) .play-btn,
  :global([data-theme="dark"]) .next-btn {
    color: #fff;
  }

  .title {
    font-size: 14px;
    color: #444;
    margin-left: 10px;
  }

  :global([data-theme="dark"]) .title {
    color: #ddd;
  }

  .next-btn {
    font-weight: bold;
    color: #666;
  }

  :global([data-theme="dark"]) .next-btn {
    color: #aaa;
  }

  audio {
    display: none;
  }
</style>

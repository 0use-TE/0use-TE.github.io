<script lang="ts">
  import petPhotos from '$lib/data/pet-photos.json';

  const allPhotos = [
    ...petPhotos.code,
    ...petPhotos.jimi,
    ...petPhotos.together
  ];

  let previewIndex = $state<number | null>(null);

  const previewSrc = $derived(
    previewIndex !== null ? allPhotos[previewIndex] : null
  );

  function openPreview(index: number) {
    previewIndex = index;
    document.body.style.overflow = 'hidden';
  }

  function closePreview() {
    previewIndex = null;
    document.body.style.overflow = '';
  }

  function showPrev() {
    if (previewIndex === null || allPhotos.length === 0) return;
    previewIndex = (previewIndex - 1 + allPhotos.length) % allPhotos.length;
  }

  function showNext() {
    if (previewIndex === null || allPhotos.length === 0) return;
    previewIndex = (previewIndex + 1) % allPhotos.length;
  }

  function onKeydown(e: KeyboardEvent) {
    if (previewIndex === null) return;
    if (e.key === 'Escape') closePreview();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  }
</script>

<svelte:head>
  <title>画廊 · Ouse</title>
</svelte:head>

<svelte:window onkeydown={onKeydown} />

<div class="gallery-page">
  <div class="stars">
    {#each Array(12) as _, i}
      <span class="star" style="--delay: {i * 0.2}s; --x: {(i * 17) % 100}%; --y: {(i * 23) % 100}%">✦</span>
    {/each}
  </div>

  <h1 class="title">📸 伙伴画廊</h1>

  {#if allPhotos.length === 0}
    <p class="empty">还没有照片，往 src/static/images/{'{code|jimi|together}'}/ 里丢几张吧 ✨</p>
  {:else}
    <div class="photos-grid">
      {#each allPhotos as src, i (src)}
        <button
          type="button"
          class="photo-card"
          style="--i: {i}"
          onclick={() => openPreview(i)}
          aria-label="预览照片"
        >
          <img src={src} alt="" loading="lazy" />
        </button>
      {/each}
    </div>
  {/if}

  <footer class="footer">
    <div class="hearts">
      <span class="heart">♥</span>
      <span class="heart">♥</span>
      <span class="heart">♥</span>
    </div>
    <p class="footer-text">扣嘚和基米都是我的小太阳 ☀️</p>
  </footer>
</div>

{#if previewSrc !== null && previewIndex !== null}
  <div
    class="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="照片预览"
    onclick={closePreview}
  >
    <button type="button" class="lb-close" onclick={closePreview} aria-label="关闭">×</button>

    {#if allPhotos.length > 1}
      <button
        type="button"
        class="lb-nav prev"
        onclick={(e) => { e.stopPropagation(); showPrev(); }}
        aria-label="上一张"
      >‹</button>
      <button
        type="button"
        class="lb-nav next"
        onclick={(e) => { e.stopPropagation(); showNext(); }}
        aria-label="下一张"
      >›</button>
    {/if}

    <img
      class="lb-image"
      src={previewSrc}
      alt=""
      onclick={(e) => e.stopPropagation()}
    />

    <p class="lb-counter">{previewIndex + 1} / {allPhotos.length}</p>
  </div>
{/if}

<style>
  .gallery-page {
    min-height: calc(100vh - 134px);
    padding: 1.5rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .stars {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .star {
    position: absolute;
    left: var(--x);
    top: var(--y);
    font-size: 1rem;
    color: #6c45a8;
    opacity: 0.5;
    animation: twinkle 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #6c45a8;
    margin: 0 0 2rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .empty {
    color: #999;
    padding: 3rem 1rem;
    text-align: center;
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
  }

  .photos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1000px;
    position: relative;
    z-index: 1;
  }

  .photo-card {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    cursor: zoom-in;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 1;
    animation: scaleIn 0.6s ease backwards;
    animation-delay: calc(var(--i) * 0.08s + 0.2s);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }

  .photo-card:hover {
    transform: scale(1.05);
    z-index: 2;
  }

  .photo-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    pointer-events: none;
  }

  .photo-card:hover img { transform: scale(1.05); }

  .footer {
    margin-top: 3rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .hearts {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .heart {
    color: #ff6b9d;
    font-size: 1.8rem;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  .heart:nth-child(2) { animation-delay: 0.3s; }
  .heart:nth-child(3) { animation-delay: 0.6s; }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  .footer-text {
    font-size: 1.2rem;
    color: #6c45a8;
    margin: 0;
  }

  :global([data-theme='dark']) .footer-text {
    color: #9d85ca;
  }

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 4rem;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .lb-image {
    max-width: min(92vw, 1100px);
    max-height: 85vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);
    animation: zoomIn 0.22s ease;
  }

  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.94); }
    to { opacity: 1; transform: scale(1); }
  }

  .lb-close {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 1.75rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s;
  }

  .lb-close:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  .lb-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.75rem;
    height: 2.75rem;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lb-nav:hover {
    background: rgba(108, 69, 168, 0.7);
  }

  .lb-nav.prev { left: 1rem; }
  .lb-nav.next { right: 1rem; }

  .lb-counter {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .title { font-size: 1.8rem; }
    .photos-grid { grid-template-columns: repeat(2, 1fr); }

    .lightbox {
      padding: 3.5rem 0.75rem 3rem;
    }

    .lb-nav {
      width: 2.25rem;
      height: 2.25rem;
      font-size: 1.6rem;
    }

    .lb-nav.prev { left: 0.35rem; }
    .lb-nav.next { right: 0.35rem; }
  }
</style>

<script lang="ts">
  import petPhotos from '$lib/data/pet-photos.json';

  const allPhotos = [
    ...petPhotos.code,
    ...petPhotos.jimi,
    ...petPhotos.together
  ];
</script>

<svelte:head>
  <title>画廊 · Ouse</title>
</svelte:head>

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
        <div class="photo-card" style="--i: {i}">
          <img src={src} alt="" loading="lazy" />
        </div>
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
    transition: transform 0.4s ease;
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

  @media (max-width: 768px) {
    .title { font-size: 1.8rem; }
    .photos-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>
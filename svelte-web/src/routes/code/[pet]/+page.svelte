<script lang="ts">
  import { page } from '$app/stores';

  type PetId = 'code' | 'jimi';

  const pets = {
    code: {
      id: 'code' as const,
      name: '扣嘚',
      emoji: '🦔',
      subtitle: '非洲迷你刺猬 · 2024.08.21',
      avatar: '/images/code-avatar.png',
      since: 'Since 2024.08.21',
      footer: '扣嘚是我的小太阳 ☀️',
      traits: [
        { icon: '💗', text: '可爱' },
        { icon: '🍕', text: '贪吃' },
        { icon: '🐷', text: '肥肥' },
        { icon: '😰', text: '胆小' },
        { icon: '❤️', text: '我爱你', special: true }
      ],
      photos: [
        { src: '/images/code1.jpg', caption: '睡觉觉' },
        { src: '/images/code2.jpg', caption: '吃饭饭' },
        { src: '/images/code3.jpg', caption: '玩耍' },
        { src: '/images/code4.jpg', caption: '发呆' },
        { src: '/images/code5.jpg', caption: '臭美' }
      ]
    },
    jimi: {
      id: 'jimi' as const,
      name: '基米',
      emoji: '🐱',
      subtitle: '长毛银渐层 · 2026.05.04',
      avatar: '/images/jimi/基米坐在电脑上看着我.jpg',
      since: 'Since 2026.05.04',
      footer: '情绪稳定的小活宝 ✨',
      traits: [
        { icon: '🩶', text: '银渐层' },
        { icon: '😌', text: '情绪稳定' },
        { icon: '✨', text: '活泼可爱' },
        { icon: '🫂', text: '亲人' },
        { icon: '❤️', text: '我爱你', special: true }
      ],
      photos: [
        { src: '/images/jimi/仰天大睡.jpg', caption: '仰天大睡' },
        { src: '/images/jimi/基米坐在电脑上看着我.jpg', caption: '盯着我' },
        { src: '/images/jimi/朝我哈气(不是真生气).jpg', caption: '哈气（假的）' },
        { src: '/images/jimi/看我电脑.jpg', caption: '看电脑' },
        { src: '/images/jimi/看着扣嘚喝水.jpg', caption: '看扣嘚喝水' }
      ]
    }
  };

  function resolvePet(raw: string | undefined): PetId {
    return raw === 'jimi' ? 'jimi' : 'code';
  }

  let active = $derived(resolvePet($page.params.pet));
  let pet = $derived(pets[active]);
</script>

<svelte:head>
  <title>{pet.name} · 伙伴 · Ouse</title>
</svelte:head>

<div class="pets-page">
  <div class="stars">
    {#each Array(12) as _, i}
      <span class="star" style="--delay: {i * 0.2}s; --x: {(i * 17) % 100}%; --y: {(i * 23) % 100}%">✦</span>
    {/each}
  </div>

  <div class="pet-switch">
    <a href="/code/code" class="switch-btn" class:active={active === 'code'}>🦔 扣嘚</a>
    <a href="/code/jimi" class="switch-btn" class:active={active === 'jimi'}>🐱 基米</a>
  </div>

  {#key active}
    <section class="hero">
      <div class="avatar-container">
        <div class="avatar-glow" class:jimi={active === 'jimi'}></div>
        <img src={pet.avatar} alt={pet.name} class="avatar" />
      </div>
      <h1 class="title">
        <span class="name">{pet.name}</span>
        <p class="subtitle">{pet.subtitle} {pet.emoji}</p>
      </h1>
    </section>

    <section class="cards">
      {#each pet.traits as trait, i}
        <div class="card" class:special={trait.special} style="--i: {i}">
          <span class="card-icon">{trait.icon}</span>
          <span class="card-text">{trait.text}</span>
        </div>
      {/each}
    </section>

    <section class="photos-section">
      <h2 class="section-title">📸 {pet.name}相册</h2>
      <div class="photos-grid">
        {#each pet.photos as photo, i}
          <div class="photo-card" style="--i: {i}">
            <img src={photo.src} alt="{pet.name} - {photo.caption}" loading="lazy" />
            <div class="photo-overlay">
              <span>{photo.caption}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <footer class="footer">
      <div class="hearts">
        <span class="heart">♥</span>
        <span class="heart">♥</span>
        <span class="heart">♥</span>
      </div>
      <p class="footer-text">{pet.footer}</p>
      <p class="footer-date">{pet.since}</p>
    </footer>
  {/key}
</div>

<style>
  .pets-page {
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

  .pet-switch {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    z-index: 2;
    background: #fff;
    padding: 0.35rem;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  :global([data-theme='dark']) .pet-switch {
    background: #2d2d2d;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .switch-btn {
    border: none;
    background: transparent;
    padding: 0.55rem 1.25rem;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
  }

  :global([data-theme='dark']) .switch-btn {
    color: #aaa;
  }

  .switch-btn:hover {
    color: #6c45a8;
  }

  .switch-btn.active {
    background: #6c45a8;
    color: #fff;
  }

  :global([data-theme='dark']) .switch-btn.active {
    background: #9d85ca;
    color: #1a1a1a;
  }

  .hero {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .avatar-container {
    position: relative;
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  .avatar-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(255, 105, 180, 0.4) 0%, transparent 70%);
    border-radius: 50%;
    animation: glow 3s ease-in-out infinite;
  }

  .avatar-glow.jimi {
    background: radial-gradient(circle, rgba(168, 180, 200, 0.55) 0%, transparent 70%);
  }

  @keyframes glow {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
  }

  .avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .title { margin: 0; }

  .name {
    font-size: 3rem;
    font-weight: bold;
    color: #6c45a8;
  }

  :global([data-theme='dark']) .name {
    color: #9d85ca;
  }

  .subtitle {
    font-size: 1.15rem;
    opacity: 0.9;
    margin: 0.5rem 0 0;
    color: #666;
  }

  :global([data-theme='dark']) .subtitle {
    color: #aaa;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  .card {
    background: #fff;
    padding: 1rem 1.8rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    animation: slideUp 0.6s ease backwards;
    animation-delay: calc(var(--i) * 0.1s);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .card:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 15px 40px rgba(108, 69, 168, 0.2);
  }

  .card-icon { font-size: 1.6rem; }
  .card-text { font-size: 1.1rem; font-weight: 500; color: #333; }

  .card.special {
    background: linear-gradient(135deg, #6c45a8 0%, #9d85ca 100%);
    border-color: #6c45a8;
  }

  .card.special .card-text,
  .card.special .card-icon { color: #fff; }

  :global([data-theme='dark']) .card {
    background: #2d2d2d;
    border-color: rgba(255, 255, 255, 0.1);
  }

  :global([data-theme='dark']) .card-text { color: #fff; }

  .photos-section {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 800px;
  }

  .section-title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #6c45a8;
  }

  :global([data-theme='dark']) .section-title {
    color: #9d85ca;
  }

  .photos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }

  .photo-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 1;
    animation: scaleIn 0.6s ease backwards;
    animation-delay: calc(var(--i) * 0.1s + 0.2s);
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

  .photo-card:hover img { transform: scale(1.1); }

  .photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.8rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .photo-card:hover .photo-overlay { transform: translateY(0); }

  .photo-overlay span {
    font-size: 0.9rem;
    color: #fff;
    font-weight: 500;
  }

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

  .footer-date {
    font-size: 0.9rem;
    color: #999;
    margin: 0.5rem 0 0;
  }

  @media (max-width: 768px) {
    .name { font-size: 2.2rem; }
    .photos-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>

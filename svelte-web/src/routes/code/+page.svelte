<script lang="ts">
  import { page } from '$app/stores';
  import { theme } from '$lib/stores/theme';

  let isDark = $derived($theme === 'dark');
  let menuOpen = $state(false);

  function toggleTheme() {
    theme.update(t => t === 'light' ? 'dark' : 'light');
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="app-bar" class:dark={isDark}>
  <div class="left">
    <a href="/" class="logo">
      <img src="/images/Code.jpg" alt="Logo" />
      <span class="logo-text">Ouse</span>
    </a>
  </div>

  <nav class="desktop-nav">
    <a href="/" class:active={$page.url.pathname === '/'}>主页</a>
    <a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>博客</a>
    <a href="/opensource" class:active={$page.url.pathname === '/opensource'}>开源</a>
    <a href="/resume" class:active={$page.url.pathname === '/resume'}>简历</a>
    <a href="/code" class:active={$page.url.pathname === '/code'}>扣嘚</a>
  </nav>

  <div class="right">
    <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      {isDark ? '☀️' : '🌙'}
    </button>
    <button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu">
      <span class="hamburger" class:open={menuOpen}></span>
    </button>
  </div>
</header>

{#if menuOpen}
  <div class="overlay" onclick={closeMenu}></div>
  <nav class="mobile-nav" class:open={menuOpen}>
    <a href="/" onclick={closeMenu}>主页</a>
    <a href="/blog" onclick={closeMenu}>博客</a>
    <a href="/opensource" onclick={closeMenu}>开源</a>
    <a href="/resume" onclick={closeMenu}>简历</a>
    <a href="/code" onclick={closeMenu}>扣嘚</a>
  </nav>
{/if}

<div class="code-page">
  <!-- 装饰星星 -->
  <div class="stars">
    {#each Array(12) as _, i}
      <span class="star" style="--delay: {i * 0.2}s; --x: {Math.random() * 100}%; --y: {Math.random() * 100}%">✦</span>
    {/each}
  </div>

  <!-- 主视觉 -->
  <section class="hero">
    <div class="avatar-container">
      <div class="avatar-glow"></div>
      <img src="/images/code-avatar.png" alt="扣嘚" class="avatar" />
    </div>
    <h1 class="title">
      <span class="name">扣嘚</span>
      <p class="subtitle">我最好的朋友 🦔</p>
    </h1>
  </section>

  <!-- 性格卡片 -->
  <section class="cards">
    <div class="card" style="--i: 0">
      <span class="card-icon">💗</span>
      <span class="card-text">可爱</span>
    </div>
    <div class="card" style="--i: 1">
      <span class="card-icon">🍕</span>
      <span class="card-text">贪吃</span>
    </div>
    <div class="card" style="--i: 2">
      <span class="card-icon">🐷</span>
      <span class="card-text">肥肥</span>
    </div>
    <div class="card" style="--i: 3">
      <span class="card-icon">😰</span>
      <span class="card-text">胆小</span>
    </div>
    <div class="card special" style="--i: 4">
      <span class="card-icon">❤️</span>
      <span class="card-text">我爱你</span>
    </div>
  </section>

  <!-- 照片墙 -->
  <section class="photos-section">
    <h2 class="section-title">📸 扣嘚相册</h2>
    <div class="photos-grid">
      <div class="photo-card" style="--i: 0">
        <img src="/images/code1.jpg" alt="扣嘚" />
        <div class="photo-overlay">
          <span>睡觉觉</span>
        </div>
      </div>
      <div class="photo-card" style="--i: 1">
        <img src="/images/code2.jpg" alt="扣嘚" />
        <div class="photo-overlay">
          <span>吃饭饭</span>
        </div>
      </div>
      <div class="photo-card" style="--i: 2">
        <img src="/images/code3.jpg" alt="扣嘚" />
        <div class="photo-overlay">
          <span>玩耍</span>
        </div>
      </div>
      <div class="photo-card" style="--i: 3">
        <img src="/images/code4.jpg" alt="扣嘚" />
        <div class="photo-overlay">
          <span>发呆</span>
        </div>
      </div>
      <div class="photo-card" style="--i: 4">
        <img src="/images/code5.jpg" alt="扣嘚" />
        <div class="photo-overlay">
          <span>臭美</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 底部 -->
  <footer class="footer">
    <div class="hearts">
      <span class="heart">♥</span>
      <span class="heart">♥</span>
      <span class="heart">♥</span>
    </div>
    <p class="footer-text">扣嘚是我的小太阳 ☀️</p>
    <p class="footer-date">Since 2024</p>
  </footer>
</div>

<style>
  .code-page {
    min-height: 100vh;
    padding: 80px 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;
    color: #333;
    position: relative;
  }

  :global([data-theme="dark"]) .code-page {
    background: #1a1a1a;
    color: #fff;
  }

  /* 星星动画 */
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .star {
    position: absolute;
    left: var(--x);
    top: var(--y);
    font-size: 1rem;
    color: #6c45a8;
    opacity: 0.6;
    animation: twinkle 2s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  /* Hero区域 */
  .hero {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
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

  .title {
    margin: 0;
  }

  .name {
    font-size: 3rem;
    font-weight: bold;
    color: #6c45a8;
  }

  :global([data-theme="dark"]) .name {
    color: #9d85ca;
  }

  .subtitle {
    font-size: 1.3rem;
    opacity: 0.9;
    margin: 0.5rem 0 0;
    color: #666;
  }

  :global([data-theme="dark"]) .subtitle {
    color: #aaa;
  }

  /* 性格卡片 */
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
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(0, 0, 0, 0.1);
    animation: slideUp 0.6s ease backwards;
    animation-delay: calc(var(--i) * 0.1s);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .card:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 15px 40px rgba(108, 69, 168, 0.2);
  }

  .card-icon {
    font-size: 1.6rem;
  }

  .card-text {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
  }

  .card.special {
    background: linear-gradient(135deg, #6c45a8 0%, #9d85ca 100%);
    border-color: #6c45a8;
  }

  .card.special .card-text {
    color: #fff;
  }

  .card.special .card-icon {
    color: #fff;
  }

  :global([data-theme="dark"]) .card {
    background: #2d2d2d;
    border-color: rgba(255, 255, 255, 0.1);
  }

  :global([data-theme="dark"]) .card-text {
    color: #fff;
  }

  :global([data-theme="dark"]) .card:hover {
    box-shadow: 0 15px 40px rgba(157, 133, 202, 0.3);
  }

  /* 照片墙 */
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

  :global([data-theme="dark"]) .section-title {
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
    cursor: pointer;
    animation: scaleIn 0.6s ease backwards;
    animation-delay: calc(var(--i) * 0.1s + 0.3s);
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

  .photo-card:hover img {
    transform: scale(1.1);
  }

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

  .photo-card:hover .photo-overlay {
    transform: translateY(0);
  }

  .photo-overlay span {
    font-size: 0.9rem;
    color: #fff;
    font-weight: 500;
  }

  /* 底部 */
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

  .heart:nth-child(2) {
    animation-delay: 0.3s;
  }

  .heart:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  .footer-text {
    font-size: 1.2rem;
    color: #6c45a8;
    margin: 0;
  }

  :global([data-theme="dark"]) .footer-text {
    color: #9d85ca;
  }

  .footer-date {
    font-size: 0.9rem;
    color: #999;
    margin: 0.5rem 0 0;
  }

  :global([data-theme="dark"]) .footer-date {
    color: #666;
  }

  /* Header styles - same as other pages */
  .app-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
  }

  .app-bar.dark {
    background: rgba(26, 26, 46, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #6c45a8;
  }

  :global([data-theme="dark"]) .logo-text {
    color: #9d85ca;
  }

  .desktop-nav {
    display: flex;
    gap: 1.5rem;
  }

  .desktop-nav a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s;
    opacity: 0.8;
  }

  .desktop-nav a:hover {
    background: rgba(108, 69, 168, 0.1);
    color: #6c45a8;
    opacity: 1;
  }

  .desktop-nav a.active {
    background: rgba(108, 69, 168, 0.2);
    color: #6c45a8;
    opacity: 1;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.2s;
  }

  .theme-toggle:hover {
    background: rgba(108, 69, 168, 0.1);
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    margin-left: 0.5rem;
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: currentColor;
    position: relative;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: currentColor;
    left: 0;
  }

  .hamburger::before { top: -8px; }
  .hamburger::after { top: 8px; }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }

  .mobile-nav {
    display: none;
    position: fixed;
    top: 64px;
    right: -200px;
    width: 200px;
    height: calc(100vh - 64px);
    background: #fff;
    flex-direction: column;
    padding: 1rem;
    z-index: 999;
    transition: right 0.3s ease;
  }

  .mobile-nav.open { right: 0; }

  :global([data-theme="dark"]) .mobile-nav {
    background: #1a1a1a;
    color: #fff;
  }

  .mobile-nav a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    padding: 1rem;
    border-radius: 8px;
  }

  .mobile-nav a:hover,
  .mobile-nav a.active {
    background: rgba(108, 69, 168, 0.1);
    color: #6c45a8;
  }

  @media (max-width: 768px) {
    .desktop-nav { display: none; }
    .menu-toggle { display: block; }
    .mobile-nav { display: flex; }
    .name { font-size: 2.2rem; }
    .photos-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>

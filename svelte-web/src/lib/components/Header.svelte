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

  <!-- 电脑端导航 -->
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
    <!-- 移动端汉堡菜单按钮 -->
    <button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu">
      <span class="hamburger" class:open={menuOpen}></span>
    </button>
  </div>
</header>

<!-- 移动端抽屉菜单 -->
{#if menuOpen}
  <div class="overlay" onclick={closeMenu}></div>
  <nav class="mobile-nav" class:open={menuOpen}>
    <a href="/" onclick={closeMenu} class:active={$page.url.pathname === '/'}>主页</a>
    <a href="/blog" onclick={closeMenu} class:active={$page.url.pathname.startsWith('/blog')}>博客</a>
    <a href="/opensource" onclick={closeMenu} class:active={$page.url.pathname === '/opensource'}>开源</a>
    <a href="/resume" onclick={closeMenu} class:active={$page.url.pathname === '/resume'}>简历</a>
    <a href="/code" onclick={closeMenu} class:active={$page.url.pathname === '/code'}>扣嘚</a>
  </nav>
{/if}

<style>
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
    background: #ffffff;
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
  }

  .app-bar.dark {
    background: #1a1a1a;
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

  .app-bar.dark .desktop-nav a:hover {
    background: rgba(157, 133, 202, 0.2);
    color: #9d85ca;
  }

  .desktop-nav a.active {
    background: rgba(108, 69, 168, 0.2);
    color: #6c45a8;
    opacity: 1;
  }

  .app-bar.dark .desktop-nav a.active {
    background: rgba(157, 133, 202, 0.3);
    color: #9d85ca;
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

  /* 移动端汉堡菜单按钮 */
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
    transition: background 0.2s;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: currentColor;
    left: 0;
    transition: transform 0.2s;
  }

  .hamburger::before {
    top: -8px;
  }

  .hamburger::after {
    top: 8px;
  }

  .hamburger.open {
    background: transparent  ;
  }

  .hamburger.open::before {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.open::after {
    transform: translateY(-8px) rotate(-45deg);
  }

  /* 移动端抽屉 */
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
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .mobile-nav.open {
    right: 0;
  }

  :global([data-theme="dark"]) .mobile-nav {
    background: #1a1a1a;
  }

  .mobile-nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.2s;
  }

  :global([data-theme="dark"]) .mobile-nav a {
    color: #fff;
  }

  .mobile-nav a:hover,
  .mobile-nav a.active {
    background: rgba(108, 69, 168, 0.1);
    color: #6c45a8;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .menu-toggle {
      display: block;
    }

    .mobile-nav {
      display: flex;
    }
  }
</style>

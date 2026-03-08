<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import SvgButton from '$lib/components/SvgButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import type { BlogPost } from '$lib/types';

  const GITHUB_RAW = 'https://raw.githubusercontent.com/0use-TE/OuseBlog/refs/heads';

  // 允许的路径
  const allowedPaths = ['/', '/blog', '/opensource', '/resume', '/code'];

  onMount(() => {
    const path = $page.url.pathname;
    // 如果路径不在允许列表中
    if (!allowedPaths.includes(path)) {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length === 1) {
        // 单层路径（如 /v2），重定向到 /blog?b=xxx
        const filter = pathParts[0];
        goto(`/blog?b=${encodeURIComponent(filter)}`);
      } else {
        // 多层路径，重定向到 /blog
        goto('/blog');
      }
    }
  });

  let searchText = $state('');
  let filteredPosts = $state<BlogPost[]>([]);
  let allPosts = $state<BlogPost[]>([]);
  let showResults = $state(false);
  let selectedPost = $state<BlogPost | null>(null);

  // 加载博客索引
  async function loadPosts() {
    try {
      const res = await fetch(`${GITHUB_RAW}/generated/index.json`);
      allPosts = await res.json();
      filteredPosts = allPosts.slice(0, 5);
    } catch (e) {
      console.error('Failed to load posts:', e);
    }
  }

  // 搜索
  function handleSearch() {
    if (!searchText.trim()) {
      filteredPosts = allPosts.slice(0, 5);
      showResults = false;
      return;
    }
    filteredPosts = allPosts
      .filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  (p.category && p.category.toLowerCase().includes(searchText.toLowerCase())))
      .slice(0, 5);
    selectedPost = filteredPosts[0] || null;
    showResults = true;
  }

  // 选择文章
  function selectPost(post: BlogPost) {
    selectedPost = post;
    searchText = post.title;
    showResults = false;
    openPost();
  }

  // 打开文章
  function openPost() {
    if (selectedPost?.path) {
      goto(`/blog/${selectedPost.path}`);
    }
  }

  // 键盘导航
  function handleKeydown(e: KeyboardEvent) {
    if (!showResults || filteredPosts.length === 0) return;

    const currentIndex = selectedPost ? filteredPosts.indexOf(selectedPost) : -1;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentIndex < filteredPosts.length - 1) {
        selectedPost = filteredPosts[currentIndex + 1];
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentIndex > 0) {
        selectedPost = filteredPosts[currentIndex - 1];
      }
    } else if (e.key === 'Enter' && selectedPost) {
      e.preventDefault();
      selectPost(selectedPost);
    }
  }

  // 延迟搜索
  let debounceTimer: ReturnType<typeof setTimeout>;
  function handleInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(handleSearch, 100);
  }

  loadPosts();
</script>

<div class="home">
  <!-- 标语 -->
  <div class="slogan-container">
    <div class="slogan-wrapper">
      <h1 class="slogan">
        <span class="slogan-primary">0</span>use
      </h1>
      <h1 class="slogan slogan-ext">
        <span class="slogan-primary">Blog</span>
      </h1>
    </div>
    <p class="slogan2">从0到use</p>
  </div>

  <!-- 联系方式 -->
  <div class="contact">
    <div class="contact-buttons">
      <SvgButton type="google" href="mailto:tegameouse@gmail.com" />
      <SvgButton type="github" href="https://github.com/0use-TE" />
      <SvgButton type="microsoft" href="mailto:2216528769@qq.com" />
    </div>
    <p class="contact-label">联系方式</p>
  </div>

  <div class="divider"></div>

  <!-- 搜索框 -->
  <div class="search-container">
    <div class="search-box">
      <input
        type="text"
        bind:value={searchText}
        oninput={handleInput}
        onkeydown={handleKeydown}
        placeholder="查找您想找的..."
        class="search-input"
      />
      <button class="search-btn" onclick={openPost}>前往</button>
    </div>

    {#if showResults && filteredPosts.length > 0}
      <div class="search-results">
        {#each filteredPosts as post}
          <button
            class="result-item"
            class:selected={selectedPost === post}
            onclick={() => selectPost(post)}
          >
            {post.title}
          </button>
        {/each}
      </div>
    {/if}

    {#if showResults && filteredPosts.length === 0 && searchText.trim()}
      <div class="search-results">
        <div class="result-item no-result">未找到匹配结果</div>
      </div>
    {/if}
  </div>

  <!-- 功能卡片 -->
  <div class="cards">
    <Card
      title="博客"
      icon="📝"
      description="在我的博客中，我会分享关于编程的各类文章以及生活中的点点滴滴，包括技术技巧、开发心得等。通过这些文章，希望能为您带来帮助,带来快乐!"
      href="/blog"
    />
    <Card
      title="开源"
      icon="🌐"
      description="我热衷于开源社区的建设.大学一年多来，我做了好多有趣的小玩意，包括游戏，软件...如果对您有用，不妨Star一下，您的支持是我最大的动力！"
      href="/opensource"
    />
    <Card
      title="简历"
      icon="👤"
      description="随着不断学习，这里我也会不断更新我的简历。您在这里可以看到我的学习路线，如果你对我的技术栈感兴趣，欢迎查看详细的简历内容。"
      href="/resume"
    />
  </div>
</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .slogan-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .slogan-wrapper {
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .slogan {
    font-size: calc(20px + 4vw);
    font-weight: 900;
    color: #6c45a8;
    letter-spacing: 0;
    transition: all 1s;
    user-select: none;
    display: block;
    margin: 0;
    text-align: center;
  }

  .slogan:hover {
    letter-spacing: calc(4px + 2vw);
  }

  .slogan-ext {
    margin-left: calc(2px + 1vw);
    position: relative;
  }

  .slogan-ext::after {
    content: 'land';
    color: #333;
    letter-spacing: 0;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 100%;
    top: 0;
    white-space: nowrap;
    margin-left: 4px;
  }

  :global([data-theme="dark"]) .slogan-ext::after {
    color: #fff;
  }

  .slogan:hover .slogan-ext::after {
    opacity: 1;
  }

  .slogan-primary {
    color: #6c45a8;
  }

  .slogan2 {
    font-size: calc(12px + 1vw);
    font-weight: 900;
    color: #ff3399;
    margin: 0;
    margin-top: -1rem;
    letter-spacing: -0.1vw;
    transition: all 1s;
    user-select: none;
  }

  .slogan2:hover {
    letter-spacing: calc(2px + 1vw);
  }

  .contact {
    text-align: center;
    margin-bottom: 2rem;
  }

  .contact-buttons {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
  }

  .contact-label {
    font-size: 0.875rem;
    color: #666;
  }

  :global([data-theme="dark"]) .contact-label {
    color: #aaa;
  }

  .divider {
    width: 24vw;
    height: 1px;
    background: #ccc;
    margin: 2rem 0;
  }

  :global([data-theme="dark"]) .divider {
    background: #444;
  }

  .search-container {
    width: 100%;
    max-width: 600px;
    position: relative;
    margin-bottom: 2rem;
  }

  .search-box {
    display: flex;
    gap: 0.5rem;
  }

  .search-input {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    background: #fff;
    color: #333;
    transition: border-color 0.2s;
  }

  :global([data-theme="dark"]) .search-input {
    background: #333;
    border-color: #555;
    color: #fff;
  }

  .search-input:focus {
    outline: none;
    border-color: #6c45a8;
  }

  .search-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border: 2px solid #6c45a8;
    border-radius: 8px;
    background: transparent;
    color: #6c45a8;
    cursor: pointer;
    transition: all 0.2s;
  }

  .search-btn:hover {
    background: #6c45a8;
    color: white;
  }

  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 0.25rem;
    max-height: 200px;
    overflow-y: auto;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) .search-results {
    background: #2d2d2d;
  }

  .result-item {
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    transition: background 0.2s;
  }

  :global([data-theme="dark"]) .result-item {
    color: #fff;
  }

  .result-item:hover,
  .result-item.selected {
    background: rgba(108, 69, 168, 0.1);
  }

  .result-item.no-result {
    color: #ef4444;
    cursor: default;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    width: 100%;
    padding: 1rem;
  }
</style>

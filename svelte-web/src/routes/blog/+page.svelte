<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import type { BlogPost } from '$lib/types';

  let searchContent = $state('');
  let allPosts = $state<BlogPost[]>([]);
  let filteredPosts = $state<BlogPost[]>([]);
  let loading = $state(true);

  // 获取URL查询参数 (b = blog filter) - 仅在浏览器端使用
  let b = $derived(browser ? $page.url.searchParams.get('b') || '' : '');

  const GITHUB_RAW = 'https://raw.githubusercontent.com/0use-TE/OuseBlog/refs/heads';

  async function loadPosts() {
    loading = true;
    try {
      const res = await fetch(`${GITHUB_RAW}/generated/index.json`);
      allPosts = await res.json();
      if (b) {
        searchContent = b;
        filterPosts();
      } else {
        filteredPosts = allPosts;
      }
    } catch (e) {
      console.error('Failed to load posts:', e);
    }
    loading = false;
  }

  function filterPosts() {
    if (!searchContent.trim()) {
      filteredPosts = allPosts;
    } else {
      filteredPosts = allPosts.filter(p =>
        p.title.toLowerCase().includes(searchContent.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(searchContent.toLowerCase()))
      );
    }
  }

  function handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    searchContent = target.value;
    filterPosts();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const url = new URL($page.url);
      if (searchContent.trim()) {
        url.searchParams.set('b', searchContent);
      } else {
        url.searchParams.delete('b');
      }
      // 不使用 replaceState，让浏览器正确记录历史
      goto(url.toString());
    }
  }

  function openPost(path: string) {
    // 跳转前先更新当前URL，保存过滤参数
    const currentUrl = new URL($page.url);
    if (searchContent.trim()) {
      currentUrl.searchParams.set('b', searchContent);
    } else {
      currentUrl.searchParams.delete('b');
    }
    currentUrl.pathname = '/blog';
    goto(currentUrl.toString()).then(() => {
      // 然后跳转到博客详情页
      const targetUrl = searchContent.trim()
        ? `/blog/${path}?b=${encodeURIComponent(searchContent)}`
        : `/blog/${path}`;
      goto(targetUrl);
    });
  }

  // 监听URL参数变化（支持浏览器后退前进）
  // 只在页面首次加载时从URL恢复搜索状态
  let initialized = $state(false);

  // 用于追踪是否需要重置搜索
  let previousB = $state('');

  $effect(() => {
    const currentB = b;

    // 首次加载时从URL恢复搜索状态
    if (!initialized && currentB) {
      searchContent = currentB;
      initialized = true;
      if (allPosts.length > 0) {
        filterPosts();
      }
    }

    // 页面首次加载后记录初始b值
    if (!initialized && !currentB) {
      initialized = true;
    }

    // 如果URL的b参数被清除（比如从详情页返回但没有b参数），重置搜索
    if (initialized && previousB && !currentB && searchContent) {
      searchContent = '';
      filteredPosts = allPosts;
    }

    // 更新previousB
    previousB = currentB;
  });

  loadPosts();
</script>

<div class="blog-page">
  <div class="search-box">
    <input
      type="search"
      bind:value={searchContent}
      oninput={handleSearch}
      onkeydown={handleKeydown}
      placeholder="搜索博客标题或分类..."
      class="search-input"
    />
  </div>

  <div class="posts-list">
    {#if loading}
      <div class="loading">加载中...</div>
    {:else if filteredPosts.length === 0}
      <div class="no-results">没有找到匹配的博客</div>
    {:else}
      {#each filteredPosts as post}
        <button class="post-item" onclick={() => openPost(post.path)}>
          <div class="post-header">
            <h3>{post.title}</h3>
            {#if post.category}
              <span class="category">{post.category}</span>
            {/if}
          </div>
        </button>
      {/each}
    {/if}
  </div>
</div>

<style>
  .blog-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .search-box {
    margin-bottom: 2rem;
  }

  .search-input {
    width: 100%;
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

  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
  }

  .post-item {
    width: 100%;
    padding: 1rem;
    text-align: left;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }

  :global([data-theme="dark"]) .post-item {
    background: #2d2d2d;
  }

  .post-item:hover {
    border-color: #6c45a8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
  }

  :global([data-theme="dark"]) .post-header h3 {
    color: #fff;
  }

  .category {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border-radius: 999px;
  }

  .loading, .no-results {
    text-align: center;
    padding: 2rem;
    color: #333;
    opacity: 0.6;
  }

  :global([data-theme="dark"]) .loading,
  :global([data-theme="dark"]) .no-results {
    color: #fff;
  }
</style>

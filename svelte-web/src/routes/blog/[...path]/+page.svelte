<script lang="ts">
  import { page } from '$app/stores';
  import { marked } from 'marked';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  const GITHUB_RAW = 'https://raw.githubusercontent.com/0use-TE/OuseBlog/refs/heads/main';
  const INDEX_URL = 'https://raw.githubusercontent.com/0use-TE/OuseBlog/refs/heads/generated/index.json';

  let path = $derived(decodeURIComponent($page.params.path));
  let content = $state('');
  let loading = $state(true);
  let error = $state('');
  let toc = $state<{ id: string; text: string; level: number }[]>([]);
  let showToc = $state(false);

  // 所有博客列表
  let allPosts = $state<{ title: string; path: string; category?: string }[]>([]);
  let filteredPosts = $state<{ title: string; path: string; category?: string }[]>([]);
  let postsLoading = $state(true);
  let searchQuery = $state('');

  // 搜索过滤
  function filterPosts() {
    if (!searchQuery.trim()) {
      filteredPosts = allPosts;
    } else {
      filteredPosts = allPosts.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
  }

  function handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
    filterPosts();
  }

  // 处理 markdown 中的图片路径
  function processImageUrls(md: string): string {
    // 匹配 markdown 图片语法: ![alt](url)
    return md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      // 如果是绝对路径，直接返回
      if (url.startsWith('http')) return match;

      // 去掉开头的 ./ 或 /, 并把反斜杠转为正斜杠
      let cleanUrl = url.replace(/^[\.\/]+/, '').replace(/\\/g, '/');

      // 获取当前文件所在的目录
      const lastSlashIndex = path.lastIndexOf('/');
      const folderPath = lastSlashIndex > -1 ? path.substring(0, lastSlashIndex + 1) : '';

      // 拼接最终URL，对非ASCII字符编码
      const encodePath = (s: string) => s.split('').map(c => c.charCodeAt(0) > 127 ? encodeURIComponent(c) : c).join('');
      const finalUrl = `${GITHUB_RAW}/${folderPath}${cleanUrl}`.split('/').map(encodePath).join('/');
      return `![${alt}](${finalUrl})`;
    });
  }

  // 提取目录
  function extractToc(md: string): { id: string; text: string; level: number }[] {
    const headings: { id: string; text: string; level: number }[] = [];
    const lines = md.split('\n');

    lines.forEach(line => {
      const match = line.match(/^(#{1,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]+/g, '-');
        headings.push({ id, text, level });
      }
    });

    return headings;
  }

  // 添加ID到标题
  function addIdsToHeadings(html: string): string {
    toc.forEach(heading => {
      const regex = new RegExp(`<h${heading.level}>([^<]+)</h${heading.level}>`, 'g');
      html = html.replace(regex, `<h${heading.level} id="${heading.id}">$1</h${heading.level}>`);
    });
    return html;
  }

  async function loadContent() {
    loading = true;
    error = '';
    try {
      const res = await fetch(`${GITHUB_RAW}/${path}`);
      if (!res.ok) {
        throw new Error('文章不存在');
      }
      let md = await res.text();

      // 提取目录
      toc = extractToc(md);

      // 处理图片路径
      md = processImageUrls(md);
      content = await marked.parse(md);

      // 添加ID到标题
      if (toc.length > 0) {
        content = addIdsToHeadings(content);
      }
    } catch (e) {
      error = e instanceof Error ? e.message : '加载失败';
    }
    loading = false;
  }

  function scrollToHeading(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // 加载所有博客列表
  async function loadAllPosts() {
    postsLoading = true;
    try {
      const res = await fetch(INDEX_URL);
      if (res.ok) {
        allPosts = await res.json();
        filteredPosts = allPosts;
      }
    } catch (e) {
      console.error('Failed to load posts:', e);
    }
    postsLoading = false;
  }

  // 跳转到其他博客
  function goToPost(postPath: string) {
    goto(`/blog/${postPath}`);
  }

  $effect(() => {
    if (path) {
      loadContent();
    }
    loadAllPosts();
  });
</script>

<div class="blog-container" class:has-toc={toc.length > 0} class:has-left-list={allPosts.length > 0}>
  <!-- 左侧博客列表 -->
  {#if allPosts.length > 0}
    <aside class="post-list-sidebar">
      <input
        type="search"
        class="post-search-input"
        placeholder="搜索博客..."
        value={searchQuery}
        oninput={handleSearch}
      />
      <div class="post-list-title">博客列表</div>
      <div class="post-list">
        {#each filteredPosts as post}
          <button
            class="post-list-item"
            class:active={post.path === path}
            onclick={() => goToPost(post.path)}
          >
            <span class="post-title">{post.title}</span>
            {#if post.category}
              <span class="post-category">{post.category}</span>
            {/if}
          </button>
        {/each}
      </div>
    </aside>
  {/if}

  <!-- 右侧文章目录 -->
  {#if toc.length > 0}
    <button class="toc-toggle" onclick={() => showToc = !showToc}>
      📑 目录
    </button>

    {#if showToc}
      <nav class="toc-sidebar">
        <div class="toc-title">目录</div>
        <ul class="toc-list">
          {#each toc as heading}
            <li class="toc-item" style="padding-left: {(heading.level - 1) * 1}rem">
              <button onclick={() => scrollToHeading(heading.id)}>
                {heading.text}
              </button>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  {/if}

  <div class="blog-content">
    {#if loading}
      <div class="loading">加载中...</div>
    {:else if error}
      <div class="error">{error}</div>
    {:else}
      <article class="prose">
        {@html content}
      </article>
    {/if}
  </div>
</div>

<style>
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    position: relative;
  }

  .blog-content {
    max-width: 100%;
    flex: 1;
  }

  .blog-container.has-left-list {
    margin-left: 260px;
    max-width: calc(100% - 260px);
  }

  .blog-container.has-toc {
    margin-right: 240px;
  }

  @media (max-width: 1024px) {
    .blog-container.has-left-list {
      margin-left: 0;
      max-width: 800px;
    }
  }

  @media (max-width: 768px) {
    .blog-container.has-toc {
      margin-right: 0;
    }
  }

  /* 左侧博客列表 */
  .post-list-sidebar {
    position: fixed;
    left: 1rem;
    top: 80px;
    width: 240px;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) .post-list-sidebar {
    background: #2d2d2d;
    border-color: #444;
  }

  .post-search-input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
    color: #333;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
  }

  :global([data-theme="dark"]) .post-search-input {
    background: #333;
    border-color: #444;
    color: #fff;
  }

  .post-search-input:focus {
    outline: none;
    border-color: #6c45a8;
  }

  .post-list-title {
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #6c45a8;
    font-size: 0.95rem;
  }

  :global([data-theme="dark"]) .post-list-title {
    color: #9d85ca;
  }

  .post-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .post-list-item {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .post-list-item:hover {
    background: rgba(108, 69, 168, 0.1);
  }

  .post-list-item.active {
    background: rgba(108, 69, 168, 0.15);
  }

  .post-list-item.active .post-title {
    color: #6c45a8;
    font-weight: 600;
  }

  :global([data-theme="dark"]) .post-list-item:hover {
    background: rgba(157, 133, 202, 0.1);
  }

  :global([data-theme="dark"]) .post-list-item.active .post-title {
    color: #9d85ca;
  }

  .post-title {
    font-size: 0.85rem;
    color: #333;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  :global([data-theme="dark"]) .post-title {
    color: #fff;
  }

  .post-category {
    font-size: 0.7rem;
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.15);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    width: fit-content;
  }

  @media (max-width: 1024px) {
    .post-list-sidebar {
      display: none;
    }
  }

  .loading, .error {
    text-align: center;
    padding: 2rem;
    color: #333;
  }

  :global([data-theme="dark"]) .loading,
  :global([data-theme="dark"]) .error {
    color: #fff;
  }

  .error {
    color: #ef4444;
  }

  .prose {
    color: #333;
    line-height: 1.8;
  }

  :global([data-theme="dark"]) .prose {
    color: #fff;
  }

  .prose :global(h1) {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #6c45a8;
  }

  .prose :global(h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .prose :global(h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .prose :global(p) {
    margin-bottom: 1rem;
  }

  .prose :global(code) {
    background: #f0f0f0;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  :global([data-theme="dark"]) .prose :global(code) {
    background: #444;
  }

  .prose :global(pre) {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;
  }

  .prose :global(pre code) {
    background: none;
    padding: 0;
    color: inherit;
  }

  .prose :global(a) {
    color: #6c45a8;
    text-decoration: underline;
  }

  .prose :global(ul), .prose :global(ol) {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .prose :global(li) {
    margin-bottom: 0.5rem;
  }

  .prose :global(blockquote) {
    border-left: 4px solid #6c45a8;
    padding-left: 1rem;
    margin: 1rem 0;
    opacity: 0.8;
  }

  .prose :global(img) {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }

  /* 目录样式 */
  .toc-toggle {
    position: fixed;
    right: 1rem;
    top: 80px;
    background: #fff;
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    z-index: 100;
    font-size: 0.9rem;
    color: #6c45a8;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) .toc-toggle {
    background: #2d2d2d;
    border-color: #444;
    color: #9d85ca;
  }

  .toc-sidebar {
    position: fixed;
    right: 1rem;
    top: 130px;
    width: 200px;
    max-height: 60vh;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :global([data-theme="dark"]) .toc-sidebar {
    background: #2d2d2d;
    border-color: #444;
  }

  .toc-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #6c45a8;
    font-size: 0.95rem;
  }

  :global([data-theme="dark"]) .toc-title {
    color: #9d85ca;
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc-item {
    margin: 0.3rem 0;
  }

  .toc-item button {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    color: #666;
    font-size: 0.85rem;
    padding: 0.25rem 0;
    width: 100%;
    transition: color 0.2s;
  }

  .toc-item button:hover {
    color: #6c45a8;
  }

  :global([data-theme="dark"]) .toc-item button {
    color: #aaa;
  }

  :global([data-theme="dark"]) .toc-item button:hover {
    color: #9d85ca;
  }

  @media (max-width: 768px) {
    .toc-sidebar {
      right: 0.5rem;
      width: 180px;
    }
  }
</style>

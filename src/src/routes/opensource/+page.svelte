<script lang="ts">
  import { projects } from '$lib/data/profile';
  import githubStars from '$lib/data/github-stars.json';

  function getStars(repo?: string): number | null {
    if (!repo) return null;
    const count = githubStars[repo as keyof typeof githubStars];
    return typeof count === 'number' ? count : null;
  }
</script>

<svelte:head>
  <title>作品 · Ouse</title>
  <meta name="description" content="Ouse 的产品、开源项目和小工具。了解 KodoLauncher，探索各类开源作品。" />
</svelte:head>

<div class="opensource-page">
  <h1 class="title">Ouse 的作品</h1>
  <p class="subtitle">我做的产品、开源项目和有趣的小工具</p>

  <div class="divider"></div>

  <section class="products-section" aria-labelledby="products-heading">
    <h2 id="products-heading" class="section-title">我的产品</h2>
    <a class="product-feature" href="https://kodolauncher.com" target="_blank" rel="noopener noreferrer">
      <div class="product-preview">
        <img src="/images/products/kodo-home.jpg" alt="KodoLauncher 主屏：系统状态、天气、常用应用和终端" width="886" height="1920" />
        <img src="/images/products/kodo-apps.jpg" alt="KodoLauncher 应用列表" width="886" height="1920" loading="lazy" />
      </div>
      <div class="product-info">
        <span class="product-label">独立产品 · Android</span>
        <h3>KodoLauncher</h3>
        <p>终端原生 Android 启动器。用指令直达应用，用 HUD 一眼查看系统状态、天气与常用应用，让手机桌面更有秩序。</p>
        <span class="product-domain">kodolauncher.com</span>
      </div>
      <span class="product-cta">了解 KodoLauncher <span aria-hidden="true">↗</span><span class="sr-only">（访问官网，在新标签页打开）</span></span>
    </a>
  </section>

  <section aria-labelledby="opensource-heading">
  <h2 id="opensource-heading" class="section-title">开源项目</h2>
  <p class="section-description">如果对你有用，欢迎 Star ⭐</p>
  <div class="project-grid">
    {#each projects as project}
      <article class="project-card">
        {#if project.image}
          <div class="cover" class:contain={project.imageFit === 'contain'}>
            <img src={project.image} alt="{project.name} 预览图" loading="lazy" />
          </div>
        {:else}
          <div class="cover cover-placeholder">
            <span>📋</span>
          </div>
        {/if}

        <div class="card-body">
        <div class="card-top">
          <h2>{project.name}</h2>
          <span class="platform">{project.platform === 'github' ? 'GitHub' : 'Gitee'}</span>
        </div>

        <p class="description">{project.description}</p>

        <div class="tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
          {#if project.githubRepo && getStars(project.githubRepo) !== null}
            <span class="tag stars">
              ⭐ {getStars(project.githubRepo)}
            </span>
          {/if}
        </div>

        <div class="links">
          <a href={project.url} target="_blank" rel="noopener noreferrer" class="link primary">
            仓库
          </a>
          {#if project.docs}
            <a href={project.docs} target="_blank" rel="noopener noreferrer" class="link">
              文档
            </a>
          {/if}
        </div>
        </div>
      </article>
    {/each}
  </div>
  </section>
</div>

<style>
  .section-title {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .section-description {
    margin: -0.5rem 0 1.25rem;
    color: #666;
    font-size: 0.9rem;
  }

  .products-section {
    margin-bottom: 2.5rem;
  }

  .product-feature {
    display: grid;
    grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    border: 1px solid rgba(108, 69, 168, 0.2);
    border-radius: 16px;
    background: linear-gradient(135deg, #f4effb, #fff);
    color: inherit;
    text-decoration: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .product-feature:hover {
    border-color: #6c45a8;
    box-shadow: 0 4px 16px rgba(108, 69, 168, 0.12);
  }

  .product-feature:focus-visible {
    outline: 3px solid #6c45a8;
    outline-offset: 4px;
  }

  .product-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    grid-row: span 2;
    padding: 1rem;
    border-radius: 12px;
    background: #141419;
  }

  .product-preview img {
    width: calc((100% - 0.75rem) / 2);
    height: auto;
    display: block;
    border-radius: 6px;
    border: 1px solid #333;
  }

  .product-info {
    flex: 1;
    min-width: 0;
  }

  .product-label {
    color: #6c45a8;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .product-info h3 {
    margin: 0.3rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .product-info p {
    margin: 0 0 0.75rem;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .product-domain {
    color: #666;
    font-size: 0.8rem;
  }

  .product-cta {
    justify-self: start;
    flex-shrink: 0;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    background: #6c45a8;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  :global([data-theme='dark']) .product-feature {
    background: linear-gradient(135deg, #30253f, #242424);
    border-color: rgba(157, 133, 202, 0.35);
  }

  :global([data-theme='dark']) .product-feature:hover {
    border-color: #9d85ca;
  }

  :global([data-theme='dark']) .product-label {
    color: #c3afdd;
  }

  :global([data-theme='dark']) .product-info p {
    color: #ccc;
  }

  :global([data-theme='dark']) .product-domain,
  :global([data-theme='dark']) .section-description {
    color: #aaa;
  }

  @media (max-width: 600px) {
    .product-feature {
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
      padding: 1.25rem;
    }

    .product-preview {
      grid-row: auto;
      width: 100%;
      max-width: 300px;
      box-sizing: border-box;
      justify-self: center;
    }

    .product-info h3 {
      font-size: 1.25rem;
    }

    .product-cta {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
  }

  .opensource-page {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1rem 3rem;
  }

  .title {
    font-size: 1.75rem;
    font-weight: 600;
    color: #333;
    text-align: center;
    margin: 0;
  }

  :global([data-theme='dark']) .title {
    color: #fff;
  }

  .subtitle {
    text-align: center;
    color: #666;
    margin: 0.5rem 0 0;
    font-size: 0.95rem;
  }

  :global([data-theme='dark']) .subtitle {
    color: #aaa;
  }

  .divider {
    width: 50%;
    max-width: 320px;
    height: 1px;
    background: rgba(0, 0, 0, 0.15);
    margin: 1.5rem auto 2rem;
  }

  :global([data-theme='dark']) .divider {
    background: rgba(255, 255, 255, 0.15);
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    overflow: hidden;
  }

  .cover {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #f0f0f0;
  }

  .cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .cover.contain img {
    object-fit: contain;
    padding: 0.75rem;
    box-sizing: border-box;
  }

  .cover-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(108, 69, 168, 0.12), rgba(79, 172, 254, 0.12));
  }

  .cover-placeholder span {
    font-size: 2.5rem;
    opacity: 0.6;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.25rem;
  }

  :global([data-theme='dark']) .cover {
    background: #1a1a1a;
  }

  :global([data-theme='dark']) .project-card {
    background: #2d2d2d;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .project-card:hover {
    border-color: rgba(108, 69, 168, 0.4);
    box-shadow: 0 4px 16px rgba(108, 69, 168, 0.12);
    transform: translateY(-2px);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .card-top h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #6c45a8;
    line-height: 1.3;
  }

  :global([data-theme='dark']) .card-top h2 {
    color: #9d85ca;
  }

  .platform {
    flex-shrink: 0;
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    border-radius: 999px;
    background: rgba(108, 69, 168, 0.1);
    color: #6c45a8;
  }

  :global([data-theme='dark']) .platform {
    background: rgba(157, 133, 202, 0.15);
    color: #9d85ca;
  }

  .description {
    flex: 1;
    margin: 0 0 1rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: #555;
  }

  :global([data-theme='dark']) .description {
    color: #ccc;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .tag {
    font-size: 0.72rem;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: rgba(245, 158, 11, 0.15);
    color: #d97706;
  }

  :global([data-theme='dark']) .tag {
    background: rgba(245, 158, 11, 0.2);
    color: #fbbf24;
  }

  .tag.stars {
    background: rgba(108, 69, 168, 0.12);
    color: #6c45a8;
  }

  :global([data-theme='dark']) .tag.stars {
    background: rgba(157, 133, 202, 0.15);
    color: #9d85ca;
  }

  .links {
    display: flex;
    gap: 0.75rem;
    margin-top: auto;
  }

  .link {
    font-size: 0.85rem;
    padding: 0.4rem 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid rgba(108, 69, 168, 0.35);
    color: #6c45a8;
    transition: all 0.15s;
  }

  .link:hover {
    background: rgba(108, 69, 168, 0.08);
  }

  .link.primary {
    background: #6c45a8;
    border-color: #6c45a8;
    color: #fff;
  }

  .link.primary:hover {
    background: #5a3a8f;
    border-color: #5a3a8f;
  }

  :global([data-theme='dark']) .link {
    color: #9d85ca;
    border-color: rgba(157, 133, 202, 0.4);
  }

  :global([data-theme='dark']) .link.primary {
    background: #6c45a8;
    color: #fff;
  }
</style>

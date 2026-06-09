<script lang="ts">
  import githubStars from '$lib/data/github-stars.json';

  interface OpenSourceProject {
    name: string;
    description: string;
    url: string;
    githubRepo?: string;
    image?: string;
    imageFit?: 'cover' | 'contain';
    docs?: string;
    tags: string[];
    platform: 'github' | 'gitee';
  }

  const projects: OpenSourceProject[] = [
    {
      name: 'Crystal.Avalonia',
      description:
        'Avalonia 应用的轻量基础设施层：模块化架构、依赖注入、View/ViewModel 注册，AOT 友好，可与任意 MVVM 框架配合使用。',
      url: 'https://github.com/0use-TE/Crystal.Avalonia',
      githubRepo: '0use-TE/Crystal.Avalonia',
      image: '/images/opensource/crystal-avalonia.png',
      docs: 'https://0use.net/Crystal.Avalonia/',
      tags: ['Avalonia', 'C#', 'NuGet', 'MIT'],
      platform: 'github'
    },
    {
      name: 'GOZA.Dock',
      description:
        'Avalonia 轻量停靠布局库，通过 Grid + DockRegion + DockSplitter 组合面板，支持桌面与 WebAssembly 演示。',
      url: 'https://github.com/0use-TE/GOZA.Dock',
      githubRepo: '0use-TE/GOZA.Dock',
      image: '/images/opensource/goza-dock.png',
      imageFit: 'contain',
      docs: 'https://0use.net/GOZA.Dock/',
      tags: ['Avalonia', 'Dock', 'WASM', 'MIT'],
      platform: 'github'
    },
    {
      name: 'Blazor.GoldenLayout',
      description:
        'GoldenLayout.js 的 Blazor 封装，在 Blazor 项目中实现可拖拽、IDE 风格的分栏布局，支持声明式与代码配置。',
      url: 'https://github.com/0use-TE/Blazor.GoldenLayout',
      githubRepo: '0use-TE/Blazor.GoldenLayout',
      image: '/images/opensource/blazor-goldenlayout.png',
      docs: 'https://0use.net/Blazor.GoldenLayout/',
      tags: ['Blazor', 'GoldenLayout', 'NuGet', 'MIT'],
      platform: 'github'
    },
    {
      name: 'OpenCopy',
      description:
        'Windows 便携工具：在禁止粘贴的网页或软件中，通过模拟键盘输入将剪贴板内容逐字打入目标窗口，支持自定义全局快捷键。',
      url: 'https://github.com/0use-TE/OpenCopy',
      githubRepo: '0use-TE/OpenCopy',
      tags: ['Windows', '.NET', '工具', 'MIT'],
      platform: 'github'
    },
    {
      name: 'GameCollections',
      description: '游戏合集与相关资源整理，持续更新中。',
      url: 'https://gitee.com/ouse-TE/GameCollections',
      image: '/images/opensource/game-collections.png',
      tags: ['游戏', '合集'],
      platform: 'gitee'
    }
  ];

  function getStars(repo?: string): number | null {
    if (!repo) return null;
    const count = githubStars[repo as keyof typeof githubStars];
    return typeof count === 'number' ? count : null;
  }
</script>

<div class="opensource-page">
  <h1 class="title">欣赏 Ouse 的小玩意</h1>
  <p class="subtitle">开源项目一览，如果对你有用，欢迎 Star ⭐</p>

  <div class="divider"></div>

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
</div>

<style>
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

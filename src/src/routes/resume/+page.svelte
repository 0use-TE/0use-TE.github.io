<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import {
    SITE_URL,
    bio,
    internships,
    qa,
    renderProfileMarkdown,
    techStack,
    timeline
  } from '$lib/data/profile';

  const tabs = [
    { id: 'about', label: '关于我' },
    { id: 'stack', label: '技术栈' },
    { id: 'timeline', label: '时间线' },
    { id: 'work', label: '实习' },
    { id: 'ai', label: '给AI' },
    { id: 'qa', label: '问答' }
  ] as const;

  const markdownUrl = `${SITE_URL}/api/me.md`;
  const jsonUrl = `${SITE_URL}/api/me.json`;
  const markdown = renderProfileMarkdown();
  const prompt = `请先读取 ${markdownUrl} ，把它当作我的固定背景（介绍、项目、技术栈），然后根据这些信息给方案。`;

  let isShow = $state(false);
  let activeTab = $state(0);
  let copied = $state('');

  const currentTab = $derived(tabs[activeTab]?.id ?? 'about');

  $effect(() => {
    const id = $page.url.searchParams.get('tab');
    const index = tabs.findIndex((tab) => tab.id === id);
    if (index >= 0) {
      isShow = true;
      activeTab = index;
    }
  });

  function selectTab(index: number) {
    activeTab = index;
    goto(`/resume?tab=${tabs[index].id}`, { replaceState: true, keepFocus: true, noScroll: true });
  }

  function enter() {
    isShow = true;
    goto(`/resume?tab=${tabs[activeTab].id}`, { replaceState: true, keepFocus: true, noScroll: true });
  }

  async function copy(text: string, id: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.left = '-9999px';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      copied = id;
      setTimeout(() => {
        if (copied === id) copied = '';
      }, 1600);
    } catch (error) {
      console.error('Copy failed:', error);
      copied = 'fail';
      setTimeout(() => {
        if (copied === 'fail') copied = '';
      }, 1600);
    }
  }
</script>

<svelte:head>
  <title>简历 · Ouse</title>
</svelte:head>

<div class="resume-page">
  {#if !isShow}
    <div class="intro">
      <h1 class="title">
        从 <span class="highlight">0</span> 到 Use
      </h1>
      <p class="subtitle">踏上0use的学习旅程!</p>
      <button class="enter-btn" onclick={enter}>
        前往
        <span class="arrow">→</span>
      </button>
    </div>
  {:else}
    <div class="content">
      <h2 class="roadmap-title">查看我的RoadMap</h2>

      <!-- 标签页 -->
      <div class="tabs">
        {#each tabs as tab, index}
          <button
            class="tab"
            class:active={activeTab === index}
            onclick={() => selectTab(index)}
          >
            {tab.label}
          </button>
        {/each}
      </div>

      <!-- 标签页内容 -->
      <div class="tab-content">
        {#if currentTab === 'about'}
          <div class="tab-panel bio-panel">
            {#each bio as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        {:else if currentTab === 'stack'}
          <div class="tab-panel">
            <div class="tech-grid">
              {#each techStack as group}
                <div class="tech-category">
                  <h3>{group.category}</h3>
                  <div class="tech-tags">
                    {#each group.items as item}
                      <span class="tag">{item}</span>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {:else if currentTab === 'timeline'}
          <div class="tab-panel">
            <div class="timeline">
              {#each timeline as item}
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <h4>{item.title}</h4>
                    <p class="timeline-date">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {:else if currentTab === 'work'}
          <div class="tab-panel">
            {#each internships as job}
              <div class="internship">
                <div class="company">
                  <h3>{job.company}</h3>
                  <p class="position">{job.role}</p>
                  <p class="time">{job.time}</p>
                </div>
                <div class="description">
                  <p>{job.description}</p>
                </div>
              </div>
            {/each}
          </div>
        {:else if currentTab === 'ai'}
          <div class="tab-panel ai-panel">
            <p class="ai-lead">把这一条发给 AI，它就能读到我的介绍、项目和技术栈。</p>
            <div class="ai-link">
              <code>{markdownUrl}</code>
              <button type="button" class="copy-btn primary" onclick={() => copy(markdownUrl, 'md')}>
                {copied === 'md' ? '已复制' : copied === 'fail' ? '复制失败' : '复制链接'}
              </button>
            </div>
            <div class="ai-actions">
              <button type="button" class="copy-btn" onclick={() => copy(prompt, 'prompt')}>
                {copied === 'prompt' ? '已复制' : '复制提示词'}
              </button>
              <a class="copy-btn ghost" href="/api/me.md" target="_blank" rel="noopener noreferrer external" data-sveltekit-reload>打开 Markdown</a>
              <a class="copy-btn ghost" href={jsonUrl} target="_blank" rel="noopener noreferrer external" data-sveltekit-reload>打开 JSON</a>
            </div>
            <p class="ai-hint">1. 复制链接　2. 发给 Cursor / ChatGPT / Claude　3. 直接说需求，不必再介绍自己</p>
            <pre class="ai-preview">{markdown}</pre>
          </div>
        {:else}
          <div class="tab-panel">
            {#each qa as item}
              <div class="qa-item">
                <h4>Q: {item.question}</h4>
                <p>A: {item.answer}</p>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .resume-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    padding-bottom: 80px;
    color: #333;
    overflow-y: auto;
  }

  :global([data-theme="dark"]) .resume-page {
    color: #fff;
  }

  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px);
    text-align: center;
  }

  .title {
    font-size: 3rem;
    font-weight: 900;
    color: #333;
    margin-bottom: 0.5rem;
  }

  :global([data-theme="dark"]) .title {
    color: #fff;
  }

  .highlight {
    color: #6c45a8;
    font-size: 3.5rem;
  }

  :global([data-theme="dark"]) .highlight {
    color: #9d85ca;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 800;
    color: #333;
    opacity: 0.8;
    margin-bottom: 2rem;
  }

  :global([data-theme="dark"]) .subtitle {
    color: #fff;
  }

  .enter-btn {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    border: 2px solid #6c45a8;
    border-radius: 8px;
    background: transparent;
    color: #6c45a8;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .enter-btn:hover {
    background: #6c45a8;
    color: white;
  }

  :global([data-theme="dark"]) .enter-btn:hover {
    background: #9d85ca;
  }

  .arrow {
    transition: transform 0.3s;
  }

  .enter-btn:hover .arrow {
    transform: translateX(4px);
  }

  .content {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .roadmap-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1.5rem;
  }

  :global([data-theme="dark"]) .roadmap-title {
    color: #fff;
  }

  .tabs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .tab {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    background: transparent;
    color: #333;
    cursor: pointer;
    transition: all 0.2s;
  }

  :global([data-theme="dark"]) .tab {
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  .tab:hover {
    border-color: #6c45a8;
  }

  .tab.active {
    border-color: #6c45a8;
    background: #6c45a8;
    color: white;
  }

  .tab-content {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    max-height: 60vh;
    overflow-y: auto;
  }

  :global([data-theme="dark"]) .tab-content {
    background: #2d2d2d;
  }

  .tab-panel {
    color: #333;
    line-height: 1.8;
  }

  :global([data-theme="dark"]) .tab-panel {
    color: #fff;
  }

  .tab-panel p {
    margin-bottom: 1rem;
  }

  .bio-panel p {
    text-indent: 2rem;
  }

  .tech-grid {
    display: grid;
    gap: 1.5rem;
  }

  .tech-category h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #6c45a8;
    margin-bottom: 0.75rem;
  }

  :global([data-theme="dark"]) .tech-category h3 {
    color: #9d85ca;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    padding: 0.25rem 0.75rem;
    font-size: 0.85rem;
    background: rgba(108, 69, 168, 0.1);
    color: #6c45a8;
    border-radius: 999px;
  }

  :global([data-theme="dark"]) .tag {
    background: rgba(157, 133, 202, 0.2);
    color: #9d85ca;
  }

  .timeline {
    position: relative;
    padding-left: 2rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(108, 69, 168, 0.3);
  }

  :global([data-theme="dark"]) .timeline::before {
    background: rgba(157, 133, 202, 0.3);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .timeline-dot {
    position: absolute;
    left: -2rem;
    top: 0.25rem;
    width: 12px;
    height: 12px;
    background: #6c45a8;
    border-radius: 50%;
    transform: translateX(-5px);
  }

  :global([data-theme="dark"]) .timeline-dot {
    background: #9d85ca;
  }

  .timeline-content h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }

  :global([data-theme="dark"]) .timeline-content h4 {
    color: #fff;
  }

  .timeline-content p {
    margin: 0;
    text-indent: 0;
    opacity: 0.8;
  }

  .timeline-date {
    font-size: 0.85rem;
    color: #6c45a8;
    font-weight: 500;
    margin-bottom: 0.25rem !important;
  }

  :global([data-theme="dark"]) .timeline-date {
    color: #9d85ca;
  }

  .qa-item {
    margin-bottom: 1.5rem;
  }

  .qa-item h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #6c45a8;
    margin-bottom: 0.5rem;
  }

  :global([data-theme="dark"]) .qa-item h4 {
    color: #9d85ca;
  }

  .qa-item p {
    margin: 0;
    text-indent: 0;
  }

  .internship {
    text-align: center;
    padding: 2rem;
  }

  .company h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #6c45a8;
    margin-bottom: 0.5rem;
  }

  :global([data-theme="dark"]) .company h3 {
    color: #9d85ca;
  }

  .position {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }

  :global([data-theme="dark"]) .position {
    color: #fff;
  }

  .time {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
  }

  :global([data-theme="dark"]) .time {
    color: #aaa;
  }

  .description p {
    font-size: 1rem;
    line-height: 1.8;
    color: #555;
  }

  :global([data-theme="dark"]) .description p {
    color: #ccc;
  }

  .ai-lead {
    text-indent: 0;
    margin-bottom: 1rem;
  }

  .ai-link {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    padding: 0.85rem 1rem;
    border-radius: 10px;
    border: 1px solid rgba(108, 69, 168, 0.25);
    margin-bottom: 0.9rem;
  }

  .ai-link code {
    flex: 1;
    min-width: 180px;
    word-break: break-all;
    color: #6c45a8;
  }

  :global([data-theme='dark']) .ai-link code {
    color: #9d85ca;
  }

  .ai-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 0.75rem;
  }

  .copy-btn {
    border: 2px solid #6c45a8;
    border-radius: 8px;
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
    font-weight: 600;
    background: transparent;
    color: #6c45a8;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }

  .copy-btn.primary,
  .copy-btn:hover {
    background: #6c45a8;
    color: #fff;
  }

  .copy-btn.ghost {
    border-color: rgba(0, 0, 0, 0.16);
    color: #333;
  }

  .copy-btn.ghost:hover {
    background: rgba(108, 69, 168, 0.08);
    color: #6c45a8;
  }

  :global([data-theme='dark']) .copy-btn.ghost {
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  .ai-hint {
    text-indent: 0;
    font-size: 0.9rem;
    opacity: 0.75;
    margin-bottom: 1rem;
  }

  .ai-preview {
    margin: 0;
    padding: 1rem;
    border-radius: 10px;
    background: rgba(108, 69, 168, 0.04);
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 0.8rem;
    line-height: 1.65;
    max-height: 32vh;
    overflow: auto;
  }

  :global([data-theme='dark']) .ai-preview {
    background: rgba(157, 133, 202, 0.08);
  }
</style>

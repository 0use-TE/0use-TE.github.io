<script lang="ts">
  let isShow = $state(false);
  let activeTab = $state(0);

  const tabs = ['我是？', '技术栈', '时间线', '实习', 'Q&A'];
</script>

<div class="resume-page">
  {#if !isShow}
    <div class="intro">
      <h1 class="title">
        从 <span class="highlight">0</span> 到 Use
      </h1>
      <p class="subtitle">踏上0use的学习旅程!</p>
      <button class="enter-btn" onclick={() => isShow = true}>
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
            onclick={() => activeTab = index}
          >
            {tab}
          </button>
        {/each}
      </div>

      <!-- 标签页内容 -->
      <div class="tab-content">
        {#if activeTab === 0}
          <!-- 我是？ -->
          <div class="tab-panel">
            <p>👋 你好，我是Ouse，一名热爱 .NET 的开发者，代码如诗，架构如画。我热爱微软技术栈，后端用 Web API，前端玩 MudBlazor，偶尔还会折腾 Unity。</p>
            <p>说起我啊，从小就喜欢玩游戏，喜欢摆弄电脑。13 岁那年，我便开始折腾装机，学习各种电脑组装知识，给别人配电脑💻、装系统 ，完全不在话下。</p>
            <p>到了高中，我开始接触编程，但奈何学业繁忙，没能坚持太久……直到上了大学，我终于彻底沉迷在了编程的世界。</p>
            <p>除了写代码，我还养了一只名叫 Code（扣嘚）的非洲迷你刺猬🦔，它是我调试 bug 时最忠实的听众。我喜欢生椰拿铁☕，喜欢音乐，喜欢一切能让世界变得更有秩序的东西。</p>
          </div>
        {:else if activeTab === 1}
          <!-- 技术栈 -->
          <div class="tab-panel">
            <div class="tech-grid">
              <div class="tech-category">
                <h3>后端</h3>
                <div class="tech-tags">
                  <span class="tag">C#</span>
                  <span class="tag">.NET</span>
                  <span class="tag">ASP.NET Core</span>
                  <span class="tag">Web API</span>
                </div>
              </div>
              <div class="tech-category">
                <h3>前端</h3>
                <div class="tech-tags">
                  <span class="tag">Blazor</span>
                  <span class="tag">Svelte</span>
                  <span class="tag">TypeScript</span>
                  <span class="tag">HTML/CSS</span>
                </div>
              </div>
              <div class="tech-category">
                <h3>工具</h3>
                <div class="tech-tags">
                  <span class="tag">Git</span>
                  <span class="tag">Docker</span>
                  <span class="tag">VS Code</span>
                  <span class="tag">Unity</span>
                  <span class="tag">Avalonia</span>
                  <span class="tag">Godot</span>
                </div>
              </div>
            </div>
          </div>
        {:else if activeTab === 2}
          <!-- 时间线 -->
          <div class="tab-panel">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>至今-大学毕业</h4>
                  <p class="timeline-date">至今</p>
                  <p>学通Dotnet框架,掌握微软技术栈</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>准备实习</h4>
                  <p class="timeline-date">2025-12-20</p>
                  <p>已找到实习单位，将AI与Avalonia结合，打造最前沿的上位机系统</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>上位机和Godot</h4>
                  <p class="timeline-date">2025-9-12</p>
                  <p>使用Godot来构建我自己的游戏，同时学习Avalonia，开发原生应用</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>完成一款日流量千人应用</h4>
                  <p class="timeline-date">2025-8-20</p>
                  <p>使用Blazor接入科大讯飞Authentication，为北京丰台教育云平台打造了一款AI对话平台，接入各种大模型，学生，老师已初步使用</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>Avalonia And PlatformIO</h4>
                  <p class="timeline-date">2025-6-12</p>
                  <p>期间全面学习Avalonia和platformIO,制作原生应用</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>学习Asp.Net</h4>
                  <p class="timeline-date">2025-3-12</p>
                  <p>期间疯狂学习.Net框架(主要是Asp.Net方面),啃MudBlazor源码,做网站,学会使用nanoFramework</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>通过软件设计师,做出了第一款前后端,数据库的综合Web</h4>
                  <p class="timeline-date">2024-12-30</p>
                  <p>期间简单学习了MySql,UML,ER</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>前端强化学习</h4>
                  <p class="timeline-date">2024-9-1</p>
                  <p>学习玩JS后，开始接触Blazor和微信小程序,发现了Blazor的组件库MudBlazor</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>开始学习.Net</h4>
                  <p class="timeline-date">2024-7-1</p>
                  <p>寒假期间,接触了Asp.Net Core,学习Entity Framework Core,打通了后端与数据库</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>通过软件考试程序员</h4>
                  <p class="timeline-date">2024-6-20</p>
                  <p>期间多了多款游戏(包括一款基于Photon的联网游戏),学习设计模式,数据流图等软件知识,Linux正常使用也不在话下了</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>通过计算机二级,开始学习Linux</h4>
                  <p class="timeline-date">2024-3</p>
                  <p>期间参加了一次游戏开发比赛,让我意识到了自己编程水平太差,也发现了我并不喜欢搞嵌入式.语言太低效,我不喜欢。</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>前端,计算机网络</h4>
                  <p class="timeline-date">2023-12-20</p>
                  <p>C语言高一段落了,同时C#,PLC也都懂了一些</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>算法和数据结构,PLC,嵌入式</h4>
                  <p class="timeline-date">2023-11-20</p>
                  <p>漫长的数算学习开始了，同时学习PLC Smart200,51,Stm32</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>加入游戏开发部</h4>
                  <p class="timeline-date">2023-10-20</p>
                  <p>C语言基础语法学完,加入游戏开发部，开始学习C#和Unity</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>C语言</h4>
                  <p class="timeline-date">2023-9-11</p>
                  <p>大一开始学习C语言</p>
                </div>
              </div>
            </div>
          </div>
        {:else if activeTab === 3}
          <!-- 实习 -->
          <div class="tab-panel">
            <div class="internship">
              <div class="company">
                <h3>浙江湖州安吉酷爱智能科技</h3>
                <p class="position">软件工程师</p>
                <p class="time">2025 - 现在</p>
              </div>
              <div class="description">
                <p>担任软件工程师，负责公司智能系统软件开发</p>
              </div>
            </div>
          </div>
        {:else}
          <!-- Q&A -->
          <div class="tab-panel">
            <div class="qa-item">
              <h4>Q: 为什么叫 Ouse?</h4>
              <p>A: Ouse 来自 "0 use"，象征从零开始学习和使用技术的旅程。</p>
            </div>
            <div class="qa-item">
              <h4>Q: 你的学习目标是什么?</h4>
              <p>A: 成为全栈开发者，专注于 .NET 生态系统，同时探索前端新技术。</p>
            </div>
            <div class="qa-item">
              <h4>Q: 如何联系你?</h4>
              <p>A: 可以在 GitHub 上给我发 issue，或者通过博客的联系方式找到我。</p>
            </div>
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
</style>

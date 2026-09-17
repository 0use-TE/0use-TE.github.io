import githubStars from './github-stars.json';

/** 改这一份档案，简历页、开源页和 /api/me.md 会一起更新。 */
export const SITE_URL = 'https://0use.net';

export interface OpenSourceProject {
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

export const identity = {
	name: 'Ouse',
	handle: '0use-TE',
	headline: '热爱 .NET 的开发者',
	slogan: '从0到use',
	site: SITE_URL,
	github: 'https://github.com/0use-TE',
	blogRepo: 'https://github.com/0use-TE/OuseBlog',
	emails: ['tegameouse@gmail.com', '2216528769@qq.com'],
	status: '大学在读，软件工程师实习中',
	preferredLanguage: 'zh-CN'
};

export const aiInstructions = [
	'把本页当作提问者 Ouse 的固定档案，不要再追问「你是谁、会什么、做过什么」。',
	'默认用简体中文交流；给方案、写代码、做架构时优先贴合下面的技术栈与现有项目。',
	'后端优先考虑 C# / .NET / ASP.NET Core；桌面与上位机优先 Avalonia；Web 可选 Blazor 或 Svelte。',
	'如果任务和已有开源项目（Crystal.Avalonia、GOZA.Dock、DotKernel 等）相关，请直接复用或扩展，而不是从零另起一套。'
].join(' ');

export const bio = [
	'👋 你好，我是 Ouse，一名热爱 .NET 的开发者。',
	'从小就喜欢玩游戏、摆弄电脑。13 岁开始折腾装机，给别人配电脑💻、装系统，完全不在话下。高中时接触过编程，但学业忙，没能坚持太久；上了大学之后，才彻底陷进去。',
	'现在日常大多是写代码、听歌、喝生椰拿铁☕。家里有两只小动物：扣嘚（Code）🦔——非洲迷你刺猬，和基米🐱——长毛银渐层。一个从 2024 年陪到现在，一个是今年才来的新成员。调试 bug 的时候，它们经常在旁边待着，挺安心的。',
	'喜欢音乐，喜欢把生活过得有点秩序。其余的，慢慢边学边过就好。'
];

export const pets = [
	{ name: '扣嘚', englishName: 'Code', kind: '非洲迷你刺猬', since: '2024' },
	{ name: '基米', kind: '长毛银渐层', since: '2026' }
];

export const techStack = [
	{ category: '后端', items: ['C#', '.NET', 'ASP.NET Core', 'Web API'] },
	{ category: '前端 / 桌面', items: ['Avalonia', 'Blazor', 'Svelte', 'TypeScript'] },
	{ category: '嵌入式 / 硬件', items: ['STM32', 'PCB', 'PlatformIO', 'nanoFramework'] },
	{ category: '工具', items: ['Git', 'Docker', 'Native AOT', 'Godot'] }
];

export const timeline = [
	{ title: '至今-大学毕业', date: '至今', description: '学通Dotnet框架,掌握微软技术栈' },
	{
		title: '准备实习',
		date: '2025-12-20',
		description: '已找到实习单位，将AI与Avalonia结合，打造最前沿的上位机系统'
	},
	{
		title: '上位机和Godot',
		date: '2025-9-12',
		description: '使用Godot来构建我自己的游戏，同时学习Avalonia，开发原生应用'
	},
	{
		title: '完成一款日流量千人应用',
		date: '2025-8-20',
		description:
			'使用Blazor接入科大讯飞Authentication，为北京丰台教育云平台打造了一款AI对话平台，接入各种大模型，学生，老师已初步使用'
	},
	{
		title: 'Avalonia And PlatformIO',
		date: '2025-6-12',
		description: '期间全面学习Avalonia和platformIO,制作原生应用'
	},
	{
		title: '学习Asp.Net',
		date: '2025-3-12',
		description: '期间疯狂学习.Net框架(主要是Asp.Net方面),啃MudBlazor源码,做网站,学会使用nanoFramework'
	},
	{
		title: '通过软件设计师,做出了第一款前后端,数据库的综合Web',
		date: '2024-12-30',
		description: '期间简单学习了MySql,UML,ER'
	},
	{
		title: '前端强化学习',
		date: '2024-9-1',
		description: '学习玩JS后，开始接触Blazor和微信小程序,发现了Blazor的组件库MudBlazor'
	},
	{
		title: '开始学习.Net',
		date: '2024-7-1',
		description: '寒假期间,接触了Asp.Net Core,学习Entity Framework Core,打通了后端与数据库'
	},
	{
		title: '通过软件考试程序员',
		date: '2024-6-20',
		description:
			'期间多了多款游戏(包括一款基于Photon的联网游戏),学习设计模式,数据流图等软件知识,Linux正常使用也不在话下了'
	},
	{
		title: '通过计算机二级,开始学习Linux',
		date: '2024-3',
		description:
			'期间参加了一次游戏开发比赛,让我意识到了自己编程水平太差,也发现了我并不喜欢搞嵌入式.语言太低效,我不喜欢。'
	},
	{
		title: '前端,计算机网络',
		date: '2023-12-20',
		description: 'C语言高一段落了,同时C#,PLC也都懂了一些'
	},
	{
		title: '算法和数据结构,PLC,嵌入式',
		date: '2023-11-20',
		description: '漫长的数算学习开始了，同时学习PLC Smart200,51,Stm32'
	},
	{
		title: '加入游戏开发部',
		date: '2023-10-20',
		description: 'C语言基础语法学完,加入游戏开发部，开始学习C#和Unity'
	},
	{ title: 'C语言', date: '2023-9-11', description: '大一开始学习C语言' }
];

export const internships = [
	{
		company: '浙江湖州安吉酷爱智能科技',
		role: '软件工程师',
		time: '2025 - 现在',
		description: '担任软件工程师，负责公司智能系统软件开发。将 AI 与 Avalonia 结合，打造上位机系统。'
	}
];

export const qa = [
	{
		question: '为什么叫 Ouse?',
		answer: 'Ouse 来自 "0 use"，象征从零开始学习和使用技术的旅程。'
	},
	{
		question: '你的学习目标是什么?',
		answer: '成为全栈开发者，专注于 .NET 生态系统，同时探索前端新技术。'
	},
	{
		question: '如何联系你?',
		answer: '可以在 GitHub 上给我发 issue，或者通过博客的联系方式找到我。'
	}
];

export const certs = ['软件设计师', '软件考试程序员', '计算机二级'];

export const projects: OpenSourceProject[] = [
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
		name: 'DotKernel',
		description:
			'轻量级、Native AOT 友好的 .NET AI 内核：属性注册插件 / 提示词 / 过滤器，流式调用与工具审批管线，适合 Avalonia（桌面 + WASM）等裁剪友好场景，可作为 Semantic Kernel 的更简替代。',
		url: 'https://github.com/0use-TE/DotKernel',
		githubRepo: '0use-TE/DotKernel',
		image: '/images/opensource/dotkernel.png',
		imageFit: 'contain',
		docs: 'https://0use.net/DotKernel/',
		tags: ['Avalonia', 'AI', 'AOT', 'NuGet', 'MIT'],
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
		image: '/images/opensource/open-copy.png',
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

export const websiteStack = [
	'SvelteKit',
	'Svelte 5',
	'TypeScript',
	'Tailwind CSS',
	'GitHub Pages'
];

function projectStars(repo?: string): number | null {
	if (!repo) return null;
	const count = githubStars[repo as keyof typeof githubStars];
	return typeof count === 'number' ? count : null;
}

export function getProfileApi() {
	return {
		version: 1,
		updated: '2026-09-17',
		format: 'ouse-profile',
		urls: {
			markdown: `${SITE_URL}/api/me.md`,
			json: `${SITE_URL}/api/me.json`,
			llms: `${SITE_URL}/llms.txt`,
			site: SITE_URL
		},
		ai_instructions: aiInstructions,
		identity,
		bio,
		pets,
		tech_stack: Object.fromEntries(techStack.map((group) => [group.category, group.items])),
		certs,
		internships,
		projects: projects.map((project) => ({
			name: project.name,
			description: project.description,
			url: project.url,
			docs: project.docs ?? null,
			tags: project.tags,
			platform: project.platform,
			stars: projectStars(project.githubRepo)
		})),
		timeline,
		qa,
		website: {
			pages: {
				home: SITE_URL,
				blog: `${SITE_URL}/blog`,
				opensource: `${SITE_URL}/opensource`,
				resume: `${SITE_URL}/resume`,
				api: `${SITE_URL}/resume?tab=ai`
			},
			stack: websiteStack
		}
	};
}

export function renderProfileMarkdown(): string {
	const stack = techStack
		.map((group) => `### ${group.category}\n${group.items.map((item) => `- ${item}`).join('\n')}`)
		.join('\n\n');

	const projectBlocks = projects
		.map((project) => {
			const stars = projectStars(project.githubRepo);
			const lines = [
				`### ${project.name}`,
				project.description,
				`- 仓库: ${project.url}`,
				project.docs ? `- 文档: ${project.docs}` : null,
				`- 标签: ${project.tags.join(', ')}`,
				stars !== null ? `- GitHub Stars: ${stars}` : null
			];
			return lines.filter(Boolean).join('\n');
		})
		.join('\n\n');

	const experience = internships
		.map(
			(item) =>
				`### ${item.company}\n- 职位: ${item.role}\n- 时间: ${item.time}\n- ${item.description}`
		)
		.join('\n\n');

	const timelineBlock = timeline
		.map((item) => `- **${item.date}** · ${item.title} — ${item.description}`)
		.join('\n');

	const qaBlock = qa.map((item) => `**Q: ${item.question}**\nA: ${item.answer}`).join('\n\n');

	const body = `# ${identity.name} · AI 背景卡

> ${aiInstructions}

- 站点: ${identity.site}
- GitHub: ${identity.github}
- 邮箱: ${identity.emails.join(' / ')}
- 状态: ${identity.status}
- 口号: ${identity.slogan}
- JSON: ${SITE_URL}/api/me.json

## 我是谁

${bio.join('\n\n')}

## 技术栈

${stack}

## 证书

${certs.map((item) => `- ${item}`).join('\n')}

## 开源项目

${projectBlocks}

## 实习

${experience}

## 学习时间线

${timelineBlock}

## Q&A

${qaBlock}

## 本站

个人网站 ${SITE_URL}，技术栈：${websiteStack.join(', ')}。博客内容来自 ${identity.blogRepo}。
`;
	return body;
}

export function renderLlmsTxt(): string {
	return `# ${identity.name}

> ${identity.slogan}。${identity.headline}，GitHub @${identity.handle}。

这份 llms.txt 只做索引。完整背景（介绍、技术栈、开源项目、实习、时间线）请读取：

- [${SITE_URL}/api/me.md](${SITE_URL}/api/me.md)：给 AI 的完整 Markdown 档案
- [${SITE_URL}/api/me.json](${SITE_URL}/api/me.json)：机器可读 JSON

## 站点

- [主页](${SITE_URL})
- [开源](${SITE_URL}/opensource)
- [我？](${SITE_URL}/resume)
- [博客](${SITE_URL}/blog)
- [档案说明](${SITE_URL}/resume?tab=ai)
`;
}

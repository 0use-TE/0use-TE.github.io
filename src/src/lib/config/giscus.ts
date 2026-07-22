export const GISCUS_CONFIG = {
	repo: '0use-TE/0use-TE.github.io',
	repoId: 'R_kgDOOGo-PQ',
	category: 'General',
	categoryId: 'DIC_kwDOOGo-Pc4C-pIs',
	mapping: 'pathname' as const,
	strict: '0',
	reactionsEnabled: '1',
	emitMetadata: '0',
	inputPosition: 'bottom' as const,
	lang: 'zh-CN'
};

export function isGiscusConfigured(): boolean {
	return Boolean(GISCUS_CONFIG.repoId && GISCUS_CONFIG.categoryId);
}

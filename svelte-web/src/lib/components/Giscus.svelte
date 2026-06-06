<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { theme } from '$lib/stores/theme';
	import { GISCUS_CONFIG, isGiscusConfigured } from '$lib/config/giscus';

	let container = $state<HTMLDivElement | undefined>();
	let mounted = $state(false);
	let scriptEl: HTMLScriptElement | null = null;

	/** 站点有手动明暗切换，映射到 giscus 主题 */
	function giscusTheme(value: string) {
		return value === 'dark' ? 'dark' : 'light';
	}

	function cleanupGiscus() {
		document.querySelectorAll('iframe.giscus-frame').forEach((el) => el.remove());
		if (container) container.innerHTML = '';
		if (scriptEl) {
			scriptEl.remove();
			scriptEl = null;
		}
	}

	function loadGiscus(themeValue: string) {
		if (!browser || !container || !isGiscusConfigured()) return;

		cleanupGiscus();

		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.crossOrigin = 'anonymous';
		script.async = true;
		script.setAttribute('data-repo', GISCUS_CONFIG.repo);
		script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
		script.setAttribute('data-category', GISCUS_CONFIG.category);
		script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
		script.setAttribute('data-mapping', GISCUS_CONFIG.mapping);
		script.setAttribute('data-strict', GISCUS_CONFIG.strict);
		script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled);
		script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata);
		script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition);
		script.setAttribute('data-theme', giscusTheme(themeValue));
		script.setAttribute('data-lang', GISCUS_CONFIG.lang);

		container.className = 'giscus';
		container.appendChild(script);
		scriptEl = script;
	}

	function sendGiscusMessage(message: Record<string, unknown>) {
		const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
		iframe?.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
	}

	function syncRoute() {
		if (!browser || !isGiscusConfigured()) return;

		const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
		if (!iframe) return;

		sendGiscusMessage({
			setConfig: {
				term: `${window.location.pathname}${window.location.search}`
			}
		});
	}

	function syncTheme(themeValue: string) {
		sendGiscusMessage({
			setConfig: { theme: giscusTheme(themeValue) }
		});
	}

	onMount(() => {
		if (!isGiscusConfigured()) return;

		const siteTheme = get(theme);
		loadGiscus(siteTheme);
		mounted = true;

		const unsubscribeTheme = theme.subscribe((value) => {
			syncTheme(value);
		});

		return () => {
			unsubscribeTheme();
			cleanupGiscus();
		};
	});

	$effect(() => {
		if (!mounted || !browser || !isGiscusConfigured()) return;
		$page.url.pathname;
		syncRoute();
	});
</script>

{#if isGiscusConfigured()}
	<section class="giscus-section" aria-label="评论">
		<h2 class="giscus-title">评论</h2>
		<div bind:this={container} class="giscus-host"></div>
	</section>
{/if}

<style>
	.giscus-section {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	:global([data-theme='dark']) .giscus-section {
		border-top-color: rgba(255, 255, 255, 0.1);
	}

	.giscus-title {
		margin: 0 0 1.25rem;
		font-size: 1.25rem;
		font-weight: 600;
		color: #6c45a8;
	}

	:global([data-theme='dark']) .giscus-title {
		color: #9d85ca;
	}

	.giscus-host {
		min-height: 120px;
	}
</style>

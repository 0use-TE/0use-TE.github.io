<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import MusicPlayer from '$lib/components/MusicPlayer.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let { children } = $props();

	// 初始化主题
	onMount(() => {
		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
</script>

<Loader />

<svelte:head>
	<link rel="icon" href="/images/Code.jpg" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<main class="main-content">
	{@render children()}
</main>

<MusicPlayer />

<style>
	.main-content {
		padding-top: 64px;
		padding-bottom: 70px;
		min-height: 100vh;
		background: #f5f5f5;
		color: #333;
	}

	:global([data-theme="dark"]) .main-content {
		background: #1a1a1a;
		color: #fff;
	}
</style>

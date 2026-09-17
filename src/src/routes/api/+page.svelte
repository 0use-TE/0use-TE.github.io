<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/resume?tab=ai', { replaceState: true });
  });
</script>

<p class="jump">跳转到 我？ · 给AI...</p>

<style>
  .jump {
    text-align: center;
    padding: 4rem 1rem;
    opacity: 0.6;
  }
</style>

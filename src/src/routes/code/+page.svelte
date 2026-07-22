<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/code/code', { replaceState: true });
  });
</script>

<p style="text-align:center;padding:3rem;opacity:0.6">跳转中...</p>

<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  // 允许的路径
  const allowedPaths = ['/', '/blog', '/opensource', '/resume', '/code', '/404'];

  onMount(() => {
    const path = window.location.pathname;

    // 如果路径不在允许列表中
    if (!allowedPaths.includes(path)) {
      const pathParts = path.split('/').filter(Boolean);
      if (pathParts.length === 1) {
        // 单层路径（如 /v2），重定向到 /blog?b=xxx
        const filter = pathParts[0];
        goto(`/blog?b=${encodeURIComponent(filter)}`);
      } else {
        // 多层路径，重定向到 /blog
        goto('/blog');
      }
    }
  });
</script>

<div>加载中...</div>

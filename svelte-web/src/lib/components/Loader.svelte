<script lang="ts">
  import { onMount } from 'svelte';

  let visible = $state(true);

  onMount(() => {
    setTimeout(() => {
      visible = false;
    }, 400);
  });
</script>

{#if visible}
  <div class="loader-overlay">
    <div class="loader-content">
      <div class="spinner-ring"></div>
      <p class="loader-text">Loading...</p>
    </div>
  </div>
{/if}

<style>
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeOut 0.3s ease 0.4s forwards;
  }

  :global([data-theme="dark"]) .loader-overlay {
    background: #1a1a1a;
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }

  .loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .spinner-ring {
    width: 40px;
    height: 40px;
    border: 3px solid #f0f0f0;
    border-top-color: #333;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  :global([data-theme="dark"]) .spinner-ring {
    border-color: #333;
    border-top-color: #fff;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loader-text {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }

  :global([data-theme="dark"]) .loader-text {
    color: #aaa;
  }
</style>

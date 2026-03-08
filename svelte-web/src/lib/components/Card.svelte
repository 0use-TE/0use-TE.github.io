<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    icon: string;
    description: string;
    href: string;
    onclick?: () => void;
  }

  let { title, icon, description, href, onclick }: Props = $props();
</script>

<a {href} class="card" {onclick}>
  <div class="card-header">
    <h3>{title}</h3>
    <span class="icon">{icon}</span>
  </div>
  <div class="card-content">
    <p>{@html description}</p>
  </div>
</a>

<style>
  .card {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 12px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 100%;
  }

  :global([data-theme="dark"]) .card {
    background: #2d2d2d;
    border-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .card:hover {
    box-shadow: 0 0 15px 5px rgba(79, 172, 254, 0.4),
                0 0 25px 10px rgba(79, 172, 254, 0.2);
    transform: translateY(-4px);
    border-color: rgba(108, 69, 168, 0.3);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .card-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  :global([data-theme="dark"]) .card-header h3 {
    color: #fff;
  }

  .icon {
    font-size: 1.5rem;
  }

  .card-content p {
    color: #333;
    opacity: 0.8;
    line-height: 1.6;
    margin: 0;
  }

  :global([data-theme="dark"]) .card-content p {
    color: #fff;
  }
</style>

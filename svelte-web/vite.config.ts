import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [sveltekit(), compression()],
	server: {
		proxy: {
			'/blog-api': {
				target: 'https://raw.githubusercontent.com',
				changeOrigin: true,
				rewrite: (path) => {
					if (path.startsWith('/blog-api/generated')) {
						return '/0use-TE/OuseBlog/refs/heads' + path.replace('/blog-api', '');
					}
					return '/0use-TE/OuseBlog/refs/heads/main' + path.replace('/blog-api', '');
				}
			}
		}
	}
});

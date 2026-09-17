import { renderProfileMarkdown } from '$lib/data/profile';

export const prerender = true;

export function GET() {
	return new Response(`\uFEFF${renderProfileMarkdown()}`, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

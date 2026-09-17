import { renderLlmsTxt } from '$lib/data/profile';

export const prerender = true;

export function GET() {
	return new Response(`\uFEFF${renderLlmsTxt()}`, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

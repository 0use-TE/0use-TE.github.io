import { getProfileApi } from '$lib/data/profile';

export const prerender = true;

export function GET() {
	return new Response(JSON.stringify(getProfileApi(), null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

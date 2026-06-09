import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repos = [
	'0use-TE/Crystal.Avalonia',
	'0use-TE/GOZA.Dock',
	'0use-TE/Blazor.GoldenLayout',
	'0use-TE/OpenCopy'
];

const outFile = join(dirname(fileURLToPath(import.meta.url)), '../src/lib/data/github-stars.json');

async function fetchStars(repo) {
	const res = await fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			Accept: 'application/vnd.github+json',
			'User-Agent': '0use-TE.github.io-build'
		}
	});

	if (!res.ok) {
		console.warn(`Failed to fetch ${repo}: ${res.status}`);
		return null;
	}

	const data = await res.json();
	return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
}

const stars = {};

for (const repo of repos) {
	const count = await fetchStars(repo);
	if (count !== null) stars[repo] = count;
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, `${JSON.stringify(stars, null, 2)}\n`);
console.log('Wrote github-stars.json:', stars);

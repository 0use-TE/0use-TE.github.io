import { writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '../static/images');
const outFile = join(__dirname, '../src/lib/data/pet-photos.json');

const imageExts = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.bmp']);

function readImages(dir, prefix) {
  const fullDir = join(imagesDir, dir);
  try {
    const files = readdirSync(fullDir);
    return files
      .filter(f => imageExts.has(extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', { numeric: true }))
      .map(f => `${prefix}/${f}`);
  } catch {
    return [];
  }
}

const manifest = {
  code: readImages('code', '/images/code'),
  jimi: readImages('jimi', '/images/jimi'),
  together: readImages('together', '/images/together')
};

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, `${JSON.stringify(manifest, null, 2)}\n`);
console.log('Wrote pet-photos.json:', manifest);
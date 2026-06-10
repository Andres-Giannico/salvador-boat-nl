import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = '/Users/andresgiannico/Documents';
const OUTPUT_DIR = 'public/images/optimized';
const MAX_WIDTH = 1200;
const QUALITY = 85;

const images = [
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.56.32.png',
    output: 'salvador-ibiza-cala-comte-drone-sup-kayaks.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.58.03.png',
    output: 'salvador-ibiza-cala-comte-paddleboard-flower.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.54.00.png',
    output: 'salvador-ibiza-cala-comte-aerial-stern-sup.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.55.59.png',
    output: 'salvador-ibiza-cala-comte-wide-aerial-view.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.54.13.png',
    output: 'salvador-ibiza-cala-comte-guests-paddleboarding.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.56.53.png',
    output: 'salvador-ibiza-cala-comte-clear-water-shadows.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.55.31.png',
    output: 'salvador-ibiza-cala-comte-bow-lounge-aerial.webp',
  },
  {
    source: 'Captura de pantalla 2026-06-10 a las 19.55.15.png',
    output: 'salvador-ibiza-cala-comte-red-deck-aerial.webp',
  },
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

for (const { source, output } of images) {
  const inputPath = path.join(SOURCE_DIR, source);
  const outputPath = path.join(OUTPUT_DIR, output);

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Missing source: ${inputPath}`);
    process.exitCode = 1;
    continue;
  }

  const inputStats = fs.statSync(inputPath);
  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const outputStats = fs.statSync(outputPath);
  const meta = await sharp(outputPath).metadata();
  console.log(
    `✅ ${output} (${meta.width}x${meta.height}, ${Math.round(outputStats.size / 1024)}KB, from ${Math.round(inputStats.size / 1024)}KB)`,
  );
}

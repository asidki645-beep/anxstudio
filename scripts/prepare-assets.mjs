import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const referencePath = path.join(root, 'content', 'homepage-reference.png');
const logoPath = path.join(root, 'dist', 'assets', 'anx-logo.png');
const previewsDirectory = path.join(root, 'public', 'assets', 'previews');
const brandDirectory = path.join(root, 'public', 'assets', 'brand');

await Promise.all([
  mkdir(previewsDirectory, { recursive: true }),
  mkdir(brandDirectory, { recursive: true }),
]);

const crops = [
  ['hero', 530, 90, 410, 385, 820],
  ['short-video-scriptwriter', 54, 735, 276, 172, 552],
  ['product-photo-prompt-pack', 359, 735, 276, 172, 552],
  ['clean-reel-captions', 658, 735, 272, 172, 544],
  ['landing-page-reviewer', 54, 1074, 276, 179, 552],
  ['brand-moodboard-prompts', 360, 1074, 275, 179, 550],
  ['minimal-product-showcase', 657, 1074, 272, 179, 544],
];

await Promise.all(
  crops.map(async ([name, left, top, width, height, outputWidth]) => {
    await sharp(referencePath)
      .extract({ left, top, width, height })
      .resize({ width: outputWidth })
      .webp({ quality: 86, effort: 6 })
      .toFile(path.join(previewsDirectory, `${name}.webp`));
  }),
);

await sharp(logoPath)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize({ width: 720, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(path.join(brandDirectory, 'anx-logo.png'));

const logoMark = sharp(logoPath).extract({ left: 100, top: 90, width: 1050, height: 545 });

await logoMark
  .clone()
  .resize({ width: 224, height: 224, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public', 'favicon.png'));

await logoMark
  .clone()
  .resize({ width: 148, height: 148, fit: 'contain', background: { r: 247, g: 248, b: 252, alpha: 1 } })
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: { r: 247, g: 248, b: 252, alpha: 1 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public', 'apple-touch-icon.png'));

const openGraphLogo = await sharp(logoPath)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize({ width: 390, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();

const openGraphArtwork = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset="0.55" stop-color="#f7f8fc"/>
        <stop offset="1" stop-color="#e4eaff"/>
      </linearGradient>
      <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.94"/>
        <stop offset="1" stop-color="#eef2ff" stop-opacity="0.86"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#background)"/>
    <circle cx="1110" cy="8" r="270" fill="#cad4ff" fill-opacity="0.65"/>
    <circle cx="1090" cy="20" r="170" fill="#ffffff" fill-opacity="0.48"/>
    <circle cx="70" cy="650" r="260" fill="#e4eaff" fill-opacity="0.9"/>
    <rect x="702" y="118" width="420" height="394" rx="46" fill="url(#panel)" stroke="#ffffff" stroke-width="4"/>
    <path d="M744 345 C790 345 790 276 836 276 S882 414 928 414 S974 238 1020 238 S1066 345 1108 345" fill="none" stroke="#3548ed" stroke-width="18" stroke-linecap="round" opacity="0.88"/>
    <circle cx="928" cy="345" r="64" fill="#ffffff" stroke="#cad4ff" stroke-width="12"/>
    <path d="M928 310v70M901 344c0 22 12 36 27 36s27-14 27-36M888 379c10 25 23 35 40 35s30-10 40-35M928 414v28M901 442h54" fill="none" stroke="#202b40" stroke-width="9" stroke-linecap="round"/>
    <text x="72" y="275" fill="#202b40" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" letter-spacing="-2">Digital ideas,</text>
    <text x="72" y="350" fill="#3548ed" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="700" letter-spacing="-2">made clearer.</text>
    <text x="72" y="423" fill="#46536b" font-family="Arial, Helvetica, sans-serif" font-size="28">Open-source tools and practical</text>
    <text x="72" y="462" fill="#46536b" font-family="Arial, Helvetica, sans-serif" font-size="28">digital resources from ANX Studio Digital.</text>
    <rect x="72" y="510" width="204" height="50" rx="25" fill="#eef2ff" stroke="#cad4ff"/>
    <text x="174" y="543" text-anchor="middle" fill="#2b3cd2" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="2">OPEN SOURCE</text>
  </svg>
`);

await sharp(openGraphArtwork)
  .composite([{ input: openGraphLogo, left: 72, top: 60 }])
  .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
  .toFile(path.join(root, 'public', 'assets', 'og-image.jpg'));

console.log('Prepared optimized ANX Studio image assets.');

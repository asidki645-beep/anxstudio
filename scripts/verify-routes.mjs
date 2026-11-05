import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const projectRoot = new URL('../', import.meta.url);
const readProjectFile = (path) => readFile(new URL(path, projectRoot), 'utf8');

const [app, features, header, footer, homepage, about, listing, card, detail, data, redirects] = await Promise.all([
  readProjectFile('src/App.tsx'),
  readProjectFile('src/config/features.ts'),
  readProjectFile('src/components/Header.tsx'),
  readProjectFile('src/components/Footer.tsx'),
  readProjectFile('src/pages/HomePage.tsx'),
  readProjectFile('src/pages/AboutPage.tsx'),
  readProjectFile('src/pages/OpenSourcePage.tsx'),
  readProjectFile('src/components/OpenSourceCard.tsx'),
  readProjectFile('src/pages/VoiceStudioPage.tsx'),
  readProjectFile('src/data/openSource.ts'),
  readProjectFile('public/_redirects'),
]);

assert.match(app, /path="open-source" element={<OpenSourcePage \/>}/, 'Open Source route is missing.');
assert.match(
  app,
  /path="open-source\/voicestudio" element={<VoiceStudioPage \/>}/,
  'VoiceStudio route is missing.',
);
assert.match(features, /PUBLIC_LIBRARY_ENABLED\s*=\s*false/, 'Dormant library must stay disabled publicly.');
assert.match(app, /PUBLIC_LIBRARY_ENABLED\s*\?\s*\([\s\S]*path="library"/, 'Dormant routes are not gated.');
assert.match(header, /PUBLIC_LIBRARY_ENABLED\s*&&[\s\S]*CATEGORIES\.map/, 'Dormant header links are not gated.');
assert.match(footer, /PUBLIC_LIBRARY_ENABLED\s*&&/, 'Dormant footer links are not gated.');
assert.doesNotMatch(homepage, /CATEGORIES|FEATURED_RESOURCES|ResourceGrid|SearchField/, 'Dormant content leaked onto the homepage.');
assert.doesNotMatch(about, /CATEGORIES|\/library/, 'Dormant content leaked onto the About page.');
assert.match(homepage, /to="\/open-source"/, 'Homepage must link to Open Source.');
assert.match(header, /to="\/open-source"[\s\S]*?>\s*GitHub\s*</, 'GitHub navigation item is missing.');

assert.match(listing, />\s*Open Source\s*</, 'Open Source heading is missing.');
assert.match(listing, /OPEN_SOURCE_RESOURCES\.map/, 'Open Source listing is not data-driven.');
assert.equal((data.match(/\bslug:\s*'/g) ?? []).length, 1, 'Open Source data must contain exactly one resource.');
assert.match(data, /title:\s*'VoiceStudio'/, 'VoiceStudio title is missing.');
assert.match(data, /subtitle:\s*'A Free Alternative to ElevenLabs'/, 'VoiceStudio subtitle is missing.');
assert.match(data, /image:\s*'\/images\/voicestudio-cover\.png'/, 'VoiceStudio cover path is incorrect.');
assert.match(data, /imageWidth:\s*1536/, 'VoiceStudio cover width is incorrect.');
assert.match(data, /imageHeight:\s*1024/, 'VoiceStudio cover height is incorrect.');

assert.equal((card.match(/<Link\b/g) ?? []).length, 1, 'VoiceStudio card must use one whole-card link.');
assert.match(card, /to={`\/open-source\/\${resource\.slug}`}/, 'VoiceStudio card detail link is incorrect.');
assert.match(card, /className="h-auto w-full rounded-2xl"/, 'Listing cover must preserve its aspect ratio.');
assert.doesNotMatch(card, /object-cover/, 'Listing cover must not be cropped.');

assert.match(detail, /to="\/open-source"/, 'Back to Open Source link is missing.');
assert.match(detail, /href={VOICESTUDIO\.githubUrl}/, 'GitHub download link is not wired to resource data.');
assert.match(detail, />\s*Download on GitHub\s*</, 'GitHub download button is missing.');
assert.match(detail, /className="h-auto w-full rounded-\[1rem\]"/, 'Detail cover must preserve its aspect ratio.');
assert.match(
  data,
  /githubUrl:\s*'https:\/\/github\.com\/debpalash\/VoiceStudio\/releases\/latest'/,
  'GitHub release URL is incorrect.',
);

assert.match(redirects, /^\/\*\s+\/index\.html\s+200\s*$/m, 'Netlify SPA fallback is missing.');

console.log('Verified homepage, Open Source listing, VoiceStudio detail, GitHub link, cover behavior, and Netlify fallback.');

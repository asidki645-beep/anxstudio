# ANX Studio Digital

Production-ready React website for ANX Studio Digital. The current public experience keeps the approved light visual direction, transparent ANX Studio logo, social links, and a focused Open Source section.

The site is prepared for Netlify and `https://anxstudiodigital.com`, but it has not been deployed and no DNS settings have been changed.

## Current content status

VoiceStudio is the only resource shown publicly. Its listing links to an internal detail page, and the detail page links directly to the supplied GitHub releases URL.

The six earlier resource concepts and their mockup-derived artwork remain in the repository as dormant reference material. They are not included in public navigation, routes, homepage sections, or resource listings. See [MISSING_INPUTS.md](MISSING_INPUTS.md) for the inputs required before any of them can be reconsidered for publication.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL, normally `http://127.0.0.1:5173`.

## Production validation

```bash
npm run typecheck
npm run verify:routes
npm run build
npm run preview
```

The production bundle is written to `build/`. The original buildless starter remains in `dist/` as a preserved reference and is not used by the React application.

## Public routes

- `/` — homepage
- `/open-source` — Open Source listing
- `/open-source/voicestudio` — VoiceStudio details
- `/about`, `/contact`, `/privacy`, `/terms`

## Content and configuration

- `src/config/site.ts` — site, domain, social, contact, and legal configuration
- `src/config/features.ts` — public feature gates for dormant collections
- `public/images/voicestudio-cover.png` — VoiceStudio cover artwork
- `content/resources.json` — dormant legacy resource concepts retained for possible future development
- `src/data/categories.ts` and `src/data/resources.ts` — dormant legacy category and resource data retained outside the public experience

## Assets

The approved originals are preserved in `content/homepage-reference.png` and `dist/assets/anx-logo.png`. The original SVG previews remain in `dist/assets/` for reference and are not used by the production app.

Optimized brand artwork, favicon, and Open Graph artwork live under `public/`. Regenerate the existing ANX Studio image assets after changing their approved source artwork with:

```bash
npm run assets:build
```

## Netlify

`netlify.toml` defines the production command and `build/` publish directory. `public/_redirects` supplies the SPA history fallback so both Open Source routes can be opened or refreshed directly. `robots.txt`, `sitemap.xml`, and route metadata target `https://anxstudiodigital.com`.

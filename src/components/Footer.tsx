import { Link } from 'react-router-dom';
import { PUBLIC_LIBRARY_ENABLED } from '../config/features';
import { SITE_CONFIG } from '../config/site';
import { ArrowUpRightIcon } from './Icons';
import { Logo } from './Logo';

const socialLabels = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
} as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-white/35">
      <div className="page-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo compact />
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink-600">
              Open-source discoveries and practical digital resources, presented with clarity.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-ink-900">Explore</h2>
            <nav className="mt-3 flex flex-col items-start" aria-label="Footer resources">
              <Link className="min-h-11 py-3 text-sm text-ink-700 hover:text-brand-600" to="/open-source">
                Open Source
              </Link>
              {PUBLIC_LIBRARY_ENABLED && (
                <>
                  <Link className="min-h-11 py-3 text-sm text-ink-700 hover:text-brand-600" to="/library/skills">
                    ChatGPT Skills
                  </Link>
                  <Link className="min-h-11 py-3 text-sm text-ink-700 hover:text-brand-600" to="/library/prompts">
                    AI Prompts
                  </Link>
                  <Link className="min-h-11 py-3 text-sm text-ink-700 hover:text-brand-600" to="/library/templates">
                    CapCut Templates
                  </Link>
                </>
              )}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-ink-900">Connect</h2>
            <div className="mt-3 flex flex-col items-start">
              {Object.entries(SITE_CONFIG.socials).map(([network, url]) => (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 py-3 text-sm text-ink-700 hover:text-brand-600"
                >
                  {socialLabels[network as keyof typeof socialLabels]}
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-slate-200/80 pt-7 text-xs text-ink-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ANX Studio Digital.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal and information">
            <Link className="min-h-11 py-3 hover:text-brand-600" to="/about">
              About
            </Link>
            <Link className="min-h-11 py-3 hover:text-brand-600" to="/contact">
              Contact
            </Link>
            <Link className="min-h-11 py-3 hover:text-brand-600" to="/privacy">
              Privacy
            </Link>
            <Link className="min-h-11 py-3 hover:text-brand-600" to="/terms">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

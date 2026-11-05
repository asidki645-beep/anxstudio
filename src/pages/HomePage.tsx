import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon } from '../components/Icons';
import { Seo } from '../components/Seo';
import { SITE_CONFIG } from '../config/site';

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.baseUrl,
  description: 'Open-source discoveries and practical digital resources from ANX Studio Digital.',
};

const socialLabels = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
} as const;

export function HomePage() {
  return (
    <>
      <Seo
        title={SITE_CONFIG.name}
        description="Discover open-source tools and practical digital resources from ANX Studio Digital."
        structuredData={homeStructuredData}
      />

      <section className="page-shell grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-24 lg:pt-14">
        <div className="animate-fade-up">
          <p className="eyebrow">ANX Studio Digital</p>
          <h1 className="display-title mt-6 max-w-[11ch]">
            Digital ideas, <span className="text-brand-500">made clearer.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink-700 sm:text-xl">
            Discover open-source tools and practical digital resources, curated with clear context and direct paths to
            their original projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/open-source" className="button-primary">
              Explore Open Source
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link to="/about" className="button-secondary">
              About ANX Studio
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[39rem] animate-fade-up [animation-delay:100ms]">
          <div className="absolute inset-x-[8%] bottom-[2%] top-[8%] -z-10 rounded-full bg-blue-200/65 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-brand-50 to-blue-100 p-6 shadow-soft sm:p-9">
            <div className="absolute -right-14 -top-14 size-48 rounded-full border-[2rem] border-white/55" />
            <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-brand-100/70 blur-2xl" />
            <div className="relative flex min-h-[22rem] flex-col justify-between rounded-[1.5rem] border border-white bg-white/80 p-7 backdrop-blur-sm sm:min-h-[26rem] sm:p-10">
              <span className="w-fit rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
                Digital, explained.
              </span>
              <img
                src="/assets/brand/anx-logo.png"
                alt="ANX Studio Digital"
                width="720"
                height="171"
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full"
              />
              <p className="max-w-md text-sm leading-6 text-ink-600">
                A focused home for useful tools, clear explanations, and original project links.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-20" aria-labelledby="open-source-heading">
        <div className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-brand-50/70 px-6 py-8 sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="eyebrow">Open Source</p>
            <h2 id="open-source-heading" className="section-title mt-3">
              Discover tools and alternatives.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink-700">
              Explore open-source projects through focused resource pages, then continue to their official releases when
              you are ready.
            </p>
          </div>
          <Link to="/open-source" className="button-primary mt-6 shrink-0 lg:mt-0">
            Browse Open Source
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </section>

      <section className="page-shell pb-6">
        <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-[#E9F0FF] px-6 py-8 sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="eyebrow">Follow along</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-blue-950 sm:text-4xl">
              Learn it. Make it. Share it.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink-700">
              Follow ANX Studio for short visual lessons and fresh resource updates.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            {Object.entries(SITE_CONFIG.socials).map(([network, url]) => (
              <a
                key={network}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                {socialLabels[network as keyof typeof socialLabels]}
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

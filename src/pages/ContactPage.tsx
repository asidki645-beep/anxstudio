import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRightIcon, ArrowUpRightIcon } from '../components/Icons';
import { Seo } from '../components/Seo';
import { SITE_CONFIG } from '../config/site';

const socialLabels = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
} as const;

const socialDescriptions = {
  instagram: 'Visual updates and creative resource highlights.',
  tiktok: 'Short-form ideas and practical creative content.',
  youtube: 'Video lessons and longer-form updates.',
} as const;

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Connect with ${SITE_CONFIG.name} through its configured Instagram, TikTok, and YouTube profiles.`}
        path="/contact"
      />

      <article className="page-shell pb-20 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

        <header className="max-w-3xl pb-12 pt-8 sm:pb-14 sm:pt-12">
          <p className="eyebrow">Contact</p>
          <h1 className="display-title mt-5 max-w-[12ch]">
            Connect with <span className="text-brand-500">ANX Studio.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-700 sm:text-xl">
            Follow the configured social profiles for resource updates, visual lessons, and new creative ideas.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3" aria-label="ANX Studio Digital social profiles">
          {Object.entries(SITE_CONFIG.socials).map(([network, url]) => {
            const key = network as keyof typeof socialLabels;
            return (
              <a
                key={network}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex min-h-52 flex-col p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Social profile</span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-900">{socialLabels[key]}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink-700">{socialDescriptions[key]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600">
                  Open {socialLabels[key]}
                  <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" aria-labelledby="contact-details-heading">
          <div className="card-surface p-6 sm:p-8">
            <p className="eyebrow">Current contact options</p>
            <h2 id="contact-details-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink-900">
              Social profiles only
            </h2>
            <p className="body-copy mt-4">
              No dedicated contact or support email address is configured for this website. There is also no contact
              form, so the site does not collect messages or email addresses directly.
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-600">
              Social links open third-party platforms in a new tab. Their own terms and privacy practices apply after
              you leave this site.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-brand-100 bg-brand-50/70 p-6 sm:p-8">
            <p className="eyebrow">Before you connect</p>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-ink-900">Review how external links work.</h2>
            <p className="mt-4 text-sm leading-6 text-ink-700">
              The Privacy Policy explains what this website does—and does not—collect before you visit another
              platform.
            </p>
            <Link to="/privacy" className="button-secondary mt-6">
              Read the Privacy Policy
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}

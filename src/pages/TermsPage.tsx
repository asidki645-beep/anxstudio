import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Seo } from '../components/Seo';
import { SITE_CONFIG } from '../config/site';

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Use"
        description={`Read the factual draft Terms of Use for ${SITE_CONFIG.name}, including website content and external-link conditions.`}
        path="/terms"
      />

      <article className="page-shell pb-20 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms of Use' }]} />

        <header className="max-w-3xl pb-10 pt-8 sm:pt-12">
          <p className="eyebrow">Factual draft</p>
          <h1 className="section-title mt-4 sm:text-5xl">Terms of Use</h1>
          <p className="mt-5 text-sm font-semibold text-ink-600">Last updated: {SITE_CONFIG.legal.lastUpdated}</p>
          <p className="mt-6 text-lg leading-8 text-ink-700">
            These draft terms describe the current ANX Studio Digital website. They do not invent an operator identity,
            governing law, paid service, or delivery promise that has not been configured.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="legal-copy card-surface px-6 pb-10 pt-2 [&>p]:mt-3 sm:px-9">
            <h2>1. Draft status</h2>
            <p>
              A legal business name, postal address, and governing jurisdiction have not been supplied for these terms.
              This document must be reviewed and completed when those facts are available. It should not be read as
              asserting a business registration or jurisdiction that is not shown here.
            </p>

            <h2>2. Website purpose</h2>
            <p>
              {SITE_CONFIG.name} is an English-language website that shares information about digital creative work and
              selected open-source resources. Resource pages may provide descriptions and links to external project or
              release pages.
            </p>

            <h2>3. Resource information</h2>
            <p>
              Resource descriptions are provided for general information. Unless the site explicitly states otherwise,
              ANX Studio Digital does not make claims about a resource's features, compatibility, pricing, availability,
              support, or future development. Check the linked project page for its current files, documentation,
              license, and requirements before using it.
            </p>

            <h2>4. External services and downloads</h2>
            <p>
              Social profiles, GitHub repositories, and GitHub release pages are separate services. Selecting an
              external link takes you away from this website, and the external service's own terms and privacy policy
              apply. Any download is provided by the linked service rather than by this website.
            </p>

            <h2>5. Acceptable use and visitor responsibility</h2>
            <ul>
              <li>Use the website and any linked resource only for lawful purposes.</li>
              <li>Review the applicable license, permissions, and requirements before downloading or using a resource.</li>
              <li>Check AI-generated or AI-assisted outputs for accuracy, rights, safety, and suitability before use.</li>
              <li>Do not attempt to interfere with the website, its hosting, or linked third-party services.</li>
            </ul>

            <h2>6. Accuracy and availability</h2>
            <p>
              Website content and external links may be corrected, changed, or withdrawn. ANX Studio Digital does not
              represent download counts, testimonials, user totals, guaranteed outcomes, or uninterrupted availability
              unless those details are expressly stated and supported on the relevant page.
            </p>

            <h2>7. Governing law and disputes</h2>
            <p>
              No governing-law or court-jurisdiction clause is stated because a jurisdiction has not been supplied. A
              final version should add only the law and forum confirmed for the actual site operator.
            </p>

            <h2>8. Changes and contact</h2>
            <p>
              These draft terms should be revised when the website's services or operator details change. No dedicated
              contact email is configured. Current contact routes are listed on the{' '}
              <Link className="font-semibold text-brand-600 underline-offset-4 hover:underline" to="/contact">
                Contact page
              </Link>
              .
            </p>
          </div>

          <aside
            className="rounded-[1.35rem] border border-brand-100 bg-brand-50/70 p-6 lg:sticky lg:top-28"
            aria-label="Terms draft status"
          >
            <p className="eyebrow">Important</p>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-ink-900">External projects have their own terms</h2>
            <p className="mt-4 text-sm leading-6 text-ink-700">
              Review the linked project's current documentation, license, and requirements before downloading or using
              it.
            </p>
            <Link to="/privacy" className="button-secondary mt-6 w-full">
              Read the Privacy Policy
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}

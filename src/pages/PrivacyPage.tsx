import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Seo } from '../components/Seo';
import { SITE_CONFIG } from '../config/site';

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`Read the factual draft Privacy Policy for ${SITE_CONFIG.name}, including current site data practices and external-link behavior.`}
        path="/privacy"
      />

      <article className="page-shell pb-20 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />

        <header className="max-w-3xl pb-10 pt-8 sm:pt-12">
          <p className="eyebrow">Factual draft</p>
          <h1 className="section-title mt-4 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-sm font-semibold text-ink-600">Last updated: {SITE_CONFIG.legal.lastUpdated}</p>
          <p className="mt-6 text-lg leading-8 text-ink-700">
            This draft describes the data practices currently implemented on {SITE_CONFIG.domain}. It does not add
            practices, services, or legal details that have not been configured.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="legal-copy card-surface px-6 pb-10 pt-2 [&>p]:mt-3 sm:px-9">
            <h2>1. Scope and operator details</h2>
            <p>
              This policy applies to the public ANX Studio Digital website at {SITE_CONFIG.domain}. A legal business
              name, postal address, and governing jurisdiction have not been configured, so this draft does not invent
              or assert them. Those details must be added if and when they are confirmed.
            </p>

            <h2>2. Information collected by this website</h2>
            <p>The current website does not provide:</p>
            <ul>
              <li>User accounts or profile registration.</li>
              <li>A contact form, newsletter form, comment area, or direct message inbox.</li>
              <li>Analytics, advertising trackers, or behavioral profiling tools.</li>
              <li>A client-side advertising network.</li>
            </ul>

            <h2>3. Cookies and browser storage</h2>
            <p>
              The current application does not set cookies and does not use localStorage or similar browser storage to
              identify visitors. External websites may use their own cookies or storage after you choose to visit them.
            </p>

            <h2>4. Hosting and routine request data</h2>
            <p>
              Like most hosted websites, the hosting and network providers that deliver this site may process routine
              technical request data, such as an IP address, request time, requested page, browser information, and
              security logs. That processing is controlled by the relevant provider and is not an analytics feature
              configured in this site code.
            </p>

            <h2>5. External links</h2>
            <p>
              Links to the configured Instagram, TikTok, and YouTube profiles, as well as links to GitHub and GitHub
              release pages, open third-party services. If you select one of these links, that service may receive
              routine request information and process data under its own privacy policy and settings.
            </p>

            <h2>6. Data retention and deletion</h2>
            <p>
              Because the current website has no accounts, direct-contact form, or application database, it does not
              retain visitor-submitted profiles or messages. Hosting and third-party services determine retention for
              any data they process. Requests concerning a third-party account or platform must be directed to that
              service.
            </p>

            <h2>7. Changes to this draft</h2>
            <p>
              This policy should be updated before new data collection, analytics, advertising, forms, accounts, or
              other processing is enabled. The date above should change whenever the published policy is materially
              revised.
            </p>

            <h2>8. Contact</h2>
            <p>
              No dedicated privacy or support email is configured. The currently available contact routes are the social
              profiles listed on the{' '}
              <Link className="font-semibold text-brand-600 underline-offset-4 hover:underline" to="/contact">
                Contact page
              </Link>
              .
            </p>
          </div>

          <aside
            className="rounded-[1.35rem] border border-brand-100 bg-brand-50/70 p-6 lg:sticky lg:top-28"
            aria-label="Privacy draft status"
          >
            <p className="eyebrow">Draft status</p>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-ink-900">Current configuration only</h2>
            <p className="mt-4 text-sm leading-6 text-ink-700">
              This draft intentionally leaves out an operator identity, postal address, jurisdiction, and email because
              none has been supplied.
            </p>
            <Link to="/terms" className="button-secondary mt-6 w-full">
              Read the Terms of Use
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/Icons';
import { Seo } from '../components/Seo';

export function NotFoundPage() {
  return (
    <section className="page-shell flex min-h-[58vh] items-center justify-center py-20 text-center">
      <Seo
        title="Page not found"
        description="The page you requested could not be found."
        path={window.location.pathname}
        noIndex
      />
      <div className="max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="section-title mt-4 sm:text-5xl">This shortcut leads nowhere.</h1>
        <p className="mt-5 text-lg leading-8 text-ink-700">
          The page may have moved, or the address may be incomplete. You can return to the homepage and keep exploring.
        </p>
        <Link to="/" className="button-primary mt-8">
          Return home
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}

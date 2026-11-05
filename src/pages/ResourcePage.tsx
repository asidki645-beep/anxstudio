import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CheckIcon } from '../components/Icons';
import { ResourceGrid } from '../components/ResourceGrid';
import { Seo } from '../components/Seo';
import { AvailabilityBadge, CategoryBadge } from '../components/StatusBadge';
import { SITE_CONFIG } from '../config/site';
import { CATEGORY_BY_KEY } from '../data/categories';
import { getResourceBySlug, RESOURCES } from '../data/resources';
import { NotFoundPage } from './NotFoundPage';

function EmptyDetail({ children }: { children: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/55 p-5 text-sm leading-6 text-ink-600">
      {children}
    </div>
  );
}

export function ResourcePage() {
  const { slug } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) return <NotFoundPage />;

  const category = CATEGORY_BY_KEY[resource.category];
  const categoryResources = RESOURCES.filter((item) => item.category === resource.category);
  const relatedResources = categoryResources.filter((item) => item.slug !== resource.slug).slice(0, 2);
  const resourceUrl = `/resources/${resource.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: resource.title,
    description: resource.description,
    image: new URL(resource.image, SITE_CONFIG.baseUrl).toString(),
    url: new URL(resourceUrl, SITE_CONFIG.baseUrl).toString(),
  };

  return (
    <>
      <Seo
        title={resource.title}
        description={`${resource.description} Preview the details, requirements, and current availability.`}
        path={resourceUrl}
        image={resource.image}
        structuredData={structuredData}
      />

      <article className="page-shell pb-20 pt-6 sm:pt-8">
        <Breadcrumbs
          items={[
            { label: 'Library', to: '/library' },
            { label: category.label, to: category.route },
            { label: resource.title },
          ]}
        />

        <header className="mt-7 grid items-center gap-8 lg:grid-cols-[1fr_0.94fr] lg:gap-12">
          <div>
            <div className="flex flex-wrap gap-2">
              <CategoryBadge category={resource.category} />
              <AvailabilityBadge status={resource.contentStatus} />
            </div>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.05em] text-ink-900 sm:text-5xl lg:text-6xl">
              {resource.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700">{resource.overview}</p>
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-950">
              Preview only: the actual deliverable has not been supplied or verified.
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white bg-white p-3 shadow-soft">
            <img
              src={resource.image}
              alt={resource.imageAlt}
              width={resource.imageWidth}
              height={resource.imageHeight}
              decoding="async"
              className="h-auto w-full rounded-[1rem]"
            />
          </div>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div className="space-y-8">
            <section className="card-surface p-6 sm:p-8" aria-labelledby="benefits-heading">
              <p className="eyebrow">Intended coverage</p>
              <h2 id="benefits-heading" className="mt-3 text-2xl font-bold tracking-tight">
                What this concept is designed to help with
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {resource.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-ink-700">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <CheckIcon className="size-4" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section className="card-surface p-6 sm:p-8" aria-labelledby="instructions-heading">
              <p className="eyebrow">Usage instructions</p>
              <h2 id="instructions-heading" className="mt-3 text-2xl font-bold tracking-tight">
                How to use it when available
              </h2>
              <ol className="mt-6 space-y-4">
                {resource.usageInstructions.map((instruction, index) => (
                  <li key={instruction} className="flex gap-4 text-sm leading-6 text-ink-700">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="space-y-6" aria-label="Resource availability details">
            <section className="card-surface p-6" aria-labelledby="included-heading">
              <h2 id="included-heading" className="text-lg font-bold tracking-tight">
                Included files
              </h2>
              {resource.includedFiles.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-700">
                  {resource.includedFiles.map((file) => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4">
                  <EmptyDetail>{resource.includedFilesNote}</EmptyDetail>
                </div>
              )}
            </section>

            <section className="card-surface p-6" aria-labelledby="requirements-heading">
              <h2 id="requirements-heading" className="text-lg font-bold tracking-tight">
                Requirements
              </h2>
              {resource.requirements.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-700">
                  {resource.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4">
                  <EmptyDetail>{resource.requirementsNote}</EmptyDetail>
                </div>
              )}
            </section>
          </aside>
        </div>

        {relatedResources.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <div className="mb-7 flex items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Keep exploring</p>
                <h2 id="related-heading" className="section-title mt-3">
                  More {category.shortLabel.toLowerCase()}
                </h2>
              </div>
              <Link to={category.route} className="button-secondary hidden sm:inline-flex">
                View category
              </Link>
            </div>
            <div className="max-w-4xl">
              <ResourceGrid resources={relatedResources} />
            </div>
          </section>
        )}
      </article>
    </>
  );
}

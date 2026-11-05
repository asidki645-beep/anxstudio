import { Link } from 'react-router-dom';
import type { Resource } from '../types';
import { ArrowUpRightIcon } from './Icons';
import { AvailabilityBadge, CategoryBadge } from './StatusBadge';

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden p-3 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/resources/${resource.slug}`} className="block overflow-hidden rounded-2xl bg-brand-50">
        <img
          src={resource.image}
          alt={resource.imageAlt}
          width={resource.imageWidth}
          height={resource.imageHeight}
          loading="lazy"
          decoding="async"
          className="h-auto w-full transition duration-300 group-hover:scale-[1.015]"
        />
      </Link>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4 sm:px-3">
        <div className="flex flex-wrap gap-2">
          <CategoryBadge category={resource.category} />
          <AvailabilityBadge status={resource.contentStatus} />
        </div>
        <h3 className="mt-4 text-xl font-bold leading-tight tracking-[-0.025em] text-ink-900">
          <Link to={`/resources/${resource.slug}`} className="rounded-md hover:text-brand-600">
            {resource.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink-600">{resource.description}</p>
        <Link
          to={`/resources/${resource.slug}`}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-5 text-sm font-bold text-brand-600"
          aria-label={`View ${resource.title}`}
        >
          View resource
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}

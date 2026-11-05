import { Link } from 'react-router-dom';
import type { OpenSourceResource } from '../data/openSource';
import { ArrowRightIcon } from './Icons';

export function OpenSourceCard({ resource }: { resource: OpenSourceResource }) {
  return (
    <article className="h-full">
      <Link
        to={`/open-source/${resource.slug}`}
        className="card-surface group flex h-full flex-col p-3 transition duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft"
      >
        <img
          src={resource.image}
          alt={resource.imageAlt}
          width={resource.imageWidth}
          height={resource.imageHeight}
          className="h-auto w-full rounded-2xl"
        />

        <span className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3">
          <span className="text-xl font-bold leading-tight tracking-[-0.025em] text-ink-900">
            {resource.title}
          </span>
          <span className="mt-2 text-sm leading-6 text-ink-600">{resource.subtitle}</span>
          <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-bold text-brand-600">
            View resource
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </span>
      </Link>
    </article>
  );
}

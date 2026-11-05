import type { Resource } from '../types';
import { SearchIcon } from './Icons';
import { ResourceCard } from './ResourceCard';

interface ResourceGridProps {
  resources: Resource[];
  query?: string;
}

export function ResourceGrid({ resources, query = '' }: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="card-surface flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <SearchIcon className="size-7" />
        </span>
        <h2 className="mt-5 text-xl font-bold text-ink-900">No matching resources</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-ink-600">
          {query
            ? `Nothing matches “${query}”. Try a shorter search or choose another category.`
            : 'There are no resources in this view yet. Try another category.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.slug} resource={resource} />
      ))}
    </div>
  );
}

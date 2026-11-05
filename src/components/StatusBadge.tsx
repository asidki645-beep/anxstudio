import type { CategoryKey, ContentStatus } from '../types';
import { CATEGORY_BY_KEY } from '../data/categories';

const categoryStyles: Record<CategoryKey, string> = {
  skills: 'bg-blue-50 text-blue-800',
  prompts: 'bg-violet-50 text-violet-800',
  templates: 'bg-cyan-50 text-cyan-800',
};

export function CategoryBadge({ category }: { category: CategoryKey }) {
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-lg px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] ${categoryStyles[category]}`}
    >
      {CATEGORY_BY_KEY[category].singularLabel}
    </span>
  );
}

export function AvailabilityBadge({ status }: { status: ContentStatus }) {
  const ready = status === 'ready';
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-lg px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] ${
        ready ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-900'
      }`}
    >
      {ready ? 'Available' : 'Preview only'}
    </span>
  );
}

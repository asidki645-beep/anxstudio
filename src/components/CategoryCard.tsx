import { Link } from 'react-router-dom';
import type { Category } from '../types';
import { ArrowUpRightIcon, CategoryIcon } from './Icons';

const accentStyles = {
  skills: 'bg-blue-50 text-brand-600',
  prompts: 'bg-violet-50 text-violet-700',
  templates: 'bg-cyan-50 text-cyan-700',
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={category.route}
      className="card-surface group flex min-h-[8.5rem] items-center gap-5 p-5 transition duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft sm:p-6"
    >
      <span
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${accentStyles[category.key]}`}
      >
        <CategoryIcon category={category.key} className="size-8" />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-bold tracking-tight text-ink-900">{category.label}</span>
        <span className="mt-1 block text-sm leading-6 text-ink-600">{category.description}</span>
      </span>
      <ArrowUpRightIcon className="ml-auto size-5 shrink-0 text-brand-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

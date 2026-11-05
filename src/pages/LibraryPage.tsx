import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ResourceGrid } from '../components/ResourceGrid';
import { SearchField } from '../components/SearchField';
import { Seo } from '../components/Seo';
import { CATEGORIES, CATEGORY_BY_KEY } from '../data/categories';
import { RESOURCES } from '../data/resources';
import type { CategoryKey } from '../types';

interface LibraryPageProps {
  category?: CategoryKey;
}

function isCategoryKey(value: string | null): value is CategoryKey {
  return value === 'skills' || value === 'prompts' || value === 'templates';
}

export function LibraryPage({ category }: LibraryPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const queryCategory = searchParams.get('category');
  const activeCategory = category ?? (isCategoryKey(queryCategory) ? queryCategory : null);
  const categoryDetails = category ? CATEGORY_BY_KEY[category] : null;

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return RESOURCES.filter((resource) => {
      if (activeCategory && resource.category !== activeCategory) return false;
      if (!normalizedQuery) return true;
      return [
        resource.title,
        resource.description,
        resource.overview,
        resource.category,
        ...resource.benefits,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  const updateQuery = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set('query', value);
    else next.delete('query');
    setSearchParams(next, { replace: true });
  };

  const setCategoryFilter = (nextCategory: CategoryKey | null) => {
    const next = new URLSearchParams(searchParams);
    if (nextCategory) next.set('category', nextCategory);
    else next.delete('category');
    setSearchParams(next, { replace: true });
  };

  const title = categoryDetails ? categoryDetails.label : 'Resource Library';
  const description = categoryDetails
    ? categoryDetails.longDescription
    : 'Search and filter every ChatGPT Skill, AI prompt, and CapCut template concept in the ANX Studio Digital library.';
  const path = categoryDetails ? categoryDetails.route : '/library';

  return (
    <>
      <Seo title={title} description={description} path={path} />

      <section className="page-shell pb-12 pt-10 sm:pt-14">
        <p className="eyebrow">{categoryDetails ? 'Category library' : 'Browse everything'}</p>
        <h1 className="section-title mt-4 max-w-3xl sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-700">{description}</p>
        <div className="mt-8 max-w-2xl">
          <SearchField
            id={category ? `${category}-search` : 'library-search'}
            value={query}
            onChange={updateQuery}
            placeholder={categoryDetails ? `Search ${categoryDetails.label.toLowerCase()}…` : undefined}
          />
        </div>
      </section>

      <section className="page-shell pb-20" aria-labelledby="results-heading">
        {!category && (
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <button
              type="button"
              onClick={() => setCategoryFilter(null)}
              aria-pressed={!activeCategory}
              className={`min-h-11 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                !activeCategory
                  ? 'border-brand-500 bg-brand-500 text-white'
                  : 'border-slate-200 bg-white text-ink-700 hover:border-brand-200'
              }`}
            >
              All resources
            </button>
            {CATEGORIES.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setCategoryFilter(item.key)}
                aria-pressed={activeCategory === item.key}
                className={`min-h-11 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === item.key
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-slate-200 bg-white text-ink-700 hover:border-brand-200'
                }`}
              >
                {item.shortLabel}
              </button>
            ))}
          </div>
        )}

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="results-heading" className="text-2xl font-bold tracking-tight text-ink-900">
              {query ? 'Search results' : categoryDetails ? `${categoryDetails.shortLabel} previews` : 'All resources'}
            </h2>
            <p className="mt-1 text-sm text-ink-600">
              {results.length} {results.length === 1 ? 'resource' : 'resources'} shown
            </p>
          </div>
          <p className="max-w-lg text-sm leading-6 text-ink-600">
            Resource availability is shown on every card. Preview entries do not include downloadable content.
          </p>
        </div>

        <p className="sr-only" aria-live="polite">
          {results.length} {results.length === 1 ? 'resource' : 'resources'} found
        </p>
        <ResourceGrid resources={results} query={query} />

        {categoryDetails && (
          <div className="mt-8 text-center">
            <Link to="/library" className="button-secondary">
              Browse all categories
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

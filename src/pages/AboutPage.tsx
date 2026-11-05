import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRightIcon, CheckIcon } from '../components/Icons';
import { Seo } from '../components/Seo';

const principles = [
  {
    title: 'Clear by design',
    description: 'Every public resource is introduced in direct language, without unnecessary complexity.',
  },
  {
    title: 'Source first',
    description: 'When a project lives elsewhere, its destination is made clear before you leave this website.',
  },
  {
    title: 'Focused curation',
    description: 'Public collections stay focused on resources that are ready to explore.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn how ANX Studio Digital presents useful tools, resources, and digital ideas with clarity."
        path="/about"
      />

      <article className="page-shell pb-20 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

        <header className="max-w-3xl pb-14 pt-8 sm:pb-16 sm:pt-12">
          <p className="eyebrow">About ANX Studio Digital</p>
          <h1 className="display-title mt-5 max-w-[12ch]">
            Digital ideas, <span className="text-brand-500">made clearer.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-700 sm:text-xl">
            ANX Studio Digital makes digital ideas easier to understand through visual lessons and practical resources.
          </p>
          <p className="body-copy mt-5 max-w-2xl">
            The goal is simple: offer useful context, keep the experience calm and focused, and help visitors reach the
            original projects behind the resources they discover.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start" aria-labelledby="principles-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="principles-heading" className="section-title mt-3">
              Useful, focused, and easy to navigate.
            </h2>
            <p className="body-copy mt-5">
              Resource pages explain what an item is and clearly identify when an external link leads to its original
              project or release page.
            </p>
          </div>

          <div className="card-surface divide-y divide-slate-100 px-6 sm:px-8">
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-4 py-6">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <CheckIcon className="size-4" />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-700">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-9">
          <div>
            <p className="eyebrow">Start exploring</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-900">Discover the open-source collection.</h2>
          </div>
          <Link to="/open-source" className="button-primary mt-6 shrink-0 sm:mt-0">
            Browse Open Source
            <ArrowRightIcon className="size-4" />
          </Link>
        </section>
      </article>
    </>
  );
}

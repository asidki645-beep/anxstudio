import { OpenSourceCard } from '../components/OpenSourceCard';
import { Seo } from '../components/Seo';
import { OPEN_SOURCE_RESOURCES } from '../data/openSource';

export function OpenSourcePage() {
  return (
    <>
      <Seo
        title="Open Source"
        description="Discover open-source tools and alternatives selected by ANX Studio Digital."
        path="/open-source"
      />

      <section className="page-shell pb-20 pt-10 sm:pt-14" aria-labelledby="open-source-heading">
        <div className="max-w-3xl">
          <p className="eyebrow">GitHub</p>
          <h1 id="open-source-heading" className="section-title mt-4 sm:text-5xl">
            Open Source
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-700">
            Discover open-source tools and alternatives, with a clear page for each project and a direct link to its
            GitHub releases.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_SOURCE_RESOURCES.map((resource) => (
            <OpenSourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>
    </>
  );
}

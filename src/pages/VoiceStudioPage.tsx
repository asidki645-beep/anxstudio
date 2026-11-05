import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon } from '../components/Icons';
import { Seo } from '../components/Seo';
import { VOICESTUDIO } from '../data/openSource';

export function VoiceStudioPage() {
  return (
    <>
      <Seo
        title={VOICESTUDIO.title}
        description={`${VOICESTUDIO.title}: ${VOICESTUDIO.subtitle}. Discover the project and visit its latest GitHub release.`}
        path="/open-source/voicestudio"
        image={VOICESTUDIO.image}
      />

      <article className="page-shell pb-20 pt-6 sm:pt-8">
        <Link
          to="/open-source"
          className="inline-flex min-h-11 items-center gap-2 rounded-md py-3 text-sm font-bold text-brand-600 hover:text-brand-700"
        >
          <ArrowRightIcon className="size-4 rotate-180" />
          Back to Open Source
        </Link>

        <header className="mt-7 grid items-center gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
          <div>
            <p className="eyebrow">Open Source</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.05em] text-ink-900 sm:text-5xl lg:text-6xl">
              {VOICESTUDIO.title}
            </h1>
            <p className="mt-5 text-xl font-bold leading-8 text-brand-600 sm:text-2xl">{VOICESTUDIO.subtitle}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700">{VOICESTUDIO.description}</p>
          </div>

          <div className="rounded-[1.5rem] border border-white bg-white p-3 shadow-soft">
            <img
              src={VOICESTUDIO.image}
              alt={VOICESTUDIO.imageAlt}
              width={VOICESTUDIO.imageWidth}
              height={VOICESTUDIO.imageHeight}
              decoding="async"
              className="h-auto w-full rounded-[1rem]"
            />
          </div>
        </header>

        <section className="card-surface mt-14 flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="eyebrow">Get the project</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-900">Download VoiceStudio from GitHub.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-700">
              The link below opens the project&apos;s latest release page on GitHub.
            </p>
          </div>
          <a
            href="https://unlock.anxstudiodigital.com/cl/i/qn1rm7"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary shrink-0 sm:self-start lg:self-auto"
          >
            Download on GitHub
            <ArrowUpRightIcon className="size-4" />
          </a>
        </section>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.tagline } : {};
}

export default async function CaseStudy({ params }: { params: Params }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const next = projects[(idx + 1) % projects.length];

  const sections = [
    ["Overview", project.overview],
    ["Challenge", project.challenge],
    ["Approach", project.approach],
    ["Solution", project.solution],
  ] as const;

  const meta = [
    ["Year", String(project.year)],
    ["Role", project.role],
    ["Client", project.client],
    ["Duration", project.duration],
  ];

  return (
    <article className="section container-x pt-16">
      <ul className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((t) => <li key={t} className="chip">{t}</li>)}
      </ul>
      <h1 className="display-hero">{project.title}</h1>
      <p className="mt-6 max-w-2xl text-xl text-muted">{project.tagline}</p>

      <div
        role="img"
        aria-label={`${project.title} cover`}
        className="mt-12 aspect-[16/8] rounded-[var(--radius)] border border-line"
        style={{
          background: project.cover
            ? `center / cover url(${project.cover})`
            : `linear-gradient(135deg, hsl(${project.hue} 60% 28%), hsl(${(project.hue + 60) % 360} 55% 12%))`,
        }}
      />

      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8">
          View on GitHub <span aria-hidden>↗</span>
        </a>
      )}

      <dl className="mt-10 grid grid-cols-2 gap-6 border-b border-line pb-10 md:grid-cols-4">
        {meta.map(([k, v]) => (
          <div key={k}>
            <dt className="text-sm text-muted">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mx-auto mt-16 max-w-3xl space-y-16">
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="mb-4 text-3xl">{title}</h2>
            <p className="text-lg text-muted">{body}</p>
          </section>
        ))}

        <section>
          <h2 className="mb-6 text-3xl">Results</h2>
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {project.results.map((r) => (
              <li key={r.label}>
                <p className="font-display text-6xl text-accent">{r.value}</p>
                <p className="mt-1 text-muted">{r.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-3xl">Reflection</h2>
          <p className="text-lg text-muted">{project.reflection}</p>
        </section>
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="mt-24 block border-t border-line pt-10 transition-colors hover:text-accent"
      >
        <span className="text-sm text-muted">Next project</span>
        <span className="display-2 block">{next.title} →</span>
      </Link>
    </article>
  );
}

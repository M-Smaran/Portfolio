import type { Metadata } from "next";
import Link from "next/link";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.bio[0],
};

export default function About() {
  return (
    <>
      <PersonJsonLd />
      <section className="section container-x grid gap-12 pt-16 md:grid-cols-[2fr_3fr]">
        <div
          role="img"
          aria-label={`Portrait of ${site.name} (placeholder)`}
          className="aspect-[4/5] rounded-[var(--radius)] border border-line bg-elevated"
          // TODO: replace with <Image src="/media/portrait.jpg" /> once you have a photo
        />
        <div>
          <h1 className="display-hero">About</h1>
          <div className="mt-8 space-y-4 text-lg text-muted">
            {site.bio.map((p) => <p key={p}>{p}</p>)}
          </div>

          <h2 className="mt-14 mb-4 text-2xl">Currently</h2>
          <ul className="list-disc space-y-1 pl-5 text-muted">
            {site.currently.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="container-x pb-24" aria-labelledby="exp-h">
        <h2 id="exp-h" className="display-2 mb-10">Experience</h2>
        <ol className="divide-y divide-line border-y border-line">
          {site.experience.map((e) => (
            <li key={e.period} className="grid gap-2 py-6 md:grid-cols-[1fr_2fr]">
              <p className="text-muted">{e.period}</p>
              <div>
                <p className="text-xl">{e.title}, {e.org}</p>
                <p className="text-muted">{e.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x pb-24" aria-labelledby="edu-h">
        <h2 id="edu-h" className="display-2 mb-10">Education</h2>
        <div className="border-y border-line py-6">
          <p className="text-xl">{site.education.degree}</p>
          <p className="text-muted">{site.education.school}</p>
          <p className="mt-3 text-muted">{site.education.coursework}</p>
        </div>
      </section>

      <section className="container-x pb-24" aria-labelledby="skills-h">
        <h2 id="skills-h" className="display-2 mb-10">Skills &amp; tools</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(site.skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-3 font-sans text-sm uppercase tracking-widest text-muted">{group}</h3>
              <ul className="space-y-1">
                {items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-32 text-center">
        <Link href="/contact" className="btn btn-primary">Let&apos;s talk</Link>
      </section>
    </>
  );
}

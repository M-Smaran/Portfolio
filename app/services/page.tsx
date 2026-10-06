import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "What I offer, who it's for, and how we'd work together.",
};

export default function Services() {
  return (
    <section className="section container-x pt-16">
      <h1 className="display-hero">Services</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">Ways we can work together.</p>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {services.map((s) => (
          <article key={s.slug} id={s.slug} className="scroll-mt-24 grid gap-8 py-14 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-2 text-sm text-accent">{s.forWhom}</p>
              {s.pricing && <p className="mt-4 text-muted">{s.pricing}</p>}
            </div>
            <div className="space-y-6">
              <p className="text-lg">{s.summary}</p>
              <div>
                <h3 className="mb-2 font-sans text-sm uppercase tracking-widest text-muted">What&apos;s included</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {s.included.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-sans text-sm uppercase tracking-widest text-muted">How it works</h3>
                <p>{s.how}</p>
              </div>
              <div>
                <h3 className="mb-2 font-sans text-sm uppercase tracking-widest text-muted">Typical outcome</h3>
                <p>{s.outcome}</p>
              </div>
              <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

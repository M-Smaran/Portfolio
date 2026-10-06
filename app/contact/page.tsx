import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a project, collaboration or role.",
};

export default function Contact() {
  return (
    <section className="section container-x grid gap-16 pt-16 md:grid-cols-2">
      <div>
        <h1 className="display-hero">Get in touch</h1>
        <p className="mt-6 max-w-md text-lg text-muted">
          Tell me a bit about what you&apos;re working on and I&apos;ll reply within two working days.
        </p>
        <dl className="mt-10 space-y-4">
          <div>
            <dt className="text-sm text-muted">Email</dt>
            <dd><a className="hover:text-accent" href={`mailto:${site.email}`}>{site.email}</a></dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Elsewhere</dt>
            <dd className="flex flex-wrap gap-x-6">
              <a className="hover:text-accent" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="hover:text-accent" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}

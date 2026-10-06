import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x py-16">
        <p className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-none">{site.name}</p>
        <p className="mt-4 text-muted">{site.positioning}</p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
          <a href={site.linkedin} className="hover:text-accent" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a href={site.github} className="hover:text-accent" rel="noopener noreferrer" target="_blank">GitHub</a>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-fg">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

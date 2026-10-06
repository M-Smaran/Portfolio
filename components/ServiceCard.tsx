import Link from "next/link";
import type { Service } from "@/content/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-elevated p-8">
      <h3 className="text-2xl md:text-3xl">{service.title}</h3>
      <p className="mt-2 text-sm text-accent">{service.forWhom}</p>
      <p className="mt-4 flex-1 text-muted">{service.summary}</p>
      <Link href={`/services#${service.slug}`} className="mt-8 font-medium hover:text-accent">
        Learn more <span aria-hidden>→</span>
        <span className="sr-only"> about {service.title}</span>
      </Link>
    </article>
  );
}

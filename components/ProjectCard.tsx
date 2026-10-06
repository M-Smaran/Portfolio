import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { title, slug, tagline, tags, cover, videoDesktop, videoMobile, hue } = project;
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-line"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 60% 28%), hsl(${(hue + 60) % 360} 55% 12%))`,
        }}
      >
        <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
          {cover && (
            <Image
              src={cover}
              alt={`${title} preview`}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
              priority={priority}
            />
          )}
          {(videoDesktop || videoMobile) && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={cover}
              aria-hidden
            >
              {videoMobile && <source src={videoMobile} media="(max-width: 767px)" type="video/webm" />}
              {videoDesktop && <source src={videoDesktop} type="video/webm" />}
            </video>
          )}
          {!cover && !videoDesktop && (
            <span className="absolute bottom-4 left-5 font-display text-4xl opacity-60" aria-hidden>
              {title}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <ul className="mb-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
          <h3 className="text-2xl md:text-3xl">{title}</h3>
          <p className="mt-2 text-muted">{tagline}</p>
        </div>
        <span
          aria-hidden
          className="mt-8 -translate-x-2 text-2xl opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        >
          →
        </span>
      </div>
    </Link>
  );
}

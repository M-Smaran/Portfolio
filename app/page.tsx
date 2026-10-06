import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessList } from "@/components/ProcessList";
import { ServiceCard } from "@/components/ServiceCard";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";
import { services, site } from "@/content/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <Marquee />

      <section className="section container-x" aria-labelledby="work-h">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 id="work-h" className="display-2">Selected work</h2>
          <Link href="/work" className="hidden hover:text-accent md:block">All projects →</Link>
        </div>
        <div className="grid gap-16">
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessList />

      <section className="section container-x" aria-labelledby="services-h">
        <h2 id="services-h" className="display-2 mb-14">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container-x text-center">
        <Reveal>
          <h2 className="display-2 mx-auto max-w-3xl">{site.ctaHeadline}</h2>
          <Link href={site.scheduler} className="btn btn-primary mt-10">Book a free call</Link>
        </Reveal>
      </section>
    </>
  );
}

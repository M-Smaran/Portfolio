import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function ProcessList() {
  return (
    <section className="section container-x grid gap-12 md:grid-cols-[1fr_2fr]">
      <div>
        <h2 className="display-2 md:sticky md:top-28">How I work</h2>
      </div>
      <ol className="divide-y divide-line border-y border-line">
        {site.principles.map((p, i) => (
          <li key={p.title} className="py-10">
            <Reveal>
              <div className="flex gap-6">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-lg text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

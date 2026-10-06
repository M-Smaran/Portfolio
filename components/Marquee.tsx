import { site } from "@/content/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center gap-12 pr-12 ${hidden ? "marquee-dup" : ""}`}
      aria-hidden={hidden || undefined}
    >
      {site.credentials.map((c) => (
        <li key={c} className="flex items-center gap-12 whitespace-nowrap font-display text-3xl md:text-5xl">
          {c}
          <span className="text-accent" aria-hidden>✦</span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section aria-label="Highlights" className="marquee overflow-hidden border-y border-line py-8">
      <div className="marquee-track flex">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}

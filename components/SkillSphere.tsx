import { site } from "@/content/site";

// Pure CSS 3D: skills placed on a rotating sphere. Back-facing labels are hidden.
// Falls back to a plain list under prefers-reduced-motion (see globals.css).
export function SkillSphere() {
  const items = Object.values(site.skills).flat();
  const n = items.length;
  const golden = Math.PI * (3 - Math.sqrt(5));

  return (
    <>
      <div className="skill-sphere-stage" aria-hidden>
        <div className="skill-sphere">
          {items.map((label, i) => {
            const y = 1 - (i / (n - 1)) * 2;
            const lat = Math.asin(y) * (180 / Math.PI);
            const lon = ((golden * i) % (2 * Math.PI)) * (180 / Math.PI);
            return (
              <span
                key={label}
                className="skill-sphere-item"
                style={{ transform: `rotateY(${lon}deg) rotateX(${-lat}deg) translateZ(var(--sphere-r))` }}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
      <ul className="skill-sphere-fallback flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className="chip">{i}</li>
        ))}
      </ul>
    </>
  );
}

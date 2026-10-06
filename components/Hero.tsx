"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const words = site.headline.split(" ");

  return (
    <section className="section container-x pt-20 md:pt-32">
      <p className="mb-6 text-sm uppercase tracking-widest text-muted">
        {site.role} · {site.specialty}
      </p>

      <h1 className="display-hero max-w-5xl" aria-label={site.headline}>
        {words.map((w, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 * i, ease }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 * words.length + 0.3, ease }}
      >
        <p className="mt-8 max-w-xl text-lg text-muted">{site.subline}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/work" className="btn btn-primary">View my work →</Link>
          <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
          {site.award.href && (
            <a href={site.award.href} className="chip" target="_blank" rel="noopener noreferrer">
              ★ {site.award.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, allTags } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid() {
  const [tag, setTag] = useState<string | null>(null);
  const shown = tag ? projects.filter((p) => p.tags.includes(tag)) : projects;

  return (
    <>
      <div role="group" aria-label="Filter projects by tag" className="mb-12 flex flex-wrap gap-3">
        {[null, ...allTags].map((t) => (
          <button
            key={t ?? "all"}
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              tag === t ? "border-accent bg-accent text-accent-ink" : "border-line text-muted hover:text-fg"
            }`}
          >
            {t ?? "All"}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

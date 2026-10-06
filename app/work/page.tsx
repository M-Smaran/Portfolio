import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects, case studies and experiments.",
};

export default function WorkPage() {
  return (
    <section className="section container-x pt-16">
      <h1 className="display-hero">Work</h1>
      <p className="mt-6 mb-14 max-w-xl text-lg text-muted">
        A selection of projects where design and engineering met a real problem.
      </p>
      <WorkGrid />
    </section>
  );
}

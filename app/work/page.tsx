import type { Metadata } from "next";
import { Backdrop3D } from "@/components/Backdrop3D";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects, case studies and experiments.",
};

export default function WorkPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <Backdrop3D variant="cluster" />
        <header className="container-x pt-16 pb-14">
          <h1 className="display-hero">Work</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A selection of projects where design and engineering met a real problem.
          </p>
        </header>
      </div>
      <section className="container-x pb-24">
        <WorkGrid />
      </section>
    </>
  );
}

"use client";
import dynamic from "next/dynamic";

// three.js is client-only and loaded after first paint so it doesn't hurt LCP.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full opacity-60 md:w-[60%] md:opacity-100"
    >
      <HeroScene />
    </div>
  );
}

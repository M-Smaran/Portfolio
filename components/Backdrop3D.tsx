"use client";
import dynamic from "next/dynamic";
import type { ShapeVariant } from "./Shape3D";

const Shape3D = dynamic(() => import("./Shape3D"), { ssr: false });

// Decorative 3D canvas. Place inside a `relative isolate overflow-hidden` parent.
export function Backdrop3D({
  variant,
  className = "right-0 w-full md:w-[50%]",
}: {
  variant: ShapeVariant;
  className?: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-y-0 -z-10 opacity-60 md:opacity-100 ${className}`}>
      <Shape3D variant={variant} />
    </div>
  );
}

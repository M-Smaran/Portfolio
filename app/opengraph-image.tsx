import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "flex-end", padding: 80, background: "#141414", color: "#f5f5f0",
        }}
      >
        <div style={{ fontSize: 28, color: "#c8ff5a" }}>{`${site.role} · ${site.specialty}`}</div>
        <div style={{ fontSize: 88, marginTop: 16, lineHeight: 1.05 }}>{site.name}</div>
      </div>
    ),
    size,
  );
}

import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/services", "/contact", "/privacy"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}` })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` })),
  ];
}

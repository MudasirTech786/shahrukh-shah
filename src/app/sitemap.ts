import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const staticRoutes = ["", "/stills", "/reels", "/about", "/news"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: today,
    changeFrequency: route === "" ? "monthly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { stillSeries } from "@/data/stills";
import { siteConfig } from "@/data/site";

const staticRoutes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/work/narrative", priority: 0.8 },
  { path: "/work/commercial", priority: 0.8 },
  { path: "/work/personal", priority: 0.8 },
  { path: "/stills", priority: 0.9 },
  { path: "/instagram", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/prints", priority: 0.7 },
  { path: "/reels", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/news", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: route.priority,
  }));

  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const stillsUrls: MetadataRoute.Sitemap = stillSeries.map((series) => ({
    url: `${siteConfig.url}/stills/${series.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...projectUrls, ...stillsUrls];
}

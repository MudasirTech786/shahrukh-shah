import type { GalleryPhoto } from "@/types";
import { getProjectHref, projects } from "./projects";

export const galleryPhotos: GalleryPhoto[] = projects.map((project) => ({
  src: project.cover,
  width: project.cover.width,
  height: project.cover.height,
  alt: project.alt,
  caption: project.title,
  category: project.category,
  href: getProjectHref(project.slug),
}));

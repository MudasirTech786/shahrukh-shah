import Link from "next/link";
import { GalleryItem } from "@/components/GalleryItem/GalleryItem";
import { getProjectHref } from "@/data/projects";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={getProjectHref(project.slug)}
      aria-label={`${project.title} — ${project.category}, ${project.year}`}
      className="group block w-full border-0 p-0 text-left"
    >
      <GalleryItem
        photo={{
          src: project.cover,
          width: project.cover.width,
          height: project.cover.height,
          alt: project.alt,
          caption: project.title,
          category: project.category,
        }}
        meta={project.year}
        priority={priority}
      />
    </Link>
  );
}

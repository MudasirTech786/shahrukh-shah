import Image from "next/image";
import Link from "next/link";
import type { FeaturedProject } from "@/types";

interface FeaturedCardProps {
  project: FeaturedProject;
  priority?: boolean;
}

const SIZES = "(min-width: 1280px) 18vw, (min-width: 640px) 31vw, 48vw";

export function FeaturedCard({ project, priority = false }: FeaturedCardProps) {
  return (
    <figure className="m-0 block">
      <Link href={project.href} className="group block">
        <div className="relative aspect-video overflow-hidden bg-mist/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={SIZES}
            placeholder="blur"
            priority={priority}
            className="object-cover transition-[filter] duration-[250ms] ease-out group-hover:brightness-105"
          />
        </div>
        <figcaption className="mt-3 transition-transform duration-[250ms] ease-out group-hover:-translate-y-0.5">
          <h3 className="font-serif text-lg font-normal leading-tight text-ink transition-opacity duration-[250ms] ease-out group-hover:opacity-100 sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-ink/50 sm:text-[11px]">
            {project.category}
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            {project.year}
          </p>
        </figcaption>
      </Link>
    </figure>
  );
}

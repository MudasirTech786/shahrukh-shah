import { Masonry } from "@/components/Masonry/Masonry";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { projectsByCategory } from "@/data/projects";
import type { WorkCategory } from "@/types";

interface WorkCategoryViewProps {
  category: WorkCategory;
}

export function WorkCategoryView({ category }: WorkCategoryViewProps) {
  const projects = projectsByCategory(category.title);

  return (
    <div className="pt-[35px]">
      <PageHeader
        title={category.title}
        intro={category.description}
        backHref="/work"
        backLabel="All Work"
        className="mb-8 px-2.5 sm:mb-10 sm:px-5 xl:px-6"
      />
      <Masonry className="pb-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 4} />
        ))}
      </Masonry>
    </div>
  );
}

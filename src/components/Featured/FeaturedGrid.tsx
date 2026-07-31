import { FeaturedCard } from "@/components/Featured/FeaturedCard";
import { featuredProjects } from "@/data/featured";

export function FeaturedGrid() {
  return (
    <section aria-labelledby="featured-heading" className="py-[50px]">
      <div className="px-2.5 sm:px-5 xl:px-6">
        <h2
          id="featured-heading"
          className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60"
        >
          Featured
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.id} project={project} priority={index < 5} />
          ))}
        </div>
      </div>
    </section>
  );
}

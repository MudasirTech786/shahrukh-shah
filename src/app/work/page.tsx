import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { projectsByCategory, workCategories } from "@/data/projects";
import type { WorkCategory } from "@/types";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Narrative features, commercial campaigns and personal work photographed by Shahrukh Shah, Director of Photography.",
};

const coverSizes = "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw";

function CategoryCard({ category }: { category: WorkCategory }) {
  const count = projectsByCategory(category.title).length;

  return (
    <Link href={`/work/${category.slug}`} className="group block">
      <figure className="m-0 relative overflow-hidden bg-mist/50">
        <Image
          src={category.cover}
          alt={`${category.title} — cover`}
          sizes={coverSizes}
          placeholder="blur"
          className="h-auto w-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-black/40 px-4 pb-3 pt-12 opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="font-serif text-lg font-normal leading-tight text-white sm:text-xl">
            {category.title}
          </span>
          <span className="mt-0.5 text-[9px] font-light uppercase tracking-[0.2em] text-white/75">
            {count} projects
          </span>
        </div>
      </figure>
      <figcaption className="mt-4">
        <h2 className="font-serif text-xl font-light leading-tight text-ink sm:text-2xl">
          {category.title}
        </h2>
        <p className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
          {count} projects
        </p>
        <p className="mt-3 text-sm font-light leading-relaxed text-ink/60">{category.description}</p>
      </figcaption>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <Container>
      <Section>
        <Hero
          eyebrow="Work"
          title="Selected Work"
          intro="Features, campaigns and personal studies — a selection of the frames that matter, photographed over the last ten years."
          className="px-2.5 sm:px-5 xl:px-6"
        />

        <div className="mt-14 grid gap-x-6 gap-y-14 px-2.5 sm:mt-16 sm:px-5 md:grid-cols-3 xl:px-6">
          {workCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>
    </Container>
  );
}

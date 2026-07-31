import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container/Container";
import { Gallery } from "@/components/Gallery/Gallery";
import { Masonry } from "@/components/Masonry/Masonry";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Section } from "@/components/Section/Section";
import { WorkVideo } from "@/components/WorkVideo/WorkVideo";
import {
  getAdjacentProjects,
  getProject,
  getProjectHref,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import type { GalleryPhoto } from "@/types";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

const heroSizes = "(min-width: 1280px) 64rem, 100vw";

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { title, category, year, client, director, producer, productionCompany, description, cover, alt, gallery, video } =
    project;

  const btsPhotos: GalleryPhoto[] = gallery.map((image) => ({
    src: image,
    width: image.width,
    height: image.height,
    alt: `${title} — behind the scenes`,
    caption: `${title} — behind the scenes`,
  }));

  const related = getRelatedProjects(slug, 3);

  const { previous, next } = getAdjacentProjects(slug);

  const credits: { label: string; value: string }[] = [
    { label: "Category", value: category },
    ...(year ? [{ label: "Year", value: year }] : []),
    { label: "Client", value: client },
    { label: "Director", value: director },
    { label: "Producer", value: producer },
    { label: "Production Company", value: productionCompany },
  ];

  return (
    <div className="pt-[35px]">
      <Container>
        <PageHeader
          title={title}
          backHref="/"
          backLabel="All Work"
          className="mb-8 sm:mb-10"
        />
      </Container>

      <Section className="pb-4">
        <Container>
          <div className="relative overflow-hidden bg-mist/50">
            <Image
              src={cover}
              alt={alt}
              width={cover.width}
              height={cover.height}
              sizes={heroSizes}
              placeholder="blur"
              priority
              className="h-auto w-full"
            />
          </div>

          {video ? (
            <div className="mt-10">
              <WorkVideo video={video} title={title} />
            </div>
          ) : null}

          <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-[1fr_16rem] md:gap-16">
            <div>
              <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
                About
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-ink/75 sm:text-base">
                {description}
              </p>
            </div>

            <aside>
              <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
                Credits
              </h2>
              <dl className="mt-4 space-y-4">
                {credits.map((credit) => (
                  <div key={credit.label}>
                    <dt className="text-[10px] font-light uppercase tracking-[0.18em] text-ink/45">
                      {credit.label}
                    </dt>
                    <dd className="mt-1 text-sm font-light text-ink">{credit.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          {btsPhotos.length > 0 ? (
            <div className="mt-14 sm:mt-16">
              <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
                Behind the Scenes
              </h2>
              <div className="mt-6 -mx-2.5 sm:-mx-5 xl:-mx-6">
                <Gallery photos={btsPhotos} eagerCount={1} />
              </div>
            </div>
          ) : null}

          {related.length > 0 ? (
            <div className="mt-16">
              <h2 className="px-2.5 text-[11px] font-light uppercase tracking-[0.27em] text-ink/60 sm:px-5 xl:px-6">
                Related Work
              </h2>
              <div className="mt-6 -mx-2.5 sm:-mx-5 xl:-mx-6">
                <Masonry>
                  {related.map((item, index) => (
                    <ProjectCard key={item.slug} project={item} priority={index === 0} />
                  ))}
                </Masonry>
              </div>
            </div>
          ) : null}

          <nav
            aria-label="Project navigation"
            className="mt-16 flex flex-col gap-4 border-t border-mist pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            {previous ? (
              <Link
                href={getProjectHref(previous.slug)}
                className="group flex flex-col gap-1 text-left"
              >
                <span className="text-[10px] font-light uppercase tracking-[0.18em] text-ink/45 transition-colors group-hover:text-ink">
                  ← Previous
                </span>
                <span className="font-serif text-lg font-light text-ink">{previous.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={getProjectHref(next.slug)}
                className="group flex flex-col items-start gap-1 text-left sm:items-end sm:text-right"
              >
                <span className="text-[10px] font-light uppercase tracking-[0.18em] text-ink/45 transition-colors group-hover:text-ink">
                  Next →
                </span>
                <span className="font-serif text-lg font-light text-ink">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </Container>
      </Section>
    </div>
  );
}

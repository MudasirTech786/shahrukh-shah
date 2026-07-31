import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/Button/Button";
import { siteConfig } from "@/data/site";
import portrait from "@/data/images/stills-09.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Khalid Mohtaseb is a director of photography working across narrative features and cinematic advertising, based in New York City.",
};

export default function AboutPage() {
  return (
    <Container>
      <Section>
        <PageTitle title="About" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <figure className="sticky top-28">
              <Image
                src={portrait}
                alt="Portrait of Khalid Mohtaseb"
                sizes="(min-width: 1024px) 38vw, 100vw"
                placeholder="blur"
                className="h-auto w-full"
              />
              <figcaption className="mt-4 text-[10px] font-light uppercase tracking-[0.2em] text-ink/45">
                {siteConfig.name}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {siteConfig.bio.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-[15px] font-light leading-relaxed text-ink/75 sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
              <Button href="https://www.instagram.com/khalidmohtaseb" external>
                Instagram
              </Button>
              <Button href="https://vimeo.com/khalidmohtaseb" external>
                Vimeo
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

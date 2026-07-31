import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { StillCard } from "@/components/StillCard/StillCard";
import { stillSeries, stillsBySeries } from "@/data/stills";

export const metadata: Metadata = {
  title: "Stills",
  description:
    "Photographs by Shahrukh Shah — portrait, mood, landscape, NYC and unpublished series from the road and the set.",
};

export default function StillsPage() {
  return (
    <Container>
      <Section>
        <Hero
          eyebrow="Stills"
          title="Stills"
          intro="A selection of photographs from the road and the set — portraits, mood studies, landscapes and frames from New York."
          className="px-2.5 sm:px-5 xl:px-6"
        />

        <div className="mt-14 grid gap-x-6 gap-y-14 px-2.5 sm:mt-16 sm:px-5 sm:grid-cols-2 xl:grid-cols-3 xl:px-6">
          {stillSeries.map((series, index) => (
            <StillCard key={series.slug} series={series} count={stillsBySeries(series.slug).length} priority={index < 2} />
          ))}
        </div>
      </Section>
    </Container>
  );
}

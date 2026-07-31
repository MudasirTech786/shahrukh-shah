import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Gallery } from "@/components/Gallery/Gallery";
import { stillsPhotos } from "@/data/stills";

export const metadata: Metadata = {
  title: "Stills",
  description:
    "A selection of still photographs from the series of Khalid Mohtaseb — portrait, mood, landscape, New York and unpublished work.",
};

export default function StillsPage() {
  return (
    <Container>
      <Section>
        <PageTitle
          title="Stills"
          intro="A selection of photographs from the road and the set — portraits, mood studies, landscapes and frames from New York."
        />
        <Gallery photos={stillsPhotos} eagerCount={4} />
      </Section>
    </Container>
  );
}

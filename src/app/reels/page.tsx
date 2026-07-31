import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { ReelGrid } from "@/components/ReelGrid/ReelGrid";
import { reels } from "@/data/reels";

export const metadata: Metadata = {
  title: "Reels",
  description:
    "Films and campaigns photographed by Shahrukh Shah — narrative features and advertising for BMW, Nike, PlayStation, Far Cry and more.",
};

export default function ReelsPage() {
  return (
    <Container>
      <Section>
        <Hero
          eyebrow="Reels"
          title="Reels"
          intro="A selection of films and campaigns. Click a title to watch the reel."
          className="mb-10 sm:mb-14"
        />
        <ReelGrid reels={reels} />
      </Section>
    </Container>
  );
}

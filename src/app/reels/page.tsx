import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ReelGrid } from "@/components/ReelGrid/ReelGrid";
import { reels } from "@/data/reels";

export const metadata: Metadata = {
  title: "Reels",
  description:
    "Films and campaigns photographed by Khalid Mohtaseb — narrative features and advertising for BMW, Nike, PlayStation, Far Cry and more.",
};

export default function ReelsPage() {
  return (
    <Container>
      <Section>
        <PageTitle
          title="Reels"
          intro="A selection of films and campaigns. Click a title to watch the reel."
        />
        <ReelGrid reels={reels} />
      </Section>
    </Container>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Masonry } from "@/components/Masonry/Masonry";
import { Section } from "@/components/Section/Section";
import { VideoWork } from "@/components/VideoWork/VideoWork";
import { commercialVideos } from "@/data/projects";

export const metadata: Metadata = {
  title: "Commercial",
  description:
    "Cinematic campaigns photographed by Shahrukh Shah for BMW, Nike, PlayStation, Porsche, Ubisoft and more.",
};

export default function CommercialWorkPage() {
  return (
    <Section className="pt-[35px]">
        <Container>
          <div className="mb-8 flex items-baseline justify-between gap-4 sm:mb-10">
            <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
              Commercial Work
            </h2>
            <span className="text-[10px] font-light uppercase tracking-[0.18em] text-ink/40">
              {commercialVideos.length} films
            </span>
          </div>
        </Container>
        <Masonry className="pb-4">
          {commercialVideos.map((video) => (
            <VideoWork key={video.url} video={video} />
          ))}
        </Masonry>
    </Section>
  );
}

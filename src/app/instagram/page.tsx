import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { Button } from "@/components/Button/Button";
import { contactInfo } from "@/data/contact";
import { instagramPosts } from "@/data/instagram";

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Daily frames from Shahrukh Shah — behind the scenes, outtakes and street photographs posted from New York and the road.",
};

const postSizes =
  "(min-width: 1280px) 14vw, (min-width: 1024px) 20vw, (min-width: 640px) 32vw, 48vw";

export default function InstagramPage() {
  return (
    <Container>
      <Section>
        <div className="flex flex-col gap-6 px-2.5 sm:px-5 sm:flex-row sm:items-end sm:justify-between xl:px-6">
          <Hero
            eyebrow="Instagram"
            title="Instagram"
            intro="Between projects the camera stays on — behind the scenes, outtakes, street frames and the hours that don't make the reel."
          />
          <Button href={contactInfo.instagramUrl} external variant="primary" className="shrink-0">
            View on Instagram
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 px-2.5 sm:mt-14 sm:grid-cols-4 sm:px-5 md:grid-cols-6 xl:px-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.caption} — ${post.likes} likes`}
              className="group relative block overflow-hidden bg-mist/50"
            >
              <Image
                src={post.image}
                alt={post.caption}
                sizes={postSizes}
                placeholder="blur"
                className="aspect-square h-auto w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <span className="text-[10px] font-light uppercase tracking-[0.18em] text-white">
                  {post.likes.toLocaleString()} likes
                </span>
                <span className="text-[10px] font-light uppercase tracking-[0.18em] text-white">
                  {post.comments} comments
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </Container>
  );
}

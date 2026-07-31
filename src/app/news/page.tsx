import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { NewsCard } from "@/components/NewsCard/NewsCard";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and releases from Producer + cinematographer Shahrukh Shah — premieres, campaigns and awards.",
};

export default function NewsPage() {
  return (
    <Container>
      <Section>
        <Hero
          eyebrow="News"
          title="News"
          intro="Premieres, campaigns and moments from the archive."
          className="mb-10 sm:mb-14"
        />
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard key={article.title} article={article} />
          ))}
        </div>
      </Section>
    </Container>
  );
}

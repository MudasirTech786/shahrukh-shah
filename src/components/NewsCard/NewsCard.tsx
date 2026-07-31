import Image from "next/image";
import { formatDate } from "@/lib/format";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const hasLink = Boolean(article.href);
  const image = (
    <div className="overflow-hidden bg-mist">
      <Image
        src={article.image}
        alt={article.imageAlt}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[3/2] h-auto w-full object-cover transition-[filter] duration-[250ms] ease-out group-hover:brightness-105"
      />
    </div>
  );

  const title = <h2 className="mt-2 font-serif text-2xl font-light text-ink">{article.title}</h2>;

  return (
    <article className="group flex flex-col">
      {hasLink ? (
        <a href={article.href} target="_blank" rel="noopener noreferrer" aria-label={article.title}>
          {image}
        </a>
      ) : (
        image
      )}
      <time className="mt-5 text-[10px] font-light uppercase tracking-[0.2em] text-ink/45">
        {formatDate(article.date)}
      </time>
      {hasLink ? (
        <a href={article.href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
      <p className="mt-3 text-sm font-light leading-relaxed text-ink/60">{article.excerpt}</p>
    </article>
  );
}

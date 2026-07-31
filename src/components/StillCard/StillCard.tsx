import Image from "next/image";
import Link from "next/link";
import type { StillSeries } from "@/types";

interface StillCardProps {
  series: StillSeries;
  count: number;
  priority?: boolean;
}

export function StillCard({ series, count, priority = false }: StillCardProps) {
  return (
    <Link href={`/stills/${series.slug}`} className="group block">
      <div className="relative overflow-hidden bg-mist/50">
        <Image
          src={series.cover}
          alt={`${series.title} cover`}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          priority={priority}
          className="h-auto w-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-black/40 px-4 pb-3 pt-12 opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="font-serif text-base font-normal leading-tight text-white sm:text-lg">
            {series.title}
          </span>
          <span className="mt-0.5 text-[9px] font-light uppercase tracking-[0.2em] text-white/75">
            {count} photographs
          </span>
        </div>
      </div>
      <h2 className="mt-3 font-serif text-lg font-light leading-tight text-ink sm:text-xl">
        {series.title}
      </h2>
      <p className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
        {count} photographs
      </p>
    </Link>
  );
}

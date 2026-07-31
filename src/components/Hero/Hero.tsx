import { cn } from "@/lib/cn";

interface HeroProps {
  title: string;
  intro?: string;
  eyebrow?: string;
  className?: string;
}

export function Hero({ title, intro, eyebrow, className }: HeroProps) {
  return (
    <div className={cn("", className)}>
      {eyebrow ? (
        <p className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">{eyebrow}</p>
      ) : null}
      <h1 className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-ink/60 sm:text-base">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

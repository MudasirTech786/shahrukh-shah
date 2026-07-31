import { cn } from "@/lib/cn";

interface PageTitleProps {
  title: string;
  intro?: string;
  className?: string;
}

export function PageTitle({ title, intro, className }: PageTitleProps) {
  return (
    <div className={cn("mb-14 sm:mb-20", className)}>
      <h1 className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">{title}</h1>
      {intro ? (
        <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-ink/60 sm:text-base">{intro}</p>
      ) : null}
    </div>
  );
}

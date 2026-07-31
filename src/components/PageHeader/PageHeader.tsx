import Link from "next/link";
import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  intro?: string;
  backHref?: string;
  backLabel?: string;
  className?: string;
}

export function PageHeader({ title, intro, backHref, backLabel, className }: PageHeaderProps) {
  return (
    <div className={cn("", className)}>
      {backHref ? (
        <Link
          href={backHref}
          className="inline-block text-[11px] font-light uppercase tracking-[0.18em] text-ink/50 transition-colors hover:text-ink"
        >
          ← {backLabel ?? "Back"}
        </Link>
      ) : null}
      <h1 className="mt-6 font-serif text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-ink/60 sm:text-base">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

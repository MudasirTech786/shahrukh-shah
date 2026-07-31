import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

interface LoaderProps {
  className?: string;
  label?: string;
}

export function Loader({ className, label }: LoaderProps) {
  return (
    <div className={cn("flex w-full items-center justify-center py-32", className)} role="status" aria-live="polite">
      <span className="animate-pulse font-serif text-xl font-light tracking-wide text-ink/50">
        {label ?? siteConfig.name}
      </span>
    </div>
  );
}

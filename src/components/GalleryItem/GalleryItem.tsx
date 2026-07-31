import Image from "next/image";
import { cn } from "@/lib/cn";
import type { GalleryPhoto } from "@/types";

interface GalleryItemProps {
  photo: GalleryPhoto;
  sizes?: string;
  priority?: boolean;
  /** Optional extra line in the hover overlay (e.g. a year). */
  meta?: string;
  className?: string;
}

export function GalleryItem({ photo, sizes, priority = false, meta, className }: GalleryItemProps) {
  return (
    <figure className={cn("relative m-0 block overflow-hidden bg-mist/50", className)}>
      <Image
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        sizes={sizes}
        placeholder="blur"
        priority={priority}
        className="block h-auto w-full"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-black/40 px-4 pb-3 pt-12 opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <span className="font-serif text-sm font-normal leading-tight text-white sm:text-base">
          {photo.caption}
        </span>
        <span className="mt-0.5 text-[9px] font-light uppercase tracking-[0.2em] text-white/75">
          {[photo.category, meta].filter(Boolean).join(" · ")}
        </span>
      </div>
    </figure>
  );
}

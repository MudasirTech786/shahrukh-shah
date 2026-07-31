"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/animations/variants";
import type { GalleryPhoto } from "@/types";

interface GalleryItemProps {
  photo: GalleryPhoto;
  priority?: boolean;
}

const SIZES = "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 480px) 50vw, 100vw";

export function GalleryItem({ photo, priority = false }: GalleryItemProps) {
  return (
    <figure className="relative m-0 block overflow-hidden bg-mist/50">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <Image
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          sizes={SIZES}
          placeholder="blur"
          priority={priority}
          className="block h-auto w-full transition-[filter] duration-[250ms] ease-out group-hover:brightness-105 group-focus-visible:brightness-105"
        />
      </motion.div>

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-1.5 items-end justify-between gap-4 bg-gradient-to-t from-black/35 to-transparent px-4 pb-3 pt-12 opacity-0 transition-all duration-[250ms] ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <span className="font-serif text-sm font-normal leading-tight text-white sm:text-base">{photo.caption}</span>
        {photo.category ? (
          <span className="shrink-0 pb-0.5 text-[9px] font-light uppercase tracking-[0.2em] text-white/75">
            {photo.category}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

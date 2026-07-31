"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/cn";
import type { GalleryPhoto } from "@/types";
import { GalleryItem } from "@/components/GalleryItem/GalleryItem";
import { Loader } from "@/components/Loader/Loader";
import { DEFAULT_COLUMNS } from "@/components/Masonry/Masonry";

const GalleryLightbox = dynamic(
  () => import("@/components/Lightbox/GalleryLightbox").then((module) => module.GalleryLightbox),
  {
    ssr: false,
    loading: () => <Loader />,
  },
);

interface GalleryProps {
  photos: GalleryPhoto[];
  className?: string;
  columnsClassName?: string;
  /** Number of leading images to render eagerly (first viewport). */
  eagerCount?: number;
  sizes?: string;
}

const DEFAULT_SIZES =
  "(min-width: 1280px) 20vw, (min-width: 1024px) 24vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 100vw";

export function Gallery({
  photos,
  className,
  columnsClassName = DEFAULT_COLUMNS,
  eagerCount = 6,
  sizes = DEFAULT_SIZES,
}: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slides = useMemo(
    () =>
      photos.map((photo) => ({
        src: photo.src.src,
        width: photo.width,
        height: photo.height,
        alt: photo.caption,
      })),
    [photos],
  );

  return (
    <div className={cn("w-full px-2.5 sm:px-5 xl:px-6", className)}>
      <div className={cn("w-full", columnsClassName)}>
        {photos.map((photo, index) => (
          <div key={photo.caption + index} className="mb-2 break-inside-avoid">
            <button
              type="button"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              aria-label={`Open ${photo.caption}`}
              className="group block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
            >
              <GalleryItem photo={photo} sizes={sizes} priority={index < eagerCount} />
            </button>
          </div>
        ))}
      </div>

      {lightboxOpen ? (
        <GalleryLightbox
          slides={slides}
          open={lightboxOpen}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setLightboxIndex}
        />
      ) : null}
    </div>
  );
}

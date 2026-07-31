"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import PhotoAlbum, {
  type Photo,
  type RenderPhotoContext,
  type RenderPhotoProps,
} from "react-photo-album";
import "react-photo-album/masonry.css";
import { cn } from "@/lib/cn";
import type { GalleryPhoto } from "@/types";
import { GalleryItem } from "@/components/GalleryItem/GalleryItem";
import { Loader } from "@/components/Loader/Loader";

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
  columns?: number | ((containerWidth: number) => number);
  spacing?: number | ((containerWidth: number) => number);
  /** Number of leading images to render eagerly (first viewport). */
  eagerCount?: number;
}

function responsiveColumns(containerWidth: number): number {
  if (containerWidth < 480) return 1;
  if (containerWidth < 768) return 2;
  if (containerWidth < 1024) return 3;
  return 4;
}

function responsiveSpacing(containerWidth: number): number {
  return containerWidth < 768 ? 12 : 20;
}

export function Gallery({
  photos,
  className,
  columns = responsiveColumns,
  spacing = responsiveSpacing,
  eagerCount = 6,
}: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const albumPhotos = useMemo<Photo[]>(
    () =>
      photos.map((photo) => ({
        src: photo.src.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
      })),
    [photos],
  );

  const renderPhoto = (props: RenderPhotoProps, context: RenderPhotoContext<Photo>) => (
    <button
      type="button"
      onClick={props.onClick}
      aria-label={photos[context.index]?.caption}
      className="group block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
    >
      <GalleryItem photo={photos[context.index]} priority={context.index < eagerCount} />
    </button>
  );

  return (
    <div className={cn("w-full", className)}>
      <PhotoAlbum
        layout="masonry"
        photos={albumPhotos}
        columns={columns}
        spacing={spacing}
        padding={0}
        onClick={({ index }) => {
          setLightboxIndex(index);
          setLightboxOpen(true);
        }}
        render={{ photo: renderPhoto }}
      />
      {lightboxOpen ? (
        <GalleryLightbox
          photos={photos}
          open={lightboxOpen}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setLightboxIndex}
        />
      ) : null}
    </div>
  );
}

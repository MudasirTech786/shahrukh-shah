import type { Metadata } from "next";
import Link from "next/link";
import { GalleryItem } from "@/components/GalleryItem/GalleryItem";
import { Masonry } from "@/components/Masonry/Masonry";
import { galleryPhotos } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A cinematic selection of narrative features, commercial campaigns and personal photographs by Shahrukh Shah, Director of Photography.",
};

export default function HomePage() {
  return (
    <Masonry className="pb-4">
      {galleryPhotos.map((photo, index) => (
        <Link
          key={photo.caption + index}
          href={photo.href ?? "#"}
          aria-label={photo.caption}
          className="group block w-full border-0 p-0 text-left"
        >
          <GalleryItem photo={photo} priority={index < 6} />
        </Link>
      ))}
    </Masonry>
  );
}

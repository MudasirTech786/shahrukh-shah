"use client";

import { useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLenis } from "@/hooks/useLenis";
import type { GalleryPhoto } from "@/types";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  open: boolean;
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function GalleryLightbox({ photos, open, index, onClose, onIndexChange }: GalleryLightboxProps) {
  const { start, stop } = useLenis();

  useEffect(() => {
    if (!open) {
      return;
    }
    stop();
    return () => {
      start();
    };
  }, [open, start, stop]);

  const slides = photos.map((photo) => ({
    src: photo.src.src,
    width: photo.width,
    height: photo.height,
    alt: photo.caption,
  }));

  return (
    <Lightbox
      open={open}
      index={index}
      slides={slides}
      close={onClose}
      on={{ view: ({ index: viewIndex }) => onIndexChange(viewIndex) }}
      carousel={{ preload: 2, padding: "4%" }}
      animation={{ fade: 180, swipe: 250 }}
      controller={{ closeOnBackdropClick: true }}
      styles={{ root: { backgroundColor: "rgba(17, 17, 17, 0.94)" } }}
    />
  );
}

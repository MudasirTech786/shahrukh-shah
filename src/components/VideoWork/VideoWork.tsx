import { Play } from "lucide-react";
import { GalleryItem } from "@/components/GalleryItem/GalleryItem";
import type { CommercialVideo } from "@/types";

interface VideoWorkProps {
  video: CommercialVideo;
}

export function VideoWork({ video }: VideoWorkProps) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${video.title} — open video in a new tab`}
      className="group block focus-visible:outline-none"
    >
      <div className="relative">
        <GalleryItem
          photo={{
            src: video.thumbnail,
            width: video.thumbnail.width,
            height: video.thumbnail.height,
            alt: "",
            caption: "",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/30 group-focus-visible:bg-black/30">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
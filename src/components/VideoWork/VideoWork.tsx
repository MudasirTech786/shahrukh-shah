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
            caption: video.title,
            category: "Commercial",
          }}
          meta={video.filmedDate}
          className="scale-[1.01] transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none invisible absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,visibility] duration-300 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100">
          <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-100 group-focus-visible:scale-100">
            <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
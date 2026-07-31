import type { ProjectVideo } from "@/types";

interface WorkVideoProps {
  video: ProjectVideo;
  title: string;
}

export function WorkVideo({ video, title }: WorkVideoProps) {
  const src =
    video.platform === "vimeo"
      ? `https://player.vimeo.com/video/${video.id}`
      : `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="aspect-video w-full bg-ink">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="h-full w-full border-0"
      />
    </div>
  );
}

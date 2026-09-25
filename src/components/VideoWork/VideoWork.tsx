"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { fadeIn, fadeUp } from "@/animations/variants";
import { GalleryItem } from "@/components/GalleryItem/GalleryItem";
import type { CommercialVideo } from "@/types";

interface VideoWorkProps {
  video: CommercialVideo;
}

function getPlayerSource(url: string): { kind: "iframe" | "video"; src: string; provider: string } {
  const parsed = new URL(url);
  const host = parsed.hostname.toLowerCase();
  const path = parsed.pathname;

  if (host === "drive.google.com" || host === "docs.google.com") {
    const fileId = path.match(/\/file\/d\/([^/]+)/)?.[1] ?? parsed.searchParams.get("id");
    return { kind: "iframe", src: fileId ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview` : url, provider: "Google Drive" };
  }
  if (host === "youtube.com" || host.endsWith(".youtube.com") || host === "youtu.be") {
    const id = host === "youtu.be" ? path.slice(1).split("/")[0] : path.startsWith("/embed/") ? path.split("/")[2] : parsed.searchParams.get("v");
    return { kind: "iframe", src: id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0` : url, provider: "YouTube" };
  }
  if (host === "facebook.com" || host.endsWith(".facebook.com")) {
    const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=1280`;
    return { kind: "iframe", src: embedUrl, provider: "Facebook" };
  }
  if (/\.(mp4|webm|ogg|mov|m4v)(?:$|[?#])/i.test(url)) return { kind: "video", src: url, provider: "video" };

  const vimeoId = path.match(/\/(\d+)(?:$|\/)/)?.[1];
  return { kind: "iframe", src: vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1` : url, provider: "Vimeo" };
}

export function VideoWork({ video }: VideoWorkProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);
  const source = open ? getPlayerSource(video.url) : null;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${video.title}`}
        className="group block w-full cursor-pointer border-0 bg-transparent p-0 text-left focus-visible:outline-none"
      >
        <div className="relative">
          <GalleryItem
            photo={{ src: video.thumbnail, width: video.thumbnail.width, height: video.thumbnail.height, alt: "", caption: video.title, category: "Commercial" }}
            meta={video.filmedDate}
            className="scale-[1.01] transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
          <div className="pointer-events-none invisible absolute inset-0 flex items-center justify-center opacity-0 transition-[opacity,visibility] duration-300 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 max-[1024px]:visible max-[1024px]:opacity-100">
            <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-100 group-focus-visible:scale-100 max-[1024px]:scale-100">
              <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && source ? (
          <motion.div role="dialog" aria-modal="true" aria-label={`${video.title} video player`} variants={fadeIn} initial="hidden" animate="visible" exit="hidden" onClick={close} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-10">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" exit="hidden" onClick={(event) => event.stopPropagation()} className="w-full max-w-5xl">
              <div className="aspect-video w-full bg-black">
                {source.kind === "video" ? (
                  <video key={source.src} src={source.src} controls autoPlay playsInline className="h-full w-full" />
                ) : (
                  <iframe key={source.src} src={source.src} title={`${video.title} — ${source.provider} player`} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen className="h-full w-full border-0" />
                )}
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="font-serif text-lg font-light text-white">{video.title}<span className="ml-3 text-sm text-white/50">{video.filmedDate}</span></p>
                <button ref={closeButtonRef} type="button" onClick={close} aria-label="Close video" className="flex h-10 w-10 shrink-0 items-center justify-center text-white/70 transition-colors hover:text-white"><X size={20} strokeWidth={1.25} /></button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

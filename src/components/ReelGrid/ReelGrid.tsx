"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { fadeIn, fadeUp } from "@/animations/variants";
import { cn } from "@/lib/cn";
import type { Reel } from "@/types";
import { useLenis } from "@/hooks/useLenis";

interface ReelGridProps {
  reels: Reel[];
}

interface ReelCardProps {
  reel: Reel;
  onSelect: (reel: Reel) => void;
}

function vimeoEmbedUrl(vimeoId: string): string {
  return `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&dnt=1`;
}

function ReelCard({ reel, onSelect }: ReelCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(reel)}
      aria-label={`Play ${reel.title}`}
      className={cn(
        "group block w-full cursor-pointer border-0 bg-transparent p-0 text-left",
        reel.featured && "lg:col-span-2",
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-mist">
        <Image
          src={reel.thumbnail}
          alt={reel.thumbnailAlt}
          sizes={reel.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          fill
          placeholder="blur"
          className="object-cover transition-[filter] duration-[250ms] ease-out group-hover:brightness-105"
        />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
          <Play size={36} strokeWidth={1} className="text-white" fill="currentColor" aria-hidden />
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl font-light text-ink">
          {reel.title}
          {reel.client ? <span className="text-ink/60"> — {reel.client}</span> : null}
        </h3>
        <span className="text-[10px] font-light uppercase tracking-[0.2em] text-ink/45">{reel.year}</span>
      </div>
    </button>
  );
}

export function ReelGrid({ reels }: ReelGridProps) {
  const [active, setActive] = useState<Reel | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { start, stop } = useLenis();

  const close = useCallback(() => {
    setActive(null);
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }
    stop();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      start();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, start, stop]);

  return (
    <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {reels.map((reel) => (
        <ReelCard key={reel.vimeoId} reel={reel} onSelect={setActive} />
      ))}

      <AnimatePresence>
        {active ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} video player`}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={vimeoEmbedUrl(active.vimeoId)}
                  title={`${active.title} — Vimeo player`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="font-serif text-lg font-light text-white">
                  {active.title}
                  {active.year ? <span className="ml-3 text-sm text-white/50">{active.year}</span> : null}
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Close video"
                  className="flex h-10 w-10 shrink-0 items-center justify-center text-white/70 transition-colors hover:text-white"
                >
                  <X size={20} strokeWidth={1.25} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

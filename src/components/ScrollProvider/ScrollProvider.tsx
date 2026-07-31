"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { ScrollContext, type ScrollContextValue } from "@/hooks/useLenis";

interface ScrollProviderProps {
  children: ReactNode;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      return;
    }

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    setLenis(instance);

    let frameId: number;
    const raf = (time: number) => {
      instance.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  const stop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  const start = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  const value: ScrollContextValue = { lenis, stop, start };

  return (
    <MotionConfig reducedMotion="user">
      <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
    </MotionConfig>
  );
}

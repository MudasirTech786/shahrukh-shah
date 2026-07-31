"use client";

import { createContext, useContext } from "react";
import type Lenis from "lenis";

export interface ScrollContextValue {
  /** The active Lenis instance, or `null` when smooth scrolling is unavailable. */
  lenis: Lenis | null;
  /** Pause smooth scrolling (used when overlays lock the page). */
  stop: () => void;
  /** Resume smooth scrolling. */
  start: () => void;
}

export const ScrollContext = createContext<ScrollContextValue>({
  lenis: null,
  stop: () => {},
  start: () => {},
});

export function useLenis(): ScrollContextValue {
  return useContext(ScrollContext);
}

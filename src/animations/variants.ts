import type { Variants } from "framer-motion";

export type CubicBezier = [number, number, number, number];

export const EASE_OUT: CubicBezier = [0.22, 1, 0.36, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const viewportOnce = { once: true, margin: "0px 0px -10% 0px" } as const;

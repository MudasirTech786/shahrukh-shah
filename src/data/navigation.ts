import type { NavigationItem } from "@/types";

export const navigation: NavigationItem[] = [
  {
    label: "Featured",
    href: "/",
  },
  {
    label: "Work",
    children: [
      { label: "Narrative", href: "/work/narrative" },
      { label: "Commercial", href: "/work/commercial" },
      { label: "Personal", href: "/work/personal" },
    ],
  },
  {
    label: "Stills",
    children: [
      { label: "Overview", href: "/stills" },
      { label: "Portrait Series", href: "/stills/portrait-series" },
      { label: "Mood Series", href: "/stills/mood-series" },
      { label: "Landscape Series", href: "/stills/landscape-series" },
      { label: "NYC Series", href: "/stills/nyc-series" },
      { label: "Unpublished", href: "/stills/unpublished" },
    ],
  },
  {
    label: "Instagram",
    href: "/instagram",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Prints",
    href: "/prints",
  },
];

import type { FeaturedProject } from "@/types";
import homeWolfHour from "@/data/images/home-wolf-hour.jpg";
import homeUncleFrank from "@/data/images/home-uncle-frank.jpg";
import homeNike from "@/data/images/home-nike.jpg";
import homeFarCry from "@/data/images/home-far-cry-sermon.jpg";
import homeAnomaly from "@/data/images/home-anomaly-full.jpg";

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "The Wolf Hour",
    category: "Narrative",
    year: "2019",
    image: homeWolfHour,
    href: "/work/the-wolf-hour",
  },
  {
    id: 2,
    title: "Uncle Frank",
    category: "Narrative",
    year: "2020",
    image: homeUncleFrank,
    href: "/work/uncle-frank",
  },
  {
    id: 3,
    title: "Nike — Run by Rebels",
    category: "Commercial",
    year: "2018",
    image: homeNike,
    href: "/work/nike-run-by-rebels",
  },
  {
    id: 4,
    title: "Far Cry — Sermon",
    category: "Commercial",
    year: "2018",
    image: homeFarCry,
    href: "/work/far-cry",
  },
  {
    id: 5,
    title: "Anomaly",
    category: "Narrative",
    year: "2016",
    image: homeAnomaly,
    href: "/work/anomaly",
  },
];

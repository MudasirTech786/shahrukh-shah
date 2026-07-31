import type { Reel } from "@/types";

import reelAnomaly from "./images/home-anomaly-full.jpg";
import reelWolfHour from "./images/home-wolf-hour.jpg";
import reelBetway from "./images/home-betway.jpg";
import reelNike from "./images/home-nike.jpg";
import reelPlaystation from "./images/home-playstation.jpg";
import reelJonHopkins from "./images/home-jon-hopkins.jpg";
import reelFarCry from "./images/home-far-cry-sermon.jpg";
import reelTequila from "./images/home-1800-tequila.jpg";

export const reels: Reel[] = [
  {
    title: "Anomaly",
    client: "Full Film",
    year: "2015",
    vimeoId: "128370284",
    thumbnail: reelAnomaly,
    thumbnailAlt: "Anomaly — full film still",
    featured: true,
  },
  {
    title: "The Wolf Hour",
    year: "2019",
    vimeoId: "376665949",
    thumbnail: reelWolfHour,
    thumbnailAlt: "The Wolf Hour — film still",
  },
  {
    title: "Betway",
    client: "Evolution",
    year: "2021",
    vimeoId: "641516832",
    thumbnail: reelBetway,
    thumbnailAlt: "Betway — Evolution campaign still",
  },
  {
    title: "Nike",
    client: "Run by Rebels",
    year: "2017",
    vimeoId: "225645873",
    thumbnail: reelNike,
    thumbnailAlt: "Nike — Run by Rebels campaign still",
  },
  {
    title: "PlayStation",
    client: "Play Has No Limits",
    year: "2017",
    vimeoId: "602635511",
    thumbnail: reelPlaystation,
    thumbnailAlt: "PlayStation — Play Has No Limits campaign still",
  },
  {
    title: "Jon Hopkins",
    client: "Singularity",
    year: "2018",
    vimeoId: "290574571",
    thumbnail: reelJonHopkins,
    thumbnailAlt: "Jon Hopkins — Singularity video still",
  },
  {
    title: "Far Cry",
    client: "The Sermon",
    year: "2018",
    vimeoId: "261351772",
    thumbnail: reelFarCry,
    thumbnailAlt: "Far Cry — The Sermon campaign still",
  },
  {
    title: "1800 Tequila",
    client: "Ray Liotta",
    year: "2016",
    vimeoId: "124006654",
    thumbnail: reelTequila,
    thumbnailAlt: "1800 Tequila — Ray Liotta campaign still",
  },
];

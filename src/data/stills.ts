import type { GalleryPhoto, StillSeries, StillSeriesSlug } from "@/types";

import still01 from "./images/stills-01.jpg";
import still02 from "./images/stills-02.jpg";
import still03 from "./images/stills-03.jpg";
import still04 from "./images/stills-04.jpg";
import still05 from "./images/stills-05.jpg";
import still06 from "./images/stills-06.jpg";
import still07 from "./images/stills-07.jpg";
import still08 from "./images/stills-08.jpg";
import still09 from "./images/stills-09.jpg";
import still10 from "./images/stills-10.jpg";
import still11 from "./images/stills-11.jpg";
import still12 from "./images/stills-12.jpg";
import still13 from "./images/stills-13.jpg";
import still14 from "./images/stills-14.jpg";
import still15 from "./images/stills-15.jpg";
import still16 from "./images/stills-16.jpg";
import still17 from "./images/stills-17.jpg";
import still18 from "./images/stills-18.jpg";
import still19 from "./images/stills-19.jpg";
import still20 from "./images/stills-20.jpg";
import still21 from "./images/stills-21.jpg";
import still22 from "./images/stills-22.jpg";
import still23 from "./images/stills-23.jpg";
import still24 from "./images/stills-24.jpg";

import type { StaticImageData } from "next/image";

const stillImages: StaticImageData[] = [
  still01,
  still02,
  still03,
  still04,
  still05,
  still06,
  still07,
  still08,
  still09,
  still10,
  still11,
  still12,
  still13,
  still14,
  still15,
  still16,
  still17,
  still18,
  still19,
  still20,
  still21,
  still22,
  still23,
  still24,
];

export const stillSeries: StillSeries[] = [
  {
    slug: "portrait-series",
    title: "Portrait Series",
    description:
      "Faces in half-light — collaborators, strangers and friends, photographed close, without direction. The portrait series is about patience: waiting for the guard to drop.",
    cover: still09,
  },
  {
    slug: "mood-series",
    title: "Mood Series",
    description:
      "Atmosphere over subject. Smoke, rain, tungsten spill and the quiet seconds on set before the call of action — frames chosen for how they feel rather than what they show.",
    cover: still05,
  },
  {
    slug: "landscape-series",
    title: "Landscape Series",
    description:
      "Sweeping and still. Shot between locations and in the hours a crew isn't looking, these landscapes are about scale — the smallness of people against what surrounds them.",
    cover: still02,
  },
  {
    slug: "nyc-series",
    title: "NYC Series",
    description:
      "New York at street level — late trains, lit windows, storefronts after close. A long-running record of the city that shaped the way light is used in everything else.",
    cover: still13,
  },
  {
    slug: "unpublished",
    title: "Unpublished",
    description:
      "Frames that never found a home — outtakes, experiments and test rolls pulled from the archive. Seen together they show the edges of the work: what nearly made it.",
    cover: still08,
  },
];

const seriesMeta: Record<StillSeriesSlug, { title: string; count: number }> = {
  "portrait-series": { title: "Portrait", count: 16 },
  "mood-series": { title: "Mood", count: 16 },
  "landscape-series": { title: "Landscape", count: 16 },
  "nyc-series": { title: "NYC", count: 16 },
  unpublished: { title: "Unpublished", count: 16 },
};

const captions: Record<StillSeriesSlug, string[]> = {
  "portrait-series": [
    "Dana, morning light",
    "Rashid, window light",
    "Mariam, hard noon",
    "Omar, after rain",
    "Selma, tungsten",
    "Tarek, smoke and glass",
    "Lena, by the fire escape",
    "Jean, last frame",
    "Nadia, softbox gone soft",
    "Youssef, profile",
    "Amira, low sun",
    "Karim, half profile",
    "Sofia, against the wall",
    "Elias, quiet minute",
    "Farah, open shade",
    "Adam, eyes closed",
  ],
  "mood-series": [
    "Smoke, first take",
    "Rain on the windshield",
    "Tungsten spill",
    "The quiet before action",
    "Steam, backlit",
    "Dust in the frame",
    "Blue hour, lit window",
    "Fog rolling in",
    "Red spill on white",
    "Night, wet street",
    "Shadow study",
    "Heat haze",
    "The pause",
    "Smoke against black",
    "Backlit silhouette",
    "Last cigarette",
  ],
  "landscape-series": [
    "Cedar valley, dawn",
    "Coastal road, dusk",
    "Desert, noon heat",
    "River bend, low water",
    "Mountain pass, cloud",
    "Field after harvest",
    "Sea wall, long light",
    "Valley fog",
    "Open plain, storm",
    "Cliff line, mist",
    "Salt flats, high sun",
    "Forest edge, morning",
    "Bridge across the water",
    "Dunes at sunset",
    "High ridge, thin air",
    "Harbor, grey light",
  ],
  "nyc-series": [
    "Last train, 1am",
    "Storefront after close",
    "Lit windows, Chelsea",
    "Brooklyn rooftop",
    "Rain at the crossing",
    "Bodega light",
    "Fire escape, evening",
    "Subway platform, empty",
    "Reflection on glass",
    "Corner, green light",
    "El train passing",
    "Bridges at night",
    "Morning, 6th Ave",
    "Delivery on 14th",
    "The park at dawn",
    "High Line, dusk",
  ],
  unpublished: [
    "Test roll, expired",
    "Outtake, rehearsal",
    "First set, early light",
    "Misframe, kept",
    "BTS, cigarette break",
    "Double exposure",
    "Half-second too late",
    "The take they liked",
    "Scratch film, no one",
    "Lens flare, accidental",
    "Faded slide",
    "Contact sheet detail",
    "Overexposed, saved",
    "Backstage, minutes before",
    "The one that got away",
    "Unfinished roll",
  ],
};

function buildSeries(slug: StillSeriesSlug, offset: number): GalleryPhoto[] {
  const meta = seriesMeta[slug];
  const seriesCaptions = captions[slug];
  return Array.from({ length: meta.count }, (_, index) => {
    const image = stillImages[(index * 5 + offset) % stillImages.length];
    return {
      src: image,
      width: image.width,
      height: image.height,
      alt: `${meta.title} series — ${seriesCaptions[index]}`,
      caption: seriesCaptions[index],
      series: slug,
    };
  });
}

export const stillsPhotos: GalleryPhoto[] = [
  ...buildSeries("portrait-series", 0),
  ...buildSeries("mood-series", 2),
  ...buildSeries("landscape-series", 4),
  ...buildSeries("nyc-series", 6),
  ...buildSeries("unpublished", 8),
];

export function getStillSeries(slug: string): StillSeries | undefined {
  return stillSeries.find((series) => series.slug === slug);
}

export function stillsBySeries(slug: string): GalleryPhoto[] {
  return stillsPhotos.filter((photo) => photo.series === slug);
}

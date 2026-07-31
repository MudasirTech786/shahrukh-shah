import type { GalleryPhoto } from "@/types";

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

interface StillDefinition {
  src: typeof still01;
  width: number;
  height: number;
  series: string;
}

const stills: StillDefinition[] = [
  { src: still01, width: still01.width, height: still01.height, series: "Overview" },
  { src: still02, width: still02.width, height: still02.height, series: "Landscape Series" },
  { src: still03, width: still03.width, height: still03.height, series: "Portrait Series" },
  { src: still04, width: still04.width, height: still04.height, series: "Landscape Series" },
  { src: still05, width: still05.width, height: still05.height, series: "Mood Series" },
  { src: still06, width: still06.width, height: still06.height, series: "Portrait Series" },
  { src: still07, width: still07.width, height: still07.height, series: "NYC Series" },
  { src: still08, width: still08.width, height: still08.height, series: "Unpublished" },
  { src: still09, width: still09.width, height: still09.height, series: "Portrait Series" },
  { src: still10, width: still10.width, height: still10.height, series: "Landscape Series" },
  { src: still11, width: still11.width, height: still11.height, series: "Overview" },
  { src: still12, width: still12.width, height: still12.height, series: "Portrait Series" },
  { src: still13, width: still13.width, height: still13.height, series: "NYC Series" },
  { src: still14, width: still14.width, height: still14.height, series: "Mood Series" },
  { src: still15, width: still15.width, height: still15.height, series: "Unpublished" },
  { src: still16, width: still16.width, height: still16.height, series: "Overview" },
  { src: still17, width: still17.width, height: still17.height, series: "Mood Series" },
  { src: still18, width: still18.width, height: still18.height, series: "Landscape Series" },
  { src: still19, width: still19.width, height: still19.height, series: "Portrait Series" },
  { src: still20, width: still20.width, height: still20.height, series: "NYC Series" },
  { src: still21, width: still21.width, height: still21.height, series: "Mood Series" },
  { src: still22, width: still22.width, height: still22.height, series: "Overview" },
  { src: still23, width: still23.width, height: still23.height, series: "Landscape Series" },
  { src: still24, width: still24.width, height: still24.height, series: "Unpublished" },
];

export const stillsPhotos: GalleryPhoto[] = stills.map((still) => ({
  src: still.src,
  width: still.width,
  height: still.height,
  alt: `Still photograph — ${still.series}`,
  caption: still.series,
}));

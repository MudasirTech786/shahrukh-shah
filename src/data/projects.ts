import type { StaticImageData } from "next/image";
import type { CommercialVideo, Project, ProjectCategory, WorkCategory } from "@/types";

import homeBetway from "./images/home-betway.jpg";
import homeBmw from "./images/home-bmw.jpg";
import homePlaystation from "./images/home-playstation.jpg";
import homeUncleFrank from "./images/home-uncle-frank.jpg";
import homeGhostRecon from "./images/home-ghost-recon.jpg";
import homeJonHopkins from "./images/home-jon-hopkins.jpg";
import homeWolfHour from "./images/home-wolf-hour.jpg";
import homeFarCrySermon from "./images/home-far-cry-sermon.jpg";
import homeStadium from "./images/home-stadium.jpg";
import homeCarvedMayhem from "./images/home-carved-mayhem.jpg";
import homeTurkish from "./images/home-turkish.jpg";
import homeFarCryBaptism from "./images/home-far-cry-baptism.jpg";
import homeMyKingdom from "./images/home-my-kingdom.jpg";
import homeRocketWars from "./images/home-rocket-wars.jpg";
import homeMedicine from "./images/home-medicine.jpg";
import homePorsche from "./images/home-porsche.jpg";
import homeImposter from "./images/home-imposter.jpg";
import homeKillingKennedy from "./images/home-killing-kennedy.jpg";
import homeBuick from "./images/home-buick.jpg";
import homeNike from "./images/home-nike.jpg";
import homeAnomalyTeaser from "./images/home-anomaly-teaser.jpg";
import homeTequila from "./images/home-1800-tequila.jpg";
import homeGhost from "./images/home-the-ghost.jpg";
import homeReflection from "./images/home-a-reflection.jpg";
import homeAnomalyFull from "./images/home-anomaly-full.jpg";

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

const home: StaticImageData[] = [
  homeBetway,
  homeBmw,
  homePlaystation,
  homeUncleFrank,
  homeGhostRecon,
  homeJonHopkins,
  homeWolfHour,
  homeFarCrySermon,
  homeStadium,
  homeCarvedMayhem,
  homeTurkish,
  homeFarCryBaptism,
  homeMyKingdom,
  homeRocketWars,
  homeMedicine,
  homePorsche,
  homeImposter,
  homeKillingKennedy,
  homeBuick,
  homeNike,
  homeAnomalyTeaser,
  homeTequila,
  homeGhost,
  homeReflection,
  homeAnomalyFull,
];

const stills: StaticImageData[] = [
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

function galleryFor(start: number, count = 3, source = home): StaticImageData[] {
  return Array.from({ length: count }, (_, index) => source[(start + index) % source.length]);
}

const narrativeDescription =
  "A feature shot over six weeks on location, built around long, patient takes and available light. The frame favors close distances, real rooms and faces that carry the story without explanation.";
const commercialDescription =
  "A cinematic campaign built around one idea — light crossing the frame, a face arriving out of shadow, motion held just long enough to feel the product without being told about it.";
const personalDescription =
  "A personal, self-funded study made between jobs. No brief, no client — just a camera, a city and the hours of the day that belong to no one. These frames are the journal between the films.";

const commercialVideoUrls = [
  "https://vimeo.com/277264233",
  "https://vimeo.com/292294233",
  "https://vimeo.com/292296572",
  "https://vimeo.com/292297746",
  "https://vimeo.com/329804359",
  "https://vimeo.com/329804726",
  "https://vimeo.com/329805076",
  "https://vimeo.com/329805351",
  "https://vimeo.com/329805691",
  "https://vimeo.com/329806149",
  "https://vimeo.com/329806881",
  "https://vimeo.com/383525733",
  "https://vimeo.com/383524914",
  "https://vimeo.com/275240844",
  "https://vimeo.com/451436274",
  "https://vimeo.com/451436447",
  "https://vimeo.com/708081708",
  "https://vimeo.com/708081944",
  "https://vimeo.com/708082414",
  "https://vimeo.com/708082465",
  "https://vimeo.com/708082757",
  "https://vimeo.com/708083089",
  "https://vimeo.com/708083221",
  "https://vimeo.com/708083497",
  "https://vimeo.com/708083643",
  "https://vimeo.com/708083804",
  "https://vimeo.com/708084336",
  "https://vimeo.com/708084479",
  "https://vimeo.com/708084591",
  "https://vimeo.com/708084715",
  "https://vimeo.com/708084875",
  "https://vimeo.com/708084983",
  "https://vimeo.com/986547530",
  "https://vimeo.com/986551615",
  "https://vimeo.com/986552270",
  "https://vimeo.com/986553124",
  "https://vimeo.com/986553789",
  "https://vimeo.com/1166312849",
  "https://www.youtube.com/watch?v=bZEsovjN_ls",
  "https://www.youtube.com/watch?v=y9ywTy3Rtho",
  "https://www.youtube.com/watch?v=UKD6CGQgJhw",
  "https://www.youtube.com/watch?v=so9auWNFBGg",
  "https://www.youtube.com/watch?v=Tz0hhGuhYec",
  "https://www.youtube.com/watch?v=0UovfktgAEQ",
  "https://www.youtube.com/watch?v=bsy_Pxsm-n8",
  "https://www.youtube.com/watch?v=YasiEP843Wg",
  "https://www.youtube.com/watch?v=87LwboZ1neo",
  "https://www.youtube.com/watch?v=afXOZeJkH_8",
  "https://www.facebook.com/reel/7527576790611540",
  "https://www.facebook.com/reel/927450899191501",
  "https://www.facebook.com/reel/896818199504850",
  "https://vimeo.com/793307543",
  "https://vimeo.com/1058683128",
  "https://www.facebook.com/watch/?v=1437681353853359",
  "https://www.youtube.com/watch?v=i_DyrEqaCuo",
] as const;

const commercialVideoPlatform = (url: string): CommercialVideo["platform"] =>
  url.includes("youtube.com") ? "YouTube" : url.includes("facebook.com") ? "Facebook" : "Vimeo";

export const commercialVideos: CommercialVideo[] = commercialVideoUrls.map((url, index) => ({
  title: `Commercial Film ${String(index + 1).padStart(2, "0")}`,
  url,
  platform: commercialVideoPlatform(url),
  thumbnail: home[index % home.length],
}));

/** Vimeo account-management URLs are intentionally excluded from public cards. */
export const commercialVideoManagementTodo = [
  "https://vimeo.com/manage/videos/490830367",
  "https://vimeo.com/manage/videos/490823029",
  "https://vimeo.com/manage/videos/785561855",
  "https://vimeo.com/manage/videos/791205178",
] as const;

function narrative(
  slug: string,
  title: string,
  year: string,
  client: string,
  director: string,
  producer: string,
  productionCompany: string,
  cover: StaticImageData,
  galleryStart: number,
  featured = false,
): Project {
  return {
    slug,
    title,
    category: "Narrative",
    year,
    client,
    director,
    producer,
    productionCompany,
    description: narrativeDescription,
    cover,
    alt: `Still from ${title}`,
    gallery: galleryFor(galleryStart),
    featured,
  };
}

function commercial(
  slug: string,
  title: string,
  year: string,
  client: string,
  director: string,
  producer: string,
  productionCompany: string,
  cover: StaticImageData,
  galleryStart: number,
  videoUrl?: string,
): Project {
  return {
    slug,
    title,
    category: "Commercial",
    year,
    client,
    director,
    producer,
    productionCompany,
    description: commercialDescription,
    cover,
    alt: `Still from the ${title} campaign`,
    gallery: galleryFor(galleryStart),
    videoUrl,
  };
}

function personal(
  slug: string,
  title: string,
  year: string,
  cover: StaticImageData,
  galleryStart: number,
): Project {
  return {
    slug,
    title,
    category: "Personal",
    year,
    client: "Self-initiated",
    director: "Shahrukh Shah",
    producer: "Shahrukh Shah",
    productionCompany: "Independent",
    description: personalDescription,
    cover,
    alt: `Still from ${title}`,
    gallery: galleryFor(galleryStart, 4, stills),
  };
}

export const projects: Project[] = [
  // ---------------------------------------------------------------- Narrative
  narrative("uncle-frank", "Uncle Frank", "2020", "Amazon Studios", "Alan Ball", "Sara Plotkin", "Amazon Studios", homeUncleFrank, 0, true),
  narrative("the-wolf-hour", "The Wolf Hour", "2019", "Automatik Entertainment", "Alistair Banks Griffin", "Automatik Entertainment", "Automatik Entertainment", homeWolfHour, 1, true),
  narrative("killing-kennedy", "Killing Kennedy", "2013", "National Geographic", "Nelson McCormick", "Scott Free Productions", "Scott Free Productions", homeKillingKennedy, 2),
  narrative("my-kingdom-come", "My Kingdom Come", "2021", "Kingdom Pictures", "Amin Matalqa", "Iris Films", "Iris Films", homeMyKingdom, 3),
  narrative("carved-in-mayhem", "Carved in Mayhem", "2021", "Freestyle Releasing", "Marco di Mauro", "Double Dutch Films", "Double Dutch Films", homeCarvedMayhem, 4),
  narrative("stadium", "Stadium", "2016", "Ballast Films", "Marcos Mota", "Ballast Films", "Ballast Films", homeStadium, 5),
  narrative("imposter", "Imposter", "2020", "Vertical Entertainment", "Martha Markell", "Cadre Films", "Cadre Films", homeImposter, 6),
  narrative("rocket-wars", "Rocket Wars", "2014", "Rocket Pictures", "Dan Mintz", "Rocket Pictures", "Rocket Pictures", homeRocketWars, 7),
  narrative("medicine", "Medicine", "2016", "Medicine Films", "Damian Walshe-Howling", "Salt Pictures", "Salt Pictures", homeMedicine, 8),
  narrative("the-ghost", "The Ghost", "2023", "Phantom Works", "Sara Colangelo", "Phantom Works", "Phantom Works", homeGhost, 9),
  narrative("a-reflection", "A Reflection", "2022", "Mirrorlight", "Eliza Hittman", "Mirrorlight", "Mirrorlight", homeReflection, 10),
  narrative("anomaly-teaser", "Anomaly — Teaser", "2016", "Anomaly", "Bill Hunt", "Riff Raff Films", "Riff Raff Films", homeAnomalyTeaser, 11),
  narrative("anomaly-full-film", "Anomaly — Full Film", "2016", "Anomaly", "Bill Hunt", "Riff Raff Films", "Riff Raff Films", homeAnomalyFull, 12, true),
  narrative("hollow-ground", "Hollow Ground", "2017", "Groundwork", "Vera Kaplan", "Groundwork", "Groundwork", still13, 13),
  narrative("cedar", "Cedar", "2015", "Cedar Pictures", "Mounir Ayoub", "Cedar Pictures", "Cedar Pictures", still17, 14),

  // ---------------------------------------------------------------- Commercial
  commercial("betway", "Betway", "2021", "Betway / Evolution", "Miles Jay", "Gunpowder & Sky", "Smuggler", homeBetway, 0),
  commercial("bmw-small-escape", "BMW — Small Escape", "2019", "BMW", "Alex Courtès", "PRETTYBIRD", "PRETTYBIRD", homeBmw, 1),
  commercial("playstation-play-has-no-limits", "PlayStation — Play Has No Limits", "2019", "PlayStation", "Ramsey Naito", "MJZ", "MJZ", homePlaystation, 2),
  commercial("ghost-recon-breakpoint", "Ghost Recon — Breakpoint", "2019", "Ubisoft", "John Dykstra", "Biscuit Filmworks", "Biscuit Filmworks", homeGhostRecon, 3),
  commercial("far-cry-the-sermon", "Far Cry — The Sermon", "2018", "Ubisoft", "Hank Corwin", "Smuggler", "Smuggler", homeFarCrySermon, 4),
  commercial("far-cry-baptism", "Far Cry — Baptism", "2018", "Ubisoft", "Hank Corwin", "Smuggler", "Smuggler", homeFarCryBaptism, 5),
  commercial("turkish-airlines-steps-on-earth", "Turkish Airlines — Steps on Earth", "2020", "Turkish Airlines", "Tobias Zander", "Division Paris", "Division Paris", homeTurkish, 6),
  commercial("nike-run-by-rebels", "Nike — Run by Rebels", "2018", "Nike", "Svein Sigurdson", "Wieden + Kennedy", "Wieden + Kennedy", homeNike, 7),
  commercial("porsche-compete", "Porsche — Compete", "2020", "Porsche", "Fredrik Bond", "RSA Films", "RSA Films", homePorsche, 8),
  commercial("buick-progress", "Buick — Progress", "2019", "Buick", "Noam Murro", "Park Pictures", "Park Pictures", homeBuick, 9),
  commercial("1800-tequila-ray-liotta", "1800 Tequila — Ray Liotta", "2016", "1800 Tequila", "Blake West", "Stink Films", "Stink Films", homeTequila, 10),
  commercial("jon-hopkins-singularity", "Jon Hopkins — Singularity", "2018", "Domino Records", "Jon Hopkins", "Kiosk", "Kiosk", homeJonHopkins, 11),
  commercial("audi-night-drive", "Audi — Night Drive", "2021", "Audi", "Andreas Nilsson", "Stink Films", "Stink Films", still07, 12),
  commercial("ray-ban-daybreak", "Ray-Ban — Daybreak", "2020", "Ray-Ban", "Melanie Grace", "Pulse Films", "Pulse Films", still10, 13),
  commercial("heineken-the-long-pour", "Heineken — The Long Pour", "2019", "Heineken", "Devon O'Brien", "SMUGGLER", "SMUGGLER", still14, 14),

  // ---------------------------------------------------------------- Personal
  personal("streets-of-new-york", "Streets of New York", "2023", still01, 0),
  personal("lebanon-letters", "Lebanon Letters", "2022", still02, 1),
  personal("half-light", "Half Light", "2023", still03, 2),
  personal("blue-hour", "Blue Hour", "2022", still04, 3),
  personal("rooftop-voices", "Rooftop Voices", "2021", still05, 4),
  personal("the-last-train", "The Last Train", "2021", still06, 5),
  personal("winter-light", "Winter Light", "2020", still08, 6),
  personal("salt-air", "Salt Air", "2020", still09, 7),
  personal("night-frames", "Night Frames", "2019", still11, 8),
  personal("window-sills", "Window Sills", "2019", still12, 9),
  personal("desert-highway", "Desert Highway", "2018", still15, 10),
  personal("borough-transit", "Borough Transit", "2018", still16, 11),
  personal("portraits-in-rain", "Portraits in Rain", "2017", still18, 12),
  personal("the-river", "The River", "2017", still19, 13),
  personal("roadside", "Roadside", "2016", still20, 14),
];

export const workCategories: WorkCategory[] = [
  {
    slug: "narrative",
    title: "Narrative",
    description:
      "Feature films and shorts photographed with an eye for quiet, lived-in frames — real light, real rooms, and performances given room to breathe.",
    cover: homeWolfHour,
  },
  {
    slug: "commercial",
    title: "Commercial",
    description:
      "Campaigns for global brands, built on a single cinematic idea: light crossing the frame, a face arriving out of shadow, motion held just long enough.",
    cover: homeNike,
  },
  {
    slug: "personal",
    title: "Personal",
    description:
      "Self-funded photographs and small films made between jobs — the journal between the projects, shot without a brief and without a client.",
    cover: still01,
  },
];

export const categoryOf = (category: ProjectCategory) =>
  workCategories.find((categoryItem) => categoryItem.title === category);

export function projectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectHref(slug: string): string {
  return `/work/${slug}`;
}

/** Projects in the same category, excluding the current one, for "related" lists. */
export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProject(slug);
  if (!current) {
    return [];
  }
  return projects
    .filter((project) => project.slug !== slug && project.category === current.category)
    .slice(0, limit);
}

/** Previous/next project in the full ordering, wrapping around the edges. */
export function getAdjacentProjects(slug: string): { previous: Project | null; next: Project | null } {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export const featuredProjects: Project[] = projects.filter((project) => project.featured);

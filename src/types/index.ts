import type { StaticImageData } from "next/image";

export type ProjectCategory = "Narrative" | "Commercial" | "Personal";

export type StillSeriesSlug =
  | "portrait-series"
  | "mood-series"
  | "landscape-series"
  | "nyc-series"
  | "unpublished";

export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface GalleryPhoto {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category?: string;
  /** When set, the gallery item navigates to this page instead of opening a lightbox. */
  href?: string;
  /** Still series slug, for filtering stills galleries. */
  series?: string;
}

export interface FeaturedProject {
  id: number;
  title: string;
  category: string;
  year: string;
  image: StaticImageData;
  href: string;
}

export interface Reel {
  title: string;
  client?: string;
  year: string;
  vimeoId: string;
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  featured?: boolean;
}

export interface NewsArticle {
  title: string;
  date: string;
  excerpt: string;
  image: StaticImageData;
  imageAlt: string;
  href?: string;
}

export interface ProjectCredit {
  label: string;
  value: string;
}

export interface ProjectVideo {
  platform: "vimeo" | "youtube";
  id: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client: string;
  director: string;
  producer: string;
  productionCompany: string;
  description: string;
  cover: StaticImageData;
  alt: string;
  /** Behind-the-scenes / additional stills. */
  gallery: StaticImageData[];
  video?: ProjectVideo;
  featured?: boolean;
}

export interface WorkCategory {
  slug: string;
  title: ProjectCategory;
  description: string;
  cover: StaticImageData;
}

export interface StillSeries {
  slug: StillSeriesSlug;
  title: string;
  description: string;
  cover: StaticImageData;
}

export interface Print {
  id: number;
  title: string;
  size: string;
  price: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

export interface InstagramPost {
  id: number;
  image: StaticImageData;
  caption: string;
  likes: number;
  comments: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  instagramUrl: string;
  location: string;
  representation: string;
  mapQuery: string;
  faqs: FAQItem[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  email: string;
  socials: SocialLink[];
  bio: string[];
}

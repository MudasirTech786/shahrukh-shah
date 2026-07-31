import type { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
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

export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  email: string;
  nav: NavLink[];
  socials: SocialLink[];
  bio: string[];
}

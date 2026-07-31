import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Cormorant_Garamond, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { ScrollProvider } from "@/components/ScrollProvider/ScrollProvider";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Shahrukh Shah is a Director of Photography working across narrative features, cinematic advertising and personal photography. View work, stills, prints and news.",
  keywords: [
    "Shahrukh Shah",
    "director of photography",
    "cinematographer",
    "film",
    "commercials",
    "stills",
    "prints",
    "reels",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Narrative features, cinematic advertising and personal photography by Shahrukh Shah.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Narrative features, cinematic advertising and personal photography by Shahrukh Shah.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${bebas.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <ScrollProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-5 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-[0.18em] focus:text-ink"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1 pt-[91px]">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}

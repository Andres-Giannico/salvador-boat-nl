import type { Metadata } from "next";
import { absoluteUrl, pageAlternates } from "@/config/site";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogWidth?: number;
  ogHeight?: number;
  ogImageAlt?: string;
  robots?: Metadata["robots"];
}): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    ogTitle,
    ogDescription,
    ogImage = "/images/optimized/salvador-ibiza-boat-drone-view.webp",
    ogWidth = 1200,
    ogHeight = 630,
    ogImageAlt,
    robots: robotsOverride,
  } = opts;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    robots: robotsOverride ?? { index: true, follow: true },
    alternates: pageAlternates(path),
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: absoluteUrl(path),
      locale: "nl_NL",
      alternateLocale: ["en_US", "es_ES"],
      images: [
        {
          url: ogImage,
          width: ogWidth,
          height: ogHeight,
          alt: ogImageAlt ?? title,
        },
      ],
    },
  };
}

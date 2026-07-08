import type { Metadata } from "next";
import { absoluteUrl, pageAlternates } from "@/config/site";
import { getOpenGraphLocales } from "@/lib/seo-i18n";
import { getSiteLocale, type SiteLocale } from "@/lib/site-locale";

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
  locale?: SiteLocale;
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
    locale = getSiteLocale(),
  } = opts;

  const { locale: ogLocale, alternateLocale } = getOpenGraphLocales(locale);

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
      locale: ogLocale,
      alternateLocale,
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

/** @deprecated Use pageMetadata — kept for pages not yet migrated */
export function enPageMetadata(
  opts: Omit<Parameters<typeof pageMetadata>[0], "locale">
): Metadata {
  return pageMetadata(opts);
}

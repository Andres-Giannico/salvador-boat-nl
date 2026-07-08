import { absoluteUrl } from "@/config/site";
import { getBreadcrumbLabels } from "@/lib/seo-i18n";
import type { SiteLocale } from "@/lib/site-locale";
import { getSiteLocale } from "@/lib/site-locale";

function labelForSegment(segment: string, locale: SiteLocale): string {
  const labels = getBreadcrumbLabels(locale);
  return (
    labels[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export function buildBreadcrumbListSchema(
  pathname: string,
  locale: SiteLocale = getSiteLocale()
) {
  const segments = pathname.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: locale === "es" ? "Inicio" : locale === "nl" ? "Home" : locale === "fr" ? "Accueil" : "Home",
      item: absoluteUrl("/"),
    },
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: labelForSegment(segment, locale),
      item: absoluteUrl(currentPath),
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

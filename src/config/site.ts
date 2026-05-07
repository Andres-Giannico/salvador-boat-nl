/**
 * Sitio NL (.nl) como dominio principal de este repositorio.
 * Alternativas: EN (.com) y ES (.es), mismos paths para hreflang.
 *
 * Producción:
 * - NEXT_PUBLIC_SITE_URL → https://www.salvadoribiza.nl
 * - NEXT_PUBLIC_SITE_URL_EN → https://www.salvadoribiza.com
 * - NEXT_PUBLIC_SITE_URL_ES → https://www.salvadoribiza.es
 * Opcional: NEXT_PUBLIC_HREFLANG_X_DEFAULT=nl|en — por defecto en (sitio global .com).
 */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

/** URL canónica del sitio neerlandés (este deploy) */
export function getSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.salvadoribiza.nl"
  );
}

/** Sitio en inglés */
export function getEnglishSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_EN || "https://www.salvadoribiza.com"
  );
}

/** Sitio en español */
export function getSpanishSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_ES || "https://www.salvadoribiza.es"
  );
}

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string): string {
  const p = normalizePath(path);
  const base = getSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function absoluteEnglishUrl(path: string): string {
  const p = normalizePath(path);
  const base = getEnglishSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function absoluteSpanishUrl(path: string): string {
  const p = normalizePath(path);
  const base = getSpanishSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

/** URL usada para x-default (acuerdo SEO: global EN salvo NEXT_PUBLIC_HREFLANG_X_DEFAULT=nl) */
export function hreflangXDefaultUrl(path: string): string {
  const p = normalizePath(path);
  const useNl = process.env.NEXT_PUBLIC_HREFLANG_X_DEFAULT === "nl";
  const base = useNl ? getSiteUrl() : getEnglishSiteUrl();
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function publicAssetUrl(assetPath: string): string {
  const p = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${p}`;
}

export function pageAlternates(path: string): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonicalPath = normalizePath(path);
  return {
    canonical: absoluteUrl(canonicalPath),
    languages: {
      nl: absoluteUrl(canonicalPath),
      en: absoluteEnglishUrl(canonicalPath),
      es: absoluteSpanishUrl(canonicalPath),
      "x-default": hreflangXDefaultUrl(canonicalPath),
    },
  };
}

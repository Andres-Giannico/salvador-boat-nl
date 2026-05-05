/**
 * Sitio EN (canónico .com) + sitio ES (hreflang + selector).
 * Vercel: NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_URL_ES
 */

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

/** URL canónica del sitio en inglés */
export function getSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL || "https://salvadoribiza.com"
  );
}

/** Sitio en español — misma estructura de paths que este repo */
export function getSpanishSiteUrl(): string {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL_ES || "https://salvadoribiza.es"
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

export function absoluteSpanishUrl(path: string): string {
  const p = normalizePath(path);
  const base = getSpanishSiteUrl();
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
  const canonical = normalizePath(path);
  return {
    canonical,
    languages: {
      en: absoluteUrl(canonical),
      es: absoluteSpanishUrl(canonical),
      "x-default": absoluteUrl(canonical),
    },
  };
}

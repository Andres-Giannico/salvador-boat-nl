export type SiteLocale = 'en' | 'es' | 'nl' | 'fr';

const LOCALES: SiteLocale[] = ['en', 'es', 'nl', 'fr'];

function localeFromHostname(hostname: string): SiteLocale | null {
  if (hostname.includes('.es')) return 'es';
  if (hostname.includes('.nl')) return 'nl';
  if (hostname.includes('.fr')) return 'fr';
  if (hostname.includes('.com')) return 'en';
  return null;
}

/** Server / build-time locale (env or site URL). Defaults to English. */
export function getSiteLocale(): SiteLocale {
  const explicit = process.env.NEXT_PUBLIC_SITE_LOCALE;
  if (explicit && LOCALES.includes(explicit as SiteLocale)) {
    return explicit as SiteLocale;
  }

  const fromUrl = localeFromHostname(process.env.NEXT_PUBLIC_SITE_URL || '');
  if (fromUrl) return fromUrl;

  return 'en';
}

/** Client locale from window hostname, with server fallback. */
export function getClientSiteLocale(): SiteLocale {
  if (typeof window !== 'undefined') {
    const fromHost = localeFromHostname(window.location.hostname);
    if (fromHost) return fromHost;
  }
  return getSiteLocale();
}

export function siteLocaleLang(locale: SiteLocale): string {
  return locale;
}

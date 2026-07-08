/**
 * Active web promos for Salvador Boat Mix (Day Trip & Sunset).
 * Single source of truth for modal + booking-widget banner.
 */

import { getPromoCopy } from '@/lib/promo-i18n';
import { getSiteLocale, type SiteLocale } from '@/lib/site-locale';

export type ActivePromoKind = 'champion' | 'super' | 'earlybird' | 'summer';

export type ActivePromo = {
  kind: ActivePromoKind;
  code: string;
  eur: number;
  labelShort: string;
  headline: string;
  primaryCtaLabel: string;
  validityText: string;
  /** Short date range for inline banners */
  validityShort: string;
  kicker: string;
};

const CHAMPION10: { start: Date; end: Date } = {
  start: new Date(2026, 5, 20, 0, 0, 0, 0),
  end: new Date(2026, 6, 4, 23, 59, 59, 999),
};

const EARLYBIRD: { start: Date; end: Date } = {
  start: new Date(2026, 3, 10, 0, 0, 0, 0),
  end: new Date(2026, 5, 20, 23, 59, 59, 999),
};

const SUPER_PROMO: { start: Date; end: Date } = {
  start: new Date(2026, 5, 11, 0, 0, 0, 0),
  end: new Date(2026, 5, 17, 23, 59, 59, 999),
};

const SUMMER10: { start: Date; end: Date } = {
  start: new Date(2026, 6, 1, 0, 0, 0, 0),
  end: new Date(2026, 6, 31, 23, 59, 59, 999),
};

/** Salvador Boat Mix product in Turbookings */
export const SALVADOR_MIX_PRODUCT_ID = 2;

function inRange(now: Date, start: Date, end: Date): boolean {
  return now >= start && now <= end;
}

export function isFlashPromo(kind: ActivePromoKind): boolean {
  return kind === 'champion' || kind === 'super' || kind === 'summer';
}

function buildPromo(
  kind: ActivePromoKind,
  code: string,
  eur: number,
  locale: SiteLocale
): ActivePromo {
  const copy = getPromoCopy(kind, locale);
  return { kind, code, eur, ...copy };
}

export function getActivePromo(
  now: Date = new Date(),
  locale: SiteLocale = getSiteLocale()
): ActivePromo | null {
  if (inRange(now, CHAMPION10.start, CHAMPION10.end)) {
    return buildPromo('champion', 'CHAMPION10', 10, locale);
  }
  if (inRange(now, SUMMER10.start, SUMMER10.end)) {
    return buildPromo('summer', 'SUMMER10', 10, locale);
  }
  if (inRange(now, SUPER_PROMO.start, SUPER_PROMO.end)) {
    return buildPromo('super', 'SUPERPROMO', 10, locale);
  }
  if (inRange(now, EARLYBIRD.start, EARLYBIRD.end)) {
    return buildPromo('earlybird', 'EARLYBIRD5', 5, locale);
  }
  return null;
}

export function promoAppliesToMixTrips(productId: number): boolean {
  return productId === SALVADOR_MIX_PRODUCT_ID;
}

export function storageKeyFor(promo: ActivePromoKind): string {
  if (promo === 'champion') return 'salvador_champion10_2026_worldcup_dismissed';
  if (promo === 'super') return 'salvador_superpromo_2026_june_7day_dismissed';
  if (promo === 'summer') return 'salvador_summer10_2026_july_dismissed';
  return 'salvador_earlybird5_promo_dismissed_2026';
}

export const PROMO_HERO: Record<
  ActivePromoKind,
  { src: string; className: string; overlay: string }
> = {
  champion: {
    src: '/images/optimized/champion10-salvador-ibiza-world-cup-promo.webp',
    className: 'object-cover object-center',
    overlay: '',
  },
  super: {
    src: '/images/optimized/superpromo-salvador-ibiza-flash-deal.webp',
    className: 'object-cover object-center',
    overlay: 'from-black/35 to-transparent',
  },
  earlybird: {
    src: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
    className: 'object-cover object-center',
    overlay: 'from-black/50 to-transparent',
  },
  summer: {
    src: '/images/optimized/summer10-salvador-ibiza-summer-promo.webp',
    className: 'object-cover object-center',
    overlay: 'from-black/30 to-transparent',
  },
};

export function getPromoHeroAlt(kind: ActivePromoKind, locale: SiteLocale): string {
  return getPromoCopy(kind, locale).heroAlt;
}

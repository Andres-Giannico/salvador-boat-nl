'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { X, Copy, Check, Timer } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie_consent_status';

/**
 * ---------------------------------------------------------------------------
 * Early Bird 5 (€5) — boekingen tussen deze datums (lokale tijd)
 * Na het blok «Meifinale» wordt Early Bird getoond zolang deze nog geldig is.
 * ---------------------------------------------------------------------------
 */
const EARLYBIRD: { start: Date; end: Date } = {
  start: new Date(2026, 3, 10, 0, 0, 0, 0),
  end: new Date(2026, 5, 20, 23, 59, 59, 999),
};

/**
 * ---------------------------------------------------------------------------
 * Super-actie SUPERPROMO (€10 p.p.) — meifinale
 * Heeft prioriteit boven Early Bird binnen deze periode.
 * ---------------------------------------------------------------------------
 */
const SUPER_PROMO: { start: Date; end: Date } = {
  start: new Date(2026, 4, 21, 0, 0, 0, 0),
  end: new Date(2026, 4, 31, 23, 59, 59, 999),
};

type ActivePromo = {
  kind: 'super' | 'earlybird';
  code: string;
  eur: number;
  labelShort: string;
  headline: string;
  primaryCtaLabel: string;
  validityText: string;
  kicker: string;
};

function inRange(now: Date, start: Date, end: Date): boolean {
  return now >= start && now <= end;
}

function getActivePromo(now: Date): ActivePromo | null {
  if (inRange(now, SUPER_PROMO.start, SUPER_PROMO.end)) {
    return {
      kind: 'super',
      code: 'SUPERPROMO',
      eur: 10,
      labelShort: 'Meifinale',
      headline: 'Meifinale — €10 korting per gast',
      primaryCtaLabel: 'Boek via de site · €10 korting',
      kicker: 'Laatste dagen van mei · Alleen via de website boeken',
      validityText:
        'Alleen voor online boekingen t/m 31 mei 2026 (23:59, jouw lokale tijd). €10 korting per gast met SUPERPROMO op Salvador Boat Mix (dagtocht of zonsondergang). Deze code eindigt na mei — hierna gelden piekseizoenprijzen.',
    };
  }
  if (inRange(now, EARLYBIRD.start, EARLYBIRD.end)) {
    return {
      kind: 'earlybird',
      code: 'EARLYBIRD5',
      eur: 5,
      labelShort: 'Early Bird 5',
      headline: 'Bedankt — je hoort erbij',
      primaryCtaLabel: 'Boek nu',
      kicker: 'Exclusief · Vroege boeker (Early Bird)',
      validityText:
        'Geldig voor boekingen van 10 apr – 20 jun 2026. Daarna eindigt deze actie.',
    };
  }
  return null;
}

function storageKeyFor(promo: ActivePromo['kind']): string {
  if (promo === 'super') return 'salvador_superpromo_2026_may_finale_dismissed';
  return 'salvador_earlybird5_promo_dismissed_2026';
}

const PROMO_HERO: Record<ActivePromo['kind'], { src: string; alt: string; className: string; overlay: string }> = {
  super: {
    src: '/images/optimized/superpromo-salvador-ibiza-flash-deal.webp',
    alt: 'Salvador Ibiza — meifinale: €10 korting per persoon bij boeken op de web, tot 31 mei',
    className: 'object-cover object-center',
    overlay: 'from-black/35 to-transparent',
  },
  earlybird: {
    src: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
    alt: 'Salvador Ibiza — luchtfoto boven turquoise water',
    className: 'object-cover object-center',
    overlay: 'from-black/50 to-transparent',
  },
};

function pushDataLayer(event: string, payload?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export default function EarlyBirdPromoModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [promo, setPromo] = useState<ActivePromo | null>(null);

  useEffect(() => {
    const now = new Date();
    const p = getActivePromo(now);
    if (!p) return;

    try {
      if (localStorage.getItem(storageKeyFor(p.kind)) === '1') return;
    } catch {
      return;
    }

    setPromo(p);
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const delayMs = consent ? 1400 : 4500;

    const timer = window.setTimeout(() => {
      setOpen(true);
      pushDataLayer('salvador_promo_shown', { promo_type: p.kind, promo_code: p.code });
    }, delayMs);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    if (promo) {
      try {
        localStorage.setItem(storageKeyFor(promo.kind), '1');
      } catch {
        /* ignore */
      }
    }
    setOpen(false);
    pushDataLayer('salvador_promo_dismissed', { promo_type: promo?.kind });
  }, [promo]);

  const copyCode = useCallback(async () => {
    if (!promo) return;
    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      toast.success('Code gekopieerd — plak hem bij het afrekenen.');
      pushDataLayer('salvador_promo_code_copied', { promo_type: promo.kind, promo_code: promo.code });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Kopiëren mislukt. Typ de code handmatig in.');
    }
  }, [promo]);

  if (!open || !promo) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[110] bg-black/55 backdrop-blur-sm animate-in fade-in duration-200"
        aria-hidden
      />
      <div
        className="fixed inset-0 z-[111] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
        role="presentation"
      >
        <div
          lang="nl"
          className="pointer-events-auto w-full max-w-[min(100%,28rem)] max-h-[min(90vh,640px)] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl animate-in zoom-in-95 fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="earlybird-promo-title"
          aria-describedby="earlybird-promo-desc"
        >
          <div
            className={
              promo.kind === 'super'
                ? 'relative h-48 w-full shrink-0 sm:h-52'
                : 'relative h-44 w-full shrink-0 sm:h-48'
            }
          >
            <Image
              src={PROMO_HERO[promo.kind].src}
              alt={PROMO_HERO[promo.kind].alt}
              fill
              className={PROMO_HERO[promo.kind].className}
              sizes="(max-width: 28rem) 100vw, 28rem"
              priority
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${PROMO_HERO[promo.kind].overlay}`}
            />
            {promo.kind === 'super' ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-3.5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-900 shadow-md ring-1 ring-black/5 sm:text-xs">
                    <Timer className="size-3.5 shrink-0 text-amber-600" aria-hidden />
                    Tot 31 mei · Alleen web
                  </span>
                  <span className="rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md sm:text-xs">
                    €10 / gast
                  </span>
                  <span className="rounded-full bg-amber-500/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-950 shadow-md sm:text-xs">
                    Vóór hoogseizoen
                  </span>
                </div>
              </div>
            ) : null}
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-800 shadow-md transition hover:bg-white"
              aria-label="Promotie sluiten"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-blue-600">
              {promo.kicker}
            </p>
            <h2
              id="earlybird-promo-title"
              className="mt-1 font-display text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-[1.65rem]"
            >
              {promo.headline}
            </h2>
            <p id="earlybird-promo-desc" className="mt-3 text-sm leading-relaxed text-gray-600">
              {promo.kind === 'super' ? (
                <>
                  <strong className="text-gray-800">Meifinale:</strong>{' '}
                  <strong className="text-[#1a7f37]">€10 korting per persoon</strong> op{' '}
                  <strong>Salvador Boat Mix</strong> (dagtocht of zonsondergang) wanneer je je{' '}
                  <strong>boeking via onze website</strong> voltooit. Voer{' '}
                  <strong className="font-mono text-gray-800">SUPERPROMO</strong> bij het afrekenen in —
                  na <strong className="text-gray-800">31 mei</strong> vervalt deze webdeal en gaan{' '}
                  <strong className="text-gray-800">hoogseizoen</strong>tarieven in.
                </>
              ) : (
                <>
                  Pak de <strong className="text-gray-800">vroegeboekersdeal</strong> met code{' '}
                  <strong className="font-mono text-gray-800">EARLYBIRD5</strong>:{' '}
                  <strong className="text-[#1a7f37]">€5 korting per persoon</strong> op{' '}
                  <strong>Salvador Boat Mix</strong> — dagtocht of zonsondergang. Vul bij het boeken je code in.
                </>
              )}
            </p>

            <div
              className={
                promo.kind === 'super'
                  ? 'mt-4 rounded-xl border-2 border-emerald-500/80 bg-gradient-to-br from-emerald-50/90 to-[#f6fff8] p-3.5 shadow-sm ring-1 ring-emerald-500/10'
                  : 'mt-4 rounded-xl border-2 border-[#28a745] bg-[#f6fff8] p-3'
              }
            >
              <p className="text-xs font-medium text-gray-600">Kortingscode</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="font-mono text-lg font-bold tracking-wide text-gray-900">
                  {promo.code}
                </span>
                <button
                  type="button"
                  onClick={copyCode}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  {copied ? (
                    <Check className="size-3.5" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                  {copied ? 'Gekopieerd' : 'Kopiëren'}
                </button>
              </div>
              <p className="mt-2 text-xs text-[#1a7f37]">
                ✓ €{promo.eur} korting per gast · Salvador Boat Mix (dag of zonsondergang) ·{' '}
                {promo.kind === 'super'
                  ? 'toegepast bij afrekenen op de web'
                  : 'invoeren bij het boeken'}
              </p>
            </div>

            <p className="mt-4 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 text-xs leading-snug text-gray-600">
              {promo.validityText}
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={dismiss}
                className="order-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:order-1"
              >
                Misschien later
              </button>
              <Link
                href="/boat-trips"
                onClick={() => {
                  pushDataLayer('salvador_promo_book_now_click', {
                    promo_type: promo.kind,
                    promo_code: promo.code,
                  });
                  dismiss();
                }}
                className="order-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-cyan-600 sm:order-2"
              >
                {promo.primaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

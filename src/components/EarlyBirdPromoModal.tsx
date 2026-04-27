'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { X, Copy, Check } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie_consent_status';

/**
 * ---------------------------------------------------------------------------
 * Ventana Early Bird 5 (€5) — reservas entre estas fechas (hora local)
 * Tras el bloque “Super promo” de 10 días, se usa esta promo si aún cae en rango
 * ---------------------------------------------------------------------------
 */
const EARLYBIRD: { start: Date; end: Date } = {
  start: new Date(2026, 3, 10, 0, 0, 0, 0),
  end: new Date(2026, 4, 10, 23, 59, 59, 999),
};

/**
 * ---------------------------------------------------------------------------
 * Super promo SUPERPROMO (€10 / persona) — solo 10 días
 * Ajusta `start` y `end` al lanzar (fin = inicio + 9 días calendario con hora
 * 23:59:59.999, o fija `end` manualmente) = 10 días consecutivos.
 * Cuando pase, el modal vuelve a Early Bird 5 mientras sigan vigentes 10 abr – 10 may.
 * ---------------------------------------------------------------------------
 */
const SUPER_PROMO: { start: Date; end: Date } = {
  start: new Date(2026, 3, 24, 0, 0, 0, 0), // 24 abr 2026
  end: new Date(2026, 4, 3, 23, 59, 59, 999), // 3 may 2026 (10 días incl.)
};

type ActivePromo = {
  kind: 'super' | 'earlybird';
  code: string;
  eur: number;
  labelShort: string;
  /** Línea de validez (reservas / campaña) */
  validityText: string;
  /** Nombre de campaña en la cabecera */
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
      labelShort: 'Super promo',
      kicker: 'Exclusive · Super promo',
      validityText:
        'Valid for bookings made while this 10-day campaign runs. Then our €5 Early Bird offer applies again (where dates still allow).',
    };
  }
  if (inRange(now, EARLYBIRD.start, EARLYBIRD.end)) {
    return {
      kind: 'earlybird',
      code: 'EARLYBIRD5',
      eur: 5,
      labelShort: 'Early Bird 5',
      kicker: 'Exclusive · Early Bird',
      validityText:
        'Valid for bookings made 10 Apr – 10 May 2026. After that, this promotion ends.',
    };
  }
  return null;
}

function storageKeyFor(promo: ActivePromo['kind']): string {
  if (promo === 'super') return 'salvador_superpromo_2026_dismissed';
  return 'salvador_earlybird5_promo_dismissed_2026';
}

/** Hero del modal: Super promo = banner generado; Early Bird = foto clásica aérea. */
const PROMO_HERO: Record<ActivePromo['kind'], { src: string; alt: string; className: string; overlay: string }> = {
  super: {
    src: '/images/optimized/superpromo-salvador-ibiza-flash-deal.webp',
    alt: 'Salvador Ibiza — flash deal, €10 off per person, 10 days only',
    className: 'object-cover object-center',
    overlay: 'from-black/35 to-transparent',
  },
  earlybird: {
    src: '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
    alt: 'Salvador Ibiza — aerial view over turquoise waters',
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
      toast.success('Code copied — paste it at checkout.');
      pushDataLayer('salvador_promo_code_copied', { promo_type: promo.kind, promo_code: promo.code });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy. Please type the code manually.');
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
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-800 shadow-md transition hover:bg-white"
              aria-label="Close promotion"
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
              className="mt-1 font-display text-2xl font-bold text-gray-900"
            >
              Gracias — you&apos;re in
            </h2>
            <p id="earlybird-promo-desc" className="mt-3 text-sm leading-relaxed text-gray-600">
              {promo.kind === 'super' ? (
                <>
                  Use code <strong className="text-gray-800">SUPERPROMO</strong> for a limited{' '}
                  <strong className="text-[#1a7f37]">€10 off per person</strong> on{' '}
                  <strong>Salvador Boat Mix</strong> — Day Trip or Sunset. Enter it when you book.
                </>
              ) : (
                <>
                  Use our <strong className="text-gray-800">Early Bird 5</strong> offer:{' '}
                  <strong className="text-[#1a7f37]">€5 off per person</strong> on{' '}
                  <strong>Salvador Boat Mix</strong> — Day Trip or Sunset. Enter your code when you book.
                </>
              )}
            </p>

            <div className="mt-4 rounded-xl border-2 border-[#28a745] bg-[#f6fff8] p-3">
              <p className="text-xs font-medium text-gray-600">Discount code</p>
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
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="mt-2 text-xs text-[#1a7f37]">
                ✓ €{promo.eur} off each guest on Salvador Boat Mix (Day or Sunset)
              </p>
            </div>

            <p className="mt-4 text-xs text-gray-500">{promo.validityText}</p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={dismiss}
                className="order-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:order-1"
              >
                Maybe later
              </button>
              <Link
                href="/book-now"
                onClick={() => {
                  pushDataLayer('salvador_promo_book_now_click', {
                    promo_type: promo.kind,
                    promo_code: promo.code,
                  });
                  dismiss();
                }}
                className="order-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-cyan-600 sm:order-2"
              >
                Book now
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

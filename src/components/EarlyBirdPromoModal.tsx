'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { X, Copy, Check, Timer, Sun } from 'lucide-react';
import {
  getActivePromo,
  getPromoHeroAlt,
  isFlashPromo,
  PROMO_HERO,
  storageKeyFor,
  type ActivePromo,
} from '@/lib/active-promo';
import { getPromoUi } from '@/lib/promo-i18n';
import { PromoModalDescription } from '@/components/promo/PromoModalDescription';
import { pushPromoDataLayer } from '@/lib/promo-analytics';
import { getClientSiteLocale, siteLocaleLang } from '@/lib/site-locale';

const COOKIE_CONSENT_KEY = 'cookie_consent_status';

export default function EarlyBirdPromoModal() {
  const locale = useMemo(() => getClientSiteLocale(), []);
  const ui = useMemo(() => getPromoUi(locale), [locale]);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [promo, setPromo] = useState<ActivePromo | null>(null);

  useEffect(() => {
    const now = new Date();
    const p = getActivePromo(now, locale);
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
      pushPromoDataLayer('salvador_promo_shown', { promo_type: p.kind, promo_code: p.code });
    }, delayMs);

    return () => clearTimeout(timer);
  }, [locale]);

  const dismiss = useCallback(() => {
    if (promo) {
      try {
        localStorage.setItem(storageKeyFor(promo.kind), '1');
      } catch {
        /* ignore */
      }
    }
    setOpen(false);
    pushPromoDataLayer('salvador_promo_dismissed', { promo_type: promo?.kind });
  }, [promo]);

  const copyCode = useCallback(async () => {
    if (!promo) return;
    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      toast.success(ui.copySuccessModal);
      pushPromoDataLayer('salvador_promo_code_copied', {
        promo_type: promo.kind,
        promo_code: promo.code,
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(ui.copyError);
    }
  }, [promo, ui]);

  if (!open || !promo) return null;

  const heroAlt = getPromoHeroAlt(promo.kind, locale);

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
          lang={siteLocaleLang(locale)}
          className="pointer-events-auto w-full max-w-[min(100%,28rem)] max-h-[min(90vh,640px)] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl animate-in zoom-in-95 fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="earlybird-promo-title"
          aria-describedby="earlybird-promo-desc"
        >
          <div
            className={
              isFlashPromo(promo.kind)
                ? 'relative h-48 w-full shrink-0 sm:h-52'
                : 'relative h-44 w-full shrink-0 sm:h-48'
            }
          >
            <Image
              src={PROMO_HERO[promo.kind].src}
              alt={heroAlt}
              fill
              className={PROMO_HERO[promo.kind].className}
              sizes="(max-width: 28rem) 100vw, 28rem"
              priority
            />
            {PROMO_HERO[promo.kind].overlay ? (
              <div
                className={`absolute inset-0 bg-gradient-to-t ${PROMO_HERO[promo.kind].overlay}`}
              />
            ) : null}
            {promo.kind === 'super' ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-3.5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-900 shadow-md ring-1 ring-black/5 sm:text-xs">
                    <Timer className="size-3.5 shrink-0 text-amber-600" aria-hidden />
                    {ui.superBadgeDays}
                  </span>
                  <span className="rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md sm:text-xs">
                    {ui.perGuestBadge(promo.eur)}
                  </span>
                  <span className="rounded-full bg-amber-500/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-950 shadow-md sm:text-xs">
                    {ui.limitedTime}
                  </span>
                </div>
              </div>
            ) : promo.kind === 'summer' ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-3.5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-900 shadow-md ring-1 ring-black/5 sm:text-xs">
                    <Sun className="size-3.5 shrink-0 text-amber-500" aria-hidden />
                    {ui.summerBadgeAllJuly}
                  </span>
                  <span className="rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md sm:text-xs">
                    {ui.perGuestBadge(promo.eur)}
                  </span>
                  <span className="rounded-full bg-orange-500/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md sm:text-xs">
                    {ui.summerDeal}
                  </span>
                </div>
              </div>
            ) : null}
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-800 shadow-md transition hover:bg-white"
              aria-label={ui.closePromo}
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
              <PromoModalDescription kind={promo.kind} code={promo.code} />
            </p>

            <div
              className={
                isFlashPromo(promo.kind)
                  ? 'mt-4 rounded-xl border-2 border-emerald-500/80 bg-gradient-to-br from-emerald-50/90 to-[#f6fff8] p-3.5 shadow-sm ring-1 ring-emerald-500/10'
                  : 'mt-4 rounded-xl border-2 border-[#28a745] bg-[#f6fff8] p-3'
              }
            >
              <p className="text-xs font-medium text-gray-600">{ui.promoCode}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="font-mono text-lg font-bold tracking-wide text-gray-900">
                  {promo.code}
                </span>
                <button
                  type="button"
                  onClick={copyCode}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied ? ui.copied : ui.copy}
                </button>
              </div>
              <p className="mt-2 text-xs text-[#1a7f37]">
                {ui.codeBoxHint(promo.eur)}{' '}
                {isFlashPromo(promo.kind) ? ui.appliedAtCheckout : ui.enterWhenBook}
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
                {ui.maybeLater}
              </button>
              <Link
                href="/boat-trips"
                onClick={() => {
                  pushPromoDataLayer('salvador_promo_book_now_click', {
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

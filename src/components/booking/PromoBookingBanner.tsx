'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import { Copy, Check, Tag, ArrowDown } from 'lucide-react';
import type { ActivePromo } from '@/lib/active-promo';
import { isFlashPromo } from '@/lib/active-promo';
import { getPromoUi } from '@/lib/promo-i18n';
import { pushPromoDataLayer } from '@/lib/promo-analytics';
import { getClientSiteLocale, siteLocaleLang } from '@/lib/site-locale';

interface PromoBookingBannerProps {
  promo: ActivePromo;
  widgetId?: string;
}

export default function PromoBookingBanner({ promo, widgetId }: PromoBookingBannerProps) {
  const locale = useMemo(() => getClientSiteLocale(), []);
  const ui = useMemo(() => getPromoUi(locale), [locale]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    pushPromoDataLayer('salvador_promo_banner_shown', {
      promo_type: promo.kind,
      promo_code: promo.code,
      widget_id: widgetId,
    });
  }, [promo.kind, promo.code, widgetId]);

  const copyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      toast.success(ui.copySuccessBanner);
      pushPromoDataLayer('salvador_promo_banner_copy', {
        promo_type: promo.kind,
        promo_code: promo.code,
        widget_id: widgetId,
      });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(ui.copyError);
    }
  }, [promo, widgetId, ui]);

  const instructions = ui.bannerInstructions(promo.eur);
  const applyLabel =
    locale === 'es' ? 'Aplicar' : locale === 'nl' ? 'Toepassen' : locale === 'fr' ? 'Appliquer' : 'Apply';

  return (
    <div
      lang={siteLocaleLang(locale)}
      className={
        isFlashPromo(promo.kind)
          ? 'mb-4 rounded-xl border border-orange-200/90 bg-gradient-to-br from-orange-50 via-rose-50/90 to-amber-50 px-4 py-3.5 shadow-sm ring-1 ring-orange-100/70'
          : 'mb-4 rounded-xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-orange-50/60 px-4 py-3.5 shadow-sm ring-1 ring-emerald-100/60'
      }
      role="note"
      aria-label={ui.activePromoAria(promo.labelShort)}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={
            isFlashPromo(promo.kind)
              ? 'mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600'
              : 'mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700'
          }
          aria-hidden
        >
          <Tag className="size-4" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-snug text-gray-900">
            {isFlashPromo(promo.kind) ? (
              <>
                <span className="text-orange-700">{ui.promoActive}</span>
                {' · '}
                {ui.offEachGuest(promo.eur)}
                {' · '}
                <span className="font-normal text-gray-600">{promo.validityShort}</span>
              </>
            ) : (
              <>
                <span className="text-emerald-800">{promo.labelShort}</span>
                {' · '}
                {ui.offEachGuest(promo.eur)}
                {' · '}
                <span className="font-normal text-gray-600">{promo.validityShort}</span>
              </>
            )}
          </p>

          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-gray-600">{ui.promoCode}</span>
            <span className="rounded-md bg-white/80 px-2.5 py-1 font-mono text-sm font-bold tracking-wide text-gray-900 ring-1 ring-orange-200/80">
              {promo.code}
            </span>
            <button
              type="button"
              onClick={copyCode}
              className={
                isFlashPromo(promo.kind)
                  ? 'inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-700'
                  : 'inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700'
              }
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? ui.copied : ui.copy}
            </button>
          </div>

          <p className="mt-2.5 flex items-start gap-1.5 text-xs leading-relaxed text-gray-700">
            <ArrowDown className="mt-0.5 size-3.5 shrink-0 text-orange-500" aria-hidden />
            <span>
              {locale === 'en' ? (
                <>
                  Paste the code in the <strong className="text-gray-900">{ui.promoCode}</strong> field in
                  the booking form below and tap <strong className="text-gray-900">{applyLabel}</strong> — the
                  €{promo.eur}/guest discount is applied at checkout.
                </>
              ) : (
                instructions
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { X, Copy, Check } from 'lucide-react';

const STORAGE_KEY = 'salvador_earlybird5_promo_dismissed_2026';
const COOKIE_CONSENT_KEY = 'cookie_consent_status';
const PROMO_CODE = 'EARLYBIRD5';

/** Promo window: bookings 10 Apr – 10 May 2026 (local time). */
function isPromoPeriodActive(): boolean {
  const now = new Date();
  const start = new Date(2026, 3, 10, 0, 0, 0, 0);
  const end = new Date(2026, 4, 10, 23, 59, 59, 999);
  return now >= start && now <= end;
}

function pushDataLayer(event: string) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

export default function EarlyBirdPromoModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isPromoPeriodActive()) return;

    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      return;
    }

    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const delayMs = consent ? 1400 : 4500;

    const timer = window.setTimeout(() => {
      setOpen(true);
      pushDataLayer('earlybird_promo_shown');
    }, delayMs);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setOpen(false);
    pushDataLayer('earlybird_promo_dismissed');
  }, []);

  const copyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      toast.success('Code copied — paste it at checkout.');
      pushDataLayer('earlybird_promo_code_copied');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy. Please type the code manually.');
    }
  }, []);

  if (!open) return null;

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
          <div className="relative h-40 w-full shrink-0 sm:h-44">
            <Image
              src="/images/optimized/salvador-ibiza-boat-sunset.webp"
              alt="Salvador Ibiza boat at sunset"
              fill
              className="object-cover"
              sizes="(max-width: 28rem) 100vw, 28rem"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              Exclusive · Early Bird
            </p>
            <h2
              id="earlybird-promo-title"
              className="mt-1 font-display text-2xl font-bold text-gray-900"
            >
              Gracias — you&apos;re in
            </h2>
            <p id="earlybird-promo-desc" className="mt-3 text-sm leading-relaxed text-gray-600">
              Use our <strong className="text-gray-800">Early Bird 5</strong> offer:{' '}
              <strong className="text-[#1a7f37]">€5 off per person</strong> on{' '}
              <strong>Salvador Boat Mix</strong> — Day Trip or Sunset. Enter your code when you book.
            </p>

            <div className="mt-4 rounded-xl border-2 border-[#28a745] bg-[#f6fff8] p-3">
              <p className="text-xs font-medium text-gray-600">Discount code</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="font-mono text-lg font-bold tracking-wide text-gray-900">
                  {PROMO_CODE}
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
                ✓ €5 off each guest on Salvador Boat Mix (Day or Sunset)
              </p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Valid for <strong className="text-gray-700">bookings made 10 Apr – 10 May 2026</strong>
              . After that, this promotion ends.
            </p>

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
                onClick={() => pushDataLayer('earlybird_promo_book_now_click')}
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

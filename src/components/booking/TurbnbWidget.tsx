'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import {
  mergeTurboBookingCustomProperties,
  TURBNB_WIDGET_CSS,
  TURBNB_WIDGET_JS,
} from '@/lib/turbnb-widget-assets';
import { getActivePromo, promoAppliesToMixTrips, type ActivePromo } from '@/lib/active-promo';
import PromoBookingBanner from '@/components/booking/PromoBookingBanner';
import { getClientSiteLocale } from '@/lib/site-locale';

interface TurbnbWidgetProps {
  id?: string;
  companyId: number;
  productId: number;
  billingTermIds: number[];
  channelId: number;
  className?: string;
  customProperties?: {
    displayBillingTerm?: boolean;
    showQuantity?: boolean;
    quantity?: string;
    titleVariant?: string;
    bookNow?: string;
    confirmReservationAndPay?: string;
    selectExperienceLabel?: string;
    addonsLabel?: string;
    childrenAge?: string;
    infantAge?: string;
    depositObservation?: string;
  };
}

export default function TurbnbWidget({
  id = 'turbnb-booking-widget',
  companyId,
  productId,
  billingTermIds,
  channelId,
  className = '',
  customProperties = {
    displayBillingTerm: true,
    showQuantity: true,
    quantity: "Quantity",
    titleVariant: "Modern",
    bookNow: "RESERVE NOW",
    confirmReservationAndPay: "CLICK TO PAY",
    selectExperienceLabel: "Experience Type",
    addonsLabel: "Add-ons",
    depositObservation: "After completing your booking, you will receive a confirmation voucher with all the details including meeting point and time. Please ensure your contact information (phone and email) is correct as we may need to reach you regarding your booking. A deposit of €20 per person is required to secure your reservation, with the remaining balance paid onboard."
  }
}: TurbnbWidgetProps) {
  const [activePromo, setActivePromo] = useState<ActivePromo | null>(null);

  useEffect(() => {
    setActivePromo(getActivePromo(new Date(), getClientSiteLocale()));
  }, []);

  const showPromoBanner = activePromo !== null && promoAppliesToMixTrips(productId);

  useEffect(() => {
    const initializeWidget = () => {
      if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
        const element = document.getElementById(id);
        if (element) {
          try {
            const turboBooking = new window.TurboBooking();
            turboBooking.run(element, {
              companyId,
              productId,
              billingTermIds,
              channelId,
              customProperties: mergeTurboBookingCustomProperties(customProperties),
            });
          } catch (error) {
            console.error("Error initializing booking widget:", error);
          }
        }
      }
    };

    // If TurboBooking is loaded, initialize widget
    if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
      initializeWidget();
    } else if (typeof window !== 'undefined') {
      // If not loaded yet, wait for script to load
      window.addEventListener('turbnbLoaded', initializeWidget);
      return () => window.removeEventListener('turbnbLoaded', initializeWidget);
    }
  }, [id, companyId, productId, billingTermIds, channelId, customProperties]);

  return (
    <>
      <div className={`turbnb-widget-host w-full min-w-0 ${className}`}>
        {showPromoBanner ? (
          <PromoBookingBanner promo={activePromo} widgetId={id} />
        ) : null}
        <div id={id} className="w-full min-w-0" />
      </div>
      
      <Script
        src={TURBNB_WIDGET_JS}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('turbnbLoaded'));
          }
        }}
      />
      {TURBNB_WIDGET_CSS ? (
        <link href={TURBNB_WIDGET_CSS} rel="stylesheet" />
      ) : null}
    </>
  );
} 
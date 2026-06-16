'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import {
  mergeTurboBookingCustomProperties,
  TURBNB_WIDGET_CSS,
  TURBNB_WIDGET_JS,
} from '@/lib/turbnb-widget-assets';

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
    quantity: 'Aantal gasten',
    titleVariant: 'Modern',
    bookNow: 'NU RESERVEREN',
    selectExperienceLabel: 'Soort ervaring',
    addonsLabel: "Extra's",
    depositObservation:
      'Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer telefoon en e-mail. Aanbetaling €20 per persoon; het restant aan boord.',
  },
}: TurbnbWidgetProps) {
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
            console.error('Error initializing booking widget:', error);
          }
        }
      }
    };

    if (typeof window !== 'undefined' && typeof window.TurboBooking !== 'undefined') {
      initializeWidget();
    } else if (typeof window !== 'undefined') {
      window.addEventListener('turbnbLoaded', initializeWidget);
      return () => window.removeEventListener('turbnbLoaded', initializeWidget);
    }
  }, [id, companyId, productId, billingTermIds, channelId, customProperties]);

  return (
    <>
      <div className={`turbnb-widget-host w-full min-w-0 ${className}`}>
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

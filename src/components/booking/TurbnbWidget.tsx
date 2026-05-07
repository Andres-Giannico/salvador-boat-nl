'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { TURBNB_WIDGET_CSS, TURBNB_WIDGET_JS } from '@/lib/turbnb-widget-assets';

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
    selectTimeLabel?: string;
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
    quantity: "Aantal gasten",
    titleVariant: "Modern",
    bookNow: "NU RESERVEREN",
    confirmReservationAndPay: "GA DOOR NAAR BETALING",
    selectTimeLabel: "Tijdstip kiezen",
    selectExperienceLabel: "Soort ervaring",
    addonsLabel: "Extra's",
    depositObservation:
      "Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer telefoon en e-mail. Aanbetaling €20 p.p.; het restbedrag contant aan boord.",
  }
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
              customProperties
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
      <div id={id} className={`w-full ${className}`}></div>
      
      <Script
        src={TURBNB_WIDGET_JS}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('turbnbLoaded'));
          }
        }}
      />
      <link href={TURBNB_WIDGET_CSS} rel="stylesheet" />
    </>
  );
} 
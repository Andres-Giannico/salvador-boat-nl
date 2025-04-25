'use client';

import { useEffect } from 'react';
import Script from 'next/script';

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
    selectTimeLabel: "Time Selection",
    selectExperienceLabel: "Experience Type",
    addonsLabel: "Add-ons",
    depositObservation: "Deposit and payment instructions\n\n\n"
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
        src="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('turbnbLoaded'));
          }
        }}
      />
      <link href="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.css" rel="stylesheet" />
    </>
  );
} 
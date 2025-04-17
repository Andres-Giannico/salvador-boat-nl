'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  companyId?: number;
  channelId?: number;
  customProperties?: Record<string, unknown>;
  widgetContainerId?: string; // Optional ID for the container
}

// Define TurboBooking interface
interface TurboBookingInstance {
  run: (
    container: HTMLElement, 
    config: {
      companyId: number;
      productId: number;
      channelId: number;
      customProperties: Record<string, unknown>;
    }
  ) => void;
}

// Extend Window interface
declare global {
  interface Window {
    TurboBooking: {
      new (): TurboBookingInstance;
    };
  }
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  productId,
  companyId = 2, // Default company ID
  channelId = 11, // Default channel ID
  customProperties = { // Default English properties
    "displayBillingTerm": true,
    "showQuantity": false,
    "titleVariant": "Modern",
    "bookNow": "Book Now", // Generic default title
    "confirmReservationAndPay": "Confirm & Pay",
    "selectTimeLabel": "Select Time",
    "selectExperienceLabel": "Select Experience",
    "addonsLabel": "Add-ons",
    "depositObservation": "Deposit and payment instructions\n\n\n"
  },
  widgetContainerId = `turbnb-booking-widget-container-${productId}` // Unique ID per product
}) => {
  const widgetInitialized = useRef(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const initializeWidget = useCallback(() => {
    if (scriptLoaded && isOpen && widgetContainerRef.current && !widgetInitialized.current) {
      try {
        console.log(`Attempting to initialize TurboBooking for productId: ${productId} in container: #${widgetContainerId}`);
        
        if (typeof window.TurboBooking === 'undefined') {
          console.warn("TurboBooking class not found on window. Retrying initialization shortly...");
          setTimeout(initializeWidget, 300);
          return;
        }
        
        const turboInstance = new window.TurboBooking();
        if (widgetContainerRef.current) {
          widgetContainerRef.current.innerHTML = ''; 
          turboInstance.run(widgetContainerRef.current, {
            companyId,
            productId,
            channelId,
            customProperties,
          });
          widgetInitialized.current = true;
          console.log(`TurboBooking initialized successfully for productId: ${productId}`);
        }
      } catch (error) {
        console.error(`Failed to initialize TurboBooking for productId: ${productId}`, error);
      }
    }
  }, [scriptLoaded, isOpen, productId, widgetContainerId, companyId, channelId, customProperties]);

  useEffect(() => {
    initializeWidget();
  }, [initializeWidget]);

  useEffect(() => {
    if (!isOpen) {
      widgetInitialized.current = false;
      if(widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = 'Loading booking options...';
      }
    }
  }, [isOpen]);

  return (
    <>
      <Head>
        <link href="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.css" rel="stylesheet" />
      </Head>
      <Script 
        src="https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js"
        strategy="lazyOnload"
        onReady={() => {
          console.log("TurboBooking script ready (onReady).");
          if (typeof window.TurboBooking !== 'undefined') {
             setScriptLoaded(true);
          } else {
            console.warn("onReady fired, but window.TurboBooking not yet defined. Waiting...");
            setTimeout(() => {
                if (typeof window.TurboBooking !== 'undefined') {
                    console.log("window.TurboBooking defined after timeout.")
                    setScriptLoaded(true);
                } else {
                    console.error("window.TurboBooking still not defined after timeout.")
                }
            }, 500)
          }
        }}
        onError={(e) => {
          console.error('Error loading TurboBooking script:', e);
        }}
      />
      
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
        <DialogContent className="max-w-5xl w-[90vw] p-0 overflow-hidden border-0 shadow-2xl rounded-lg">
          <div 
            id={widgetContainerId} 
            ref={widgetContainerRef} 
            className="min-h-[60vh] max-h-[80vh] overflow-y-auto bg-white"
          >
            <div className="p-6 text-center text-gray-500">Loading booking options...</div> 
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingModal; 
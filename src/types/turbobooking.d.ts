// src/types/turbobooking.d.ts

interface TurboBookingInstance {
  run: (
    container: HTMLElement,
    config: {
      companyId: number;
      productId: number;
      billingTermIds?: number[]; // Make optional as it might not be needed everywhere
      channelId: number;
      customProperties?: Record<string, unknown>; // Make optional as it might not be needed everywhere
    }
  ) => void;
}

declare global {
  interface Window {
    TurboBooking: {
      new (): TurboBookingInstance;
    };
    // Add a way to dispatch event for widget loading
    dispatchEvent(event: Event): boolean;
  }
}

// This export ensures the file is treated as a module
export {}; 
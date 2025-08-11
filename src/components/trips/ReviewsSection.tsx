'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function ReviewsSection() {
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    // Listen for widget initialization errors
    const handleError = (event: ErrorEvent) => {
      if (event.message?.includes('APP_VIEWS_LIMIT_REACHED') || 
          event.message?.includes('elfsight') ||
          event.message?.includes('68ea438f-5a97-4759-b772-c1f3e0906ec3')) {
        setWidgetError(true);
        console.warn('Elfsight widget limit reached. Widget will not be displayed.');
      }
    };

    window.addEventListener('error', handleError);
    
    // Also listen for unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('APP_VIEWS_LIMIT_REACHED') ||
          event.reason?.message?.includes('elfsight')) {
        setWidgetError(true);
        event.preventDefault(); // Prevent the error from showing in console
        console.warn('Elfsight widget limit reached. Widget will not be displayed.');
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (widgetError) {
    return null; // Don't render anything if widget has errors
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="lazyOnload"
          onError={() => {
            console.warn('Failed to load Elfsight platform script');
            setWidgetError(true);
          }}
        />
        <div 
          className="elfsight-app-68ea438f-5a97-4759-b772-c1f3e0906ec3 mt-[-2rem] md:mt-[-3rem]"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
} 
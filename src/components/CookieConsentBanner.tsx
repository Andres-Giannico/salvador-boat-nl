'use client';

import { useState, useEffect } from 'react';

// Clave para guardar la preferencia en localStorage
const CONSENT_STORAGE_KEY = 'cookie_consent_status';

// Tipos de consentimiento de Google
type ConsentStatus = 'granted' | 'denied';

// Función helper para actualizar el Consent Mode de Google
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const updateGoogleConsent = (analyticsStatus: ConsentStatus, adStatus: ConsentStatus) => {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': analyticsStatus,
      'ad_storage': adStatus,
      'ad_user_data': adStatus,
      'ad_personalization': adStatus
    });
    console.log(`Google Consent updated: analytics=${analyticsStatus}, ad=${adStatus}`);
  } else {
    console.warn('window.gtag not found when updating consent.');
  }
};

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si ya se ha dado consentimiento previamente
    const consentStatus = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!consentStatus) {
      // Si no hay estado guardado, mostrar el banner
      setShowBanner(true);
    } else {
      // Si ya hay un estado (aceptado o rechazado), asegurarse de que Google lo sepa
      // Esto es útil si el usuario limpia caché pero no localStorage
      const analyticsGranted = consentStatus === 'accepted' ? 'granted' : 'denied';
      updateGoogleConsent(analyticsGranted, analyticsGranted); // Asumimos mismo estado para ads
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    const consentValue = accepted ? 'accepted' : 'rejected';
    const googleStatus: ConsentStatus = accepted ? 'granted' : 'denied';

    // Guardar preferencia en localStorage
    localStorage.setItem(CONSENT_STORAGE_KEY, consentValue);

    // Actualizar el Consent Mode de Google
    updateGoogleConsent(googleStatus, googleStatus); // Asumimos mismo estado para ads

    // Ocultar el banner
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // No renderizar nada si no se debe mostrar
  }

  return (
    <>
      {/* Overlay para hacer el modal más prominente */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[99] backdrop-blur-sm" />
      
      {/* Modal de cookies más grande y prominente */}
      <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">🍪 Cookies</h3>
            <p className="text-blue-100 text-sm">We respecteren je privacy</p>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              We gebruiken cookies om je browse-ervaring te verbeteren, verkeer te analyseren en inhoud te personaliseren.
              Door te accepteren help je ons de site te verbeteren.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-blue-800">
                <strong>Analytics:</strong> Inzicht in hoe bezoekers de site gebruiken, zodat we kunnen verbeteren.
              </p>
            </div>
            
            <p className="text-xs text-gray-500 mb-6">
              Je kunt je keuze later wijzigen. Lees ons{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                privacybeleid
              </a>{' '}
              voor meer informatie.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => handleConsent(false)} 
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200 hover:border-gray-400"
              >
                Alles weigeren
              </button>
              <button 
                onClick={() => handleConsent(true)} 
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
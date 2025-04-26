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
      'ad_storage': adStatus, // Puedes ajustarlo si no usas cookies de publicidad
      // Agrega aquí otros tipos si son necesarios (ad_user_data, ad_personalization)
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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-[100] shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300">
          Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.{ ' ' }
          {/* Puedes añadir un enlace a tu política de cookies/privacidad aquí */}
          {/* <a href="/privacy-policy" className="underline hover:text-white">Más información</a> */}
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button 
            onClick={() => handleConsent(false)} 
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-xs font-medium transition-colors"
          >
            Rechazar
          </button>
          <button 
            onClick={() => handleConsent(true)} 
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-xs font-medium transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
} 
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from 'next/script';
import { Toaster } from 'sonner';
import CookieConsentBanner from "@/components/CookieConsentBanner";
import EarlyBirdPromoModal from "@/components/EarlyBirdPromoModal";
import { getSiteUrl, pageAlternates } from "@/config/site";

// Configuración de fuentes
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const siteBase = getSiteUrl();

// LocalBusiness Schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteBase}/#organization`,
  "name": "Salvador Ibiza",
  "alternateName": "Salvador Boat Trips Ibiza",
  "description": "Premium boottochten en privé-charters op Ibiza. All-inclusive excursies met professionele bemanning, materiaal en onvergetelijke belevingen.",
  "url": siteBase,
  "telephone": "+34-871 181 393", // TODO: Add real phone number
  "email": "info@salvadoribiza.com", // TODO: Verify email
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Puerto de San Antonio",
    "addressLocality": "San Antonio",
    "addressRegion": "Ibiza",
    "postalCode": "07820",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.9804",
    "longitude": "1.3026"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "278",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card",
  "areaServed": {
    "@type": "Place",
    "name": "Ibiza, Balearic Islands, Spain"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "38.9804",
      "longitude": "1.3026"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Salvador Ibiza-diensten",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dagelijkse boottochten",
          "description": "3 uur all-inclusive dagtochten met zwemmen, snorkelen en versnaperingen"
        },
        "price": "80",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Zonsondergang boottochten",
          "description": "3 uur zonsondergang op zee met premium drankjes en gouden uur"
        },
        "price": "80",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Privéboot charter",
          "description": "Exclusieve privécharters met maatwerkroute en premium service"
        },
        "price": "1350",
        "priceCurrency": "EUR"
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/boatstripsinibiza/",
    "https://www.facebook.com/SalvadoIbizaBoat"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": `${siteBase}/images/logo-salvador.png`,
    "width": "300",
    "height": "100"
  },
  "image": [
    `${siteBase}/images/optimized/salvador-ibiza-boat-drone-view.webp`,
    `${siteBase}/images/optimized/salvador-ibiza-boat-aerial-view.webp`
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: pageAlternates('/'),
  title: {
    default: "Salvador Ibiza - Boottochten & privé charter",
    template: "%s | Salvador Ibiza",
  },
  description:
    "De beste boottochten en privé-charters op Ibiza met Salvador. All-inclusive excursies, magische zonsondergangen en herinneringen voor het leven.",
  keywords:
    "Salvador Ibiza, boottochten Ibiza, privé charter, excursies Ibiza, sunset cruise, Es Vedrà, boot huren Ibiza",
  authors: [{ name: "Salvador Ibiza Team" }],
  creator: "Salvador Ibiza",
  openGraph: {
    title: "Salvador Ibiza - Boottochten & privé charter",
    description: "All-inclusive boottochten en privé-charters op Ibiza.",
    url: getSiteUrl(),
    siteName: "Salvador Ibiza",
    locale: "nl_NL",
    alternateLocale: ["en_US", "es_ES"],
    type: 'website',
    images: [
      {
        url: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
        width: 1200,
        height: 630,
        alt: 'Boot Salvador Ibiza',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salvador Ibiza - Boottochten & privé charter',
    description: 'All-inclusive boottochten en privé-charters op Ibiza.',
    images: ['/images/optimized/salvador-ibiza-boat-drone-view.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = 'G-SP4LMTQT3E';

  return (
    <html lang="nl" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager-head"
          strategy="beforeInteractive" // Cargar GTM lo antes posible
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZR67SFF');
            `,
          }}
        />
        {/* Fin Google Tag Manager */}

        <Script
          id="google-analytics-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Establecer consentimiento predeterminado ANTES de cualquier otra cosa
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              
              // Cargar GTM ya gestiona la carga de gtag.js, así que solo definimos lo necesario.
              // La configuración de GA ('config') se debe hacer desde GTM.
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              'name': 'Salvador Ibiza',
              'url': siteBase,
              'potentialAction': {
                '@type': 'SearchAction',
                'target': {
                  '@type': 'EntryPoint',
                  'urlTemplate': `${siteBase}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Salvador Ibiza",
              "url": siteBase,
              "logo": `${siteBase}/images/logo-salvador.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-871-181-393",
                "contactType": "customer service",
                "availableLanguage": ["Dutch", "English", "Spanish"]
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZR67SFF"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* Fin Google Tag Manager (noscript) */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Toaster position="top-center" richColors />
          <main className="flex-grow pt-20 md:pt-24 sm:pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <CookieConsentBanner />
        <EarlyBirdPromoModal />
      </body>
    </html>
  );
}

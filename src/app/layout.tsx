import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from 'next/script';
import { Toaster } from 'sonner';
import localFont from 'next/font/local';
import CookieConsentBanner from "@/components/CookieConsentBanner";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://salvadoribiza.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Salvador Ibiza - Boat Trips & Private Charter",
    template: "%s | Salvador Ibiza",
  },
  description: "Experience the best boat trips and private charters in Ibiza with Salvador. All-inclusive excursions, stunning sunsets, and unforgettable memories.",
  keywords: "Salvador Ibiza, boat trips, private charter, Ibiza excursions, boat party, sunset cruise, Es Vedrà, boat rental",
  authors: [{ name: "Salvador Ibiza Team" }],
  creator: "Salvador Ibiza",
  openGraph: {
    title: "Salvador Ibiza - Boat Trips & Private Charter",
    description: "All-inclusive boat trips and private charters in Ibiza.",
    url: "https://salvadoribiza.com",
    siteName: "Salvador Ibiza",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/barcodesdedron.jpg',
        width: 1200,
        height: 630,
        alt: 'Salvador Ibiza Boat',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salvador Ibiza - Boat Trips & Private Charter',
    description: 'All-inclusive boat trips and private charters in Ibiza.',
    images: ['/images/barcodesdedron.jpg'],
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
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
        {/* <link rel="canonical" href="https://salvadoribiza.com" /> */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              'name': 'Salvador Ibiza',
              'url': 'https://salvadoribiza.com',
              'potentialAction': {
                '@type': 'SearchAction',
                'target': {
                  '@type': 'EntryPoint',
                  'urlTemplate': 'https://salvadoribiza.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
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
      </body>
    </html>
  );
}

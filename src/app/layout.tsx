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
    url: "https://www.salvadoribiza.com",
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
        {/* Google Analytics Scripts */}
        <Script
          id="google-analytics-setup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Establecer consentimiento predeterminado ANTES de cargar gtag.js y configurar GA
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
              
              // Cargar gtag.js dinámicamente después de definir el default
              var gtagScript = document.createElement('script');
              gtagScript.async = true;
              gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}';
              document.head.appendChild(gtagScript);
              
              // Configurar GA después de definir defaults y empezar a cargar gtag.js
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href="https://www.salvadoribiza.com" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
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

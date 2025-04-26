import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from 'next/script';

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
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Placeholder para Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
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
          <main className="flex-grow pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}

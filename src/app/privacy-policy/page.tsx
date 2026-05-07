import type { Metadata } from 'next';
import { getEnglishSiteUrl, getSiteUrl, getSpanishSiteUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

const title = "Privacybeleid";
const description = "Lees hoe Salvador Ibiza (Ibicruiser, S.L.) persoonsgegevens verwerkt in lijn met de AVG/GDPR.";

export const metadata: Metadata = {
  ...pageMetadata({
    title,
    description,
    path: '/privacy-policy',
  }),
  twitter: {
    card: 'summary',
    title: title,
    description: description,
  },
};

export default function PrivacyPolicyPage() {
  const nlHost = new URL(getSiteUrl()).hostname;
  const enHost = new URL(getEnglishSiteUrl()).hostname;
  const esHost = new URL(getSpanishSiteUrl()).hostname;
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacybeleid</h1>
        
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <p className="text-sm text-gray-500 mb-6">
            Laatst bijgewerkt: 7 mei 2026
          </p>

          <p>
            Dit privacybeleid beschrijft hoe <strong>SALVADOR IBIZA (Ibicruiser, S.L.)</strong> (&quot;wij&quot;) gegevens verzamelt en gebruikt wanneer je onze sites bezoekt in het Nederlands (<strong>{nlHost}</strong>), Engels (<strong>{enHost}</strong>) en Spaans (<strong>{esHost}</strong>, dezelfde URL-paden) en gerelateerde diensten gebruikt.
          </p>
          
          <h2 className="font-bold text-gray-800 mt-6 mb-3">1. Verwerkingsverantwoordelijke</h2>
          <ul>
            <li><strong>Entiteit:</strong> Ibicruiser, S.L.</li>
            <li><strong>NIF:</strong> B57527392</li>
            <li><strong>Adres:</strong> Haven van San Antonio, Balearen, Spanje.</li>
            <li><strong>Handelsregister:</strong> Sheet IB-9135 Volume 215 Folio:59 – Ibiza</li>
            <li><strong>E-mail:</strong> <a href="mailto:info@salvadoribiza.com">info@salvadoribiza.com</a></li>
            <li><strong>Telefoon:</strong> +34 645 87 15 90</li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">2. Welke gegevens</h2>
          <p>
            Gegevens die je vrijwillig invult (naam, e-mail, telefoon bij boeken, nieuwsbrief, contactformulier) en technische/gebruiksgegevens via cookies waar van toepassing.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">3. Doeleinden</h2>
          <ul>
            <li>Boekingen en aanvragen afhandelen.</li>
            <li>Contact over je reservering of vraag.</li>
            <li>Marketing alleen met toestemming.</li>
            <li>Website en diensten verbeteren.</li>
            <li>Wettelijke verplichtingen.</li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">4. Grondslag</h2>
          <p>
            Toestemming, uitvoering van een overeenkomst (bijv. boeking) en gerechtvaardigd belang voor analyse en verbetering.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">5. Delen met derden</h2>
          <p>
            Geen verkoop van persoonsgegevens. Alleen processors die nodig zijn voor betaling, hosting of wettelijke verplichting.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">6. Je rechten</h2>
          <p>
            Onder de AVG heb je recht op inzage, correctie, verwijdering, beperking, dataportabiliteit en bezwaar. Mail <a href="mailto:info@salvadoribiza.com">info@salvadoribiza.com</a>.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">7. Externe links</h2>
          <p>
            Wij zijn niet verantwoordelijk voor privacybeleid van andere websites.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">8. Wijzigingen</h2>
          <p>
            Dit beleid kan wijzigen. De datum bovenaan wordt bijgewerkt.
          </p>
        </div>
      </div>
    </main>
  );
}

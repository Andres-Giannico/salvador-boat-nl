import type { Metadata } from 'next';
import { getEnglishSiteUrl, getSiteUrl, getSpanishSiteUrl } from '@/config/site';
import { pageMetadata } from '@/lib/page-meta';

const title = "Algemene voorwaarden";
const description = "Gebruiksvoorwaarden voor de Salvador Ibiza-websites en diensten (auteursrecht, aansprakelijkheid, gedrag).";

export const metadata: Metadata = {
  ...pageMetadata({
    title,
    description,
    path: '/terms-of-service',
  }),
  twitter: {
    card: 'summary',
    title: title,
    description: description,
  },
};

export default function TermsOfServicePage() {
  const nlHost = new URL(getSiteUrl()).hostname;
  const enHost = new URL(getEnglishSiteUrl()).hostname;
  const esHost = new URL(getSpanishSiteUrl()).hostname;
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-cyan-50 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Algemene voorwaarden</h1>
        
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
          <p>
            Welkom bij de Salvador Ibiza-websites. De Nederlandstalige site staat op <strong>{nlHost}</strong>, de Engelstalige op <strong>{enHost}</strong> en de Spaanse op <strong>{esHost}</strong> (dezelfde paden). Hierna &quot;SALVADOR IBIZA&quot;. Door de site te gebruiken, ga je akkoord met deze voorwaarden.
          </p>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">1. Eigendom</h2>
            <p>De officiële sites zijn eigendom van Ibicruiser, S.L., NIF B57527392, ingeschreven te Ibiza, Balearen, Spanje.</p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">2. Doel van de site</h2>
            <p>Informatief en promotioneel: diensten in de Balearen, contact en boekingsmogelijkheden.</p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">3. Formulieren</h2>
            <p>Invullen van formulieren is vrijblijvend tenzij anders vermeld. Je garandeert juiste gegevens.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">4. Wijzigingen</h2>
            <p>SALVADOR IBIZA kan deze voorwaarden en inhoud wijzigen. Controleer regelmatig.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">5. Inhoud</h2>
            <p>Informatie kan fouten bevatten of wijzigen; geen aansprakelijkheid voor discrepanties met gedrukte documenten.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">6. Intellectueel eigendom</h2>
            <p>Teksten, beelden, logo&apos;s en lay-out zijn beschermd. Geen gebruik zonder schriftelijke toestemming.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">7. Beschikbaarheid</h2>
            <p>We streven naar continue beschikbaarheid maar garanderen deze niet; geen aansprakelijkheid bij storingen of overmacht.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">8. Geoorloofd gebruik</h2>
            <p>Geen illegaal gebruik, geen schade aan de site of andere gebruikers, geen scraping zonder toestemming.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">9. Links naar derden</h2>
            <p>Externe links zijn informatief; geen controle over inhoud van derden.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">10. Toepasselijk recht</h2>
            <p>Spaans recht. Geschillen bij de bevoegde rechtbanken van Ibiza, Spanje.</p>
          </section>
          
          <p className="text-sm text-gray-500 mt-6">
             Laatst bijgewerkt: 7 mei 2026
          </p>
        </div>
      </div>
    </main>
  );
}

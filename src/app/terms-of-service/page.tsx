import { Metadata } from 'next';

const siteUrl = 'https://salvadoribiza.com';
const pageUrl = `${siteUrl}/terms-of-service`;
const title = "Terms of Service | Salvador Ibiza";
const description = "Read the terms and conditions for using the Salvador Ibiza website and services, including information on intellectual property, liability, and user conduct.";

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: pageUrl,
  },
  robots: { // Discourage indexing of legal pages if desired, or allow
    index: true, 
    follow: true,
  },
  openGraph: {
    title: title,
    description: description,
    url: pageUrl,
  },
  twitter: {
    card: 'summary',
    title: title,
    description: description,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-cyan-50 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
          <p>
            Welcome to the website www.salvadoribiza.com (hereinafter, &quot;SALVADOR IBIZA&quot;). We trust that the website will be useful to you and that you enjoy your visit. In this regard, and to provide maximum security to our page and visitors, we must establish the following conditions of use:
          </p>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">1. Ownership</h2>
            <p>The website www.salvadoribiza.com is owned by Ibicruiser, S.L., with NIF: B57527392 and Mercantile Registry: Sheet IB-9135 Volume 215 Folio:59 – Ibiza, Balearic Islands, Spain.</p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">2. Website Purpose</h2>
            <p>SALVADOR IBIZA offers information on its website related to its services developed in the Balearic Islands, which should be considered as introductory information. The main purpose of the website is advertising and informational; likewise, it offers the possibility to contact or request more detailed information about SALVADOR IBIZA services.</p>
          </section>

          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">3. Data Submission and Forms</h2>
            <p>Submitting data through information forms constitutes a mere non-binding inquiry for SALVADOR IBIZA. All information provided by the User through the information forms must be truthful. For these purposes, the website visitor guarantees the authenticity of all data communicated as a result of completing the necessary forms for requesting information. In any case, the website visitor will be solely responsible for any false or inaccurate statements made and for the damages caused to SALVADOR IBIZA or third parties by the information provided.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">4. Modifications</h2>
            <p>SALVADOR IBIZA reserves the right to change, modify, add and/or remove parts of these conditions at any time and without prior notice and to make changes to the content of the page. We recommend that you periodically review possible changes. The aforementioned modifications that may eventually be made will not entitle the visitor to any compensation.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">5. Disclaimer (Content)</h2>
            <p>SALVADOR IBIZA is not responsible for possible discrepancies that may arise between the version of its printed documents and the electronic version of the same published on its website. The texts and photographs published on the website may include typographical errors. The information is subject to periodic changes.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">6. Intellectual and Industrial Property</h2>
            <p>The texts (information, concepts, advertising, and similar), trademarks, trade secrets, technologies, products, processes, and graphic elements (design, photos, logos, brands, source code, and similar) that constitute the website and/or are disseminated through it, as well as their presentation or assembly, are subject to Industrial and Intellectual Property rights. All content on the website (text, logos, brands, photos, etc.) is the property of SALVADOR IBIZA. The website also includes texts, photographs, and bibliographic references authored by third parties. These contents are subject to the same industrial and intellectual property rights.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">7. Copyright</h2>
            <p>SALVADOR IBIZA owns the Copyright of this website. Access to it does not imply, in any aspect, any license for its reproduction, distribution, commercialization, and/or transformation, which, in any case, will be prohibited unless prior and express consent is given by SALVADOR IBIZA.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">8. Service Availability</h2>
            <p>SALVADOR IBIZA makes its best efforts to maintain the continuity of the information and services offered through its website SALVADOR IBIZA. Our goal is to offer the highest quality service to visitors of our website. However, SALVADOR IBIZA cannot guarantee the continuity and availability of the website services in the future. SALVADOR IBIZA is excluded from any liability for damages of any kind that may be due to the malfunction or unavailability of the SALVADOR IBIZA website and its related communication systems, due to force majeure or interruption or interference in information transmission networks.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">9. Proper Use of the Website</h2>
            <p>The User agrees to use SALVADOR IBIZA in accordance with the law, the provisions of these General Conditions, morality and generally accepted good customs, and public order, and undertakes to refrain from using SALVADOR IBIZA for illicit purposes or effects, contrary to the provisions of these General Conditions, harmful to the rights and interests of third parties, or that in any way may damage, disable, overload or deteriorate SALVADOR IBIZA or prevent the normal use or enjoyment of the website by Users. SALVADOR IBIZA is not responsible for damages or losses arising from access, use, or misuse of the website contents.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">10. Third-Party Links</h2>
            <p>SALVADOR IBIZA has included references to companies and businesses (hotels, restaurants, etc.) and links on its website. The presence of this data on the SALVADOR IBIZA website is purely informational and in no case implies suggestion, invitation, or recommendation regarding them. SALVADOR IBIZA does not exercise any control over, nor assume any responsibility for the information contained in the web pages of third parties that can be accessed through links. The presence of these links on the SALVADOR IBIZA website is purely informational and in no case implies suggestion, invitation, or recommendation regarding them. The establishment of a link does not imply in any case the existence of relations between SALVADOR IBIZA and the owner of the web page where it is established, nor the acceptance and approval by SALVADOR IBIZA of its contents or services offered there and made available to the public.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">11. User Obligations</h2>
            <p>The User undertakes to refrain from:</p>
            <ol>
              <li>Collecting data for advertising purposes and sending advertising of any kind and communications for sales or other commercial purposes without prior request or consent.</li>
              <li>Sending any other unsolicited messages not previously consented to a plurality of people.</li>
              <li>Sending unsolicited electronic message chains not previously consented.</li>
              <li>Using distribution lists that can be accessed through SALVADOR IBIZA for carrying out the activities indicated in the preceding sections.</li>
              <li>Making data collected from SALVADOR IBIZA available to third parties, for any purpose.</li>
            </ol>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">12. Inbound Links (Links to SALVADOR IBIZA)</h2>
            <p>SALVADOR IBIZA informs that for Links to be made from other pages to ours, the interested Company or Person must request it from SALVADOR IBIZA in writing or via E-mail. This type of link will be made through a Link within the Interesting Links section of the external page and it will never be allowed that calling an Internet page automatically links to ours as this would be a violation of commercial property rights, proceeding legally against the entity that performs such connection, since by using the domain name, it intentionally tries to attract, for commercial benefit, Internet users to its website or any other online location, favoring a possibility of confusion with the plaintiff&apos;s brand regarding origin, sponsorship, affiliation or promotion of its website or a product or service on its website.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">13. Legal Actions</h2>
            <p>SALVADOR IBIZA reserves the right to use judicial, civil and/or criminal actions against those individuals or legal entities and their representatives who violate the provisions of these conditions.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">14. Applicable Law and Jurisdiction</h2>
            <p>The SALVADOR IBIZA website is governed by Spanish law and is under the jurisdiction of the Judges and Courts of Spain. Any controversy, conflict, or claim that may arise regarding compliance with the conditions of use of the SALVADOR IBIZA website, and any conflict related to the contents and services of the website, will be resolved by the Judges and Courts of Ibiza (Spain) and will be interpreted according to Spanish law, the parties waiving any other jurisdiction that might correspond to them.</p>
          </section>
          
          <section>
            <h2 className="font-bold text-gray-800 mt-6 mb-3">15. Acceptance of Conditions</h2>
            <p>Access to SALVADOR IBIZA implies acceptance by the user of the terms and conditions contained in this website. SALVADOR IBIZA reserves the right to modify the terms, conditions, and communications based on which this Website is offered.</p>
          </section>
          
          <p className="text-sm text-gray-500 mt-6">
             Last updated: 25/05/2025
          </p>
        </div>
      </div>
    </main>
  );
} 
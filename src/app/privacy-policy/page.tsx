import { Metadata } from 'next';

const siteUrl = 'https://salvadoribiza.com';
const pageUrl = `${siteUrl}/privacy-policy`;
const title = "Privacy Policy | Salvador Ibiza";
const description = "Learn about how Salvador Ibiza handles your personal data in compliance with data protection regulations.";

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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="font-bold text-gray-800 mt-4 mb-3">Confidentiality and Data Protection</h2>
          <p>
            SALVADOR IBIZA (Ibicruiser, S.L.) guarantees the confidentiality of your personal data. No data you provide will be shared with any organization or company external to SALVADOR IBIZA.
          </p>
          <p>
            In compliance with the Organic Law on Data Protection (LOPD), the user of SALVADOR IBIZA may at any time exercise the rights of access, rectification, and cancellation of their data under the terms provided in the aforementioned Law and other regulations that develop it.
          </p>
          
          <h2 className="font-bold text-gray-800 mt-6 mb-3">Exercising Your Rights</h2>
          <p>
            To exercise your rights, you can contact:
          </p>
          <ul>
            <li><strong>Entity:</strong> Ibicruiser, S.L.</li>
            <li><strong>NIF:</strong> B57527392</li>
            <li><strong>Registered Address:</strong> San Antonio Port, Balearic Islands, Spain.</li>
            <li><strong>Mercantile Registry:</strong> Sheet IB-9135 Volume 215 Folio:59 – Ibiza</li>
            <li><strong>Phone:</strong> +34 645 87 15 90</li>
            <li><strong>E-mail:</strong> <a href="mailto:info@salvadoribiza.com">info@salvadoribiza.com</a></li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">Responsibility for Data Provided to Third Parties</h2>
          <p>
            SALVADOR IBIZA is not responsible for the data provided to advertising companies or third-party links that may appear on the website.
          </p>
          
          <p className="text-sm text-gray-500 mt-6">
            Last updated: 25/05/2025
          </p>
        </div>
      </div>
    </main>
  );
} 
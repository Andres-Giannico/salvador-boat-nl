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
          <p className="text-sm text-gray-500 mb-6">
            Last updated: June 17, 2024
          </p>

          <p>
            This Privacy Policy describes how <strong>SALVADOR IBIZA (Ibicruiser, S.L.)</strong> ("we," "us," or "our") collects, uses, and discloses your information when you use our website (salvadoribiza.com) and the services offered through it.
          </p>
          
          <h2 className="font-bold text-gray-800 mt-6 mb-3">1. Data Controller</h2>
          <p>
            The entity responsible for processing your personal data is:
          </p>
          <ul>
            <li><strong>Entity:</strong> Ibicruiser, S.L.</li>
            <li><strong>NIF:</strong> B57527392</li>
            <li><strong>Registered Address:</strong> San Antonio Port, Balearic Islands, Spain.</li>
            <li><strong>Mercantile Registry:</strong> Sheet IB-9135 Volume 215 Folio:59 – Ibiza</li>
            <li><strong>Email:</strong> <a href="mailto:info@salvadoribiza.com">info@salvadoribiza.com</a></li>
            <li><strong>Phone:</strong> +34 645 87 15 90</li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, and phone number when you make a booking, subscribe to our newsletter, or contact us through our contact forms. We may also collect non-personal data, such as browsing data, through cookies to improve your user experience.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">3. Use of Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul>
            <li>Manage and process your bookings and service requests.</li>
            <li>Communicate with you regarding your inquiries and bookings.</li>
            <li>Send you marketing communications, should you opt-in.</li>
            <li>Improve our website and services.</li>
            <li>Comply with our legal obligations.</li>
          </ul>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">4. Legal Basis for Processing</h2>
          <p>
            We process your data based on your consent, the necessity to perform a contract with you (e.g., a booking), and our legitimate interest in improving our services and marketing efforts.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">5. Data Sharing and Confidentiality</h2>
          <p>
            <strong>SALVADOR IBIZA</strong> guarantees the confidentiality of your personal data. We will not share your data with any third-party organization or company, except where necessary to provide our services (e.g., payment processors) or when required by law.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">6. Your Rights</h2>
          <p>
            In compliance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict processing of, and port your personal data. To exercise these rights, please contact us at <a href="mailto:info@salvadoribiza.com">info@salvadoribiza.com</a>.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="font-bold text-gray-800 mt-6 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </div>
      </div>
    </main>
  );
} 
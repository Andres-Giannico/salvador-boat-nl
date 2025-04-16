import Link from 'next/link';

const WhatsAppButton = () => {
  // Reemplaza con tu número de WhatsApp real y mensaje predefinido si lo deseas
  const whatsappNumber = '34123456789'; // Placeholder
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <span className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50">
        {/* Placeholder: Add WhatsApp Icon here (e.g., using react-icons) */}
        W
      </span>
    </Link>
  );
};

export default WhatsAppButton; 
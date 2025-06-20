'use client';

import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '34871181393'; // Número actualizado

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=Hello, I'm interested in booking a trip with Salvador Ibiza`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex items-center bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors group">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M17.6 6.2c-1.6-1.6-3.7-2.5-5.8-2.5-4.5 0-8.2 3.7-8.2 8.2 0 1.4.4 2.8 1.1 4l-1.2 4.3 4.4-1.2c1.2.7 2.5 1 3.9 1 0 0 0 0 0 0 4.5 0 8.2-3.7 8.2-8.2 0-2.2-.9-4.2-2.4-5.6zm-5.8 12.7c-1.2 0-2.4-.3-3.4-1l-.3-.1-2.5.7.7-2.5-.2-.3c-.7-1.1-1.1-2.5-1.1-3.8 0-3.8 3.1-6.9 6.9-6.9 1.8 0 3.6.7 4.9 2 1.3 1.3 2 3 2 4.9 0 3.8-3.1 6.9-6.9 7z" />
          <path d="M13.5 10.1l-1.6-.7c-.2-.1-.4-.1-.5.1-.1.2-.5.6-.6.7-.1.1-.2.1-.4 0-.2-.1-.7-.3-1.4-.9-.5-.5-.8-.9-.9-1.1-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.2-.2.2-.4.1-.2 0-.4 0-.5 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.2.3-.8.7-.8 1.8s.8 2.1.9 2.2c.1.1 1.4 2.2 3.5 3.1.5.2.9.3 1.2.4.5.2.9.1 1.3.1.4 0 1.2-.5 1.3-.9.1-.5.1-.9.1-1 0-.1-.1-.2-.3-.3z" />
        </svg>
        <span className="hidden md:block ml-2 font-medium">Chat with us</span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton; 
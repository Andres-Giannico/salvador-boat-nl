'use client'; // Needed for form handling state

import { useState } from 'react';
// import { Metadata } from 'next'; // No usada
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

// No se exporta metadata desde un componente cliente
// export const metadata: Metadata = {
//   title: 'Contact Us - Salvador Ibiza Boat Trips',
//   description: 'Get in touch with Salvador Ibiza. Contact us for bookings, questions, or more information about our boat trips and private charters in Ibiza.',
// };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Aquí iría la lógica de envío real (ej. a una API)
    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Data Submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) { 
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Whether you have a question about our trips, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-5 flex items-center">
                <FiMapPin className="mr-3 text-blue-600" /> Our Location
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Find us at the main harbor in San Antonio, Ibiza. Look for the distinctive Salvador boat!
              </p>
              {/* Map Embed Placeholder - Use a real Map component here */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.876667416455!2d1.301818876489932!3d38.987050943508356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1299455c9d56049b%3A0x4ac6a46296f9a134!2sSalvador%20Ibiza%20Boat%20Trips!5e0!3m2!1sen!2ses!4v1700070063809!5m2!1sen!2ses"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salvador Ibiza Location Map"
                ></iframe>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Contact Details</h3>
              <a href="tel:+34871181393" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <FiPhone className="mr-3 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" /> +34 871 181 393
              </a>
              <a href="tel:+34681611598" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <FiPhone className="mr-3 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" /> +34 681 611 598
              </a>
              <a href="https://wa.me/34681611598" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors group">
                <FaWhatsapp className="mr-3 w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" /> WhatsApp Us
              </a>
              <a href="mailto:info@salvadoribiza.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
                <FiMail className="mr-3 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" /> info@salvadoribiza.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiSend className="mr-3 text-blue-600" /> Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center py-2.5 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 disabled:opacity-70`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FiSend className="ml-2 w-4 h-4" />}
                </button>
                {submitStatus === 'success' && <p className="text-sm text-green-600">Message sent successfully!</p>}
                {submitStatus === 'error' && <p className="text-sm text-red-600">Failed to send message. Please try again.</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

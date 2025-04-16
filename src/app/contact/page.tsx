'use client'; // Needed for form handling state

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email, API call)
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!'); // Placeholder alert
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            {/* Placeholder for reCAPTCHA */}
            <div className="text-sm text-gray-500">
              {/* Add reCAPTCHA widget here */}
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. (Placeholder)
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map and Location Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
          <p className="mb-4">We are located in the beautiful harbor of San Antonio, Ibiza.</p>
          {/* Placeholder for Google Maps Embed */}
          <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center text-gray-500 mb-4">
            Google Map Placeholder
            {/* Embed Google Maps iframe here */}
          </div>
          <h3 className="font-semibold">Address:</h3>
          <p>Passeig de la Mar</p>
          <p>07820 Sant Antoni de Portmany</p>
          <p>Ibiza, Balearic Islands, Spain</p>
          <p className="mt-4"><span className="font-semibold">Phone:</span> +34 123 456 789 (Placeholder)</p>
          <p><span className="font-semibold">Email:</span> info@salvadoribiza.com (Placeholder)</p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiMonitor, FiClock, FiTrendingUp, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Easy Integration",
    description: "Customizable widget that seamlessly integrates into your website"
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Real-Time Availability",
    description: "Instant access to our up-to-date calendar"
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Attractive Commissions",
    description: "Earn competitive commissions on every sale"
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Support team ready to assist you at any time"
  }
];

export default function PartnersClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Join Salvador Ibiza&apos;s Partner Network
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Offer premium maritime experiences to your clients with our Turbookings platform
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a 
                href="#benefits" 
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Turbookings?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Revolutionize the way you offer our maritime experiences to your clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Widget Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Turbookings Widget</h2>
              <p className="text-gray-600">
                Integrate our booking system directly into your website with our customizable widget:
              </p>
              <ul className="space-y-4">
                {[
                  "Design adaptable to your brand",
                  "Real-time updates",
                  "Simplified booking process",
                  "Instant confirmation",
                  "Efficient booking management"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FiCheck className="text-green-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-1">
                <Image
                  src="/images/turbo.png"
                  alt="Turbookings Widget Demo"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to start offering Salvador Ibiza experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Register",
                description: "Complete our partner application form"
              },
              {
                step: "2",
                title: "Verify Account",
                description: "Receive your Turbookings access credentials"
              },
              {
                step: "3",
                title: "Start Selling!",
                description: "Integrate the widget and start offering our experiences"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Contact Our Team</h2>
              <p className="text-gray-600">
                Ready to offer the best maritime experience in Ibiza?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="flex items-center space-x-2">
                  <span>Email:</span>
                  <a href="mailto:partners@salvadoribiza.com" className="text-blue-600 hover:underline">
                    partners@salvadoribiza.com
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>Phone:</span>
                  <a href="tel:+34654082728" className="text-blue-600 hover:underline">
                    +34 654 082 728
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 text-center"
                >
                  Contact Now
                </Link>
                <p className="text-sm text-gray-500 text-center">
                  Our team will respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
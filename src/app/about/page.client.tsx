'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAnchor, FiHeart, FiSunrise, FiUsers } from 'react-icons/fi';

const values = [
  {
    icon: <FiHeart className="w-6 h-6" />,
    title: "Passion for Excellence",
    description: "We&apos;re dedicated to providing the highest quality service in every detail of your experience"
  },
  {
    icon: <FiAnchor className="w-6 h-6" />,
    title: "Maritime Expertise",
    description: "Years of experience navigating Ibiza&apos;s waters, ensuring safe and unforgettable journeys"
  },
  {
    icon: <FiSunrise className="w-6 h-6" />,
    title: "Unique Experiences",
    description: "Creating magical moments and memories that last a lifetime"
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Customer Focus",
    description: "Your satisfaction and comfort are our top priorities"
  }
];

export default function AboutClientPage() {
  // Animation variants for title stagger
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  }
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const titleText = "The Salvador Ibiza Story";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen Image Background */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/boat/aereabarco.png"
            alt="Salvador Ibiza boat aerial view for about us page"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-shadow-lg"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {/* Staggered title animation */}
            {titleText.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Creating unforgettable maritime experiences in the heart of the Mediterranean
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Salvador Ibiza was born from a deep passion for the Mediterranean Sea and the magical island of Ibiza. What started as a dream to share the beauty of Ibiza&apos;s crystal-clear waters has evolved into a premium boat charter service that combines luxury, comfort, and unforgettable experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence and attention to detail has made us a preferred choice for those seeking extraordinary maritime adventures in Ibiza.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-1">
                <Image
                  src="/images/barco5.png"
                  alt="Salvador Ibiza Journey"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-3 rounded-full w-fit mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* The Boat Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-1">
                <Image
                  src="/images/barco1.png"
                  alt="Salvador Boat"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-4">The Salvador Experience</h2>
              <p className="text-gray-600 leading-relaxed">
                Step aboard our meticulously maintained vessel, equipped with modern amenities while preserving its classic charm. With spacious decks, comfortable seating areas, and state-of-the-art safety equipment, we ensure every journey is as comfortable as it is memorable.
              </p>
              <ul className="space-y-3">
                {[
                  "Spacious sun deck for relaxation",
                  "Premium sound system",
                  "Comfortable seating areas",
                  "Water sports equipment",
                  "Modern safety features"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FiAnchor className="text-blue-500 w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Team Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Our Crew</h2>
              <p className="text-gray-600 leading-relaxed">
                Our experienced and passionate crew is the heart of Salvador Ibiza. With extensive knowledge of the local waters and a commitment to exceptional service, they ensure every journey is safe, comfortable, and truly unforgettable.
              </p>
              <div className="mt-8">
                <Image
                  src="/images/crew-boat.jpeg"
                  alt="Salvador Ibiza Crew"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover  mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 
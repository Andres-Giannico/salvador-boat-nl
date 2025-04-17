'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiCheck,
  FiMonitor,
  FiClock,
  FiTrendingUp,
  FiShare2,
  FiDollarSign,
  FiStar,
  FiZap,
  FiBriefcase,
  FiGift,
} from 'react-icons/fi';

// Features for Influencers (Turbo Bookings)
const influencerFeatures = [
  {
    icon: <FiShare2 className="w-6 h-6 text-pink-500" />,
    title: "Effortless Setup",
    description: "Sign up in minutes & get your unique booking link instantly."
  },
  {
    icon: <FiDollarSign className="w-6 h-6 text-green-500" />,
    title: "$$$ Attractive Commissions $$$ ",
    description: "Earn a massive ~25% commission on every single ticket sold via your link."
  },
  {
    icon: <FiZap className="w-6 h-6 text-yellow-500" />,
    title: "Instant URL Creation",
    description: "Our Turbo system auto-generates your personalized URL. Share & start earning!"
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-purple-500" />,
    title: "Maximize Your Influence",
    description: "Turn your social clout into real cash. Perfect for influencers of all sizes."
  }
];

// Features for Business Partners (Turbookings)
const businessFeatures = [
  {
    icon: <FiClock className="w-6 h-6 text-blue-500" />,
    title: "Real-Time Availability",
    description: "Instant access to our live calendar. No more back-and-forth calls!"
  },
  {
    icon: <FiMonitor className="w-6 h-6 text-teal-500" />,
    title: "Seamless Widget Integration",
    description: "Embed our booking widget directly on YOUR site. Keep your customers engaged."
  },
  {
    icon: <FiBriefcase className="w-6 h-6 text-indigo-500" />,
    title: "Direct System Connectivity",
    description: "Make bookings instantly in our system. Ideal for concierges needing speed."
  },
  {
    icon: <FiGift className="w-6 h-6 text-red-500" />,
    title: "Add Value & Earn More",
    description: "Offer premium experiences and earn competitive commissions."
  }
];

const testimonials = [
  {
    quote: "Turbo Bookings made it so simple for me to monetize my influence. I couldn&apos;t be happier with the results!",
    author: "Alex M."
  },
  {
    quote: "A game-changer! I earn a steady commission with minimal effort. Highly recommended for any influencer.",
    author: "Jamie L."
  },
  {
    quote: "The automated system and instant URL generation are amazing. I&apos;m now earning money while I sleep!",
    author: "Casey R."
  }
];

export default function PartnersClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Partner with Salvador Ibiza & Skyrocket Your Earnings!
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              Whether you&apos;re an influencer or a business, we have the perfect partnership program for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#influencers" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <FiStar className="inline mr-2 mb-1" /> I&apos;m an Influencer
              </a>
              <a 
                href="#businesses" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                 <FiBriefcase className="inline mr-2 mb-1"/> I&apos;m a Business
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Influencer Program Section */}
      <section id="influencers" className="py-20 bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
              <FiStar className="inline mr-2 mb-1" /> For Influencers: Turbocharge Your Earnings!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turn your social influence into serious cash with our exclusive Turbo Bookings program. It&apos;s easy, automated, and highly rewarding!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {influencerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100 transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-pink-100 to-red-100 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold mb-4 text-gray-800">How It Works (It&apos;s Simple!)</h3>
             <ol className="text-left inline-block max-w-md space-y-2 text-gray-600">
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">1.</span> Provide basic info & avatar.</li>
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">2.</span> Get your unique booking URL instantly.</li>
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">3.</span> Share the link on your socials.</li>
                 <li className="flex items-start"><span className="font-bold mr-2 text-pink-600">4.</span> Earn ~25% commission per ticket!</li>
             </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800">What Our Turbo Sellers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <p className="text-gray-600 mb-4 italic">{`&quot;${testimonial.quote}&quot;`}</p>
                  <p className="font-semibold text-pink-600">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
           </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://wa.me/34871181393?text=Hi!%20I'm%20interested%20in%20the%20Turbo%20Bookings%20influencer%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl text-xl transform hover:scale-105"
            >
              Become a Turbo Seller NOW!
            </a>
          </motion.div>
        </div>
      </section>

      {/* Business Partner Section */}
      <section id="businesses" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               <FiBriefcase className="inline mr-2 mb-1"/> For Businesses: Elevate Your Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with us via Turbookings to offer premium Salvador Ibiza experiences directly to your clients (Hotels, Concierges, Agencies, Websites).
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {businessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

           {/* Widget Demo Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">The Turbookings Widget</h3>
              <p className="text-gray-600">
                Integrate our powerful booking system directly onto your website:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Customizable design to match your brand.</li>
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Live availability & pricing updates.</li>
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Simplified booking process for your clients.</li>
                <li className="flex items-center"><FiCheck className="text-green-500 mr-2" /> Increase conversions & add value.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl p-1 shadow-lg">
                <Image
                  src="/images/turbo.png"
                  alt="Turbookings Widget Integration"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold mb-4 text-gray-800">How to Get Started</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[ /* Reusing simpler steps structure */
                  { title: "Register", description: "Complete our partner application form." },
                  { title: "Verify & Train", description: "Get access & participate in online training." },
                  { title: "Start Selling!", description: "Integrate the widget & offer our experiences." }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-left"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold mb-1 text-gray-800">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://wa.me/34871181393?text=Hi!%20I'm%20interested%20in%20the%20Turbookings%20business%20partner%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-xl transform hover:scale-105"
            >
              Partner with Us Today!
            </a>
            <p className="text-sm text-gray-500 mt-4">Or email us at partners@salvadoribiza.com</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
} 
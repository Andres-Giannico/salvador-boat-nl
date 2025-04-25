'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { FiGift, FiUsers, FiBriefcase, FiStar, FiCamera, FiHelpCircle, FiSun, FiCalendar } from 'react-icons/fi';
import { GiPartyPopper } from 'react-icons/gi';

// Icon Map for this component
const iconMap: { [key: string]: IconType } = {
  FiGift,
  FiUsers,
  FiBriefcase,
  FiStar,
  FiCamera,
  FiSun,
  FiCalendar,
  GiPartyPopper,
  FiHelpCircle // Default
};

// Interface expects icon name as string, add optional href
interface PerfectForItemProp {
  icon: string; 
  title: string;
  description: string;
  color: string; 
  href?: string;
}

interface PerfectForCardProps {
  items: PerfectForItemProp[];
  title: string;
}

const PerfectForCard = ({ items, title }: PerfectForCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M0,50 L50,0 L100,50 L50,100 Z" />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 relative z-10">{title}</h2>
      <div className="flex flex-col gap-4 relative z-10">
        {items.map((item, index) => {
          const IconComponent = iconMap[item.icon] || FiHelpCircle;
          
          // Define the content of the list item
          const itemContent = (
            <motion.div 
              key={index}
              className="flex items-center p-4 rounded-lg bg-gray-50/60 border border-gray-100/60 w-full hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className={`mr-4 p-2 rounded-full ${item.color.replace('text-', 'bg-').replace('-500', '-100')}`}>
                <IconComponent className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          );

          // Wrap with Link if href exists, otherwise just return content
          return item.href ? (
            <Link key={`link-${index}`} href={item.href} passHref legacyBehavior>
              <a className="block no-underline">{itemContent}</a>
            </Link>
          ) : (
            <div key={`no-link-${index}`}>{itemContent}</div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PerfectForCard; 
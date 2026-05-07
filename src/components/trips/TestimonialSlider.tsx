"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export type Testimonial = {
  id: string | number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image?: string;
  trip?: string;
};

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  title?: string;
  autoplay?: boolean;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  title = "Wat gasten zeggen",
  autoplay = true,
}: TestimonialSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialCount = testimonials.length;

  useEffect(() => {
    if (!autoplay || isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((current + 1) % testimonialCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, current, isPaused, testimonialCount]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className="w-5 h-5 text-yellow-400"
      />
    ));
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prevIndex) => (prevIndex + newDirection + testimonialCount) % testimonialCount);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Avatar */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {testimonials[current]?.image ? (
                    <Image
                      src={testimonials[current].image}
                      alt={`Photo of ${testimonials[current].name}`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-500">
                        {testimonials[current]?.name?.charAt(0) || '?'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[current].rating)}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">
                    &ldquo;{testimonials[current].comment}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                    <p className="text-gray-500">{testimonials[current].location}</p>
                    {testimonials[current].trip && (
                      <p className="text-blue-600 text-sm mt-1">{testimonials[current].trip}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg z-10"
          onClick={() => paginate(-1)}
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg z-10"
          onClick={() => paginate(1)}
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 
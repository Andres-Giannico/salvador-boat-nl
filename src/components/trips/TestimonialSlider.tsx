"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import Image from 'next/image';

export type Testimonial = {
  id: number;
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
  title = "What Our Guests Say",
  autoplay = true,
}: TestimonialSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialCount = testimonials.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((current + 1) % testimonialCount);
  }, [current, testimonialCount]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((current - 1 + testimonialCount) % testimonialCount);
  }, [current, testimonialCount]);

  useEffect(() => {
    if (!autoplay || isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, current, isPaused, nextSlide, testimonialCount]);

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
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="w-full relative py-12 px-4 md:px-12 rounded-xl bg-gradient-to-br from-blue-50 to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">{title}</h2>
      )}

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md">
                  {testimonials[current].image && (
                    <Image 
                      src={testimonials[current].image!}
                      alt={`Photo of ${testimonials[current].name}`}
                      width={128} 
                      height={128}
                      className="object-cover w-full h-full"
                      priority={current === 0}
                    />
                  )}
                </div>
                <div className="text-center md:text-left">
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonials[current].rating)}
                  </div>
                  <p className="text-lg italic text-gray-700 my-4">
                    &ldquo;{testimonials[current].comment}&rdquo;
                  </p>
                  <p className="font-semibold text-gray-800">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].location}</p>
                  {testimonials[current].trip && (
                    <p className="text-xs text-blue-600 mt-1">Trip: {testimonials[current].trip}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4">
        <button
          onClick={prevSlide}
          className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white p-2 rounded-full shadow-sm pointer-events-auto transition-all"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white p-2 rounded-full shadow-sm pointer-events-auto transition-all"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2.5 h-2.5 rounded-full ${
              index === current ? 'bg-blue-600' : 'bg-gray-300'
            } transition-colors duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 
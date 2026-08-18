"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    text: "Positivus completely transformed our online marketing approach. Their team is exceptionally skilled, knowledgeable, and always delivers measurable results on time and within budget. Our ROI increased by over 140% in just 6 months.",
    author: "Sarah Jenkins",
    role: "Head of Growth at TechFlow",
  },
  {
    id: 3,
    text: "Working with Positivus has been a game-changer for our brand. They helped us scale our paid campaigns effortlessly and improved our organic ranking across key competitive terms. Their reporting is transparent and insightful.",
    author: "David Chen",
    role: "VP of Marketing at Elevate",
  },
  {
    id: 4,
    text: "The creative content and strategic PPC management provided by Positivus exceeded all our expectations. They have become an indispensable extension of our marketing department.",
    author: "Emma Watson",
    role: "CMO at InnovateLab",
  },
  {
    id: 5,
    text: "From SEO audit to technical execution, Positivus delivered remarkable quality. Our organic traffic doubled and customer engagement rates reached an all-time high.",
    author: "Michael Torres",
    role: "Founder & CEO at RetailPro",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionHeading
        badge="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="bg-[#191A23] rounded-[35px] sm:rounded-[45px] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 text-white relative overflow-hidden">
        {/* Testimonials Carousel Display */}
        <div className="relative min-h-[300px] flex items-center justify-center max-w-4xl mx-auto">
          {testimonialsData.map((item, index) => {
            const isActive = index === currentIndex;
            if (!isActive) return null;

            return (
              <div
                key={item.id}
                className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-300"
              >
                {/* Speech Bubble */}
                <div className="relative w-full border border-[#B9FF66] rounded-[35px] sm:rounded-[45px] p-6 sm:p-10 lg:p-12 mb-8 bg-[#191A23]">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  {/* Bubble pointer triangle */}
                  <div className="absolute -bottom-4 left-12 sm:left-16 w-8 h-8 bg-[#191A23] border-r border-b border-[#B9FF66] rotate-45" />
                </div>

                {/* Author Info */}
                <div className="self-start pl-12 sm:pl-16">
                  <h4 className="text-lg sm:text-xl font-medium text-[#B9FF66]">
                    {item.author}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Bar */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-8 sm:gap-16">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="p-2 text-white hover:text-[#B9FF66] transition-colors focus:outline-none cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          {/* Star Pagination Indicators */}
          <div className="flex items-center gap-3 sm:gap-4">
            {testimonialsData.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className="focus:outline-none transition-all duration-200 cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* 4-pointed star shape */}
                <svg
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-200 ${
                    index === currentIndex
                      ? "text-[#B9FF66] scale-125"
                      : "text-white opacity-60 hover:opacity-100"
                  }`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="p-2 text-white hover:text-[#B9FF66] transition-colors focus:outline-none cursor-pointer"
            aria-label="Next Testimonial"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

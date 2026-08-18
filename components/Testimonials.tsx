"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
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

const COPIES = 5;
const extendedData = Array.from({ length: COPIES }, () => testimonialsData).flat();
const INITIAL_INDEX = testimonialsData.length * 2; // 10 (middle set, index 0 of testimonialsData)

export default function Testimonials() {
  const [virtualIndex, setVirtualIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentIndex = virtualIndex % testimonialsData.length;

  const updatePosition = useCallback((index: number) => {
    const container = containerRef.current;
    const targetCard = cardRefs.current[index];
    if (!container || !targetCard) return;

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
    setTranslateX(containerCenter - cardCenter);
  }, []);

  useEffect(() => {
    updatePosition(virtualIndex);
  }, [virtualIndex, updatePosition]);

  useEffect(() => {
    const handleResize = () => {
      updatePosition(virtualIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [virtualIndex, updatePosition]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setVirtualIndex((prev) => prev - 1);
  };

  const handleDotClick = (targetOriginalIndex: number) => {
    setIsTransitioning(true);
    const currentOriginalIndex = virtualIndex % testimonialsData.length;
    let diff = targetOriginalIndex - currentOriginalIndex;
    if (diff > testimonialsData.length / 2) diff -= testimonialsData.length;
    if (diff < -testimonialsData.length / 2) diff += testimonialsData.length;
    setVirtualIndex((prev) => prev + diff);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (virtualIndex < testimonialsData.length) {
      setVirtualIndex((prev) => prev + testimonialsData.length * 2);
    } else if (virtualIndex >= testimonialsData.length * 4) {
      setVirtualIndex((prev) => prev - testimonialsData.length * 2);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionHeading
        badge="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="bg-[#191A23] rounded-[35px] sm:rounded-[45px] py-12 sm:py-16 lg:py-20 text-white relative overflow-hidden">
        {/* Testimonials Carousel Slider Track */}
        <div ref={containerRef} className="w-full overflow-hidden relative">
          <div
            className={`flex items-stretch gap-6 sm:gap-10 md:gap-12 ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : "transition-none"
            }`}
            style={{
              transform: `translateX(${translateX}px)`,
              width: "max-content",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedData.map((item, index) => {
              return (
                <div
                  key={`${item.id}-${index}`}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="w-[85vw] sm:w-[520px] md:w-[580px] lg:w-[606px] shrink-0 flex flex-col items-center"
                >
                  {/* Speech Bubble */}
                  <div className="relative w-full border border-[#B9FF66] rounded-[35px] sm:rounded-[45px] p-6 sm:p-10 lg:p-12 mb-8 bg-[#191A23] min-h-[220px] sm:min-h-[200px] flex items-center">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100 font-normal">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    {/* Bubble pointer triangle */}
                    <div className="absolute -bottom-[15px] left-12 sm:left-16 w-7 h-7 bg-[#191A23] border-r border-b border-[#B9FF66] rotate-45" />
                  </div>

                  {/* Author Info */}
                  <div className="self-start pl-14 sm:pl-20">
                    <h4 className="text-lg sm:text-xl font-medium text-[#B9FF66]">
                      {item.author}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300">
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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
          <div className="flex items-center gap-4 sm:gap-5">
            {testimonialsData.map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={`dot-${index}`}
                  onClick={() => handleDotClick(index)}
                  className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer flex items-center justify-center"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={
                      isActive
                        ? "/assets/current_pagination_item_star.svg"
                        : "/assets/default_pagination_star_icon.svg"
                    }
                    alt={isActive ? "Current slide" : `Slide ${index + 1}`}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                  />
                </button>
              );
            })}
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

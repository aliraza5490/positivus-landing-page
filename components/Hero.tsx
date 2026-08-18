import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content (Desktop) / Column */}
        <div className="flex flex-col items-start gap-6 md:gap-9">
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-medium leading-[1.15] tracking-tight text-[#191A23]">
            Navigating the digital landscape for success
          </h1>

          {/* Mobile Illustration (appears between title and text on small screens) */}
          <div className="w-full flex justify-center lg:hidden my-2">
            <div className="relative w-full max-w-[360px] aspect-[1.15/1]">
              <Image
                src="/assets/hero/hero_Illustration.svg"
                alt="Digital marketing megaphone illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[#191A23] leading-relaxed max-w-[500px]">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>

          <Link
            href="#contact"
            className="w-full sm:w-auto text-center px-8 sm:px-9 py-4 sm:py-5 bg-[#191A23] text-white rounded-[14px] text-lg sm:text-xl font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 shadow-positivus-sm hover:shadow-none"
          >
            Book a consultation
          </Link>
        </div>

        {/* Right Illustration (Desktop only) */}
        <div className="hidden lg:flex justify-end items-center">
          <div className="relative w-full max-w-[560px] aspect-[1.15/1]">
            <Image
              src="/assets/hero/hero_Illustration.svg"
              alt="Digital marketing megaphone illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

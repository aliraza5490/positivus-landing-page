import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="bg-[#F3F3F3] rounded-[35px] sm:rounded-[45px] p-8 sm:p-12 lg:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left text and action */}
        <div className="flex flex-col items-start gap-5 sm:gap-6 max-w-lg z-10">
          <h3 className="text-2xl sm:text-3xl font-medium text-[#191A23]">
            Let&apos;s make things happen
          </h3>
          <p className="text-base sm:text-lg text-[#191A23] leading-relaxed">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Link
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-4 bg-[#191A23] text-white rounded-[14px] text-lg font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 shadow-positivus-sm hover:shadow-none"
          >
            Get your free proposal
          </Link>
        </div>

        {/* Right Illustration (Desktop) */}
        <div className="hidden lg:flex items-center justify-center relative w-[360px] h-[260px] shrink-0">
          <Image
            src="/assets/lets_make_it_happen/illustration.svg"
            alt="Let's make things happen illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

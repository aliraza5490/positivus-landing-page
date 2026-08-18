import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="bg-[#F3F3F3] rounded-[35px] sm:rounded-[45px] p-8 sm:p-10 lg:py-12 lg:px-14 relative flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left text and action */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-[480px] z-10">
          <h3 className="text-2xl sm:text-3xl font-medium text-[#191A23] leading-tight">
            Let&apos;s make things happen
          </h3>
          <p className="text-base sm:text-lg text-[#191A23] leading-snug">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Link
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-4 bg-[#191A23] text-white rounded-[14px] text-lg font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 shadow-positivus-sm hover:shadow-none mt-1"
          >
            Get your free proposal
          </Link>
        </div>

        {/* Right Illustration (Desktop - extends beyond top & bottom of the container) */}
        <div className="hidden lg:block absolute right-4 xl:right-16 -top-12 xl:-top-16 w-[420px] lg:w-[480px] xl:w-[500px] h-[380px] lg:h-[420px] xl:h-[440px] pointer-events-none z-10">
          <Image
            src="/assets/lets_make_it_happen/illustration.svg"
            alt="Let's make things happen illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

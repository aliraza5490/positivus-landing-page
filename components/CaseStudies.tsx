import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const caseStudiesData = [
  {
    id: 1,
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    href: "#contact",
  },
  {
    id: 2,
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    href: "#contact",
  },
  {
    id: 3,
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    href: "#contact",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="use-cases"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <SectionHeading
        badge="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      {/* Desktop View: Dark box with 3 columns divided by lines */}
      <div className="hidden md:block bg-[#191A23] rounded-[45px] p-12 lg:p-16 text-white">
        <div className="grid grid-cols-3 gap-8 lg:gap-12">
          {caseStudiesData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between gap-6 ${
                index !== caseStudiesData.length - 1
                  ? "border-r border-white/30 pr-8 lg:pr-12"
                  : ""
              }`}
            >
              <p className="text-base lg:text-lg leading-relaxed text-gray-200">
                {item.text}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-3 text-[#B9FF66] hover:underline underline-offset-4 text-lg font-normal group"
              >
                <span>Learn more</span>
                <div className="relative w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <Image
                    src="/assets/green_icon.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View: Horizontal scrollable carousel / cards */}
      <div className="md:hidden flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {caseStudiesData.map((item, index) => (
          <div
            key={`mobile-${item.id}`}
            className={`bg-[#191A23] text-white rounded-[40px] p-8 sm:p-10 w-[82vw] max-w-[360px] snap-start flex flex-col justify-between gap-6 shrink-0 ${
              index === 0 ? "ml-0" : ""
            }`}
          >
            <p className="text-base leading-relaxed text-gray-200">{item.text}</p>
            <Link
              href={item.href}
              className="inline-flex items-center gap-3 text-[#B9FF66] hover:underline underline-offset-4 text-base font-normal group"
            >
              <span>Learn more</span>
              <div className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                <Image
                  src="/assets/green_icon.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

const logos = [
  { name: "Amazon", src: "/assets/marqueue/Company logo.png" },
  { name: "Dribbble", src: "/assets/marqueue/Company logo-1.png" },
  { name: "HubSpot", src: "/assets/marqueue/Company logo-2.png" },
  { name: "Notion", src: "/assets/marqueue/Company logo-3.png" },
  { name: "Netflix", src: "/assets/marqueue/Company logo-4.png" },
];

export default function LogosMarquee() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 overflow-hidden">
      {/* Desktop View: Clean evenly spaced grid/flex */}
      <div className="hidden md:flex items-center justify-between gap-8 flex-wrap">
        {logos.map((logo, index) => (
          <div
            key={`desktop-${index}`}
            className="relative h-10 w-28 lg:w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile View: Infinite marquee animation */}
      <div className="md:hidden flex overflow-x-hidden relative">
        <div className="flex animate-marquee gap-12 items-center">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={`marquee-${index}`}
              className="relative h-8 w-24 shrink-0 grayscale flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

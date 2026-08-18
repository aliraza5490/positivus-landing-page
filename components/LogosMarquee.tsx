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
  // Duplicate logos to ensure seamless looping on all screen sizes including wide desktops
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 overflow-hidden">
      <div className="flex overflow-x-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
        <div className="flex animate-marquee gap-10 md:gap-16 items-center">
          {marqueeLogos.concat(marqueeLogos).map((logo, index) => (
            <div
              key={`marquee-${index}`}
              className="relative h-8 md:h-10 w-24 md:w-32 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex items-center justify-center cursor-pointer"
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


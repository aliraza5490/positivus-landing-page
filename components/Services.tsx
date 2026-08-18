import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface ServiceItem {
  id: string;
  title1: string;
  title2: string;
  bgColor: string;
  badgeBg: string;
  badgeTextColor: string;
  textColor: string;
  linkTextColor: string;
  iconSrc: string;
  illustrationSrc: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "seo",
    title1: "Search engine",
    title2: "optimization",
    bgColor: "bg-[#F3F3F3]",
    badgeBg: "bg-[#B9FF66]",
    badgeTextColor: "text-[#191A23]",
    textColor: "text-[#191A23]",
    linkTextColor: "text-[#191A23]",
    iconSrc: "/assets/dark_Link_icon.svg",
    illustrationSrc: "/assets/services/Illustration.svg",
  },
  {
    id: "ppc",
    title1: "Pay-per-click",
    title2: "advertising",
    bgColor: "bg-[#B9FF66]",
    badgeBg: "bg-white",
    badgeTextColor: "text-[#191A23]",
    textColor: "text-[#191A23]",
    linkTextColor: "text-[#191A23]",
    iconSrc: "/assets/dark_Link_icon.svg",
    illustrationSrc: "/assets/services/Illustration-1.svg",
  },
  {
    id: "smm",
    title1: "Social Media",
    title2: "Marketing",
    bgColor: "bg-[#191A23]",
    badgeBg: "bg-white",
    badgeTextColor: "text-[#191A23]",
    textColor: "text-white",
    linkTextColor: "text-white",
    iconSrc: "/assets/light_ link_icon.svg",
    illustrationSrc: "/assets/services/Illustration-2.svg",
  },
  {
    id: "email",
    title1: "Email",
    title2: "Marketing",
    bgColor: "bg-[#F3F3F3]",
    badgeBg: "bg-[#B9FF66]",
    badgeTextColor: "text-[#191A23]",
    textColor: "text-[#191A23]",
    linkTextColor: "text-[#191A23]",
    iconSrc: "/assets/dark_Link_icon.svg",
    illustrationSrc: "/assets/services/Illustration-email.svg",
  },
  {
    id: "content",
    title1: "Content",
    title2: "Creation",
    bgColor: "bg-[#B9FF66]",
    badgeBg: "bg-white",
    badgeTextColor: "text-[#191A23]",
    textColor: "text-[#191A23]",
    linkTextColor: "text-[#191A23]",
    iconSrc: "/assets/dark_Link_icon.svg",
    illustrationSrc: "/assets/services/Illustration-3.svg",
  },
  {
    id: "analytics",
    title1: "Analytics and",
    title2: "Tracking",
    bgColor: "bg-[#191A23]",
    badgeBg: "bg-[#B9FF66]",
    badgeTextColor: "text-[#191A23]",
    textColor: "text-white",
    linkTextColor: "text-white",
    iconSrc: "/assets/light_ link_icon.svg",
    illustrationSrc: "/assets/services/Illustration-4.svg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <SectionHeading
        badge="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`${service.bgColor} border border-[#191A23] rounded-[35px] sm:rounded-[45px] p-8 sm:p-10 lg:p-12 shadow-positivus hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#191A23] transition-all duration-200 flex flex-col justify-between min-h-[300px] relative overflow-hidden group`}
          >
            {/* Top / Left: Title with two-line badges */}
            <div className="flex flex-col items-start -space-y-1 z-10">
              <span
                className={`${service.badgeBg} ${service.badgeTextColor} text-2xl sm:text-3xl font-medium px-2 py-0.5 rounded-[7px] leading-none inline-block`}
              >
                {service.title1}
              </span>
              <span
                className={`${service.badgeBg} ${service.badgeTextColor} text-2xl sm:text-3xl font-medium px-2 py-0.5 rounded-[7px] leading-none inline-block`}
              >
                {service.title2}
              </span>
            </div>

            {/* Bottom Row: Link and Illustration */}
            <div className="flex items-end justify-between mt-8 sm:mt-12 z-10">
              <Link
                href="#contact"
                className="flex items-center gap-3.5 group/link cursor-pointer"
              >
                <div className="relative w-10 h-10 transition-transform duration-300 group-hover/link:rotate-45">
                  <Image
                    src={service.iconSrc}
                    alt="Learn more icon"
                    width={41}
                    height={41}
                    className="w-full h-full"
                  />
                </div>
                <span
                  className={`hidden sm:inline-block text-lg sm:text-xl font-normal ${service.linkTextColor} group-hover/link:underline underline-offset-4`}
                >
                  Learn more
                </span>
              </Link>

              {/* Right Illustration */}
              <div className="relative w-36 h-32 sm:w-44 sm:h-36 lg:w-52 lg:h-44 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={service.illustrationSrc}
                  alt={`${service.title1} ${service.title2}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

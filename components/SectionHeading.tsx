import React from "react";

interface SectionHeadingProps {
  badge: string;
  description: string;
  className?: string;
  badgeClassName?: string;
}

export default function SectionHeading({
  badge,
  description,
  className = "",
  badgeClassName = "bg-[#B9FF66] text-black",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center text-center md:items-center md:text-left gap-4 md:gap-10 mb-10 md:mb-16 ${className}`}
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-medium px-2 py-1 rounded-[7px] inline-block shrink-0 ${badgeClassName}`}
      >
        {badge}
      </h2>
      <p className="text-sm md:text-lg text-gray-800 max-w-[580px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

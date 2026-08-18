"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct in-depth market research, analyze competitors, and develop a customized digital marketing roadmap tailored to your specific audience, industry trends, and business objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team of specialists executes the agreed strategy across all relevant channels, ensuring high-quality creative assets, technical setups, and optimal campaign configurations.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor campaign performance, run A/B tests, analyze user behavior, and fine-tune parameters to maximize conversion rates and return on investment.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "You receive transparent, regular reports detailing key performance indicators, milestones achieved, actionable insights, and upcoming strategic recommendations.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "We regularly review overall results, adapt to changing market conditions, and iterate on strategies to drive sustainable long-term business growth.",
  },
];

export default function WorkingProcess() {
  const [openStep, setOpenStep] = useState<number | null>(0); // Step 01 open by default

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <SectionHeading
        badge="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="flex flex-col gap-6 md:gap-8">
        {steps.map((step, index) => {
          const isOpen = openStep === index;
          return (
            <div
              key={step.number}
              className={`border border-[#191A23] rounded-[35px] sm:rounded-[45px] transition-all duration-300 shadow-positivus overflow-hidden ${
                isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
              }`}
            >
              {/* Header / Toggle Row */}
              <button
                onClick={() => toggleStep(index)}
                className="w-full p-6 sm:p-8 lg:p-10 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                  <span className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#191A23]">
                    {step.number}
                  </span>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#191A23]">
                    {step.title}
                  </span>
                </div>

                {/* Circular +/- button */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#191A23] bg-[#F3F3F3] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300">
                  <svg
                    className={`w-4 h-4 sm:w-6 sm:h-6 text-[#191A23] transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line
                      x1="12"
                      y1="5"
                      x2="12"
                      y2="19"
                      className={`transition-all duration-300 origin-center ${
                        isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                      }`}
                    />
                  </svg>
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`px-6 sm:px-8 lg:px-10 pb-8 sm:pb-10 lg:pb-12 transition-opacity duration-300 ${
                      isOpen ? "opacity-100 delay-100" : "opacity-0"
                    }`}
                  >
                    <div className="border-t border-[#191A23] pt-6 sm:pt-8">
                      <p className="text-sm sm:text-lg text-[#191A23] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

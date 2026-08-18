"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function ContactUs() {
  const [inquiryType, setInquiryType] = useState<"say-hi" | "get-quote">("say-hi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <SectionHeading
        badge="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <div className="bg-[#F3F3F3] rounded-[35px] sm:rounded-[45px] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Form Column */}
          <div className="lg:col-span-7 xl:col-span-6 z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Radio options */}
              <div className="flex items-center gap-8 mb-2">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="inquiryType"
                    checked={inquiryType === "say-hi"}
                    onChange={() => setInquiryType("say-hi")}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border border-[#191A23] bg-white flex items-center justify-center`}
                  >
                    {inquiryType === "say-hi" && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B9FF66]" />
                    )}
                  </div>
                  <span className="text-base sm:text-lg text-[#191A23]">Say Hi</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="inquiryType"
                    checked={inquiryType === "get-quote"}
                    onChange={() => setInquiryType("get-quote")}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border border-[#191A23] bg-white flex items-center justify-center`}
                  >
                    {inquiryType === "get-quote" && (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B9FF66]" />
                    )}
                  </div>
                  <span className="text-base sm:text-lg text-[#191A23]">
                    Get a Quote
                  </span>
                </label>
              </div>

              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-base text-[#191A23] font-normal"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#191A23] rounded-[14px] text-base text-[#191A23] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-base text-[#191A23] font-normal"
                >
                  Email*
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#191A23] rounded-[14px] text-base text-[#191A23] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-base text-[#191A23] font-normal"
                >
                  Message*
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white border border-[#191A23] rounded-[14px] text-base text-[#191A23] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#191A23] text-white rounded-[14px] text-lg font-normal hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-300 shadow-positivus-sm hover:shadow-none cursor-pointer"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-[#B9FF66] text-[#191A23] font-medium rounded-[14px] text-center animate-in fade-in">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Right Illustration (Desktop only, overflows gracefully) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-center items-center relative h-[450px]">
            <div className="absolute -right-24 xl:-right-12 w-[480px] h-[480px] pointer-events-none">
              <Image
                src="/assets/contact_us/Illustration.svg"
                alt="Contact illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  const navLinks = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="bg-[#191A23] rounded-t-[35px] sm:rounded-t-[45px] p-8 sm:p-12 lg:p-16 text-white">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 sm:pb-16 border-b border-white/20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <Image
                src="/assets/logo/light.svg"
                alt="Positivus Logo"
                width={28}
                height={28}
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Positivus
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-base sm:text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#B9FF66] hover:underline underline-offset-4 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Image
                src="/assets/social/Social icon.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Image
                src="/assets/social/Social icon-1.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Image
                src="/assets/social/Social icon-2.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        {/* Middle Section: Contact details and Newsletter */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <span className="bg-[#B9FF66] text-[#191A23] font-medium text-lg px-2 py-0.5 rounded-[7px] inline-block">
              Contact us:
            </span>
            <div className="flex flex-col gap-3 text-base sm:text-lg text-gray-200">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p className="max-w-[280px]">
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-[#292A32] rounded-[14px] p-6 sm:p-10">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <input
                type="email"
                required
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full sm:flex-1 px-6 py-4 bg-transparent border border-white/30 rounded-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-[#B9FF66]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#B9FF66] text-[#191A23] rounded-[14px] font-medium hover:bg-white transition-colors shrink-0 cursor-pointer"
              >
                Subscribe to news
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-sm text-[#B9FF66] text-center sm:text-left">
                Thank you for subscribing to our newsletter!
              </p>
            )}
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="lg:hidden flex items-center justify-center gap-6 py-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Image
              src="/assets/social/Social icon.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <Image
              src="/assets/social/Social icon-1.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Twitter"
          >
            <Image
              src="/assets/social/Social icon-2.svg"
              alt="Twitter"
              width={30}
              height={30}
            />
          </Link>
        </div>

        {/* Bottom Copyright & Privacy */}
        <div className="pt-8 sm:pt-10 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-gray-300">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link
            href="#privacy"
            className="hover:underline underline-offset-4 text-gray-300 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 sm:py-4"
          : "bg-white py-4 sm:py-6"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <Image
                src="/assets/logo/Dark.svg"
                alt="Positivus Logo"
                width={32}
                height={32}
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191A23]">
              Positivus
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#191A23] hover:text-black hover:underline underline-offset-8 transition-all font-normal"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-8 py-4 border border-[#191A23] rounded-[14px] font-normal text-[#191A23] hover:bg-[#191A23] hover:text-white transition-all duration-200"
            >
              Request a quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#191A23] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-6 bg-[#F3F3F3] border border-[#191A23] rounded-[24px] shadow-positivus animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-lg font-medium text-[#191A23] hover:bg-[#B9FF66] rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-3 px-6 bg-[#191A23] text-white rounded-[14px] font-medium text-center hover:bg-[#B9FF66] hover:text-black transition-colors"
              >
                Request a quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

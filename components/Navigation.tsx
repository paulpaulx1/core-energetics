"use client";

import React, { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation({ isHomePage = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm text-white">
      <div
        className={`max-w-7xl mx-auto px-6 py-6 flex items-center justify-between ${isHomePage ? styles.fadeIn : ""}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-amber-600/80 flex items-center justify-center">
            <span className="text-amber-600 font-serif text-lg">50</span>
          </div>
          <div className="text-sm">
            <div className="font-light tracking-wider">INSTITUTE OF</div>
            <div className="font-semibold tracking-wide">CORE ENERGETICS</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <a href="#what" className="hover:text-amber-600/80 transition-colors">
            What We Do
          </a>
          <a
            href="#training"
            className="hover:text-amber-600/80 transition-colors"
          >
            Training
          </a>
          <a
            href="#practitioners"
            className="hover:text-amber-600/80 transition-colors"
          >
            Find a Practitioner
          </a>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="hover:text-amber-600/80 transition-colors">
              About
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-black/80 backdrop-blur-md rounded-sm shadow-xl py-2">
                <a
                  href="#who-we-are"
                  className="block px-6 py-3 hover:bg-white/10 transition-colors uppercase text-xs tracking-wider"
                >
                  Who We Are
                </a>
                <a
                  href="#structure"
                  className="block px-6 py-3 hover:bg-white/10 transition-colors uppercase text-xs tracking-wider"
                >
                  Our Organizational Structure
                </a>
                <a
                  href="#founder"
                  className="block px-6 py-3 hover:bg-white/10 transition-colors uppercase text-xs tracking-wider"
                >
                  Our Founder
                </a>
                <a
                  href="#director"
                  className="block px-6 py-3 hover:bg-white/10 transition-colors uppercase text-xs tracking-wider"
                >
                  Message from the Executive Director
                </a>
                <a
                  href="#faculty"
                  className="block px-6 py-3 hover:bg-white/10 transition-colors uppercase text-xs tracking-wider"
                >
                  Meet the Faculty
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4 uppercase text-sm tracking-wider">
            <a
              href="#what"
              className="block py-2 hover:text-amber-600/80 transition-colors"
            >
              What We Do
            </a>
            <a
              href="#training"
              className="block py-2 hover:text-amber-600/80 transition-colors"
            >
              Training
            </a>
            <a
              href="#practitioners"
              className="block py-2 hover:text-amber-600/80 transition-colors"
            >
              Find a Practitioner
            </a>
            <div className="border-t border-white/20 pt-4 space-y-2">
              <div className="text-amber-600/80 text-xs font-semibold mb-2">
                About
              </div>
              <a
                href="#who-we-are"
                className="block py-2 pl-4 hover:text-amber-600/80 transition-colors text-xs"
              >
                Who We Are
              </a>
              <a
                href="#structure"
                className="block py-2 pl-4 hover:text-amber-600/80 transition-colors text-xs"
              >
                Our Organizational Structure
              </a>
              <a
                href="#founder"
                className="block py-2 pl-4 hover:text-amber-600/80 transition-colors text-xs"
              >
                Our Founder
              </a>
              <a
                href="#director"
                className="block py-2 pl-4 hover:text-amber-600/80 transition-colors text-xs"
              >
                Message from the Executive Director
              </a>
              <a
                href="#faculty"
                className="block py-2 pl-4 hover:text-amber-600/80 transition-colors text-xs"
              >
                Meet the Faculty
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

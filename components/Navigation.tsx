import React from "react";
import styles from "./Navigation.module.css";

export default function Navigation({ isHomePage = false }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
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
          <a
            href="#about"
            className="hover:text-amber-600/80 transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

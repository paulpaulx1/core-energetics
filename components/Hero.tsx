import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center ${styles.imageFadeIn}`}
        style={{
          backgroundImage: `url('/actualization_forest.jpg')`,
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className={`max-w-4xl mx-auto px-6 text-center ${styles.fadeIn}`}>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            The body holds what<br />the mind cannot process
          </h1>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed text-stone-200">
            Core Energetics is a body-centered psychotherapy that integrates 
            verbal therapy, breathwork, and physical expression to help you move 
            through trauma and reconnect with your authentic self.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#practitioners"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium tracking-wide transition-all hover:scale-105 active:scale-95"
            >
              Find a Practitioner
            </a>
            <a 
              href="#what"
              className="px-8 py-4 border-2 border-white/80 hover:bg-white/10 text-white font-medium tracking-wide transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Subtle credibility marker */}
          <p className="mt-16 text-sm text-stone-300 font-light tracking-wider">
            Celebrating 50 years of transformational practice
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
}
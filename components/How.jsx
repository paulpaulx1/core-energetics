"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Calendar,
  Users,
  User,
  Library,
  Heart,
} from "lucide-react";
import styles from "./How.module.css";

const cards = [
  {
    title: "Trainings",
    description: "Professional certification programs in Core Energetics",
    icon: GraduationCap,
    href: "#trainings",
  },
  {
    title: "Events",
    description: "Workshops, gatherings, and conferences",
    icon: Calendar,
    href: "#events",
  },
  {
    title: "Practitioners",
    description: "Find a certified therapist near you",
    icon: Users,
    href: "#practitioners",
  },
  {
    title: "Faculty",
    description: "Meet our teaching staff and trainers",
    icon: User,
    href: "#faculty",
  },
  {
    title: "Resources",
    description: "Articles, research, and learning materials",
    icon: Library,
    href: "#resources",
  },
  {
    title: "Give",
    description: "Support the Institute and our mission",
    icon: Heart,
    href: "#give",
  },
];

export default function How() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-stone-900 py-24 px-8 md:px-12 relative overflow-hidden"
    >
      {/* Optional background image with fade */}
      <div className="absolute inset-0 opacity-10">
        {/* Add background image here if desired */}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`font-serif text-5xl md:text-6xl text-stone-100 mb-16 text-center ${isVisible ? styles.fadeIn : ""}`}
        >
          Get Involved
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className={`group bg-stone-800/50 backdrop-blur-sm p-8 rounded-sm border border-stone-700/50 hover:border-amber-600/50 transition-all hover:bg-stone-800/70 cursor-pointer ${styles.card} ${isVisible ? styles.cardFadeIn : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon
                  className={`w-10 h-10 text-amber-600 mb-4 ${styles.icon}`}
                />
                <h3 className="text-xl font-semibold text-stone-100 mb-2 group-hover:text-amber-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

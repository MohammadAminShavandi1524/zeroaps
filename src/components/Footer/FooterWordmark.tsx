"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterWordmark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wordmark = wordmarkRef.current;

    if (!container || !wordmark) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.fromTo(
          wordmark,
          {
            y: -14,
          },
          {
            y: 14,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          },
        );
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-background relative w-full overflow-hidden select-none"
    >
      {/* Cropped wordmark stage */}
      <div className="relative mx-auto h-[clamp(58px,15vw,224px)] w-full max-w-[1600px] overflow-hidden">
        <div className="absolute inset-x-0 top-[-20px] mx-auto w-full max-w-[1400px] md:top-[-28px]">
          <svg
            ref={wordmarkRef}
            viewBox="0 0 1400 360"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none block h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="footerWordmarkFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#505054" />
                <stop offset="28%" stopColor="#3B3B3E" />
                <stop offset="65%" stopColor="#252527" />
                <stop offset="100%" stopColor="#111113" />
              </linearGradient>

              <linearGradient
                id="footerWordmarkStroke"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#A1A1AA" />
                <stop offset="38%" stopColor="#77777D" />
                <stop offset="75%" stopColor="#424246" />
                <stop offset="100%" stopColor="#242426" />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="300"
              textAnchor="middle"
              fontFamily="var(--font-geist), Arial, sans-serif"
              fontSize="285"
              fontWeight="900"
              letterSpacing="-0.055em"
              fill="url(#footerWordmarkFill)"
            >
              ZEROAPS
            </text>

            <text
              x="50%"
              y="300"
              textAnchor="middle"
              fontFamily="var(--font-geist), Arial, sans-serif"
              fontSize="285"
              fontWeight="900"
              letterSpacing="-0.055em"
              fill="none"
              stroke="url(#footerWordmarkStroke)"
              strokeWidth="1.4"
              strokeOpacity="0.8"
              strokeLinejoin="round"
            >
              ZEROAPS
            </text>
          </svg>
        </div>
      </div>

      {/* Foreground horizontal ledge */}
      <div className="relative z-10 h-8 w-full border-t border-white/10 bg-[linear-gradient(180deg,#181818_0%,#080808_45%,#000000_100%)]" />
    </div>
  );
}

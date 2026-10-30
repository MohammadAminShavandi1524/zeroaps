"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProcessArtwork from "./ProcessArtwork";
import type { ProcessStep } from "./Process";

gsap.registerPlugin(ScrollTrigger);

interface ProcessAccordionProps {
  steps: ProcessStep[];
}

const COLLAPSED_HEIGHT = 104;
const EXPANDED_HEIGHT = 370;

const STEP_DISTANCE = 340;
const ANIMATION_DISTANCE = 280;

export default function ProcessAccordion({ steps }: ProcessAccordionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const detailsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const cards = cardsRef.current.slice(0, steps.length);
    const details = detailsRef.current.slice(0, steps.length);

    if (cards.some((card) => !card) || details.some((detail) => !detail)) {
      return;
    }

    const cardElements = cards as HTMLElement[];
    const detailElements = details as HTMLDivElement[];

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const artworks = cardElements.map((card) =>
          card.querySelector<HTMLElement>("[data-process-artwork]"),
        );

        // Start with all cards collapsed.
        gsap.set(cardElements, {
          height: COLLAPSED_HEIGHT,
          overflow: "hidden",
        });

        gsap.set(detailElements, {
          autoAlpha: 0,
          y: 14,
        });

        gsap.set(
          artworks.filter(
            (artwork): artwork is HTMLElement => artwork !== null,
          ),
          {
            autoAlpha: 0,
          },
        );

        // Checkpoints do not move when card heights change.
        const checkpoints = steps.map((_, index) => {
          const marker = document.createElement("span");

          marker.setAttribute("aria-hidden", "true");

          Object.assign(marker.style, {
            position: "absolute",
            top: `${index * STEP_DISTANCE}px`,
            left: "0",
            width: "1px",
            height: "1px",
            visibility: "hidden",
            pointerEvents: "none",
          });

          container.appendChild(marker);

          return marker;
        });

        cardElements.forEach((card, index) => {
          const detail = detailElements[index];
          const artwork = artworks[index];

          const timeline = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: checkpoints[index],
              start: "top 76%",
              end: `+=${ANIMATION_DISTANCE}`,
              scrub: 0.85,
              invalidateOnRefresh: true,
            },
          });

          // Expand the card gradually.
          timeline.to(
            card,
            {
              height: EXPANDED_HEIGHT,
              duration: 1,
              ease: "none",
            },
            0,
          );

          // Reveal description.
          timeline.to(
            detail,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
            },
            0.2,
          );

          // Fade in the fixed-size artwork.
          if (artwork) {
            timeline.to(
              artwork,
              {
                autoAlpha: 1,
                duration: 0.8,
                ease: "power2.out",
              },
              0.15,
            );
          }
        });

        ScrollTrigger.refresh();

        return () => {
          checkpoints.forEach((marker) => marker.remove());
        };
      },
    );

    return () => {
      mm.revert();
    };
  }, [steps]);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-col gap-3">
        {steps.map((step, index) => (
          <article
            key={step.number}
            ref={(element) => {
              cardsRef.current[index] = element;
            }}
            className="relative isolate min-h-[170px] overflow-hidden rounded-[20px] border border-[#25252B] bg-[#060608] md:min-h-[104px] motion-reduce:md:min-h-[370px]"
          >
            {/* Fixed-size background artwork */}
            <ProcessArtwork index={index} />

            {/* Card content */}
            <div className="relative z-10 flex h-full flex-col px-6 py-6 sm:px-9 md:px-12">
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-primary font-sans text-[clamp(1.4rem,2.7vw,2.5rem)] leading-[1.15] font-normal tracking-[-0.035em]">
                  {step.title}
                </h3>

                <span className="text-secondary shrink-0 font-sans text-[18px] leading-[1.3] font-normal sm:text-[22px]">
                  {step.number}
                </span>
              </div>

              {/* Animated description */}
              <div
                ref={(element) => {
                  detailsRef.current[index] = element;
                }}
                className="mt-5 max-w-[550px] md:max-w-[56%] lg:max-w-[52%]"
              >
                <p className="text-[15px] leading-[1.65] font-normal text-[#E4E4E7] sm:text-[17px]">
                  {step.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

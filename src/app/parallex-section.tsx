"use client";

import { useEffect, useRef } from "react";

export default function ParallaxSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && sectionRef.current) {
        // Get the section's position relative to the viewport
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const windowHeight = window.innerHeight;

        // Calculate how far the section has entered the viewport
        // Value will be:
        // - positive when section is below viewport
        // - between 0 and -sectionHeight when section is in viewport
        // - less than -sectionHeight when section is above viewport
        const sectionVisibility = sectionTop;

        // Calculate the parallax effect only while section is in the viewport
        if (
          sectionVisibility < windowHeight &&
          sectionVisibility > -sectionHeight
        ) {
          // Calculate scroll progress through the section (0 at top, 1 at bottom)
          const scrollProgress =
            Math.abs(sectionVisibility - windowHeight) /
            (sectionHeight + windowHeight);

          // Calculate parallax offset (move up to 100px based on scroll progress)
          const parallaxOffset = scrollProgress * 100;

          // Apply the transform
          textRef.current.style.transform = `translateY(-${parallaxOffset}px)`;

          // Adjust opacity for fade effect
          const opacity = Math.max(1 - scrollProgress * 1.5, 0);
          textRef.current.style.opacity = opacity.toString();
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger once to set initial position
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        ref={textRef}
        className="transition-transform duration-300 ease-out will-change-transform"
      >
        <h1 className="text-white text-6xl md:text-8xl lg:text-[10rem] xl:text-[15rem] font-extrabold tracking-tighter leading-none">
          01 OF US
        </h1>
      </div>

      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-[10rem] border-neutral-800 rounded-full scale-150 translate-x-[-25%] translate-y-[-25%]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full border-[10rem] border-neutral-800 rounded-full scale-150 translate-x-[25%] translate-y-[25%]"></div>
      </div>
    </div>
  );
}

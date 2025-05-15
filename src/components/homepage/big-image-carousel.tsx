"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

export default function BigImageCarousel() {
  const [, setIsPaused] = useState(false);
  const autoplayRef = useRef<AutoplayType | null>(null);

  const images = [
    {
      src: "/img/homepage/main-bg-1.png",
      alt: "Artist 1",
      title: "Creative Vision",
      description: "Exploring new artistic horizons",
    },
    {
      src: "/img/homepage/main-bg-2.jpg",
      alt: "main-bg 2",
      title: "Urban Expression",
      description: "The beauty of city landscapes",
    },
    {
      src: "/img/homepage/main-bg-3.jpg",
      alt: "main-bg 3",
      title: "Natural Wonder",
      description: "Capturing earth's raw beauty",
    },
    {
      src: "/img/homepage/main-bg-4.jpg",
      alt: "main-bg 4",
      title: "Abstract Thoughts",
      description: "Beyond conventional perspectives",
    },
  ];

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoplayRef.current) {
      autoplayRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (autoplayRef.current) {
      autoplayRef.current.play();
    }
  };

  return (
    <section className="bg-black relative border-zinc-800 overflow-hidden h-[738px]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-4 basis-full">
              <div className="relative aspect-[26/10] overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

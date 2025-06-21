"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

export default function AboutUsCarousel() {
  const [, setIsPaused] = useState(false);
  const autoplayRef = useRef<AutoplayType | null>(null);

  const images = [
    {
      src: "/img/about-us/team-1.png",
      alt: "Team 1",
      title: "SOFTBALL 2021",
      description: "Exploring new artistic horizons",
    },
    {
      src: "/img/about-us/team-2.png",
      alt: "Team 2",
      title: "POWPU GRZ 2022",
      description: "The beauty of city landscapes",
    },
    {
      src: "/img/about-us/team-3.png",
      alt: "Team 3",
      title: "BISS4TECH 2024",
      description: "Capturing earth's raw beauty",
    },
    {
      src: "/img/about-us/team-4.png",
      alt: "Team 4",
      title: "RAI EDU 2023",
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
    <section className="bg-black relative border-zinc-800 overflow-hidden py-8">
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
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/4"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="font-degular bg-black p-4">
                <p className="text-white/80 text-sm uppercase">{image.title}</p>
                {/* <h3 className="text-white font-bold text-lg">{image.title}</h3> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

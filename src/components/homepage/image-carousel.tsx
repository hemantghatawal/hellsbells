"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

export default function ImageCarousel() {
  const [, setIsPaused] = useState(false);
  const autoplayRef = useRef<AutoplayType | null>(null);

  const images = [
    {
      src: "/img/homepage/artist-1.png",
      alt: "Artist 1",
      title: "Creative Vision",
      description: "Exploring new artistic horizons",
    },
    {
      src: "/img/homepage/artist-2.jpg",
      alt: "Artist 2",
      title: "Urban Expression",
      description: "The beauty of city landscapes",
    },
    {
      src: "/img/homepage/artist-3.jpg",
      alt: "Artist 3",
      title: "Natural Wonder",
      description: "Capturing earth's raw beauty",
    },
    {
      src: "/img/homepage/artist-4.png",
      alt: "Artist 4",
      title: "Abstract Thoughts",
      description: "Beyond conventional perspectives",
    },
    {
      src: "/img/demo.jpg",
      alt: "Artist 4",
      title: "The Hind Ka Sitara",
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
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className=" font-degular absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

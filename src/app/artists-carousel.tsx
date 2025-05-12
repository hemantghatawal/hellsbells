"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

// Artist data
const artists = [
  {
    id: 1,
    name: "Aria",
    role: "Vocalist",
    image: "/images/artist1.jpg",
  },
  {
    id: 2,
    name: "Luna",
    role: "Performer",
    image: "/images/artist2.jpg",
  },
  {
    id: 3,
    name: "Marcus",
    role: "Producer",
    image: "/images/artist3.jpg",
  },
  {
    id: 4,
    name: "Zoe",
    role: "Songwriter",
    image: "/images/artist4.jpg",
  },
]

export default function ArtistsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimation()
  const carouselRef = useRef<HTMLDivElement>(null)

  // Start the infinite carousel animation
  useEffect(() => {
    const startAnimation = async () => {
      if (isPaused) return

      await controls.start({
        x: "-100%",
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      })
    }

    startAnimation()

    return () => {
      controls.stop()
    }
  }, [controls, isPaused])

  // Handle hover on an artist
  const handleHover = (index: number | null) => {
    if (index !== null) {
      setIsPaused(true)
      controls.stop()
    } else {
      setIsPaused(false)
      controls.start({
        x: "-100%",
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      })
    }

    setHoveredIndex(index)
  }

  // Double the artists array to create a seamless loop
  const duplicatedArtists = [...artists, ...artists]

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        ref={carouselRef}
        className="flex h-full"
        animate={controls}
        style={{ width: `${artists.length * 200}%` }}
      >
        {duplicatedArtists.map((artist, index) => (
          <div
            key={`${artist.id}-${index}`}
            className="relative h-full"
            style={{ width: `${100 / duplicatedArtists.length}%` }}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />

              {/* Overlay with text that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p className="text-gray-300">{artist.role}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

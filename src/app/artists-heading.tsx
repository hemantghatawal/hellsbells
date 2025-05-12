"use client"

import { useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function ArtistsHeading() {
  const [isHoveringStart, setIsHoveringStart] = useState(false)
  const [isHoveringEnd, setIsHoveringEnd] = useState(false)

  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  // Update x value based on hover state
  if (isHoveringStart) {
    x.set(50)
  } else if (isHoveringEnd) {
    x.set(-50)
  } else {
    x.set(0)
  }

  return (
    <div className="overflow-hidden py-4">
      <motion.h1
        className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter whitespace-nowrap"
        style={{ x: springX }}
      >
        <span
          className="inline-block cursor-pointer relative"
          onMouseEnter={() => setIsHoveringStart(true)}
          onMouseLeave={() => setIsHoveringStart(false)}
        >
          ARTISTS
        </span>
        <span className="mx-2 md:mx-4">/</span>
        <span
          className="inline-block cursor-pointer relative"
          onMouseEnter={() => setIsHoveringEnd(true)}
          onMouseLeave={() => setIsHoveringEnd(false)}
        >
          CREATORS
        </span>
      </motion.h1>
    </div>
  )
}

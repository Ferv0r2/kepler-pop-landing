"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  size: "sm" | "md" | "lg"
  top: string
  left: string
  delay: number
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const starCount = Math.floor(window.innerWidth / 15)
    const newStars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: ["sm", "md", "lg"][Math.floor(Math.random() * 3)] as "sm" | "md" | "lg",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
      })
    }

    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star-${star.size} animate-twinkle`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  )
}

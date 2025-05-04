"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  className?: string
}

export default function TestimonialCard({ quote, author, rating, className }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 15
      const rotateY = (centerX - x) / 15

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "flex flex-col p-6 rounded-3xl border bg-card shadow-lg kawaii-corners relative overflow-hidden",
        className,
      )}
      style={{ transition: "transform 0.3s ease" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/5 via-transparent to-kawaii-planet/5 pointer-events-none"></div>

      <div className="flex mb-4 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={i < rating ? "text-kawaii-orbit" : "text-muted-foreground"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <blockquote className="text-lg italic mb-4 relative z-10">"{quote}"</blockquote>
      <p className="text-sm font-medium mt-auto relative z-10 font-game">- {author}</p>

      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-kawaii-sprout/5 rounded-full blur-xl"></div>
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-kawaii-planet/5 rounded-full blur-xl"></div>
    </div>
  )
}

"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
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

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

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
        "flex flex-col items-center text-center p-6 rounded-3xl border bg-card shadow-lg transition-all duration-300 hover:shadow-xl kawaii-corners",
        "relative overflow-hidden",
        className,
      )}
      style={{ transition: "transform 0.3s ease" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/5 via-transparent to-kawaii-planet/5 pointer-events-none"></div>
      <div className="mb-4 rounded-full bg-kawaii-sprout/10 p-3 relative z-10">{icon}</div>
      <h3 className="text-xl font-bold mb-2 font-game relative z-10">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>

      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-kawaii-sprout/5 rounded-full blur-xl"></div>
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-kawaii-planet/5 rounded-full blur-xl"></div>
    </div>
  )
}

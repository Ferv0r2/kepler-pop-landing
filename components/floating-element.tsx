import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  speed?: "slow" | "medium" | "fast"
  delay?: number
}

export default function FloatingElement({ children, className, speed = "medium", delay = 0 }: FloatingElementProps) {
  const speedClass = {
    slow: "animate-[floating_5s_ease-in-out_infinite]",
    medium: "animate-[floating_3s_ease-in-out_infinite]",
    fast: "animate-[floating_2s_ease-in-out_infinite]",
  }

  return (
    <div className={cn("gsap-float", speedClass[speed], className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

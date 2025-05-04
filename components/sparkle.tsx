import { cn } from "@/lib/utils"

interface SparkleProps {
  className?: string
  size?: "sm" | "md" | "lg"
  delay?: number
}

export default function Sparkle({ className, size = "md", delay = 0 }: SparkleProps) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <div className={cn("sparkle", sizeClasses[size], className)} style={{ animationDelay: `${delay}s` }}>
      ✦
    </div>
  )
}

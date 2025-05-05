import { cn } from "@/lib/utils"

interface SpaceSproutProps {
  className?: string
  size?: "sm" | "md" | "lg"
  withPot?: boolean
  withOrbit?: boolean
  animated?: boolean
}

export default function SpaceSprout({
  className,
  size = "md",
  withPot = true,
  withOrbit = false,
  animated = true,
}: SpaceSproutProps) {
  const sizeClasses = {
    sm: "scale-50",
    md: "scale-75",
    lg: "scale-100",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn("space-sprout", sizeClasses[size], animated && "animate-bounce-slight")}>
      {withOrbit && <div className="orbit-ring animate-orbit-reverse"/>}
        <div className="space-sprout-body">
          <div className="space-sprout-eye space-sprout-eye-left"></div>
          <div className="space-sprout-eye space-sprout-eye-right"></div>
          <div className="space-sprout-mouth"></div>
          <div className="space-sprout-leaf space-sprout-leaf-left"></div>
          <div className="space-sprout-leaf space-sprout-leaf-right"></div>
        </div>
      </div>
      {withPot && <div className="flower-pot"></div>}
    </div>
  )
}

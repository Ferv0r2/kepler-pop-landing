import { cn } from "@/lib/utils"

interface KawaiiPlanetProps {
  className?: string
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

export default function KawaiiPlanet({ className, size = "md", animated = true }: KawaiiPlanetProps) {
  const sizeClasses = {
    sm: "scale-50",
    md: "scale-75",
    lg: "scale-100",
  }

  return (
    <div className={cn("kawaii-planet", sizeClasses[size], animated && "animate-float", className)}>
      <div className="kawaii-planet-eye kawaii-planet-eye-left"></div>
      <div className="kawaii-planet-eye kawaii-planet-eye-right"></div>
      <div className="kawaii-planet-mouth"></div>
      <div className="kawaii-planet-crater" style={{ top: "30%", left: "20%" }}></div>
      <div className="kawaii-planet-crater" style={{ top: "60%", right: "25%" }}></div>
      <div className="kawaii-planet-crater" style={{ bottom: "20%", left: "40%" }}></div>
    </div>
  )
}

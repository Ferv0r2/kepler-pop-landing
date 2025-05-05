import { cn } from "@/lib/utils"
import Image from "next/image"

export type PlantType = "sprout" | "cactus" | "tulip" | "sunflower" | "crystal"

interface PlantCharacterProps {
  type: PlantType
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  withPot?: boolean
  withOrbit?: boolean
  animated?: boolean
  emotion?: "happy" | "sad" | "surprised" | "sleeping"
}

export default function PlantCharacter({
  type = "sprout",
  className,
  size = "md",
  withPot = true,
  withOrbit = false,
  animated = true,
  emotion = "happy",
}: PlantCharacterProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  const getCharacterImage = () => {
    switch (type) {
      case "cactus":
        return "/images/plants/cactus.png"
      case "sunflower":
        return "/images/plants/sunflower.png"
      case "tulip":
        return "/images/plants/tulip.png"
      case "crystal":
        return "/images/plants/crystal-cactus.png"
      case "sprout":
      default:
        return "/images/plants/sprout.png"
    }
  }

  const getGlowColor = () => {
    switch (type) {
      case "cactus":
        return "from-cyan-500/30 to-transparent"
      case "sunflower":
        return "from-yellow-500/30 to-transparent"
      case "tulip":
        return "from-red-500/30 to-transparent"
      case "crystal":
        return "from-teal-500/30 to-transparent"
      case "sprout":
      default:
        return "from-green-500/30 to-transparent"
    }
  }

  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      {withOrbit && (
      <div
        className={cn(
          "orbit-ring",
          animated && "animate-orbit-reverse",
          type === "sunflower" ? "border-yellow-400" : "border-[#f59e0b]",
        )}
      />
      )}
      <div className={cn("relative", sizeClasses[size], animated && "animate-bounce-slight")}>
        {/* Character glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-radial",
            getGlowColor(),
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          )}
        />

        {/* Character image */}
        <Image
          src={getCharacterImage() || "/placeholder.svg"}
          alt={`${type} character`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

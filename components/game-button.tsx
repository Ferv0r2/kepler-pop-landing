"use client"

import type React from "react"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  withSound?: boolean
  className?: string
}

export default function GameButton({
  children,
  variant = "primary",
  size = "md",
  withSound = true,
  className,
  ...props
}: GameButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (withSound) {
      // Play button sound effect
      const audio = new Audio("/button-click.mp3")
      audio.volume = 0.2
      audio.play().catch(() => {})
    }

    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <button
      className={cn(
        "relative overflow-hidden font-game transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg kawaii-corners",
        {
          "bg-kawaii-sprout hover:bg-kawaii-sproutDark text-white": variant === "primary",
          "bg-kawaii-orbit hover:bg-kawaii-orbitGlow text-background": variant === "secondary",
          "bg-kawaii-planet hover:bg-kawaii-planetDark text-white": variant === "accent",
          "px-3 py-1 text-xs": size === "sm",
          "px-5 py-2 text-sm": size === "md",
          "px-8 py-3 text-base": size === "lg",
        },
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}

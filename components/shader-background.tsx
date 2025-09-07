"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Mobile background - Hai image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url(/images/hai-background.jpeg)",
        }}
      />

      {/* Desktop background - Haigentic image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url(/images/haigentic-background.jpeg)",
        }}
      />

      {children}
    </div>
  )
}

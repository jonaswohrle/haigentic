"use client"

import type React from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="h-screen relative overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000047569-S02CRluCkpcBpNBrEkFAPrcZ0IDGWX.mp4" type="video/mp4" />
      </video>

      {children}
    </div>
  )
}

"use client"

import type React from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="h-screen min-h-screen relative overflow-hidden">
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000047569-S02CRluCkpcBpNBrEkFAPrcZ0IDGWX.mp4" type="video/mp4" />
      </video>

      <div
        className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/hai-mobile-background.jpeg')",
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

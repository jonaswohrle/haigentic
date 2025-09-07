"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import ChallengeSection from "@/components/challenge-section"
import ShiftSection from "@/components/shift-section"
import PhilosophySection from "@/components/philosophy-section"
import ApproachSection from "@/components/approach-section"

export default function ShaderShowcase() {
  return (
    <div className="min-h-screen">
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>

      <div className="bg-black">
        <ChallengeSection />
        <ShiftSection />
        <PhilosophySection />
        <ApproachSection />
      </div>
    </div>
  )
}

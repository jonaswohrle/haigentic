"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function PulsingCircle() {
  return (
    <div className="absolute bottom-8 right-4 md:right-8 z-30">
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        {/* Pulsing Border Circle */}
        <PulsingBorder
          colors={["#40e0d0", "#20b2aa", "#ff7f50", "#ff6347", "#ffa07a", "#f5f5dc", "#5f9ea0"]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spotsPerColor={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: window.innerWidth < 768 ? "48px" : "60px",
            height: window.innerWidth < 768 ? "48px" : "60px",
            borderRadius: "50%",
          }}
        />

        {/* Rotating Text Around the Pulsing Border */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="text-sm fill-white/80 instrument">
            <textPath href="#circle" startOffset="0%">
              AI thinking • processing • executing • AI thinking • processing • executing •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}

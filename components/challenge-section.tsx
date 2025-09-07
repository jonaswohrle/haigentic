"use client"

export default function ChallengeSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-slate-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/40 to-teal-500/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/40 to-coral-500/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-5 py-3 rounded-full bg-white/90 backdrop-blur-md">
                <span className="text-[#666666] text-sm font-semibold tracking-wide uppercase">The Challenge</span>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#111111] leading-[0.9] font-serif tracking-tight heading-section">
                  <span className="font-medium italic text-[#111111] heading-italic-emphasis">Humans</span> Don't Scale
                </h2>

                <div className="space-y-6">
                  <p className="text-xl text-[#111111] leading-relaxed font-sans font-light">
                    Scaling GTM with people is{" "}
                    <span className="font-medium text-[#111111]">slow, expensive, and error-prone</span>. In the age of
                    AI, why are we still betting everything on human capacity?
                  </p>

                  <p className="text-lg text-[#111111] leading-relaxed font-sans">
                    Human capacity defines revenue capacity — and that's the{" "}
                    <span className="font-semibold text-[#111111]">bottleneck killing your growth</span>.
                  </p>

                  <p className="text-lg font-medium text-[#111111] leading-relaxed font-sans">
                    You need AI systems that learn from every interaction, intelligent processes that improve with
                    scale, <span className="font-medium italic text-[#111111]">technology</span> that compounds.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Concentric circle image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nis5yQ4Tu7ljltzkEhwPEe1eVBtF43.png"
                  alt="Concentric circles representing human scaling limitations"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

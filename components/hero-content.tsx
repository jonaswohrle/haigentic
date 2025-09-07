"use client"

export default function HeroContent() {
  return (
    <main className="absolute inset-0 flex items-end justify-start z-20 px-8 pb-16">
      <div className="text-left max-w-lg">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm mb-4 border border-white/20">
          <span className="text-white text-sm font-medium">✨ AI powered GTM</span>
        </div>

        <h1 className="heading-hero-light mb-4">
          <span className="heading-italic-emphasis-light">Intelligent</span> AI
          <br />
          Workforce
        </h1>

        {/* Description */}
        <p className="text-base text-white/80 leading-relaxed max-w-md">
          Supercharge your GTM team with AI and increase GTM efficiency
        </p>
      </div>
    </main>
  )
}

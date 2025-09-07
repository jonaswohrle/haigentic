"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-4 md:left-8 z-20 max-w-xs md:max-w-lg pr-24 md:pr-0">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm mb-4 relative border border-white/10"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white text-xs font-light relative z-10">✨ AI powered GTM </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">Intelligent</span> AI
          <br />
          <span className="font-light tracking-tight text-white">Workforce</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Supercharge you GTM team with AI and increase GTM efficiency
        </p>

        {/* Buttons */}
      </div>
    </main>
  )
}

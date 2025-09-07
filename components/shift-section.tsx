"use client"

export default function ShiftSection() {
  const cards = [
    {
      title: (
        <>
          Agentic
          <br />
          Workflows
        </>
      ),
      description:
        "Every workflow rebuilt from first principles — what can AI handle autonomously, where does human judgment add value, and how do they seamlessly interact.",
      image: "/placeholder-6e8ze.png",
    },
    {
      title: (
        <>
          Token-Based
          <br />
          Scaling
        </>
      ),
      description:
        "Your growth is no longer constrained by hiring speed or human capacity. Scale is a function of tokens and compute power — instant, predictable, and linear in cost.",
      image: "/placeholder-l6r01.png",
    },
    {
      title: (
        <>
          Deterministic
          <br />
          Execution
        </>
      ),
      description:
        "Remove the randomness of human performance. Every interaction follows optimized patterns, every output meets quality thresholds, every process runs exactly as designed.",
      image: "/placeholder-e86ev.png",
    },
    {
      title: (
        <>
          Adaptive
          <br />
          Intelligence
        </>
      ),
      description:
        "Your GTM engine doesn't just execute — it learns. Every conversation refines the model, every outcome improves the process, every pattern strengthens the system.",
      image: "/placeholder-b5lpg.png",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-slate-50">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              {/* Removed the decorative line above the badge */}
              <span className="text-slate-800 text-sm font-light">The AI Age</span>
            </div>
            <h2 className="heading-section mb-6">
              AI-Powered <span className="heading-italic-emphasis">GTM Intelligence</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We transform your GTM from labor-intensive to intelligence-driven. Where human capacity once defined
              revenue limits, we build systems that scale with data and learning, not headcount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/70 border border-white/30"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-serif">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-slate-700 leading-relaxed">
                Transform unpredictable human workflows into intelligent AI systems that scale with data and learning,
                not complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

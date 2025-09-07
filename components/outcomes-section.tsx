"use client"

export default function OutcomesSection() {
  return (
    <section className="relative z-10 px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm mb-6 border border-white/10">
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white text-sm font-light">Customer Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            <span className="font-medium italic instrument">Factory</span> Output
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            The results speak for themselves. Here's what happens when you industrialize your go-to-market operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Consistent Quality</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Every research brief, outreach message, and engagement follows proven patterns. No more variability
                based on who's handling the account.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Faster Throughput</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Process 10x more prospects with the same team size. What used to take hours now happens in minutes, with
                better results.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Lower Costs</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">💰</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Reduce cost per lead by 70%+ while improving quality. Scale revenue without proportional increases in
                headcount.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Hidden Opportunities</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔍</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                AI uncovers patterns and opportunities that humans miss. Surface new market segments, timing signals,
                and growth vectors.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Evolving Engine</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📈</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Your GTM machine gets smarter over time. Every interaction feeds back into the system, continuously
                improving performance.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Competitive Moat</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🏰</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                While competitors rely on manual processes, you operate with industrial efficiency. The gap widens with
                every interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 relative">
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <h3 className="text-3xl font-light text-white mb-6">
              Ready to <span className="font-medium italic instrument">industrialize</span> your GTM?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the companies that have transformed their go-to-market from manual craftsmanship to automated
              precision.
            </p>
            <button className="bg-gradient-to-r from-violet-500 to-violet-600 text-white px-8 py-3 rounded-xl font-medium hover:from-violet-600 hover:to-violet-700 transition-all duration-200">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

export default function ApproachSection() {
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30 shadow-lg">
              <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
              <span className="text-slate-800 text-sm font-light">Our Approach</span>
            </div>
            <h2 className="heading-section">
              <span className="heading-italic-emphasis">AI</span> Transformation
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to transforming your GTM operations with intelligent automation and AI-powered
              workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900">Discovery</h3>
              </div>
              <h4 className="text-lg font-medium text-slate-900 mb-3">System Analysis</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                We analyze your current GTM processes, identify optimization opportunities, and design the optimal AI
                integration strategy for your specific business.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Process audit & mapping</li>
                <li>• Data architecture assessment</li>
                <li>• AI enhancement opportunity identification</li>
                <li>• ROI modeling & prioritization</li>
              </ul>
            </div>

            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900">Pilot</h3>
              </div>
              <h4 className="text-lg font-medium text-slate-900 mb-3">Initial Implementation</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                We start with your highest-impact use case, deploy the initial AI solution, and demonstrate ROI before
                expanding to other processes.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• MVP AI solution deployment</li>
                <li>• Data integration & cleansing</li>
                <li>• AI agent training & testing</li>
                <li>• Performance measurement setup</li>
              </ul>
            </div>

            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900">Scale</h3>
              </div>
              <h4 className="text-lg font-medium text-slate-900 mb-3">Full Deployment</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                With proven results, we systematically enhance additional processes, creating an integrated AI-powered
                GTM system that scales with your growth.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Full AI enhancement rollout</li>
                <li>• Advanced AI agent deployment</li>
                <li>• Cross-functional integration</li>
                <li>• Continuous optimization & monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

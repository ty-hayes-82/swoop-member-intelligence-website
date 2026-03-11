'use client'
import { useState } from 'react'
import { PRO_ANNUAL_COST } from '@/lib/pricing'

export default function RoiCalculator() {
  const [members, setMembers] = useState(300)
  const [dues, setDues] = useState(8000)
  const [churn, setChurn] = useState(5)

  const atRisk = Math.round(members * (churn / 100))
  const annualLoss = atRisk * dues
  const swoopSaves = Math.round(atRisk * 0.65)
  const recovered = swoopSaves * dues
  const swoopProCost = PRO_ANNUAL_COST // $499/mo × 12
  const netGain = recovered - swoopProCost
  const roiMultiple = recovered > 0 ? Math.round(recovered / swoopProCost) : 0

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

  const adjustMembers = (delta) => setMembers((prev) => clamp(prev + delta, 100, 800))
  const adjustDues = (delta) => setDues((prev) => clamp(prev + delta, 2000, 25000))
  const adjustChurn = (delta) => setChurn((prev) => clamp(prev + delta, 1, 15))

  return (
    <section className="bg-swoop-dark py-20 px-6">
      <div className="max-w-container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What is churn costing your club?</h2>
        <p className="text-white/70 text-center text-sm max-w-2xl mx-auto">Typical clubs in private beta recover <strong className="text-swoop-green">\$150K-\$300K</strong> in annual dues with Swoop. Use the calculator below to estimate your club's exposure and potential recovery.</p>
        <p className="text-white/60 text-center mb-12">Adjust the sliders to see your club&apos;s exposure — and what Swoop recovers.</p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <label className="flex justify-between text-sm text-white/70 mb-2">
                <span>Total Members</span>
                <span className="font-mono text-swoop-green">{members}</span>
              </label>
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Decrease members" onClick={() => adjustMembers(-50)} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 text-sm min-w-[44px]">−</button>
                <input type="range" min={100} max={800} value={members} onChange={(e) => setMembers(+e.target.value)}
                  className="w-full accent-swoop-green h-3" />
                <button type="button" aria-label="Increase members" onClick={() => adjustMembers(50)} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 text-sm min-w-[44px]">+</button>
              </div>
            </div>
            <div>
              <label className="flex justify-between text-sm text-white/70 mb-2">
                <span>Avg Annual Dues</span>
                <span className="font-mono text-swoop-green">${dues.toLocaleString()}</span>
              </label>
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Decrease dues" onClick={() => adjustDues(-500)} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 text-sm min-w-[44px]">−</button>
                <input type="range" min={2000} max={25000} step={500} value={dues} onChange={(e) => setDues(+e.target.value)}
                  className="w-full accent-swoop-green h-3" />
                <button type="button" aria-label="Increase dues" onClick={() => adjustDues(500)} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 text-sm min-w-[44px]">+</button>
              </div>
            </div>
            <div>
              <label className="flex justify-between text-sm text-white/70 mb-2">
                <span>Annual Churn Rate</span>
                <span className="font-mono text-swoop-green">{churn}%</span>
              </label>
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Decrease churn rate" onClick={() => adjustChurn(-1)} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 text-sm min-w-[44px]">−</button>
                <input type="range" min={1} max={15} value={churn} onChange={(e) => setChurn(+e.target.value)}
                  className="w-full accent-swoop-green h-3" />
                <button type="button" aria-label="Increase churn rate" onClick={() => adjustChurn(1)} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 text-sm min-w-[44px]">+</button>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-8 space-y-6 border border-white/10">
            <div>
              <p className="text-white/50 text-sm mb-2">Members at risk annually</p>
              <p className="font-mono text-4xl font-bold text-red-400">{atRisk}</p>
              {/* Visual bar showing percentage */}
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-400 rounded-full transition-all duration-500"
                  style={{ width: `${(atRisk / members) * 100}%` }}
                />
              </div>
              <p className="text-white/40 text-xs mt-1">{churn}% of total membership</p>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-2">Annual revenue at risk</p>
              <p className="font-mono text-4xl font-bold text-red-400">${annualLoss.toLocaleString()}</p>
              {/* Visual comparison bar */}
              <div className="mt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="text-white/40 text-xs w-16">At risk</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm mb-2">Swoop projected saves (65% retention)</p>
              <p className="font-mono text-4xl font-bold text-swoop-green">{swoopSaves} members</p>
              {/* Comparison bar */}
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400/50 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="text-white/40 text-xs w-20">{atRisk} at risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-swoop-green rounded-full transition-all duration-500"
                      style={{ width: `${(swoopSaves / atRisk) * 100}%` }}
                    />
                  </div>
                  <span className="text-swoop-green text-xs w-20 font-semibold">{swoopSaves} saved</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-2">Revenue recovered with Swoop</p>
              <p className="font-mono text-5xl font-bold text-swoop-green">${recovered.toLocaleString()}</p>
              {/* Visual indicator of recovery percentage */}
              <div className="mt-3 h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-swoop-green to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${(recovered / annualLoss) * 100}%` }}
                />
              </div>
              <p className="text-swoop-green/80 text-xs mt-1 font-semibold">
                {Math.round((recovered / annualLoss) * 100)}% of at-risk revenue recovered
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-swoop-green/30 bg-swoop-green/10 rounded-lg p-4 -mx-4">
              <p className="text-white/50 text-sm">Swoop Pro annual cost</p>
              <p className="font-mono text-2xl font-bold text-white/80">-${swoopProCost.toLocaleString()}</p>
              <p className="text-white/50 text-sm mt-3">Net revenue gain</p>
              <p className="font-mono text-5xl font-bold text-swoop-green">${netGain.toLocaleString()}</p>
              <p className="text-swoop-green/80 text-sm mt-2 font-semibold">{roiMultiple}× return on investment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { useState } from 'react'

export default function RoiCalculator() {
  const [members, setMembers] = useState(300)
  const [dues, setDues] = useState(8000)
  const [churn, setChurn] = useState(5)

  const atRisk = Math.round(members * (churn / 100))
  const annualLoss = atRisk * dues
  const swoopSaves = Math.round(atRisk * 0.65)
  const recovered = swoopSaves * dues
  const swoopProCost = 5988 // $499/mo × 12
  const netGain = recovered - swoopProCost
  const roiMultiple = recovered > 0 ? Math.round(recovered / swoopProCost) : 0

  return (
    <section className="bg-swoop-dark py-20 px-6">
      <div className="max-w-container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What is churn costing your club?</h2>
        <p className="text-white/60 text-center mb-12">Adjust the sliders to see your club&apos;s exposure — and what Swoop recovers.</p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <label className="flex justify-between text-sm text-white/70 mb-2">
                <span>Total Members</span>
                <span className="font-mono text-swoop-green">{members}</span>
              </label>
              <input type="range" min={100} max={800} value={members} onChange={(e) => setMembers(+e.target.value)}
                className="w-full accent-swoop-green" />
            </div>
            <div>
              <label className="flex justify-between text-sm text-white/70 mb-2">
                <span>Avg Annual Dues</span>
                <span className="font-mono text-swoop-green">${dues.toLocaleString()}</span>
              </label>
              <input type="range" min={2000} max={25000} step={500} value={dues} onChange={(e) => setDues(+e.target.value)}
                className="w-full accent-swoop-green" />
            </div>
            <div>
              <label className="flex justify-between text-sm text-white/70 mb-2">
                <span>Annual Churn Rate</span>
                <span className="font-mono text-swoop-green">{churn}%</span>
              </label>
              <input type="range" min={1} max={15} value={churn} onChange={(e) => setChurn(+e.target.value)}
                className="w-full accent-swoop-green" />
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-8 space-y-6">
            <div>
              <p className="text-white/50 text-sm">Members at risk annually</p>
              <p className="font-mono text-4xl font-bold text-red-400">{atRisk}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Annual revenue at risk</p>
              <p className="font-mono text-4xl font-bold text-red-400">${annualLoss.toLocaleString()}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm">Swoop projected saves (65% retention)</p>
              <p className="font-mono text-4xl font-bold text-swoop-green">{swoopSaves} members</p>
            </div>
            <div>
              <p className="text-white/50 text-sm">Revenue recovered with Swoop</p>
              <p className="font-mono text-5xl font-bold text-swoop-green">${recovered.toLocaleString()}</p>
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

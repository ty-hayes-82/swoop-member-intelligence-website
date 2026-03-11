'use client'

const steps = [
  {
    icon: '\u26F3',
    label: 'Slow Pace',
    detail: 'Hole 9 backup adds 22 min',
    loss: null,
  },
  {
    icon: '\uD83C\uDF7D\uFE0F',
    label: 'Skipped Dining',
    detail: 'Golfer leaves instead of eating',
    loss: '$47 dinner + $12 bar',
  },
  {
    icon: '\uD83D\uDC64',
    label: 'Server Idle',
    detail: 'Cover gap cascades to labor',
    loss: '$18 labor waste',
  },
  {
    icon: '\uD83D\uDCC9',
    label: 'Margin Drop',
    detail: 'F&B contribution falls',
    loss: '$77 total per round',
  },
]

export default function RevenueChain() {
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-wider text-swoop-accent mb-1">The Revenue Chain</p>
      <p className="text-lg font-bold text-swoop-dark mb-2">A bad hole-9 experience costs you a dinner, a bar tab, and a server hour.</p>
      <p className="text-sm text-swoop-muted mb-6">No single system sees this chain. Your tee sheet sees pace. Your POS sees covers. Your scheduler sees labor. Only Swoop connects them.</p>
      <div className="flex flex-col md:flex-row items-stretch gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex md:flex-col items-center md:items-stretch flex-1">
            <div className="flex flex-col items-center text-center px-3 py-4 flex-1">
              <span className="text-2xl mb-2">{step.icon}</span>
              <span className="text-sm font-bold text-swoop-dark">{step.label}</span>
              <span className="text-xs text-swoop-muted mt-1">{step.detail}</span>
              {step.loss && (
                <span className="mt-2 text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                  {step.loss}
                </span>
              )}
            </div>
            {i < steps.length - 1 && (
              <span className="hidden md:block text-swoop-muted/40 text-2xl self-center px-1">{'\u2192'}</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-swoop-muted/60 text-center">Multiply by 15 slow rounds per week = $1,155 in invisible weekly revenue loss.</p>
    </div>
  )
}

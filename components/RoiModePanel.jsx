'use client'

import { useMemo, useState } from 'react'
import { RetentionValueCalculator, PostRoundConversionMock } from '@/components/CapabilityMocks'

export default function RoiModePanel() {
  const [mode, setMode] = useState('save')

  const model = useMemo(() => {
    if (mode === 'save') {
      return {
        title: 'Retention savings model',
        value: '$168,000',
        detail: 'Based on 28 at-risk members, 21% save lift, and $28K blended annual value.',
      }
    }

    return {
      title: 'Upsell growth model',
      value: '$92,400',
      detail: 'Based on post-round conversion gains across Grill, Shop, and Lessons.',
    }
  }, [mode])

  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-8">
      <div className="inline-flex rounded-lg border border-swoop-border p-1">
        <button onClick={() => setMode('save')} className={`rounded-md px-4 py-2 text-sm font-semibold ${mode === 'save' ? 'bg-swoop-dark text-white' : 'text-swoop-muted'}`}>Save</button>
        <button onClick={() => setMode('grow')} className={`rounded-md px-4 py-2 text-sm font-semibold ${mode === 'grow' ? 'bg-swoop-dark text-white' : 'text-swoop-muted'}`}>Grow</button>
      </div>
      <h2 className="mt-5 text-2xl font-bold">{model.title}</h2>
      <p className="mt-2 text-3xl font-bold">{model.value}</p>
      <p className="mt-2 text-sm text-swoop-muted">{model.detail}</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <RetentionValueCalculator />
        <PostRoundConversionMock />
      </div>
    </div>
  )
}

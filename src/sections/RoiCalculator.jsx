import { useMemo, useState } from "react"

export default function RoiCalculator() {
  const [dues, setDues] = useState(18000)
  const [lostMembers, setLostMembers] = useState(15)
  const [tenure, setTenure] = useState(8)

  const { risk, retained } = useMemo(() => {
    const lifetimeRisk = dues * lostMembers * tenure
    const prevented = Math.min(lostMembers, 3)
    const retainedValue = dues * prevented * tenure

    return {
      risk: lifetimeRisk,
      retained: retainedValue
    }
  }, [dues, lostMembers, tenure])

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)

  return (
    <section className="section roi-section">
      <div className="container roi-wrap">
        <div>
          <h2>What Is Preventable Attrition Costing Your Club?</h2>
          <p className="section-subhead">Every resignation carries years of lost revenue. See the real cost — and what Swoop prevents.</p>

          <div className="roi-inputs">
            <label>
              <span className="roi-label-row">
                <span>Average annual dues per member</span>
                <span className="roi-value data-number">{formatCurrency(dues)}</span>
              </span>
              <input type="range" value={dues} min="5000" max="60000" step="1000" onChange={(e) => setDues(Number(e.target.value))} />
            </label>

            <label>
              <span className="roi-label-row">
                <span>Members lost per year</span>
                <span className="roi-value data-number">{lostMembers}</span>
              </span>
              <input type="range" value={lostMembers} min="1" max="50" step="1" onChange={(e) => setLostMembers(Number(e.target.value))} />
            </label>

            <label>
              <span className="roi-label-row">
                <span>Average member tenure remaining (years)</span>
                <span className="roi-value data-number">{tenure}</span>
              </span>
              <input type="range" value={tenure} min="1" max="20" step="1" onChange={(e) => setTenure(Number(e.target.value))} />
            </label>
          </div>
        </div>

        <aside className="roi-output">
          <p>Lifetime Revenue at Risk</p>
          <h3>{formatCurrency(risk)}</h3>
          <p className="retained-line">If Swoop prevents just 3 resignations: {formatCurrency(retained)} retained</p>
          <a href="#demo" className="btn-primary">See How Swoop Protects Your Revenue</a>
        </aside>
      </div>
    </section>
  )
}

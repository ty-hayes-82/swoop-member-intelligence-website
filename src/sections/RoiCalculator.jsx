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
    <section className="section">
      <div className="container roi-wrap">
        <div>
          <h2>Member Retention ROI Calculator</h2>
          <p className="section-subhead">Estimate how much lifetime revenue is at risk and what targeted intervention can protect.</p>

          <div className="roi-inputs">
            <label>
              Average annual dues per member
              <input type="number" value={dues} min="0" onChange={(e) => setDues(Number(e.target.value) || 0)} />
            </label>

            <label>
              Members lost per year
              <input type="number" value={lostMembers} min="0" onChange={(e) => setLostMembers(Number(e.target.value) || 0)} />
            </label>

            <label>
              Average member tenure remaining (years)
              <input type="number" value={tenure} min="0" onChange={(e) => setTenure(Number(e.target.value) || 0)} />
            </label>
          </div>
        </div>

        <aside className="roi-output">
          <p>Estimated lifetime revenue at risk</p>
          <h3>{formatCurrency(risk)}</h3>
          <p className="retained-line">If Swoop prevents just 3 resignations: {formatCurrency(retained)} retained</p>
          <a href="#demo" className="btn-primary">See How Swoop Protects Your Revenue</a>
        </aside>
      </div>
    </section>
  )
}

const features = [
  { name: "Cross-system intelligence", swoop: "yes", noteefy: "no", crm: "partial", spreadsheets: "no" },
  { name: "First-party member data", swoop: "yes", noteefy: "no", crm: "no", spreadsheets: "no" },
  { name: "Retention-prioritized waitlist", swoop: "yes", noteefy: "partial", crm: "no", spreadsheets: "no" },
  { name: "AI-powered actions", swoop: "yes", noteefy: "no", crm: "no", spreadsheets: "no" },
  { name: "Churn prediction", swoop: "yes", noteefy: "no", crm: "partial", spreadsheets: "no" },
  { name: "Closed-loop outreach", swoop: "yes", noteefy: "no", crm: "no", spreadsheets: "no" },
  { name: "Real-time GPS/behavior", swoop: "yes", noteefy: "partial", crm: "no", spreadsheets: "no" },
  { name: "Tee time demand fill", swoop: "yes", noteefy: "yes", crm: "no", spreadsheets: "partial" },
  { name: "Member database", swoop: "yes", noteefy: "no", crm: "yes", spreadsheets: "partial" },
]

const Check = () => <span className="comparison-check" aria-label="Yes">✓</span>
const Cross = () => <span className="comparison-cross" aria-label="No">✗</span>
const Partial = () => <span className="comparison-partial" aria-label="Partial" style={{ color: '#F59E0B', fontWeight: 700, fontSize: '1.15rem' }}>◐</span>

function Cell({ value }) {
  if (value === "yes") return <Check />
  if (value === "partial") return <Partial />
  return <Cross />
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section comparison-section">
      <div className="container">
        <h2>Why Swoop?</h2>
        <p className="section-subhead comparison-subhead">
          Noteefy fills tee times. <strong>Swoop fills tee times with the right members.</strong>
        </p>

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="col-swoop">Swoop</th>
                <th>Noteefy</th>
                <th>Your CRM Alone</th>
                <th>Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name}>
                  <td className="feature-name">{f.name}</td>
                  <td className="col-swoop"><Cell value={f.swoop} /></td>
                  <td><Cell value={f.noteefy} /></td>
                  <td><Cell value={f.crm} /></td>
                  <td><Cell value={f.spreadsheets} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison-cta">
          <a href="#demo" className="btn-primary">See the Difference — Book a Demo</a>
        </div>
      </div>
    </section>
  )
}

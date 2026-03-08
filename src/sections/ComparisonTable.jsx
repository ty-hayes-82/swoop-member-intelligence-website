const features = [
  { name: "Cross-system intelligence", swoop: true, noteefy: false, jonas: false, spreadsheets: false },
  { name: "First-party member data", swoop: true, noteefy: false, jonas: false, spreadsheets: false },
  { name: "Retention-prioritized waitlist", swoop: true, noteefy: false, jonas: false, spreadsheets: false },
  { name: "AI-powered actions", swoop: true, noteefy: false, jonas: false, spreadsheets: false },
  { name: "Churn prediction", swoop: true, noteefy: false, jonas: false, spreadsheets: false },
  { name: "Closed-loop outreach", swoop: true, noteefy: false, jonas: false, spreadsheets: false },
  { name: "Real-time GPS/behavior", swoop: true, noteefy: false, jonas: false, spreadsheets: false }
]

const Check = () => <span className="comparison-check" aria-label="Yes">✓</span>
const Cross = () => <span className="comparison-cross" aria-label="No">✗</span>

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
                <th>Jonas / Clubessential</th>
                <th>Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name}>
                  <td className="feature-name">{f.name}</td>
                  <td className="col-swoop">{f.swoop ? <Check /> : <Cross />}</td>
                  <td>{f.noteefy ? <Check /> : <Cross />}</td>
                  <td>{f.jonas ? <Check /> : <Cross />}</td>
                  <td>{f.spreadsheets ? <Check /> : <Cross />}</td>
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

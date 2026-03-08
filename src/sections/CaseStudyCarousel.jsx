import { Splide, SplideSlide } from "@splidejs/react-splide"

const studies = [
  {
    club: "Catching the Silent Resignation",
    stat: "$218K lifetime value saved",
    quote: "James Whitfield, 12-year member, filed one complaint about pace of play. Six days of silence later, he resigned. With Swoop, the decay pattern was flagged 6–8 weeks before the letter arrived — giving the GM a window to intervene with a single personal outreach.",
    detail: "Member Intelligence Lens"
  },
  {
    club: "Saturday Tee Sheet Revenue Recovery",
    stat: "$5,700/month in F&B revenue recovered",
    quote: "Slow rounds and empty tee times were bleeding dining revenue every weekend. Swoop's demand engine identified high-value members who consistently dine after rounds and prioritized them for open slots — filling tee times with members who drive ancillary revenue.",
    detail: "Tee Sheet & Demand Lens + F&B Lens"
  },
  {
    club: "Staffing Intelligence in Action",
    stat: "$3,400 in direct revenue recovered",
    quote: "Three understaffed Fridays cost real dollars and contributed to a resignation worth $18K/year. Swoop correlated staffing gaps with service complaints and member satisfaction scores in real time — surfacing the connection no spreadsheet could reveal.",
    detail: "Staffing & Labor Lens + Member Intelligence"
  }
]

export default function CaseStudyCarousel() {
  return (
    <section id="case-studies" className="section case-study-section">
      <div className="container">
        <h2>Real Results from Real Scenarios</h2>
        <p className="section-subhead">See how Swoop changes the way GMs run their clubs — based on real patterns from private club operations.</p>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            gap: "1rem",
            arrows: true,
            pagination: true,
            autoplay: false,
            speed: 600,
            breakpoints: {
              991: { perPage: 1 }
            }
          }}
          aria-label="Case studies"
        >
          {studies.map((study) => (
            <SplideSlide key={study.stat}>
              <article className="case-card">
                <p className="case-label">{study.club}</p>
                <h3>{study.stat}</h3>
                <p>{study.quote}</p>
                <p className="case-detail">{study.detail}</p>
                <a href="#demo">See How It Works →</a>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

import { Splide, SplideSlide } from "@splidejs/react-splide"

const studies = [
  {
    club: "Platform Demo - Oakmont Hills CC",
    stat: "$22,000/year in dues saved",
    quote: "One member, one alert, one phone call prevented a resignation.",
    detail: "James Whitfield scenario"
  },
  {
    club: "Platform Demo - Oakmont Hills CC",
    stat: "67% -> 91% fill rate",
    quote: "Retention-prioritized waitlist logic improved slot utilization.",
    detail: "Demand optimizer result"
  },
  {
    club: "Platform Demo - Oakmont Hills CC",
    stat: "$187 -> $312 revenue per slot",
    quote: "Swoop shifted outreach from reactive to value-ranked recommendations.",
    detail: "Revenue lens impact"
  }
]

export default function CaseStudyCarousel() {
  return (
    <section className="section case-study-section">
      <div className="container">
        <h2>Real Results from Real Clubs</h2>
        <p className="section-subhead">See how Swoop changes the way GMs run their clubs.</p>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            gap: "1rem",
            arrows: true,
            pagination: true,
            autoplay: false,
            breakpoints: {
              1024: { perPage: 1 }
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
                <a href="#">Read Case Study</a>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

import { Splide, SplideSlide } from "@splidejs/react-splide"

const cards = [
  {
    title: "Launching Partner Cohort",
    body: "We are onboarding our first partner clubs now. Want to be one of them?"
  },
  {
    title: "No Synthetic Testimonials",
    body: "Real results from real clubs — coming soon. Become a founding partner and be first."
  }
]

export default function TestimonialsCarousel() {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <h2>What GMs Are Saying</h2>

        <Splide
          options={{
            type: "loop",
            perPage: 2,
            gap: "1rem",
            arrows: true,
            pagination: true,
            breakpoints: {
              1024: { perPage: 1 }
            }
          }}
          aria-label="Testimonials placeholder"
        >
          {cards.map((card) => (
            <SplideSlide key={card.title}>
              <article className="testimonial-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <a href="#demo" className="btn-secondary">Become a Founding Partner</a>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

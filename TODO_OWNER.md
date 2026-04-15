# TODO_OWNER.md — Business-Side Items (Not Code-Fixable)

These items are excluded from automated website scoring because they require real-world assets or decisions outside the development team's control. Once each item is resolved, remove it from this list and implement it in code.

---

## High Priority (affects conversion)

- [ ] **Production domain** — Deploy to a branded domain (e.g., `swoopgolf.com`). Currently on Vercel staging domain. Update `SITE_URL` in critique runs once live.

- [ ] **Calendly booking link** — Set `VITE_CALENDLY_URL` env var once Calendly is configured. The form success state already shows the "Pick a Time on Our Calendar →" button when this is set; currently falls back to email-based confirmation.

- [ ] **Customer testimonials** — Collect 2–3 real quotes from pilot club GMs once you have paying customers. Priority placements: HeroSection (social proof quote), DemoCtaSection (left column), TestimonialsSection. Each quote needs: name, title, club name, member count.

## Medium Priority (builds credibility)

- [ ] **Real team headshots** — Professional photos for Tyler Hayes and any co-founders/team members. Replace placeholder in TeamSection.jsx once available.

- [ ] **Product screenshots / demo GIFs** — Actual UI screenshots of the Swoop dashboard, member health score view, and daily brief. Add to HowItWorksSection or a dedicated "Product Tour" section once the product UI is built.

- [ ] **Club logos (social proof)** — Logo lockup of founding-partner clubs ("trusted by X clubs"). Requires logo licensing approval from each club. Target placement: SocialProofSection, below hero.

## Lower Priority (adds authority)

- [ ] **Integration partner logos** — Official logos from Jonas, Club Essentials, Northstar, Lightspeed, foreUP, etc. Requires sourcing/licensing from each vendor. Target: IntegrationsSection.

- [ ] **Press coverage / third-party mentions** — Any media coverage, analyst mentions, or industry newsletter features. Placement: About page, hero area.

- [ ] **Real club benchmark data** — The "7 founding-partner clubs (anonymized)" mentioned in ContactPage.jsx needs real benchmark data once pilots are live.

---

_Last updated: 2026-04-14. Items in this file are intentionally excluded from `scripts/website-critique.mjs` scoring via the `SCORING_CONTEXT` constant._

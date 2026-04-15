# Swoop Marketing Website — Project Status
**Last updated:** April 15, 2026  
**Branch:** main · Latest commit: `3899856`

---

## What We've Built

### The Website
A full 5-page marketing site for Swoop Member Intelligence — a private club GM intelligence platform.

| Page | Route | Purpose |
|------|-------|---------|
| Home | `#/landing` | Hero, problem framing, capabilities, agents demo, social proof |
| Platform | `#/platform` | Deep-dive: how it works, agents, integrations, comparison |
| Pricing | `#/pricing` | ROI calculator, 3-tier pricing, FAQ |
| About | `#/about` | Founder story, team, testimonials |
| Contact | `#/contact` | Demo booking form |

**Stack:** React + Vite, inline JSX styles, hash-based routing, deployed on Vercel.  
**Fonts:** Fraunces (display), JetBrains Mono (data), system sans (body).

---

## Critique Cycle History

We ran 14 scoring cycles using a Claude Opus critique script (9 lenses × 5 pages = 45 critiques per cycle, scored /100 each). Lenses: Architect, GM, Closer, Speedster, Skeptic, Storyteller, First Timer, Brand Guardian, Mobile Inspector.

| Cycle | Approx. Composite | Key Changes That Moved Scores |
|-------|-------------------|-------------------------------|
| Baseline | ~580 avg/page | — |
| 9–11 | ~620 avg/page | Trust signals, social proof, conversion structure |
| 12 | ~640 avg/page | Contact page nav, founder identity, SOC2 accuracy |
| 13 | ~655 avg/page | Pricing bridge copy, FAQ reduction, ROI text legibility |
| 14 (partial) | ~658 Home | About FAQ 21→6 questions, ROI text bumps |

**Persistent low scorers:** Platform Skeptic (52–58) — structural trust gap for pre-revenue startup. Home/Platform Architect (60–64) — no visible CSS animations in screenshots.

---

## What Was Fixed — Chronological

### Critique-Driven Improvements (Cycles 9–14)
- **HeroSection:** Eyebrow updated to "AI-Powered Operating Intelligence." Subhead opacity/weight improved for dark-bg readability. Trust-ramp line added ("Every recommended action requires your approval").
- **AboutPage:** Hero h1 rewritten to outcome-focused ("6 weeks early" claim). TL;DR block added before founder narrative. FAQ filtered from 21 → 6 most relevant GM questions. Mid-page CTA linked to pricing, not duplicate hero CTA.
- **PricingPage:** Bridge copy added between ROI calculator and pricing section. Close CTA upgraded to Fraunces h2 with risk-reversal microcopy.
- **PlatformPage:** Lower-commitment secondary CTA added ("Request a sample morning brief").
- **AgentsSection:** Subtitle clarifies AI vs. if/then rules. "GM Approval Required" trust badge added.
- **AgentsLiveDemo:** Attribution note added ("Dollar values reflect actual outcomes from Pinetree CC 90-day deployment").
- **DemoCtaSection:** SOC2 copy → "SOC 2 (Audit Active)." Founder identity block added to left column.
- **ContactPage:** Nav links added to MinimalHeader. Tech disclosure panel opened by default.
- **SocialProofSection:** WCAG fix — orange-on-cream text corrected to `#B8600E`.
- **SaveStorySection:** Attribution added for Pinetree CC stats.
- **RoiCalculatorSection:** Small text (12px) bumped to 13–14px throughout for mobile legibility.
- **PricingSection:** Card heights equalized across tiers.

### Product-Alignment Fixes (Against Product Audit v5)
Applied after cross-referencing the marketing website against the 10-club quantitative survey and 4-club qualitative deep-dive:

- **Jonas FAQ:** Changed from claiming native integration to honest CSV framing: "CSV import today, native API on roadmap." Same fix for 3-year Jonas contract FAQ.
- **Autonomous agent language removed:** "Engagement Autopilot" → "Engagement Advisor" everywhere. "6 AGENTS ONLINE" → "6 INTELLIGENCE STREAMS."
- **Trust-ramp line added to hero:** "Every recommended action requires your approval before anything is sent. Start manual — unlock more as you see it working."
- **90-day new member signal added:** Hero brief now includes New Member Alert item. New Member Advisor scenario added to agents demo. "90-day new member cohort alerts" added to free tier features. New member 90-day cohort added to problem cards.
- **Saturday lunch staffing elevated:** Labor Optimizer now leads the agents demo (was 4th of 6). Staffing capability headline changed to specifically call out Saturday lunch.
- **Complaint follow-through elevated:** Now the first problem card (was second). Service Recovery elevated to agent demo scenario #2.
- **F&B framing corrected:** "Stop leaving covers on the table" → "Dining frequency is the earliest churn signal." Reframed from margin recovery to member health signal (per survey finding that 8/10 clubs have accepted F&B losses as structural).
- **$1,499 tier cleaned up:** Removed GPS + member app (unbuilt infrastructure per audit). Replaced with real enterprise differentiators: unlimited integrations, custom board reports, SSO/SAML, SLA.
- **Comparison table:** "AI agent automation" → "AI-drafted action recommendations (GM-approved)."
- **Board Report named explicitly:** Now called out as a specific deliverable in capabilities and hero PROVE IT column.

---

## Current State

**Git:** `main` branch, commit `3899856`, pushed to `ty-hayes-82/swoop-member-intelligence-website`  
**Vercel:** Last deployed at `swoop-member-intelligence-website-re6bmi4in.vercel.app`  
**Build:** `index-TteTvuNC.js` (latest, includes all fixes above)  
**Critique:** Cycle 14 partially complete (27–32/45 critiques, Home + Platform + Pricing + partial About)

---

## Next Steps

### Immediate (Before Next Demo)

1. **Deploy latest build to Vercel** — the product-alignment fixes haven't been deployed yet. Run `vercel --prod --yes` after confirming the build is clean.

2. **Run Cycle 15 critique** — measure the impact of the product-alignment fixes. Expected improvements: About Architect (FAQ reduction), Pricing Skeptic (Jonas honesty), Home First Timer (90-day signal + trust-ramp line).
   ```
   CRITIQUE_PROVIDER=claude ANTHROPIC_API_KEY=... SITE_URL=http://localhost:PORT node scripts/website-critique.mjs
   ```

3. **Named social proof** — the hero testimonial is still anonymous ("Founding-partner GM · 450-member private club"). Get permission from Esteban (Pinetree CC) for named attribution. Even first name + club adds significant credibility for the 3 "maybe" clubs.

### Short-Term Product Gaps (From Audit)

4. **Jonas demo story** — the audit says the closing question for Brad (Pine Island CC), Chris (Spring Brook CC), and Esteban (Pinetree CC) is "does this work with Jonas?" The FAQ is now honest, but the demo flow needs a frictionless CSV import story. Build or document a Jonas CSV → Swoop walkthrough that takes under 10 minutes.

5. **Trust ramp UI** — the audit identifies this as a structural gap: "GMs want to start manual and gradually unlock. The product has no UI for 'you've approved 12 actions — here's what you could automate.'" Without a visible trust progression, the manual inbox feels like extra work, not an intentional onboarding strategy. This is a product portal feature, not a website change.

6. **90-day new member surfacing in Today view** — the most validated insight (4/4 unanimous) is buried in Members → Health → Cohort in the portal. It needs to be visible from the Today morning briefing. Marketing now promises this; the product needs to deliver it.

### Website Remaining (Lower Priority)

7. **CSS animations** — Architect lens consistently docks 30–40 points for "Motion/Micro-Detail" because no animations are visible in screenshots. Adding entrance animations (fade-in on scroll for cards, counter animation for stats) would likely push Architect scores from 60 → 75+. This is the single highest-leverage remaining improvement for composite score.

8. **Platform Skeptic trust gap** — currently scores 52–58 despite improvements. The core issue is "pre-revenue startup with unsourced financial claims." Long-term fix: more specific case study data (Pinetree CC numbers are already used; Spring Brook CC or Pine Island CC data would add a second data point).

9. **Integrations section accuracy** — the current integration list claims 28 integrations across 10 categories. After the Jonas fix, the FAQ is honest about CSV vs. native API. The integrations section itself (IntegrationsSection.jsx) may still imply native connectivity for all listed platforms. Audit and update.

10. **Score target: 960** — current composite is approximately 655–665 per page (5-page total ~3,275). To reach 960 per page average requires ~+300 points total across 45 critiques — roughly +7 points per lens across all pages. CSS animations alone would likely add +50–75 points (5–8 per architect lens × 5 pages). Product-alignment fixes are expected to add another +30–50 in trust/skeptic/closer lenses.

---

## File Map — Key Files

| File | What It Contains |
|------|-----------------|
| `src/landing/data.js` | All copy: problem cards, capabilities, agents, pricing tiers, FAQ items, integrations |
| `src/landing/components/HeroSection.jsx` | Homepage hero, sample brief modal, proof columns |
| `src/landing/components/AgentsLiveDemo.jsx` | Animated 6-scenario agent demo widget |
| `src/landing/components/AgentsSection.jsx` | Agents section wrapper + GM approval trust badge |
| `src/landing/components/DemoCtaSection.jsx` | Contact form, testimonials, "what happens next" |
| `src/landing/components/PricingSection.jsx` | 3-tier pricing cards |
| `src/landing/components/RoiCalculatorSection.jsx` | Interactive ROI calculator |
| `src/landing/pages/AboutPage.jsx` | Founder story, filtered FAQ (6 questions) |
| `src/landing/pages/PlatformPage.jsx` | Deep-dive platform page |
| `src/landing/pages/PricingPage.jsx` | Pricing page with bridge copy |
| `src/landing/pages/ContactPage.jsx` | Demo booking form page |
| `MARKETING_AUDIT_v1.md` | Full audit: website vs. Product Audit v5 survey findings |
| `scripts/website-critique.mjs` | Claude Opus critique script (9 lenses × 5 pages) |

# The Closer — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Closer
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:22:23.084Z

---



## Conversion Verdict

This pricing page is surprisingly well-architected as a conversion engine — it leads with ROI before asking for money, uses an interactive calculator to create ownership of the outcome, and layers social proof at decision points. However, the single biggest conversion leak is the **cognitive overload at the pricing tier section**: three plans are presented with dense feature lists, no visual recommendation anchor on the mid-tier plan, and the free tier ($0/mo) creates an easy escape hatch that likely cannibalizes pipeline quality without a strong upgrade narrative baked into the page flow. The page is built to *persuade* more than most SaaS pricing pages, but it's trying to do the jobs of 3-4 pages (ROI calculator, pricing, case study, FAQ) in one scroll, which dilutes the primary conversion goal.

**Overall Score: 68 / 100**

---

## Dimension Scores

| Dimension | Score /100 | Biggest Gap |
|-----------|-----------|-------------|
| Value Proposition Clarity | 78 | Hero headline "Recover your software costs in 60 days. Start for zero." is strong and outcome-oriented, but "software costs" is self-referential — it should frame the value in terms of recovered *dues revenue*, not recovered *software costs*. |
| Persuasion Architecture | 72 | The ROI calculator and "5 of 7" founding partner stat are excellent proof devices, but the named testimonial (Jarvis McDonald) is buried mid-page below the calculator with no photo, title context, or quantified outcome in the quote itself. |
| CTA Strategy & Funnel Design | 58 | There are at least 6 distinct CTAs competing on this single page ("Calculate your ROI," "Book a Walkthrough With Your Numbers," "Find this ROI report to my Board," "Get Free Daily Alerts," "Book a 30-Min Walkthrough" ×2, "See the Full Platform") with no clear visual hierarchy establishing ONE primary action. |
| Friction & Objection Analysis | 70 | The FAQ section ("Things GMs ask us") addresses real buyer objections (data security, replacing current software, cancel policy), but pricing lacks any ROI-to-cost anchoring at the tier level — the calculator output doesn't connect to the specific plan that would deliver that result. |
| Page-Level Conversion Mechanics | 60 | The page is ~7+ viewport scrolls long with no sticky CTA, no progress indicators, and the final CTA section ("Ready to see which of your members are at risk?") repeats two CTAs again. Form-based conversion isn't visible — "Book a 30-Min Walkthrough" likely goes to an external scheduler but the destination is opaque. |

---

## The Conversion Audit

### HERO SECTION (Viewport 1)

**Page Job:** Immediately communicate the pricing *philosophy* (start free, prove ROI, then upgrade) and compel scrolling toward the calculator or pricing tiers.

**Is it doing that job?** Mostly yes. "Recover your software costs in 60 days. Start for zero." is a strong asymmetric risk-reduction headline. The subheadline — "5 of 7 founding partner clubs recovered Swoop's annual cost within 60 days of their first intervention (2024 cohort)" — is excellent specificity (commitment/consistency + social proof).

**What's working:**
- The three orange stat boxes (65%, $74K, 5 of 7) create a powerful proof trifecta below the hero. These are specific, numeric, and credible.
- "Calculate your ROI" as the primary CTA is smart — it's a value-first micro-commitment (Fogg: increase motivation before asking for ability).
- The dark background with white/orange type creates strong contrast and visual hierarchy.

**#1 Fix:** Reframe the headline from software-cost-centric to revenue-centric. Change "Recover your software costs in 60 days" → **"Recover $74K in at-risk dues revenue. Start for zero."** The current framing makes the reader think about *cost*; the reframe makes them think about *revenue they're losing*. This is loss aversion 101 — the $74K stat is already on the page but buried in a stat box when it should BE the headline.

---

### ROI CALCULATOR SECTION (Viewports 2-3)

**Page Job:** Create personalized, self-generated proof that Swoop delivers ROI for *their specific club* — making the abstract concrete and triggering the endowment effect (once they see "their" number, they psychologically own it).

**Is it doing that job?** This is the strongest section on the page and a genuine conversion differentiator. The headline "Find out exactly how much dues revenue is walking out your door" is emotionally resonant and specific. The interactive sliders (Dues Protected, number of members, annual dues, annual F&B) let the GM input their own data and see a personalized output ($120,000 at-risk dues → $80,000 recovered with Swoop → net recovery of $74,812 after Swoop cost).

**What's working:**
- The interactive calculator creates a commitment/consistency loop — once you've entered your data, you've invested effort and are more likely to convert.
- The output panel on the right shows "WITH SWOOP" in orange and quantifies the delta clearly.
- The named testimonial from "Jarvis McDonald, GM, Preston Country Club" directly below with a specific claim adds contextual social proof.
- Two CTAs follow: "Book a Walkthrough With Your Numbers" (primary, orange) and "Find this ROI report to my Board" (secondary, outlined). This is smart — it gives two paths for different buyer readiness levels (Fogg: match ability to the ask). The board-report CTA is brilliant for the B2B committee-buy dynamic.

**What's broken:**
- The testimonial quote text is too small and lacks a headshot. At this high-conviction moment, the social proof needs to *land*. A quote without a face loses ~30% credibility (social proof principle).
- "Find this ROI report to my Board" — the word "Find" seems like a typo or awkward phrasing. Should this be "Send this ROI report to my Board" or "Email this ROI report to my Board"? This friction point at a critical conversion moment is a copy bug that undermines trust.
- The calculator doesn't connect its output to a specific pricing tier. After showing "$74,812 net recovery," it should say something like "At the Signals + Actions tier ($499/mo), that's a 12.5x return." This bridges the gap between the abstract ROI and the concrete purchase decision.

**#1 Fix:** Add a dynamic ROI-to-plan bridge below the calculator output: **"Your projected 12.5x ROI is based on the Signals + Actions plan at $499/mo. [See the plan →]"** — this anchors price to value at the exact moment of peak motivation.

---

### PRICING TIERS SECTION (Viewports 4-5)

**Page Job:** Present plans with clear differentiation, anchor to the recommended tier, and convert browser → demo/signup.

**Is it doing that job?** Partially. The three tiers are clearly laid out:
- **Signals** — $0/mo (free)
- **Signals + Actions** — $499/mo
- **Signals + Actions + Member App** — $1,499/mo

The "Launch in 14 days. Zero IT required. Cancel any time." trust bar above the tiers is well-placed objection handling (implementation time, IT burden, lock-in fear — three top B2B SaaS objections neutralized in one line).

**What's broken:**

1. **No visual "recommended" anchor on the mid-tier.** Pricing psychology 101 (decoy effect/anchoring): the $499 plan should have a "Most Popular" or "Recommended" badge, a slightly larger card, or a different background color. Currently all three tiers appear visually equal, which increases decision paralysis.

2. **The free tier is too generous as an escape hatch.** $0/mo "Signals" includes "Early warning alerts," "Engagement scoring," "Tableau-ready data access," "At-risk member integrations," and an "Infiniquest" mention. A GM who's price-sensitive (many are) can rationalize "I'll just start with free" and never progress. The free plan should either be more clearly limited (e.g., "Up to 100 members" or "Alerts only, no action recommendations") or the page should narratively frame it as a stepping stone ("Start here to see your risk → Upgrade when you're ready to act").

3. **Feature list is dense and uses internal product language.** Items like "Infiniquest," "Signals + Actions + Member App" nomenclature, "Tableau-ready data access" — these are feature-speak, not outcome-speak. A GM doesn't care about "Tableau-ready data access"; they care about "Board-ready reports in 5 minutes."

4. **CTAs at the tier level don't differentiate by intent.** The free tier has "Get Free Daily Alerts" (good, low-friction). The mid-tier doesn't have a visible CTA in the screenshot (or it's the "Book a 30-Min Walkthrough" below). The top tier has "See the Full Platform." These are inconsistent in ask-level and don't create a clear conversion gradient.

5. **"Zero Implementation Fees" callout at the bottom** is a strong objection handler but it's presented as a small text note below the tiers. This should be a more prominent visual element — implementation cost is often the #1 hidden objection in club management software.

**#1 Fix:** Add a "Most Popular" badge with a subtle background differentiation (slightly darker card or orange border) to the $499/mo Signals + Actions tier, and rewrite its CTA to **"Start Your 14-Day Free Trial"** or **"Book a Walkthrough → See Your Club's Data"** — making the mid-tier the obvious gravitational center of the page.

---

### FAQ SECTION (Viewport 6)

**Page Job:** Handle final objections that prevent conversion at the bottom of the page.

**Is it doing that job?** Partially. The section is titled "Things GMs ask us" — which is a nice conversational framing that signals insider knowledge of the buyer persona.

**Visible questions:**
- "Do I need to replace my current software?" → Answer addresses integrations (25+ integrations, 15 categories). Good.
- "Is my members' data secure?" → Answer mentions SOC 2 Type II compliance. Good — this is a real objection for clubs handling PII.
- "What does the founding partner program actually look like?" → This is interesting — suggests there's a special program, but the answer isn't fully visible.
- "What happens if we cancel?" → Addresses lock-in fear.

**What's broken:**
- **Missing the #1 question every pricing page visitor has: "How long until I see results?"** This is the ROI timeline objection. The hero hints at "60 days" but the FAQ doesn't reinforce it.
- **No question about onboarding/implementation process.** "Launch in 14 days" is claimed above but not substantiated in the FAQ.
- **No question about what data/integrations are required to get started.** This is the "what do I need to do on my end" friction question.
- The FAQ is collapsed (accordion style), which means the answers are hidden behind clicks — adding one friction layer to objection resolution.

**#1 Fix:** Add two FAQ items: **"How quickly will I see ROI?"** (answer: reference the 5-of-7 stat and 60-day timeline with a named club example) and **"What do I need to get started?"** (answer: your POS and membership system credentials, 14-day launch, zero IT lift). These directly address the two biggest pre-conversion hesitations.

---

### FINAL CTA / FOOTER SECTION (Viewport 7)

**Page Job:** Catch visitors who've scrolled the entire page — these are highly engaged but haven't converted yet. This is your last chance to convert.

**Is it doing that job?** The section "Ready to see which of your members are at risk?" is a good loss-aversion framing. The subtext "Setup takes 15 minutes. Your first member brief arrives tomorrow morning" is excellent — it reduces perceived effort (Fogg: increase ability) and creates urgency with "tomorrow morning" (immediate gratification).

**Two CTAs:**
- "Tomorrow morning." (this appears to be a link/button? Unclear.)
- "Book a 30-Min Walkthrough →" (orange button)

**What's broken:**
- The "Tomorrow morning" element is confusing — is it a CTA or a statement? If it's a button, the label is nonsensical. If it's a statement, it shouldn't look interactive.
- This is the 4th or 5th time "Book a 30-Min Walkthrough" appears on the page. Repetition is fine, but without escalating the commitment language or adding a new proof point, it feels like the page is just asking the same question louder.
- **No sticky CTA exists anywhere on the page.** For a page this long (7+ scrolls), a sticky header CTA or floating button would capture conversion intent at any scroll depth. The top nav has "Book a Walkthrough" in the header, but it's small and doesn't persist as a sticky element based on visible design.
- The footer includes "Call us at [?] / Prefer texting in → Book a Walkthrough" — the text is extremely small and the phone/text option is buried. For a high-touch B2B sale to club GMs (who are often 50+ and prefer phone), making the phone number prominent would serve the persona.

**#1 Fix:** Add a **sticky CTA bar** that appears after the user scrolls past the ROI calculator: **"Your club could recover $[dynamic number from calculator]/year → Book a Walkthrough"** — this personalizes the CTA with their own data, leveraging the endowment effect from the calculator interaction.

---

## Revenue Impact Estimate

| Rank | Fix | Conversion Impact | Implementation Effort | Priority |
|------|-----|------------------|----------------------|----------|
| 1 | **Add dynamic ROI-to-pricing-tier bridge below calculator** ("Your 12.5x ROI is on the $499 plan") — connects motivation peak to purchase decision | **HIGH** | **LOW** (copy + simple dynamic text) | 🔥 Quick Win |
| 2 | **Add "Most Popular" badge + visual differentiation to $499/mo tier** — reduces decision paralysis, anchors to target plan (decoy effect) | **HIGH** | **LOW** (CSS + badge) | 🔥 Quick Win |
| 3 | **Add sticky CTA bar with personalized calculator output** — captures intent at any scroll depth, leverages endowment effect from calculator | **HIGH** | **MEDIUM** (requires JS to pass calculator state to sticky bar) | High-Impact Build |
| 4 | **Reframe hero headline from "Recover your software costs" to "Recover $74K in at-risk dues revenue"** — shifts framing from cost to loss aversion | **MEDIUM** | **LOW** (copy change) | 🔥 Quick Win |
| 5 | **Add headshot + title to Jarvis McDonald testimonial, and add 2 missing FAQ items** (ROI timeline + onboarding requirements) — strengthens social proof at decision point, handles final objections | **MEDIUM** | **LOW** (content + image) | 🔥 Quick Win |

---

### Additional Observations:

- **The "Find this ROI report to my Board" CTA is a hidden gem** for the multi-stakeholder B2B buy. If this actually generates a PDF/email with the GM's calculator inputs and sends it to their board, it's a brilliant viral loop that brings in the economic buyer. But "Find" is clearly a typo/copy error — fix to "Send" or "Email" immediately.
- **No pricing comparison to alternatives** — most clubs are evaluating Swoop against doing nothing (manual tracking in spreadsheets) or generic CRM tools. A "Cost of doing nothing" frame (e.g., "Clubs lose an average of $120K/year in preventable attrition") would strengthen the urgency.
- **The "founding partner" language** throughout suggests this is an early-stage product. While this can work (exclusivity principle), it also raises risk perception. If used, lean into the exclusivity: "Only 3 founding partner slots remaining in [region]" — real scarcity, not manufactured.
- **No dark patterns detected.** The free tier, cancel-anytime language, and transparent pricing are all clean. The page persuades through value demonstration, not manipulation. Well done.

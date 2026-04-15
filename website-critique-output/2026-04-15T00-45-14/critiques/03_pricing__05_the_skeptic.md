# The Skeptic — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Skeptic
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:51:36.888Z

---



## Trust Verdict

This pricing page does several things right for a cautious buyer — it leads with a specific dollar figure ($74K), offers a free tier, and includes an interactive ROI calculator — but it ultimately relies on a thin layer of proof that a sophisticated GM would see through quickly. The single biggest trust gap: **the founding partner testimonial is the only named social proof on the entire page, and even the headline claim ("5 of 7 founding partner clubs recovered Swoop's annual cost within 60 days") lacks named clubs, verifiable dates, or third-party validation.** A buyer staking their reputation on this purchase would need substantially more evidence before proceeding.

**Overall Score: 52 / 100**

---

## Dimension Scores

| Dimension | Score /100 | Trust Impact |
|-----------|-----------|-------------|
| Proof Density & Specificity | 42 | High negative — claims are numerically specific but not verifiably anchored |
| Company Legitimacy Signals | 35 | High negative — almost no company/team visibility on this page |
| Product Transparency | 68 | Moderate positive — pricing is visible, tiers are clear, feature lists exist |
| Consistency & Attention to Detail | 60 | Neutral — clean design but some loose ends |
| Risk Signals & Red Flags | 55 | Moderate negative — some pressure patterns, missing policies in primary UX |

---

## Trust Builders (What's Working)

### 1. Transparent Pricing Tiers — Rare in B2B SaaS for Clubs
Three clearly labeled tiers are displayed: **Signals at $0/mo**, **Signals + Actions at $499/mo**, and **Signals + Actions + Member App at $1,499/mo**. This is a significant trust builder. Most competing club tech platforms hide pricing entirely behind "Request a Demo." The $0/mo free tier with "Live in 14 days. Zero IT required. Cancel any time" significantly lowers perceived risk.

### 2. Specific Dollar Claim in the Hero
The headline "Stop losing $74K a year in silent member attrition. Start for zero." is specific enough to be interesting. It's supported by three stat boxes: **65%** ("Avg. at-risk member retention rate"), **$74K** ("Avg. dues recovered per club for 90 days"), and **5 of 7** ("Founding clubs recovered annual cost within 60 days"). The specificity of "5 of 7" is more credible than a round number — it implies honest reporting of a small cohort.

### 3. Interactive ROI Calculator
The "Find out exactly how much dues revenue is walking out your door" section with adjustable sliders (Dues Protected, Total Members, Avg. Member Dues, Annual Turnover Rate) producing dynamic outputs ($129,000 exposure, $80,000 Swoop recovers, etc.) is a strong trust-building tool. It lets the buyer self-validate using their own numbers rather than swallowing Swoop's claims.

### 4. One Named Testimonial with Specifics
The quote attributed to **Landon Mokma, VP, Pinnacle Country Club, 500+ member founding partner club** is real-named, titled, and attributed to a specific club. The quote references "5-10 resignations saved" and "returned over 10x." This is the strongest proof element on the page.

### 5. "Zero Implementation Fees" Callout
The line "Zero Implementation Fees. Swoop's onboarding team maps your existing tech in 97% less time than legacy club software installs. No hidden API costs." directly addresses a known pain point (implementation friction and surprise costs). The "97% less time" is oddly specific, which cuts both ways (see Trust Killers), but the message is well-targeted.

### 6. FAQ Section Addressed to "Things GMs ask us"
The FAQ is persona-targeted, using language like "Do I need to replace my current software?" and "Is my members' data secure?" These are the right questions for the right buyer. The integration answer mentions "18 integrations across CMA programs" and the security answer references "bank-level product data encryption" and "SOC-2" and "annual third-party audits." SOC-2 mention is a meaningful trust signal if verifiable.

---

## Trust Killers (What's Hurting)

### 1. **"5 of 7" Claim Is Unverifiable — No Named Clubs, No Timeframes, No Cohort Context** (Severity: Critical)
The hero states "5 of 7 founding partner clubs recovered Swoop's annual cost within 60 days of their first intervention (2024 cohort)." This is the central proof claim of the entire page. Yet:
- No clubs are named (except Pinnacle in the testimonial, and it's unclear if Pinnacle is one of the 7).
- "2024 cohort" — when in 2024? Q1? Q4? If it's recent, 60 days is a very short measurement window.
- "Recovered Swoop's annual cost" — at which tier? $499/mo × 12 = ~$6K? Or $1,499 × 12 = ~$18K? The math matters and isn't shown.
- There is a small note under the $74K stat: "Based on founding partner data (2024 Cohort)" — a sample size of 7 clubs is acknowledged, which is honest, but it also means this is extremely early-stage data that a careful buyer would discount heavily.

### 2. **Single Testimonial on a Pricing Page** (Severity: High)
One testimonial — from Landon Mokma at Pinnacle Country Club — is the only voice-of-customer on the page. For a $6K–$18K/year decision by a risk-averse club GM:
- Where are the other 4–6 founding partners?
- No case study links. No "Read their story" CTAs.
- No logos of partner clubs.
- The testimonial mentions "5-10 resignations saved" — this is a range, not a specific number, which a skeptic notes as hedging.

### 3. **The ROI Calculator Assumptions Are Not Transparent** (Severity: High)
The calculator shows outputs like "$80,000 Swoop recovers" and a "Swoop + retention cost" of $5,988 alongside "Net member gain" of $74,012. But:
- What recovery rate assumption drives the $80,000 figure? Is it the "65%" cited in the hero? If so, is that average across 7 clubs or a best-case?
- The calculation appears to auto-populate using Swoop's claimed averages rather than letting the user control the recovery rate assumption.
- A CFO or COO reviewing this would want to see the formula, not just the output.
- The small text "Based on early results from Pinnacle's 12 founding partner club avg. recovery rate" is partially visible — "Pinnacle's 12 founding partner" is confusing. Is it 7 clubs or 12? This inconsistency (7 in the hero, 12 here) is a credibility problem.

### 4. **"97% Less Time Than Legacy Club Software Installs"** (Severity: Moderate)
This claim under "Zero Implementation Fees" is oddly precise and completely unsubstantiated. Compared to what legacy software? Measured how? 97% of what baseline? This reads like a marketing number that was chosen for impact rather than accuracy.

### 5. **No Team, No Company Story, No Physical Presence on This Page** (Severity: Moderate-High)
The pricing page contains zero information about who is behind Swoop. There is a footer with what appears to be a mailing address ("115 Perimeter Center Place, Suite 1190, Atlanta, GA 30346") and a phone number, and navigation links to "About" and "Contact" — but on the pricing page itself, which is often where a buyer makes their final evaluation, there are no team photos, no founder story, no "backed by" signals.

### 6. **Footer Copyright and Vercel Deployment URL** (Severity: Moderate)
The site is deployed on `swoop-member-intelligence-website.vercel.app` — a Vercel staging/preview URL, not a custom domain like `swoopintel.com`. For a B2B SaaS company asking for $1,499/mo, operating on a Vercel subdomain signals "this is a landing page, not an established company." A sophisticated buyer would immediately question operational maturity.

### 7. **Unanswered FAQ Questions** (Severity: Low-Moderate)
The FAQ shows four questions: "Do I need to replace my current software?" (answered), "Is my members' data secure?" (answered), "What does the founding partner program actually look like?" (visible but answer not fully visible), and "What happens if we cancel?" (visible but answer not fully visible/expanded). The cancellation question is critical for a risk-averse buyer and should be prominently answered.

### 8. **Feature Differentiation Is Vague in Lower Tiers** (Severity: Low-Moderate)
The $0/mo "Signals" tier lists items like "Get daily alerts," "See which members show early indicators of disengagement, risk, complaint, and more — before any data points hit." This is compelling but abstract. What does an alert look like? How is "early indicator" defined algorithmically? The tier descriptions use benefit language but lack specificity about what the user actually experiences.

---

## The Due Diligence Gaps

A careful buyer would leave this page and immediately research:

1. **"Pinnacle Country Club" + "Landon Mokma"** — Is this a real person at a real club? Does their LinkedIn corroborate the VP title and Swoop relationship?

2. **"Swoop Club Intelligence" on LinkedIn** — How many employees? When was it founded? Does the company page exist and look active?

3. **The founders/leadership team** — Who built this? What's their background? Club industry insiders or pure tech? The site offers no signal on this page.

4. **SOC-2 compliance** — The FAQ mentions it. Is there a SOC-2 Type II report available? Or is this aspirational? "Annual third-party audits" — by whom?

5. **Club management system integrations** — The FAQ claims 18 integrations. Which CMA systems? Jonas? Northstar? Club Essentials? This is a deal-breaker question for GMs and it's not answered on the pricing page.

6. **What happens to my data if I cancel?** — The FAQ question is visible but the answer isn't expanded. A GM whose member data flows into Swoop needs to know about data portability and deletion.

7. **The actual 7 founding partner clubs** — Can Swoop provide references? Will any of the 7 take a call? This is the #1 thing a serious buyer would request.

8. **Competitive landscape** — How does Swoop compare to MembersFirst, Clubessential's retention tools, or even simple BI dashboards built on existing CMA data? No competitive positioning exists on this page.

9. **The "2024 cohort" timing** — If the product launched mid-2024 and data is from 60-day windows, the total operational track record could be measured in months, not years. A buyer would want to understand product maturity.

10. **Custom domain and operational infrastructure** — Why is this on a Vercel staging URL? Is there a production site? Is this company actually operational or pre-launch?

---

**Bottom line:** The pricing page has a solid structural foundation — real pricing, a free tier, a calculator, and one named testimonial — but it's built on a proof base of roughly 7 clubs and one testimonial. For a conservative club GM considering a platform that touches sensitive member data and costs up to $18K/year, this page raises more questions than it answers. The trust gap between "interesting enough to book a walkthrough" and "confident enough to present to my board" is substantial.

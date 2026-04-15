# Swoop Marketing Website Audit — Product Alignment Review
## Against Product Audit MVP Alignment v5 + Survey Data

**Date:** April 15, 2026  
**Source inputs:** Product Audit v5 (10-club quantitative survey, 4-club qualitative deep-dive), live marketing website codebase (swoop-member-intelligence-website, April 2026 build)  
**Method:** Each marketing claim evaluated against validated survey signal. Findings sorted by severity: 🔴 Critical (actively hurts conversion), 🟡 Moderate (misalignment without deception), 🟢 Positive (well-aligned, reinforce).

---

## CRITICAL FINDINGS — Fix Before Next Demo

### 🔴 1. The Website Sells Autonomous AI. GMs Want Manual Control.

**Where:** Hero eyebrow ("AI-Powered Operating Intelligence"), Comparison table ("AI agent automation: ✓"), `agents` data array ("Engagement Autopilot"), AgentsLiveDemo ("6 AGENTS ONLINE"), AgentsSection subtitle framing.

**The conflict:**
The survey is unambiguous: **0/4 wanted auto-approve. 3/4 want manual or gradual trust.** The Product Audit explicitly calls for defaulting to fully manual and labeling autonomous execution as excluded from MVP.

The marketing website leads with "AI agent automation" as a competitive differentiator. The word "Autopilot" in "Engagement Autopilot" signals autonomous execution. The demo widget shows "6 AGENTS ONLINE" — language that implies independent action.

**What a skeptical GM reads:** "This AI will send messages to my members without my approval." That's the exact barrier that kills the demo.

**Fix:**
- Change "AI agent automation" in the comparison table to "AI-drafted action recommendations" (manual approval by default)
- Rename "Engagement Autopilot" → "Engagement Coach" or "Engagement Advisor"
- AgentsLiveDemo widget: Change "6 AGENTS ONLINE" → "6 INTELLIGENCE STREAMS" or "DAILY BRIEF · 6 SIGNALS"
- Add one line to the agents section: "Every recommended action requires GM approval before anything is sent."
- The trust ramp is a feature: "Start manual. Unlock automation as your confidence grows." This is what GMs said they want — and the website never says it.

---

### 🔴 2. The $1,499/mo Top Tier Features GPS + Member App. The Product Audit Says This Doesn't Exist.

**Where:** `pricingTiers` in `data.js`, PricingSection.jsx, PricingPage.

**The conflict:**
The Product Audit says under FEATURES TO EXCLUDE: "Location Intelligence / GPS — Requires unbuilt mobile app + GPS infrastructure." The top pricing tier explicitly lists "GPS + on-property member behavior" and "Swoop member app included" as paid features.

**What this means:** The website is charging $1,499/mo for features the product audit classifies as unbuilt infrastructure. Any club that buys this tier expecting a working member app and GPS layer will immediately lose trust.

**Fix options:**
- Option A: Remove the $1,499 tier entirely and replace with an "Enterprise / Multi-property" tier with a "Contact us" CTA — no feature list that includes unbuilt items.
- Option B: Reframe the top tier around what's actually differentiated and working: unlimited integrations, dedicated success manager, multi-property, custom board reports, SLA. Remove GPS and member app references.
- In either case: never describe a feature as purchasable if the infrastructure doesn't exist.

---

### 🔴 3. The Jonas Integration Claim Doesn't Match Product Reality.

**Where:** FAQ ("28 integrations across 10 categories. Tee Sheet: ForeUP, Jonas Club..."), integrations section, hero trust bullets.

**The conflict:**
The Product Audit says: **"CSV import only today. The biggest trust signal for Day 1 is 'works with Jonas.' CSV import exists but a native Jonas connection is the long-term unlock."**

The marketing website states multiple times that Jonas is a supported integration. The FAQ says it verbatim: "Jonas Club" in tee sheet integrations, "Jonas, ClubEssential, Northstar" in CRM. These are listed as active integrations, not roadmap items.

**The stakes:** All 4 qualitative clubs use Jonas. Brad (Pine Island CC), Chris (Spring Brook CC), and Esteban (Pinetree CC) all said "maybe" and the audit notes their key question is "Does this work with Jonas?" If they discover mid-demo that Jonas integration means CSV upload — not a native API connection — it destroys trust at the most critical moment.

**Fix:**
- Be specific in the Jonas FAQ answer: "Yes, Swoop connects to Jonas via CSV import today. Your Jonas data can be in Swoop in under 10 minutes. Native API sync is on the roadmap — CSV is how our founding partners run it now."
- If any native Jonas integration genuinely exists, specify it precisely.
- Replace "28 integrations" claim with something defensible — either the actual integration count via native API, or reframe as "supports 28+ platforms via API and CSV import."
- The honest framing is actually a trust builder: "No black-box Jonas plugin. You export a standard Jonas report, we ingest it in minutes. It works with whatever Jonas version your club is on."

---

### 🔴 4. The #1 Survey Finding (90-Day New Member Tracking) Doesn't Appear Anywhere on the Website.

**Where:** Missing from all pages — Hero, Platform, Pricing, About, Contact.

**The conflict:**
The Product Audit identifies 90-day new member habit tracking as the **single unanimous finding** — 4/4 GMs selected it. "Which new members are failing to build habits in their first 90 days?" is described as "the highest-signal proof point for Layer 3."

Search the entire marketing website and you find: zero mentions of new member onboarding, 90-day cohorts, first-90-day habit formation, or new member failure to engage. The hero, agents demo, and capabilities sections don't surface this at all.

**Why this matters:** In a demo, when a GM sees that Swoop can tell them "3 members are at Day 45 with no event visits" — that's the moment they reach for their credit card. The marketing copy never creates that expectation.

**Fix:**
- Add a 4th item to the morning brief demo in the hero: `{ time: '06:14', label: 'New Member Alert', detail: 'Kevin Harrington · Day 47 · 0 events attended · 1 round total · pattern matches early churn', value: '90-day window closing' }`
- Add one bullet to the Member Intelligence capability card: "Flags new members who haven't built dining, golf, and event habits by day 45 — before the 90-day window closes."
- On the Platform page (HowItWorksSection or AgentsSection): call out the 90-day cohort explicitly as one of the most actionable outputs.
- On the Pricing page: Include "New member 90-day alerts" in the free tier features — this is the feature that most immediately proves the product's value.

---

## MODERATE FINDINGS — Fix Before Launch

### 🟡 5. F&B Is Framed as Margin Recovery. GMs Have Accepted F&B Losses as Structural.

**Where:** `coreCapabilities` data.js: "Stop leaving covers on the table." "$5.7K monthly F&B upside." Platform page F&B capability card.

**The conflict:**
The Product Audit is explicit: **"8/10 have ACCEPTED F&B losses as structural. Do not frame Revenue as 'fix your F&B.' Frame as 'F&B data tells you which members are happy and which are leaving.'"**

The marketing website leads the F&B capability with "Stop leaving covers on the table" — the exact framing the audit says to avoid. A GM who has accepted that F&B runs negative (8 out of 10) reads this and dismisses it: "That's not my problem to solve with software."

**Fix:**
- Change "Stop leaving covers on the table." → "Know which members are drifting — before they stop coming to dinner."
- Change the bullet "Forecast post-round dining conversion by tee block" → "Dining frequency is the earliest leading indicator of member health. Swoop surfaces which members' F&B behavior predicts churn — 6 weeks before they resign."
- Keep the staffing/labor framing around Saturday lunch (the unanimous playbook) — that one is correctly positioned.

---

### 🟡 6. The Complaint Follow-Through Urgency Is Undersold.

**Where:** Problem cards in `data.js` (complaint follow-up gap is card #2, not card #1), AgentsLiveDemo (Service Recovery is agent #3 in rotation), capabilities section.

**The conflict:**
The survey: **3/4 picked "schedule GM call when complaint > 30 days with no follow-up"** — described as "the most concrete daily pain in the survey" and something that "lands in every sales conversation."

Yet on the website, it's the second problem card (not the lead), the third agent in the live demo rotation (not the first), and the complaint capability is nowhere near the top of any page.

**Fix:**
- Elevate complaint follow-through to hero position in the problem cards section — make it card #1.
- In AgentsLiveDemo, put Service Recovery as the first scenario in the `scenarios` array (or at least second after Member Pulse).
- In the hero brief preview, the "Service Recovery" item already appears — good. Strengthen the copy: "Dining complaint aging 6d · 30-day window breached · callback drafted" to emphasize the time-critical nature.
- Add to the FAQ: "How does Swoop handle complaint follow-through?" with a specific answer about the 30-day escalation alert.

---

### 🟡 7. The Staffing Saturday Lunch Playbook Is Hidden. It's the Most Validated Action in the Survey.

**Where:** `coreCapabilities` — Staffing card exists but doesn't call out Saturday lunch. AgentsLiveDemo — Labor Optimizer scenario exists but is 4th of 6.

**The conflict:**
The survey: **4/4 selected "add server to Saturday lunch" — the single most validated action in the entire survey.** The Product Audit calls it "the strongest conversion-driver playbook in the product."

The marketing website has a Labor Optimizer agent and a Staffing capability — but neither one leads with Saturday lunch specifically. The Labor Optimizer demo scenario says "Sat lunch forecast · 95 covers vs 6 staff scheduled" — that's good, and it should be promoted.

**Fix:**
- Make the Labor Optimizer the lead scenario in AgentsLiveDemo (currently 4th), or at minimum 2nd.
- Update the Staffing capability headline: "Staff for what's actually happening." → "Catch the Saturday lunch gap before your kitchen does."
- Add to the hero brief items or proofColumns: a direct Saturday lunch staffing mention.
- This is the #1 most validated action — it should appear in the hero, not be buried 4 agents deep.

---

### 🟡 8. Board Report Is Buried. It's the Biggest Purchase Justifier.

**Where:** proofColumns in HeroSection has "PROVE IT" — good, but generic. No dedicated Board Report mention on Platform or Pricing pages beyond passing references.

**The conflict:**
The survey: **2/4 rated ROI confidence as 1/5.** These GMs desperately need to justify Swoop's cost to their boards. The Product Audit identifies the Board Report as "the 'Prove It' layer. This is what justifies the $18K/yr conversation."

The marketing website's ROI Calculator helps with the purchase decision but doesn't connect to the actual Board Report as a product deliverable. A GM reading the website can't picture walking into a board meeting with a Swoop-generated report.

**Fix:**
- Add a specific Board Report callout on the Platform page: "One click generates the report your board wants to see — active members, at-risk count, dues protected this month, narrative auto-written from your data."
- On the Pricing page: include "Board-ready monthly report" as a named feature in the $499/mo tier (not just implied).
- Update the hero "PROVE IT" column body: change generic copy to mention the specific deliverable: "Auto-generated board narrative. Every save attributed, every dollar sourced. One click."

---

### 🟡 9. Social Proof Is Anonymous. The Audit Names Specific Clubs.

**Where:** Hero quote ("Founding-partner GM · 450-member private club"), AgentsLiveDemo attribution ("Pinetree CC founding-partner deployment").

**The conflict:**
The audit references specific clubs — Pinetree CC (Esteban), Pine Island CC (Brad), Spring Brook CC (Chris). The AgentsLiveDemo already attributes dollar values to "Pinetree CC founding-partner deployment" — this is the right instinct.

But the hero testimonial is still anonymous: "Founding-partner GM · 450-member private club." The audit notes these three GMs all said "maybe" and are close to converting. Named attribution (with permission) dramatically increases credibility at this stage.

**Fix:**
- Replace the anonymous hero quote with a named quote from Esteban (Pinetree CC) or whichever founding partner has given permission for named attribution.
- Even a first name + club name is significantly more credible: "Esteban M. · GM, Pinetree CC" beats "Founding-partner GM."
- If permission isn't secured, add "— [Club name available on request]" rather than the vague "450-member private club."

---

### 🟡 10. The Comparison Table Lists "AI Agent Automation" as a Swoop Differentiator. This Creates the Wrong Expectation.

**Where:** `comparisonFeatures` in data.js, ComparisonSection.jsx.

**The conflict:** (Overlaps with finding #1 but specific to this surface.)
"AI agent automation: Swoop ✓, Waitlist tools ✗, CRM ✗" tells a GM: "The thing that makes Swoop different is that AI does stuff automatically for you." But the survey says that's not what GMs want yet. The actual differentiator is **cross-system intelligence that delivers human-reviewable recommendations** — not automation.

**Fix:**
- Replace "AI agent automation" with "AI-drafted action recommendations (human-approved)"
- Add to comparison table: "Manual approval inbox" with Swoop ✓ and others as N/A
- This makes the trust ramp a feature rather than an implicit threat.

---

## POSITIVE FINDINGS — Reinforce and Expand

### 🟢 11. The Morning Brief Framing Is the Right Anchor.
The hero headline ("one 6 AM brief") and the SampleBriefModal both correctly center the product's value on a concrete daily deliverable. The audit's top outcome was "real-time cockpit — 5/10 survey respondents." The brief is a strong hook. Keep it and amplify.

### 🟢 12. Jonas Is in the FAQ. The Jonas FAQ Answer Exists.
The FAQ has "Does this work with Jonas / ClubEssentials?" — getting this question out front is right. The issue is the answer claims native integration that may not exist (see finding #3). The instinct to address Jonas first is correct; the honesty of the answer needs work.

### 🟢 13. The "See It / Fix It / Prove It" Framework Maps to Layer 3.
The proofColumns (SEE IT, FIX IT, PROVE IT) closely mirror the Layer 3 structure — member health, recommended actions, board attribution. This is the right narrative spine. It should be reinforced more explicitly on the Platform and About pages.

### 🟢 14. "Adopted Complaint Follow-Up" Is Already in the Problem Cards.
The complaint follow-up problem card exists and is specific ("James Whitfield waited 42 minutes..."). The specificity is good. Just needs elevation to card #1 position given it's the #1 daily pain in survey data.

### 🟢 15. The ROI Calculator Addresses the "1/5 ROI Confidence" Survey Finding.
2/4 GMs rated their own ROI confidence at 1/5. The RoiCalculatorSection directly gives them numbers to take to their boards. This is well-aligned. The bridge copy connecting calculator to the pricing section was recently added — keep it and strengthen it.

---

## PRIORITY FIX ORDER

| Priority | Finding | Est. Impact | Effort |
|----------|---------|-------------|--------|
| P0 | #3: Jonas claim vs. CSV reality — fix the FAQ answer | Trust-killing if discovered in demo | 15 min copy change |
| P0 | #1: Remove "Autopilot" / autonomous agent language | Kills the demo for 3/4 of buyers | 30 min terminology sweep |
| P0 | #4: Add 90-day new member alert to hero brief + capabilities | Highest-validated survey signal — not on site | 45 min across 3 files |
| P1 | #2: Remove GPS/member app from $1,499 tier | Selling unbuilt features at top tier | 30 min pricing reframe |
| P1 | #6: Elevate complaint follow-through to card #1 | Most concrete daily pain in survey | 20 min data reorder |
| P1 | #7: Promote Saturday lunch staffing to featured position | Most validated single action, buried at agent #4 | 20 min order/copy change |
| P2 | #5: Reframe F&B capability away from margin recovery | 8/10 have accepted F&B losses — wrong hook | 20 min copy change |
| P2 | #8: Add Board Report as a named product deliverable | Purchase justifier for board-approval-required deals | 30 min copy addition |
| P2 | #10: Replace "AI agent automation" in comparison table | Wrong differentiator message | 10 min |
| P3 | #9: Named social proof | Credibility lift at demo-closing stage | Requires founder approval |

---

## THE ONE SENTENCE THAT FIXES THE MOST

If you could only change one thing on the website, add this line to the hero — under the primary CTA, before the brief sample:

> "Every action Swoop recommends requires your approval before anything is sent. Start manual. Unlock more as you see it working."

This single sentence pre-empts the biggest objection (AI out of control), converts the trust ramp from an implicit concept into a named feature, and aligns the marketing with the product's actual default behavior.

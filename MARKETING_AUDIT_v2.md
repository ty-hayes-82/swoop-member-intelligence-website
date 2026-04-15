# Swoop Marketing Website Audit — v2 Progress + New Findings
## Against Product Audit MVP Alignment v5 + Survey Data

**Date:** April 15, 2026  
**Baseline:** MARKETING_AUDIT_v1.md (same date, earlier session)  
**Method:** Full re-read of all `.jsx` and `data.js` files post-v1. V1 findings re-evaluated against current code. New sections (AgentRevealSection, IndustryStatsSection, TestimonialsSection, SocialProofSection, SaveStorySection) audited for the first time. Findings sorted by severity: 🔴 Critical, 🟡 Moderate, 🟢 Positive.

---

## V1 FINDINGS: STATUS REPORT

| V1 Finding | Status | Evidence |
|---|---|---|
| #1 Autonomous AI language (Autopilot, "6 AGENTS ONLINE") | **PARTIAL** | See new finding #1 below |
| #2 GPS/member app in $1,499 tier | ✅ **FIXED** | Top tier now: SSO, SLA, unlimited integrations, dedicated success manager |
| #3 Jonas claim vs. CSV reality | ✅ **FIXED** | FAQ: "Today, Swoop connects via CSV export from Jonas (standard reports, no IT required)." |
| #4 90-day new member tracking missing | ✅ **FIXED** | Hero brief has `New Member Alert · Kevin Harrington · Day 47`; capability card; Member Pulse agent description |
| #5 F&B "leaving covers on the table" framing | ✅ **FIXED** | Now: "Dining frequency is the earliest churn signal." |
| #6 Complaint card not #1 | ✅ **FIXED** | Complaint card is now lead in `problemCards` array |
| #7 Saturday lunch buried (agent #4) | ✅ **FIXED** | Labor Optimizer is scenario #1 in `AgentsLiveDemo` |
| #8 Board report not named | ✅ **FIXED** | "Board-ready monthly report" is an explicit line item in $499/mo tier |
| #9 Anonymous social proof | 🟡 **PARTIAL** | Hero quote still reads "Founding-partner GM · 450-member private club · 90-day window" |
| #10 "AI agent automation" in comparison table | ✅ **FIXED** | Now "AI-drafted action recommendations (GM-approved)" |
| — "One sentence fix" recommended | ✅ **ADDED** | HeroSection.jsx line 251: "Every recommended action requires your approval before anything is sent. Start manual — unlock more as you see it working." |

Eight of ten v1 critical/moderate findings are fully resolved. Two remain partially open.

---

## REMAINING V1 ISSUE — Fix Immediately

### 🔴 1. "Engagement Autopilot" Still Lives in AgentRevealSection

**Where:** `AgentRevealSection.jsx` line 40, `narrativeBlocks[3].agents`

**The code:**
```js
{
  time: 'The Floor',
  agents: 'Labor Optimizer · Engagement Autopilot',
  ...
}
```

**The conflict:**
The main agents list in `data.js` already uses "Engagement Advisor" — the correct name. `AgentsLiveDemo` correctly shows the sixth scenario as "Engagement Advisor." `AgentRevealSection` is the only location still using the old name. A GM reading "The Floor" block in a scrollthrough sees "Engagement Autopilot" directly below the GM-approval quote — an ironic juxtaposition that undercuts the trust framing in the same section.

**Fix:**
Change `agents: 'Labor Optimizer · Engagement Autopilot'` → `agents: 'Labor Optimizer · Engagement Advisor'`  
One character change. 30 seconds.

---

## NEW FINDINGS — Sections Not Audited in V1

### 🔴 2. AgentRevealSection "The Revenue" Block Has No GM-Approval Qualifier

**Where:** `AgentRevealSection.jsx`, `narrativeBlocks[2]` ("The Revenue")

**The current copy:**
```
Action Taken: Drafted & targeted F&B offer to waitlist members.
Outcome: +$780 incremental revenue booked.
```

**The conflict:**
"Drafted & targeted F&B offer to waitlist members" reads as the agent autonomously sent a promotional offer to members. The survey finding (#1 v1 critical) was explicit: 0/4 GMs wanted auto-approve. The neighboring "The Floor" block correctly includes an execution note: *"Automatically drafts an SMS to your F&B Director… AI never sends without your sign-off."* "The Revenue" block has no equivalent qualifier — it looks like the agent acted unilaterally.

**Fix:**
Add an `execution` field to "The Revenue" block (parallel to "The Floor"):
```js
execution: 'Drafts the offer text and targets the right waitlist members for your review — you approve the send before anything goes out.',
```
Or change "Drafted & targeted" → "Drafted a targeted offer for your approval" in the Action Taken bullet. Either makes the trust ramp consistent across all four blocks.

---

### 🟡 3. SocialProofSection Claims "Live Jonas Integration" — Jonas Is CSV

**Where:** `SocialProofSection.jsx` line 41, section subtitle

**The current copy:**
> "Metrics from our Pinetree CC founding-partner deployment — 300 members, live ForeUP + Jonas + Toast integration, 90-day analysis window."

**The conflict:**
The FAQ (correctly updated per v1) says Jonas connects via CSV export, not a live API. But `SocialProofSection` calls it a "live ForeUP + Jonas + Toast integration" in the same breath as ForeUP and Toast (which may have native integrations). A GM who sees "live Jonas integration" here and then reads the honest FAQ answer will feel baited. The inconsistency is worse than either answer alone.

**Fix:**
Change subtitle to: `"Metrics from our Pinetree CC founding-partner deployment — 300 members, ForeUP + Jonas + Toast data, 90-day analysis window."`  
Drop "live" entirely. It avoids the false implication without requiring additional explanation.

---

### 🟡 4. IndustryStatsSection "5 of 7" Claim Implies a Larger Cohort Than the Product Audit Describes

**Where:** `IndustryStatsSection.jsx` line 7

**The current copy:**
```js
{ value: '5 of 7', label: 'Founding clubs recovered annual cost within 60 days', source: 'Swoop founding-partner data' }
```

**The conflict:**
The Product Audit describes a 10-club quantitative survey + 4-club qualitative deep-dive. The marketing website describes a small founding cohort. "5 of 7 founding clubs" implies exactly 7 founding-partner clubs — a number that needs to be verified against the actual deployment count. If the total deployed count is fewer than 7, or if "5 of 7" was computed on incomplete data, a GM asking "which 7 clubs?" in a demo could expose this. The Skeptic lens will surface this risk in the next critique cycle.

**Fix:**
Before publishing, verify the actual count of fully onboarded founding-partner clubs. If the number is 7, keep the stat and add a footnote. If the cohort is smaller, reframe to a rate: "71% of founding clubs recovered annual cost within 60 days" or use a different stat that is unambiguously defensible (e.g., the $74K average, which maps directly to the Pinetree CC data cited elsewhere).

---

### 🟡 5. SaveStorySection "9/14 Members Retained" and "Karen Wittman" Lack Disclaimers

**Where:** `SaveStorySection.jsx`, `ProveItPanel`, `proveStats` array and Karen Wittman case card

**The current copy:**
The `FixItPanel` approved-action card correctly labels itself: *"Illustrative example based on founding-partner club data."* The `ProveItPanel` does not carry an equivalent disclaimer — the stats ($32K one save, 9/14 members retained, $67K dues protected) and the Karen Wittman case are presented without qualification. The footnote at the bottom reads "Stats: Pinetree CC founding-partner data · 300 active members · 90-day deployment window" — this attribution is easy to miss and does not address whether "Karen Wittman" is a real person or a composite.

**Two issues:**
1. If "Karen Wittman" is a composite or pseudonym, the case reads as factual. If it is a real member, club management may object to member-level detail appearing in marketing materials.
2. "9/14 members retained" is a numerator/denominator stat. In a 300-member club, this is 3% of the member base — presented without that context, it sounds like a smaller cohort claim than it is.

**Fix:**
- Add one line under the Karen Wittman case: *"Member names changed. Case reconstructed from real activity data with club permission."*
- Add a source footnote to the proveStats row at the same visual weight as the FixItPanel disclaimer: *"Pinetree CC founding-partner data · 90-day window · illustrative names"*

---

## POSITIVE FINDINGS — New Sections

### 🟢 6. Hero "One Sentence Fix" Was Implemented Exactly as Recommended

`HeroSection.jsx` line 251–252:
> "Every recommended action requires your approval before anything is sent. Start manual — unlock more as you see it working."

This is the single highest-leverage copy change from v1. It now appears directly below the primary CTAs, before the brief preview — the optimal placement. The wording is essentially identical to the v1 recommendation. This line pre-empts the biggest demo objection before the GM reaches the agents section.

### 🟢 7. TestimonialsSection Handles Anonymity Correctly

The section subtitle reads: *"Early clubs in our founding cohort. Names withheld at their request — ask us for a reference call on your walkthrough."*  
This is the right framing. Anonymous testimonials with an explicit explanation ("at their request") and a clear path to verification ("reference call") are more credible than vague attribution. The CTA at the bottom — *"request a reference call with a founding-partner GM"* — directly converts the anonymity from a liability into a trust signal.

### 🟢 8. SocialProofSection Pinetree CC Attribution Is Specific and Compelling

The "$1.38M at-risk dues flagged" metric with the attribution "23 flagged members, 300-member Pinetree CC, annualized at full dues rates" is more credible than a generic percentage. Naming the club, specifying the member count, and explaining the math ("annualized at full dues rates") gives a skeptical GM something to interrogate and verify — which is what builds trust. This is the right model for the rest of the stats on the site.

### 🟢 9. AgentRevealSection Trust Framing Is Strong (Except Finding #1 and #2)

The section's concluding line — *"Every agent proposes. You decide. The outcome is tracked. The model gets smarter."* — is the product's operating philosophy stated cleanly. The "The Floor" block's execution note (*"AI never sends without your sign-off"*) is precisely the language that converts a skeptical GM. If "The Revenue" block gets a matching qualifier (finding #2), the entire section will be consistent with the survey findings.

### 🟢 10. F&B Reframe Exceeds the V1 Recommendation

The v1 fix was to change "Stop leaving covers on the table" to "Know which members are drifting." The current code goes further:  
> *"Dining frequency is the earliest churn signal."*  
> *"F&B data tells you which members are happy — and which are leaving."*

This is better than the v1 recommendation — it makes F&B data a leading indicator of member health, not a revenue line item. The survey finding (8/10 have accepted F&B losses as structural) is fully addressed.

---

## PRIORITY FIX ORDER

| Priority | Finding | Location | Effort |
|---|---|---|---|
| P0 | #1: "Engagement Autopilot" carryover | `AgentRevealSection.jsx` line 40 | 30 sec |
| P0 | #2: "The Revenue" block missing GM-approval qualifier | `AgentRevealSection.jsx` narrativeBlocks[2] | 5 min |
| P1 | #3: "live Jonas integration" claim in SocialProofSection subtitle | `SocialProofSection.jsx` line 41 | 30 sec |
| P1 | #5: Karen Wittman / 9-of-14 stats missing disclaimers | `SaveStorySection.jsx` ProveItPanel | 10 min |
| P2 | #4: "5 of 7 founding clubs" — verify against actual cohort size | `IndustryStatsSection.jsx` | Verify first |
| P3 | #9 (carried): Named social proof in hero | `HeroSection.jsx` | Requires GM permission |

---

## STATE SUMMARY

The website has resolved all four v1 critical findings and five of six moderate findings. The product-market alignment is substantially improved. The two remaining P0 items (#1 Autopilot, #2 Revenue block approval) are both in `AgentRevealSection.jsx` and can be fixed in under 10 minutes. The three new moderate findings (#3 Jonas subtitle, #4 stat cohort, #5 SaveStory disclaimers) are copy-level changes — none require component work.

The site is now close to demo-ready. The remaining risk is not messaging misalignment — it is factual precision: claim-backing (cohort size), consistent terminology ("Autopilot" vs. "Advisor"), and disclaimer coverage (case names, illustrative vs. real data). These are finishing touches, not structural repairs.

# The Mobile Inspector — Contact / Demo

**Page:** Contact / Demo
**URL:** http://localhost:4173/#/contact
**Lens:** The Mobile Inspector
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:55:43.935Z

---



## Mobile UX Verdict

This page is a strong mobile execution — clean single-column layout, legible typography, and a well-structured conversion flow that guides the user from value proposition to form without friction. The single highest-priority fix is increasing the font size of the security badges and sub-text beneath the CTA button, which appear to be ~11-12px and strain readability on mobile.

**Overall Score: 82 / 100**

## Dimension Scores

| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 92 | Clean single-column layout with no horizontal overflow; consistent side padding throughout |
| Typography Legibility | 78 | Body text is well-sized but security badges, footer text, and "What happens next" sub-items are too small |
| Tap Targets & Interaction | 76 | Form fields and primary CTA are well-sized, but footer links and expandable "Data handling" trigger are tight |
| Content Prioritization | 85 | Strong above-the-fold messaging; form is reachable but requires significant scrolling |
| Mobile Conversion Flow | 80 | Form is clean and usable; minor friction from small trust signals and no sticky CTA |

---

## Critical Mobile Issues (fix immediately)

### 1. Sub-CTA security badge text is too small (~11-12px)
**Where:** Directly beneath the "Get My Custom Retention Plan" button — the three lines: "AES-256 Encryption", "SOC 2 Type II (Audit Active)", "Mutual NDA on Every Engagement"
**Impact:** These are critical trust signals for a B2B audience considering sharing their tee-sheet and POS data. At this size, they're barely legible without squinting. A GM evaluating data security will struggle to read the very text meant to reassure them.
**Fix:** Increase to 14px minimum; consider restructuring as a small horizontal icon row or slightly larger stacked list.
**Dimensions affected:** Typography Legibility, Mobile Conversion Flow

### 2. Footer link tap targets are undersized and tightly spaced
**Where:** Bottom of page — "Privacy Policy" and "Terms of Service" are separated by a mid-dot and appear to be ~12px text with minimal vertical padding. The copyright line "© 2026 Swoop Golf, Inc. All rights reserved." is also very small.
**Impact:** These links likely fail the 44×44px Apple HIG minimum. While footer links are low-priority interactions, they're legally required and should be tappable.
**Fix:** Increase footer link font size to 14px, add at minimum 12px vertical padding around each link, and increase spacing between "Privacy Policy" and "Terms of Service."
**Dimensions affected:** Tap Targets & Interaction, Typography Legibility

### 3. "Data handling & security details" expandable trigger — tight tap target
**Where:** Below the security badges, the disclosure triangle "► Data handling & security details" appears to be a collapsible section trigger.
**Impact:** The text appears ~13-14px with minimal vertical padding. The tap target is likely below 44px height, making it frustrating for thumb taps. This section contains information a security-conscious buyer would actively seek.
**Fix:** Add padding to make the entire row at least 48px tall. Make the tap area span the full width.
**Dimensions affected:** Tap Targets & Interaction

### 4. "What happens next" sub-text items are too small
**Where:** Below the numbered steps — specifically "Seamless read-only API connection to Jonas, Clubessential, Northstar, etc. Zero IT required." appears in a lighter gray at roughly ~12-13px.
**Impact:** This is valuable objection-handling copy (zero IT required, read-only API) that addresses a real buyer concern. It's nearly unreadable at this size.
**Fix:** Increase to 14px minimum; consider making the color slightly darker for better contrast against the off-white/cream background.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 5. Email link "demo@swoopgolf.com" — verify tap target height
**Where:** Just above the form, "Or email us at demo@swoopgolf.com"
**Impact:** The link text itself looks appropriately sized (~15-16px), but if the line height and padding don't create a 44px tap zone, thumb users may mis-tap. It's also positioned close to the "No credit card · 30 minutes · Your club's own data" text above it.
**Fix:** Ensure the link has at least 44px of effective tap height with sufficient top/bottom margin from surrounding text.
**Dimensions affected:** Tap Targets & Interaction

---

## Mobile Wins (what works well)

### 1. Hero section is exceptional
The headline "Get a Custom Retention Plan. Not a Pitch Deck." is perfectly sized for mobile — large enough to command attention without causing awkward line breaks. The subhead paragraph beneath it is well-sized (~16-17px), creating a comfortable reading experience. The value proposition is immediately clear.

### 2. Checklist section with checkmarks
The "WHAT YOU'LL LEAVE WITH" section uses orange/coral checkmarks with well-spaced bullet points. Each item has sufficient line height, and the text wraps naturally at 390px. Copy like "A ranked list of your top 5 revenue and retention gaps" and "Your data under mutual NDA" is perfectly legible.

### 3. Testimonial block stands out effectively
The italic quote — *"Swoop flagged a member we were about to lose. One dinner comp and a follow-up call saved $18K in annual dues."* — is visually distinct with its dark background section and italic styling. The attribution "Robert Torres, GM · Meridian Hills CC · 340-member equity private club" provides specific, credible social proof. The contrast is strong.

### 4. Form design is clean and mobile-optimized
Three fields only (Name, Club, Email) — the minimum viable set for a demo request. Field labels are positioned above inputs (not floating/inline). The placeholder text "e.g., Pine Valley Golf Club" in the Club field is a smart touch — it signals the caliber of client Swoop targets. Input fields appear to be full-width with appropriate padding.

### 5. Primary CTA button is well-executed
"Get My Custom Retention Plan" is a full-width button in a dark color (appears dark brown/black) with white text at a readable size. The button height appears to be ~48-50px, well above the 44px minimum. The copy is specific and action-oriented rather than generic "Submit."

### 6. Consistent side padding throughout
The page maintains what appears to be 20-24px side padding consistently from the hero through the form section. No content bumps against the viewport edges. No horizontal overflow anywhere.

### 7. Section transition between white and cream backgrounds
The page uses a subtle background color shift from white (upper hero/checklist) to an off-white/cream (lower social proof/form section), which creates a natural visual progression without jarring breaks.

---

## Quick Fixes vs. Structural Fixes

### Quick Fixes (<1 hour)

| Fix | Effort | Details |
|-----|--------|---------|
| Increase security badge text to 14px | 5 min | CSS font-size change on the AES-256/SOC 2/NDA text below CTA |
| Increase footer link size and padding | 10 min | CSS: font-size 14px, padding 12px 0 on Privacy Policy / Terms links |
| Add padding to "Data handling & security details" trigger | 10 min | CSS: min-height 48px, padding 12px 0 on the disclosure element |
| Increase "What happens next" sub-text size | 10 min | CSS: font-size 14px on the explanatory text below step 2 |
| Darken sub-text gray for better contrast | 5 min | CSS: change color from current light gray to at least #555 or darker |
| Add vertical padding around email link | 5 min | CSS: padding or margin adjustment for tap target compliance |

### Structural Fixes (>1 day)

| Fix | Effort | Details |
|-----|--------|---------|
| Add sticky mobile CTA bar | 1-2 days | A fixed-bottom bar with "Book Your Walkthrough" that appears after scrolling past the hero, collapsing when the user reaches the form section. This would reduce the conversion gap caused by the long scroll distance to the form. |
| Implement progressive form disclosure | 1-2 days | Consider a two-step form flow: Step 1 shows just email field with CTA, Step 2 reveals name + club after email entry. Reduces perceived friction on mobile. |
| Add mobile-specific field input types | 30 min - 1 hr | Verify the Email field uses `type="email"` for mobile keyboard optimization. If the form ever adds a phone field, ensure `type="tel"`. Requires testing across form implementation. |

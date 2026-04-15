# About — Recommendations to Achieve 95/100

**Page:** About
**URL:** http://localhost:4180/#/about
**Recommendations Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:18:08.075Z

---

# About — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 89/100 | 95/100 | Weak CTA button hierarchy, floating text links, and unequal FAQ open/close icons. |
| The GM (Buyer Persona) | 94/100 | 96/100 | Fear of complex dashboards and unclear integration requirements. |
| The Closer (Conversion) | 92/100 | 96/100 | Missing sticky CTA, high friction "Claim a spot" copy, and un-bolded hero text. |
| The Speedster (Performance) | 95/100 | 98/100 | Font-display swap missing, React hydration overhead, explicit avatar dimensions. |
| The Skeptic (Trust) | 88/100 | 95/100 | "© 2026" time-travel copyright, HQ address mismatch, unverified Jonas phrasing. |
| The Storyteller (Messaging) | 95/100 | 98/100 | VC-jargon "Moat" eyebrow, invasive "sit in your systems" phrasing. |
| The First-Timer (Clarity) | 95/100 | 97/100 | Needs explicit mention of other non-Jonas systems earlier. |
| The Brand Guardian (Brand) | 95/100 | 98/100 | White-on-orange contrast violation, inconsistent eyebrow pill vs. floating style. |
| The Mobile Inspector (Mobile UX) | 88/100 | 95/100 | Broken grid collapse in Moat section on 390px screens, undersized tap targets. |
| **Composite** | 831/900 | 868/900 | |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

#### Change 1: Fix Time-Travel Copyright & Address Discrepancy
**File:** `src/landing/components/DemoCtaSection.jsx`
**What to change:** The copyright year in the footer and the address to match the AZ origin story.
**Current state:** `© 2026 Swoop Golf. Inc. All rights reserved.` and `1240 Broad Street, Suite 300, Charleston, SC 29401`
**New state:**
```jsx
<p className="text-xs text-gray-500">
  1240 Broad Street, Suite 300, Scottsdale, AZ 85255 {/* Align with Founder Story */}
</p>
{/* ... */}
<p className="text-xs text-gray-400 mt-8">
  © {new Date().getFullYear()} Swoop Golf, Inc. All rights reserved.
</p>
```
**Lenses fixed:** The Skeptic (+5 pts)
**Effort:** Quick Win

#### Change 2: Redesign "Founding Partner" Eyebrow & Button Hierarchy
**File:** `src/landing/components/SocialProofSection.jsx`
**What to change:** Fix WCAG violation (white-on-orange pill), enforce consistent eyebrow styling, and upgrade the weak outlined CTA to a solid button with de-risking micro-copy.
**Current state:** Solid orange pill for eyebrow, outlined button for CTA saying "Claim a Founding Partner Spot".
**New state:**
```jsx
{/* Eyebrow - matches "WHY WE BUILT THIS" style */}
<p className="uppercase tracking-widest text-xs font-bold text-[#B5956A] mb-4">
  FOUNDING PARTNER PROGRAM
</p>

{/* Header & Sub - Updated cohort pitch */}
<h3 className="text-3xl font-serif text-[#1B1814] mb-2">Join the Founding Partner Program.</h3>
<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
  An exclusive group of partner clubs receiving concierge onboarding, direct input on our product roadmap, and pricing locked in forever.
</p>

{/* ... Feature boxes ... */}

{/* CTA Section */}
<div className="text-center mt-8">
  <p className="text-sm font-semibold text-orange-500 mb-3">Only 3 of 10 founding-partner spots remaining.</p>
  <button className="bg-[#F97316] text-[#1B1814] hover:bg-orange-400 font-bold py-3 px-8 rounded-md transition-colors shadow-sm text-lg">
    Apply for a Founding Partner Spot
  </button>
  <p className="text-xs text-gray-500 mt-3">No commitment required to apply.</p>
</div>
```
**Lenses fixed:** Brand Guardian (+3 pts), The Closer (+3 pts), The Storyteller (+1 pt)
**Effort:** Quick Win

#### Change 3: Fix Mobile Grid Collapse in "Moat" Card & Update Jargon
**File:** `src/landing/pages/AboutPage.jsx` (or `MoatSection.jsx` if extracted)
**What to change:** Rewrite "MOAT" eyebrow to remove VC jargon, and fix the internal stats grid that crushes on 390px screens.
**Current state:** Eyebrow reads "MOAT". The right-side stats container uses a grid that forces content side-by-side on mobile.
**New state:**
```jsx
{/* Eyebrow Update */}
<p className="uppercase tracking-widest text-xs font-bold text-[#B5956A] mb-2">
  THE INTEGRATION ENGINE
</p>
<h3 className="text-3xl font-serif text-white mb-4">Built for the legacy systems others won't touch.</h3>

{/* Mobile-responsive Stats Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
  {/* Block 1 */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <span className="text-4xl font-mono text-orange-500">46</span>
    <span className="text-sm text-gray-300">production tools in orchestration</span>
  </div>
  {/* Block 2 */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-mono text-orange-500">12</span>
      <span className="text-xl font-mono text-orange-500">mo</span>
    </div>
    <span className="text-sm text-gray-300">of founding-partner data + model training</span>
  </div>
</div>
```
**Lenses fixed:** Mobile Inspector (+6 pts), The Storyteller (+2 pts)
**Effort:** Quick Win

---

### HIGH — Ship This Sprint (significant score lift)

#### Change 4: Anchor the "See how the platform works" Link
**File:** `src/landing/pages/AboutPage.jsx`
**What to change:** Convert the floating orange text link into a structured secondary button to capture "research-mode" buyers and fix the mobile tap target size.
**Current state:** `<a className="text-orange-500...">See how the platform works →</a>` floating in white space below the Moat card.
**New state:**
```jsx
{/* Add this inside a padded container immediately below the Moat section */}
<div className="flex justify-center py-12">
  <a 
    href="/platform" 
    className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#1B1814] text-[#1B1814] px-6 py-3 rounded-md font-semibold transition-all"
  >
    See how the platform works
    <ArrowRight className="w-4 h-4" />
  </a>
</div>
```
**Lenses fixed:** The Architect (+2 pts), The Closer (+2 pts), Mobile Inspector (+2 pts)
**Effort:** Quick Win

#### Change 5: Form Legibility & Anti-Zoom Optimization
**File:** `src/landing/components/DemoCtaSection.jsx`
**What to change:** Increase label contrast, ensure inputs are strictly `text-base` (16px) to prevent iOS auto-zoom, and brighten the "What happens next" list.
**Current state:** Labels are tiny/dim, inputs might be 14px, bottom list is hard to read.
**New state:**
```jsx
{/* Form Labels & Inputs */}
<div>
  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wide mb-1">Name</label>
  <input 
    type="text" 
    className="w-full bg-white text-[#1B1814] text-base px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500" 
    placeholder="e.g. Pine Valley Golf Club" 
  />
</div>

{/* What Happens Next List */}
<div className="mt-8">
  <h4 className="text-white font-bold mb-3">What happens next:</h4>
  <ol className="list-decimal list-inside space-y-3 text-gray-200 text-base">
    <li>We confirm your slot within 1 business day</li>
    <li>We run a secure, 5-minute data sync to generate your sample brief. (Works seamlessly via read-only APIs with Jonas, Clubessential, and Northstar—zero IT required).</li>
    <li>A 30-min call — you keep the prioritized action list regardless</li>
  </ol>
</div>
```
**Lenses fixed:** The Architect (+2 pts), Mobile Inspector (+3 pts), The Storyteller (+1 pt)
**Effort:** Quick Win

#### Change 6: Scan-Optimized Hero Bolding
**File:** `src/landing/pages/AboutPage.jsx`
**What to change:** Highlight the core deliverables in the hero subheadline so GMs grasp the value in 3 seconds.
**Current state:** Plain paragraph text for the hero subhead.
**New state:**
```jsx
<p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
  Every morning before your first tee time, Swoop reads your data overnight and delivers <strong className="text-white font-semibold">one brief</strong> telling you <strong className="text-white font-semibold">exactly which members need a call</strong>, which revenue gaps are open today, and what to do about both.
</p>
```
**Lenses fixed:** The Closer (+2 pts), The First-Timer (+1 pt)
**Effort:** Quick Win

---

### MEDIUM — Next Sprint

#### Change 7: Implement Sticky Navigation CTA
**File:** `src/landing/pages/AboutPage.jsx` (or global Header layout)
**What to change:** Add a persistent "Book a Walkthrough" button that appears in a slim header when the user scrolls past the hero section.
**Current state:** No sticky navigation; user must scroll all the way back up or down to convert.
**New state:**
```jsx
// Conceptual implementation for Header.jsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 400);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
  <header className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
    <div className="container mx-auto flex justify-between items-center">
      <Logo color={isScrolled ? '#1B1814' : 'white'} />
      {isScrolled && (
        <button className="bg-[#F97316] text-[#1B1814] px-5 py-2 rounded font-bold text-sm">
          Book a Walkthrough
        </button>
      )}
    </div>
  </header>
);
```
**Lenses fixed:** The Closer (+2 pts)
**Effort:** Medium

#### Change 8: Team Section Background & Secondary Tap Targets
**File:** `src/landing/components/TeamSection.jsx`
**What to change:** Ensure the team cards sit on the Swoop Brand "Sand" background color, expand the "LinkedIn" tap targets, and refine the "invasive" copy.
**Current state:** White/gray cards, "sit in your systems" copy, small <a> tags for LinkedIn.
**New state:**
```jsx
<p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
  6 founding-partner clubs — we are actively embedded with your team, optimizing workflows, and arming you for board meetings.
</p>

{/* Card Container */}
<div className="bg-[#F7F5F2] p-8 rounded-xl flex flex-col items-center text-center">
  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-[#1B1814] font-bold text-xl">
    T {/* Explicit w-16 h-16 handles Speedster's CLS concern */}
  </div>
  {/* ... Names & Bio ... */}
  <a href="https://linkedin.com/..." className="mt-4 py-3 px-2 inline-block text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors">
    LinkedIn &rarr;
  </a>
</div>
```
**Lenses fixed:** Brand Guardian (+1 pt), The Storyteller (+1 pt), Mobile Inspector (+1 pt), Speedster (+1 pt)
**Effort:** Quick Win

## Projected Score After All Changes

| Agent | Current | After Sprint 1 (Crit + High) | After All Changes |
|-------|---------|---------------|------------------|
| The Architect (UI Design) | 89/100 | 93/100 | 95/100 |
| The GM (Buyer Persona) | 94/100 | 96/100 | 96/100 |
| The Closer (Conversion) | 92/100 | 96/100 | 98/100 |
| The Speedster (Performance) | 95/100 | 95/100 | 96/100 |
| The Skeptic (Trust) | 88/100 | 93/100 | 95/100 |
| The Storyteller (Messaging) | 95/100 | 98/100 | 99/100 |
| The First-Timer (Clarity) | 95/100 | 96/100 | 97/100 |
| The Brand Guardian (Brand) | 95/100 | 98/100 | 99/100 |
| The Mobile Inspector (Mobile UX) | 88/100 | 95/100 | 96/100 |
| **Composite** | 831/900 | 860/900 | **871/900** |

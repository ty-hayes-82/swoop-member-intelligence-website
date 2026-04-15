# Swoop Dashboard Styling Guide

Reference for the dark "agent intelligence" UI used portal-wide.

**Delivery:** Tailwind 4 `@theme` tokens (`bg-swoop-canvas`, `text-swoop-text-muted`, `border-swoop-border`, …) defined in `swoop-member-portal/src/styles/tailwind.css`, plus a `swoop-dark.css` class-hook layer (`.swoop-section`, `.swoop-detail-row`, `.swoop-metric-tile`, `.swoop-action-btn`, …). Prefer utility classes and class hooks in new code. Inline `style` is still acceptable for one-off tweaks and is how the Today page's reference implementation was originally built, but it is no longer the default.

---

## 1. Foundations

### Colors

| Role | Value | Usage |
|---|---|---|
| `bg.canvas` | `rgb(14,14,14)` | Page background |
| `bg.panel` | `rgb(17,17,17)` | Hero panel / demo card |
| `bg.section` | `rgba(255,255,255,0.03)` | Section card fill |
| `bg.row` | `rgba(255,255,255,0.04)` | Detail row / metric tile fill |
| `border.hairline` | `rgba(255,255,255,0.08)` | Default card borders, dividers |
| `border.inset` | `rgba(255,255,255,0.06)` | Nested row borders |
| `text.primary` | `#ffffff` | Headlines, values |
| `text.secondary` | `rgba(255,255,255,0.65)` | Body copy |
| `text.muted` | `rgba(255,255,255,0.5)` | Subtext |
| `text.label` | `rgba(255,255,255,0.4)` | Uppercase micro labels |
| `text.ghost` | `rgba(255,255,255,0.35)` | Timestamps, footnotes |
| `brand.orange` | `rgb(243,146,45)` / `#F3922D` | Primary accent, metrics, CTAs |
| `brand.orange.tint` | `rgba(243,146,45,0.08–0.15)` | Accent backgrounds |
| `brand.orange.border` | `rgba(243,146,45,0.3–0.35)` | Accent borders |
| `status.success` | `rgb(34,197,94)` | Healthy metrics, saves |
| `status.danger` | `rgb(239,68,68)` | At-risk, alerts |
| `status.warn` | `rgb(243,146,45)` | Advisory (shares brand) |
| `accent.gold` | `rgb(181,149,106)` | LIVE pulse dot |

Status tints follow a fixed pattern: `rgba(R,G,B,0.07)` background × `rgba(R,G,B,0.18)` border × full color for text.

### Typography

| Token | Font | Where |
|---|---|---|
| `font.body` | `'Plus Jakarta Sans', system-ui, sans-serif` | All prose, buttons, labels |
| `font.mono` | `'JetBrains Mono', monospace` | All numerics, timestamps, IDs, confidence % |

Scale (sizes are exact px, not Tailwind scale):

- **Hero metric**: 32px / 800 / mono / letter-spacing -0.02em
- **Card metric**: 22–24px / 800 / mono
- **Section title**: 13–17px / 700
- **Body**: 12–14px / 400–600
- **Row label**: 11–12px
- **Subtext**: 10–11px
- **Micro label**: 9–10px / 700 / uppercase / letter-spacing 0.1–0.14em

### Radius & spacing

- **Panel**: `22px`
- **Section card**: `14px`
- **Row / tile**: `10px`
- **Pill / badge**: `999px`
- **Chip**: `4–6px`
- Section padding: `18–24px`. Row padding: `10–14px`. Grid gaps: `8–10px`.

### Shadows

- Hero only: `rgba(17,17,17,0.2) 0px 28px 64px`. Sections are flat.

---

## 2. Component Patterns

All components below are inline-style driven with a handful of stable `.swoop-*` class hooks for interactive bits.

### 2.1 Section card — `.swoop-section`

```
background: rgba(255,255,255,0.03)
border: 1px solid rgba(255,255,255,0.08)
border-radius: 14px
```

Structure:

```html
<div class="swoop-section">
  <div class="swoop-section-header">
    <div class="swoop-section-summary">
      <span class="swoop-section-title" style="color: <accent>">Title</span>
      <span class="swoop-count-pill">N</span>
      <span class="swoop-section-peek">one-line summary</span>
    </div>
    <span class="swoop-chevron">▾</span>
  </div>
  <div class="swoop-section-body">…rows…</div>
</div>
```

Title color signals severity: muted white (`rgba(255,255,255,0.55)`) for neutral, orange for advisory, red for critical, green for positive.

### 2.2 Detail row — `.swoop-detail-row`

The universal row primitive inside section bodies. Base:

```
background: rgba(255,255,255,0.04)   (or status tint)
border: 1px solid rgba(255,255,255,0.06) (or status border)
border-radius: 10px
padding: 10–14px
display: flex; gap: 10px
```

Variants are achieved by overriding `background` and `border-color` with the status tint pair. Use `flex-direction: column` when the row contains nested grids or divider subsections.

### 2.3 Metric tile

Used inside grid layouts for KPI stats.

```
background: rgba(255,255,255,0.04)   (+ optional status tint)
border: 1px solid rgba(255,255,255,0.08)
border-radius: 14px
padding: 16px 14px
display: flex; flex-direction: column; gap: 6px
```

Anatomy:

1. **Label**: 10px / 700 / uppercase / letter-spacing 0.1em / `text.label`
2. **Value**: emoji + mono numeric (22–32px / 800 / brand or status color)
3. **Source line**: 10px / `text.ghost` prefixed with a mark (`◈ ◉ ⛳ ☁`)
4. **Divider**: `border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px`
5. **Footer notes**: 11px / `text.muted`, with optional colored last line

### 2.4 Pills & badges

| Type | Spec |
|---|---|
| **Count pill** (`.swoop-count-pill`) | brand-orange tint bg, orange text, 10–11px / 700 |
| **Status badge** | `rgba(status,0.15)` bg × `rgba(status,0.3)` border × full status text, 9px / 700 / uppercase / letter-spacing 0.1em, padding `2px 7px`, radius `999px` |
| **Role chip** | `rgba(255,255,255,0.07)` bg, 10px / 700, padding `2px 8px`, radius `4px` — marks actor (GM, Pro Shop) |
| **Confidence pill** | mono, orange tint, `6px 10px` padding, `999px` |

### 2.5 Buttons

**Primary action — `.swoop-action-btn`**

```
background: rgba(243,146,45,0.12)
border: 1px solid rgba(243,146,45,0.3)
color: rgb(243,146,45)
font: 11px / 700, Plus Jakarta Sans
padding: 6px 12px
border-radius: 8px
```

Label convention: verb + arrow (`View →`, `Take Action →`, `Approve all 5 →`).

**Secondary / snooze**

```
background: rgba(255,255,255,0.06)
border: 1px solid rgba(255,255,255,0.1)
color: rgba(255,255,255,0.5)
```

**Success CTA** (drawer approve): `bg-success-500` Tailwind utility, white text.

### 2.6 Data signal block

Used for detected-signal / recommended-action callouts:

```
border-width: 1px 1px 1px 3px
border-left-color: rgb(243,146,45)   (accent rail)
background: rgba(255,255,255,0.03)
border-radius: 10px
padding: 12px 14px
```

Followed by an uppercase micro label (`DETECTED SIGNAL`) then mono body text.

### 2.7 Activity feed item

Icon + content flex row inside a tinted card. First item is fully opaque; subsequent items step down: `opacity: 0.85 → 0.7 → 0.55` to suggest a live stream decay.

### 2.8 Member / action container — canonical

**This is the core pattern for any row that represents a member, action, or recommendation** (today-view action cards, VIP alerts, at-risk member callouts, tee-sheet highlights). It extends `.swoop-detail-row` with an orange severity tint, a header strip, and an optional 2-column expanded body.

```
background: rgba(243,146,45,0.07)
border: 1px solid rgba(243,146,45,0.18)
border-radius: 10px
padding: 10–14px
flex-direction: column
gap: 0
```

Swap the orange tint for the danger/success/neutral pair from §1 when severity changes — the structure stays identical.

**Header strip** (`display: flex; align-items: center; gap: 10px; width: 100%`):

1. **Severity badge** — 9px / 700 / uppercase / letter-spacing 0.1em, orange tint bg (`rgba(243,146,45,0.15)`) × `rgba(243,146,45,0.3)` border × full orange text, `2px 7px` padding, `999px` radius. Labels: `VIP`, `AT RISK`, `NEW`, `CRITICAL`.
2. **Member name** — 13px / 700 / white, rendered as a `<button>` link (brand-500 underline hover).
3. **Meta line** — 11px / `rgba(255,255,255,0.4)`, middle-dot separated: `Health 92 · Die-Hard Golfer · 7:16 AM South · $22K/yr`.
4. **Spacer** — `<span style="flex: 1">` pushes the CTA right.
5. **Action button** — `.swoop-action-btn`, label ends in `→` (e.g. `View in Inbox →`).

**Divider + 2-column body** (shown when the row is expanded / carries context):

```
display: grid
grid-template-columns: 1fr 1fr
gap: 8px
margin-top: 10px
padding-top: 10px
border-top: 1px solid rgba(255,255,255,0.06)
```

Each column opens with a micro label (9px / 700 / uppercase / 0.1em / `rgba(255,255,255,0.35)`) and drops to 11px / `rgba(255,255,255,0.65)` body copy. Typical pairings:

- **Talking Points** — `<ul>` with 14px left padding, 3px gap between items.
- **Member Value** — plain lines; final line in brand orange 11px / 600 for the dollar figure (`$22K annual dues`).

Full reference markup:

```html
<div class="swoop-detail-row"
     style="background: rgba(243,146,45,0.07);
            border-color: rgba(243,146,45,0.18);
            flex-direction: column; gap: 0;">
  <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
    <span style="font-size: 9px; font-weight: 700; letter-spacing: 0.1em;
                 text-transform: uppercase; color: rgb(243,146,45);
                 background: rgba(243,146,45,0.15);
                 border: 1px solid rgba(243,146,45,0.3);
                 padding: 2px 7px; border-radius: 999px; flex-shrink: 0;">
      VIP
    </span>
    <button type="button" class="text-brand-500 underline decoration-brand-500/50"
            style="font-size: 13px; font-weight: 700; color: #fff;">
      Rob Callaway
    </button>
    <span style="font-size: 11px; color: rgba(255,255,255,0.4);">
      Health 92 · Die-Hard Golfer · 7:16 AM South · $22K/yr
    </span>
    <span style="flex: 1 1 0"></span>
    <button class="swoop-action-btn">View in Inbox →</button>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
              margin-top: 10px; padding-top: 10px;
              border-top: 1px solid rgba(255,255,255,0.06); width: 100%;">
    <div>
      <div style="font-size: 9px; font-weight: 700; letter-spacing: 0.1em;
                  text-transform: uppercase; color: rgba(255,255,255,0.35);
                  margin-bottom: 4px;">Talking Points</div>
      <ul style="margin: 0; padding: 0 0 0 14px; display: flex;
                 flex-direction: column; gap: 3px;">
        <li style="font-size: 11px; color: rgba(255,255,255,0.65);">
          VIP member ($22K dues) — personal greeting at the starter
        </li>
        <li style="font-size: 11px; color: rgba(255,255,255,0.65);">
          Playing South at 7:16 AM with Steve Whitmore, Phil Egan
        </li>
        <li style="font-size: 11px; color: rgba(255,255,255,0.65);">
          Thank them for their continued membership
        </li>
      </ul>
    </div>
    <div>
      <div style="font-size: 9px; font-weight: 700; letter-spacing: 0.1em;
                  text-transform: uppercase; color: rgba(255,255,255,0.35);
                  margin-bottom: 4px;">Member Value</div>
      <div style="font-size: 11px; color: rgba(255,255,255,0.65);">
        Health score 92 · Top members
      </div>
      <div style="font-size: 11px; color: rgb(243,146,45); font-weight: 600;
                  margin-top: 4px;">
        $22K annual dues
      </div>
    </div>
  </div>
</div>
```

**Rules**

- Never change the structural dimensions (padding, radii, divider, grid columns) — only swap the status tint pair.
- The header strip must stay one line on desktop; the meta string truncates before the CTA wraps.
- If there's no expanded body, the header strip stands alone at the same padding — do not shrink the container.
- Use this in place of ad-hoc `<div class="bg-swoop-row …">` member cards throughout Today, Members, Service, and drawer panels.

---

## 3. Layout Rules

- **Shell**: fixed 90px icon rail (lg+), sticky top header, scroll main. Main uses Tailwind: `flex-1 overflow-y-auto p-4 md:p-6 pb-28 md:pb-32`.
- **Section stack**: vertical list, `gap: 16px`, no outer padding — sections own their padding.
- **KPI grids**: `grid-template-columns: repeat(4, 1fr)` at section width; drop to 3 for contextual tiles, 2 for detail splits.
- **Detail splits inside a row**: `display: grid; grid-template-columns: 1fr 1fr; gap: 8px` with a `1px solid rgba(255,255,255,0.06)` top border + `padding-top: 10px` separator.

---

## 4. Motion

Keep it subtle. Only three animations in use:

- `landing-pulse` — 2s ease infinite on LIVE dot
- `landing-feed-in` — 420ms ease-out on new feed item
- `landing-scenario-in` — 500ms ease-out on scenario panel swap

Transitions elsewhere: `transition: width 300ms, background 300ms` on paginator dots; `transition-all duration-300 ease-in-out` on sidebar collapse.

---

## 5. Iconography

- **Lucide** SVGs inline, `stroke="currentColor"` (or explicit brand color), `stroke-width: 1.5–2`, `size-5`/`size-6`.
- **Geometric marks** for data-source captions: `◈ ◉ ◆ ⬢ ⛳ ☁ ⚡ 🔴 💸 📥`. These are semantic, not decorative — each maps to a source system (see Layer 3 panel).

---

## 6. Do / Don't

**Do**
- Put numerics in `JetBrains Mono` every time.
- Use the tint-pair pattern for status (7% bg / 18% border / 100% text).
- Keep section headers one line: title · pill · peek · chevron.
- Use `→` on action buttons, `↓` on scroll-to anchors.

**Don't**
- Don't introduce new accent colors — extend tints of orange / red / green / gold instead.
- Don't use pure white on pure black text; always step text down to `0.65–0.4` opacity for hierarchy.
- Don't mix Tailwind dark utilities (`dark:bg-gray-900`) with the dark palette above — the dashboard is always-dark, not theme-switched. Tailwind `dark:` classes remain in header/drawer where the rest of the app still themes.
- Don't add drop shadows to sections — the hero panel is the only shadowed surface.

---

## 7. Class hooks (keep stable)

These class names are referenced across the Today page and should not be renamed without a find-and-replace:

```
.swoop-section
.swoop-section-header        (+ .is-open)
.swoop-section-summary
.swoop-section-title
.swoop-section-peek
.swoop-section-body          (+ .is-open)
.swoop-count-pill
.swoop-chevron               (+ .is-open)
.swoop-detail-row
.swoop-detail-divider
.swoop-action-btn
```

Everything else is inline `style` — intentional, so visual tweaks stay colocated with the markup that shows them.

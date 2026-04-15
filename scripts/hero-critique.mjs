/**
 * hero-critique.mjs
 *
 * Takes a clipped screenshot of just the Home page hero section, then scores
 * it through all 8 lenses (same agents as website-critique.mjs).
 *
 * Usage:
 *   node scripts/hero-critique.mjs
 *
 * Output:
 *   website-critique-output/hero-<timestamp>/
 *     hero.png              — clipped hero screenshot
 *     critiques/            — 8 markdown files (one per lens)
 *     HERO_REPORT.md        — consolidated scores + summary
 */

import { chromium } from 'playwright';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const BASE_URL   = 'https://swoop-member-intelligence-website.vercel.app';
const HERO_URL   = `${BASE_URL}/#/landing`;
const MODEL      = 'gemini-3.1-pro-preview';
const VIEWPORT   = { width: 1440, height: 900 };
// Hero section height — capture nav + full hero block (before "See It / Fix It" section)
const HERO_HEIGHT = 1100;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_ROOT = path.resolve(__dirname, '..', 'website-critique-output');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('❌  GEMINI_API_KEY environment variable not set.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// The Eight Lenses (focused on hero)
// ---------------------------------------------------------------------------

const LENSES = [
  {
    id: '01_architect',
    name: 'The Architect',
    focus: `Evaluate the hero section's visual design: contrast ratios, typography hierarchy, spacing, background treatment, CTA affordance, and testimonial/social-proof treatment. Flag any broken or missing UI elements.`,
  },
  {
    id: '02_gm',
    name: 'The GM',
    focus: `Evaluate whether this hero immediately resonates with a private-club General Manager. Does the headline, subhead, and CTA speak to their pain (member churn, tee sheet leakage, morning briefing chaos)?`,
  },
  {
    id: '03_closer',
    name: 'The Closer',
    focus: `Evaluate conversion mechanics: headline clarity, CTA copy and prominence, social proof, friction-reducers (no credit card, etc.), and whether a visitor would click "Book a Walkthrough" or bounce.`,
  },
  {
    id: '04_speedster',
    name: 'The Speedster',
    focus: `Evaluate perceived performance and visual stability: LCP candidate element, font loading (flash of unstyled text), layout shift indicators, image loading, and any render-blocking visual artefacts.`,
  },
  {
    id: '05_skeptic',
    name: 'The Skeptic',
    focus: `Evaluate trust signals in the hero: are claims credible? Is social proof named or anonymous? Are there any vague, unverifiable, or suspicious claims that a due-diligence buyer would reject?`,
  },
  {
    id: '06_storyteller',
    name: 'The Storyteller',
    focus: `Evaluate narrative arc: does the hero have a clear problem → solution → proof structure? Is the copy active or passive? Does the tagline earn its real estate?`,
  },
  {
    id: '07_first_timer',
    name: 'The First-Timer',
    focus: `Evaluate first-impression clarity: within 5 seconds can a new visitor understand what Swoop does, who it's for, and what to do next? Flag any jargon or cognitive load.`,
  },
  {
    id: '08_brand_guardian',
    name: 'The Brand Guardian',
    focus: `Evaluate brand consistency: dark charcoal (#1B1814) hero background, brass (#B5956A) eyebrow, orange (#F3922D) accents, Fraunces serif headline, Plus Jakarta Sans body, correct button contrast (dark text on orange, NOT white text on orange).`,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function writeFile(p, content) { fs.writeFileSync(p, content, 'utf8'); }

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
}

// ---------------------------------------------------------------------------
// Step 1 — Screenshot the hero
// ---------------------------------------------------------------------------

async function screenshotHero(outputDir) {
  console.log(`\n📸  Screenshotting hero at ${HERO_URL} …`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 });
  const page    = await context.newPage();

  await page.goto(HERO_URL, { waitUntil: 'networkidle', timeout: 30_000 });
  await page.waitForTimeout(2000);

  const filePath = path.join(outputDir, 'hero.png');
  await page.screenshot({
    path: filePath,
    clip: { x: 0, y: 0, width: VIEWPORT.width, height: HERO_HEIGHT },
  });

  console.log(`   ✓ hero.png  (${VIEWPORT.width}×${HERO_HEIGHT}px @ 2x)`);
  await browser.close();
  return filePath;
}

// ---------------------------------------------------------------------------
// Step 2 — Score each lens
// ---------------------------------------------------------------------------

async function scoreLens(genAI, screenshotPath, lens, critiquesDir) {
  const imageBuffer = fs.readFileSync(screenshotPath);
  const base64Image = imageBuffer.toString('base64');

  const model = genAI.getGenerativeModel({
    model: MODEL,
    generationConfig: { maxOutputTokens: 8192 },
  });

  const prompt = `You are **${lens.name}**, a specialist evaluator reviewing the **home page hero section** of the Swoop Club Intelligence marketing website.

Swoop is an AI-powered member-intelligence platform for private golf and country clubs. Its buyer is the Club GM or COO who wants to reduce member churn, optimise tee sheet fill, and run smarter operations.

**Your specific focus:** ${lens.focus}

**Instructions:**
1. Describe exactly what you see in the hero (layout, elements, text, colours).
2. Identify what is working well.
3. Identify specific issues or failures.
4. Assign a score from 0–100 with a one-sentence justification.

End your response with a line in this exact format:
**SCORE: XX/100**`;

  const result = await model.generateContent([
    { inlineData: { mimeType: 'image/png', data: base64Image } },
    prompt,
  ]);

  const text = result.response.text();

  // Parse score
  const match = text.match(/\*\*SCORE:\s*(\d+)\/100\*\*/i);
  const score = match ? parseInt(match[1], 10) : null;

  const outPath = path.join(critiquesDir, `${lens.id}.md`);
  writeFile(outPath, `# ${lens.name} — Hero Section\n\n${text}\n`);

  return { lens: lens.name, score, text };
}

// ---------------------------------------------------------------------------
// Step 3 — Consolidated report
// ---------------------------------------------------------------------------

function buildReport(results, outputDir) {
  const scored  = results.filter(r => r.score !== null);
  const total   = scored.reduce((s, r) => s + r.score, 0);
  const max     = scored.length * 100;
  const missing = results.filter(r => r.score === null).map(r => r.lens);

  const rows = results.map(r =>
    `| ${r.lens.padEnd(20)} | ${r.score !== null ? `${r.score}/100` : '  ?  '} |`
  ).join('\n');

  const report = `# Hero Section Critique Report
**URL:** ${HERO_URL}
**Generated:** ${new Date().toISOString()}
**Model:** ${MODEL}

## Scores

| Lens                 | Score  |
|----------------------|--------|
${rows}
| **COMPOSITE**        | **${total}/${max}** |
${missing.length ? `\n> ⚠️  Missing scores: ${missing.join(', ')}\n` : ''}
---

## Summaries

${results.map(r => `### ${r.lens}\n\n${r.text}\n`).join('\n---\n\n')}
`;

  const outPath = path.join(outputDir, 'HERO_REPORT.md');
  writeFile(outPath, report);
  return { total, max, scored: scored.length };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const ts        = timestamp();
  const outputDir = path.join(OUTPUT_ROOT, `hero-${ts}`);
  ensureDir(outputDir);
  const critiquesDir = path.join(outputDir, 'critiques');
  ensureDir(critiquesDir);

  console.log(`\n🔍  Hero Section Critique — ${ts}`);
  console.log(`📁  Output: ${outputDir}`);

  const screenshotPath = await screenshotHero(outputDir);

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  console.log(`\n🤖  Scoring ${LENSES.length} lenses via ${MODEL}…\n`);

  const results = await Promise.allSettled(
    LENSES.map(lens => scoreLens(genAI, screenshotPath, lens, critiquesDir))
  );

  const scored = results.map((r, i) => {
    if (r.status === 'fulfilled') {
      const { lens, score } = r.value;
      const label = score !== null ? `${score}/100` : '?/100 (parse error)';
      console.log(`   ✓ ${lens.padEnd(22)} ${label}`);
      return r.value;
    } else {
      console.error(`   ✗ ${LENSES[i].name}: ${r.reason?.message}`);
      return { lens: LENSES[i].name, score: null, text: `Error: ${r.reason?.message}` };
    }
  });

  const { total, max } = buildReport(scored, outputDir);

  const composite = scored.filter(r => r.score !== null).reduce((s, r) => s + r.score, 0);
  const out_of    = scored.filter(r => r.score !== null).length * 100;

  console.log(`\n📊  Hero composite: ${composite}/${out_of}`);
  console.log(`📄  Report: ${path.join(outputDir, 'HERO_REPORT.md')}`);
  console.log(`🖼️   Screenshot: ${screenshotPath}`);
  console.log('\n✅  Done!\n');
}

main().catch(err => { console.error(err); process.exit(1); });

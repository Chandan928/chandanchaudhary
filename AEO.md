# Claude Code Prompt — AEO Services Page Rebuild

Paste this entire prompt into Claude Code CLI to rebuild the AEO page.

---

Before you write a single line of code, do the following reads in this exact order.
Do not skip any step. Every decision you make must be grounded in what you find.

1. Read `CLAUDE.md` in the project root
2. Read `tailwind.config.ts` — note every custom color token, font, spacing, and animation
3. Read `src/app/globals.css` — note every CSS variable and utility class
4. Read the existing homepage file (likely `src/app/page.tsx`) — note heading sizes,
   section structure, eyebrow label pattern, card pattern, button variants, and spacing rhythm
5. Read at least one other existing services page in the codebase — note how sections are
   composed, what shared components are used, and what props they accept
6. Read the current AEO page file — note every section that already exists so you do not
   accidentally delete or overwrite working content
7. List every reusable component you find under `src/components/` that is relevant:
   cards, buttons, badges, section wrappers, eyebrow labels, grids, icons, stat displays,
   accordions, testimonial cards, comparison tables
8. Note which icon library is used (likely lucide-react) and confirm it is in package.json

Only after completing all 8 reads, proceed to the work below.
Do not install any new packages. Use only what is already in package.json.
Do not hardcode any color, font, spacing, or animation value.
Every value must come from the tokens you found in tailwind.config.ts or globals.css.
Every component must match the visual patterns you found on the homepage and other pages.
The final page must feel like it belongs to the same site — not like a new design was dropped in.

---

## GOAL

Significantly upgrade the AEO services page at its current file path.
The page must be visually polished, conversion-optimised, mobile-first, and
fully consistent with every other page on the site.

The page currently has several good sections — keep all of them.
You are adding missing sections, improving card borders and spacing site-wide on this page,
and making the whole page feel premium and cohesive.

---

## SECTIONS TO KEEP (refine only — do not rewrite content)

These sections already exist. Do not delete them. Only improve their visual treatment
to match the rules in the Global Design Rules section below:

- Hero
- "Your buyers are asking AI" section
- "Make your brand the answer AI gives" section
- "What AEO covers" deliverables grid
- "How I get your brand into AI answers" process steps
- "What AEO Impact looks like" stats
- "AEO is right for you if" fit/not-fit comparison
- FAQ accordion
- Final CTA / closing section

---

## SECTIONS TO ADD

Add each of the following sections. Place them in the page in the logical order described.
For each section, use the exact same section wrapper, eyebrow label component, heading
size, and spacing as every other section on the site — you found these patterns in step 4
and 5 above.

---

### 1. Stats Strip
Place: Directly after the Hero

A full-width strip showing 4 proof metrics in a horizontal row.
Numbers: 3X / 50% / 40% / 90%
Labels (in order): AI citation rate vs traditional SEO / of searches now get zero-click
AI answers / of buyers research via AI before contacting a vendor /
brand recall improvement when cited in AI answers

Layout: 4 equal columns with subtle vertical dividers between them.
On mobile: 2×2 grid.
Style: Use the existing border token for top and bottom edges of the strip.
The large number must use the accent color token. The label must use the muted text token.
No card wrapper. No background color change. Just a bordered strip.
Match whatever pattern is used for stats/metrics anywhere else on the site — reuse it.

---

### 2. SEO vs AEO Comparison Table
Place: After "What AEO covers"

Section eyebrow + heading: "SEO vs. AEO — Understanding the Shift"

A structured 3-column table:
Column 1 — Feature (row labels)
Column 2 — Traditional SEO
Column 3 — Answer Engine Optimization

Rows: Goal / Visibility Type / Success Metric / Content Format /
Timeline / Algorithm Target / User Behavior Served

The AEO column must be visually distinguished from the SEO column.
Use the accent color at a low opacity as a background tint on that column,
or use an accent-colored top border on that column header — whichever pattern
you can achieve using only existing tokens.

On mobile: wrap the table in an `overflow-x-auto` container.
Match the table styling (borders, cell padding, text sizes) to any existing table
component or pattern found in the codebase. If no table component exists, build one
using only existing tokens.

---

### 3. Industry-Specific AEO
Place: After the SEO vs AEO table

Section eyebrow + heading: "AEO That Speaks Your Industry's Language"
Subheading: "Generic optimization doesn't work. We build topical authority in the exact
language your buyers use."

4 or 5 industry cards in a responsive grid. Industries:
SaaS / Agencies / Consultants / E-commerce / and one more if client work elsewhere
in the codebase suggests a fifth vertical

Each card:
- Icon from the icon library already in use
- Industry name as card title
- 2-sentence description of what AEO looks like in that industry
- A left-side accent border using the existing accent color token at low opacity

Card border and hover treatment: follow the Global Design Rules below exactly.

---

### 4. AEO Service Suite
Place: After Industry-Specific AEO

Section eyebrow + heading: "Our AEO Service Suite"

4 cards in a 2×2 grid on desktop, single column on mobile.
Services and what each includes:

01 — LLM Optimization
Answer layer structuring, prompt-response alignment, entity reinforcement

02 — AEO Roadmap
Full audit, 90-day execution plan, platform prioritisation

03 — Brand Authority Building
Knowledge base seeding, citation architecture, source credibility signals

04 — AI Presence Monitoring
Cross-platform tracking, mention velocity, share-of-voice reporting

Each card: sequence number badge (01–04) in accent color, icon, title, bullet list.
Card border and hover treatment: follow the Global Design Rules below exactly.

---

### 5. The Master Framework
Place: After Service Suite

Section eyebrow + heading: "The Master Framework"

A 4-step process visualization.
Steps: Audit & Positioning → Knowledge Seeding → Response Priming → Visibility Dashboard

Each step has a step number, bold title, and 2-line description.
On desktop: horizontal flow with a connecting dashed line or arrow between steps.
On mobile: vertical stacked timeline with a left accent line.
Step numbers use the accent color token. Connecting line uses the border token.
Match the visual style of any existing process/steps component in the codebase —
reuse it if one exists.

---

### 6. Content Transformation Block
Place: After The Master Framework

Section eyebrow + heading: "The Content Transformation"

This is a visually striking full-width section.
Use the darkest available background surface token from the design system for this section —
one step darker than the default card background. Do not invent a color.
If only one dark background token exists, use a subtle inner border or texture to
differentiate this section from surrounding ones.

Two-column layout inside the section:
LEFT — "Before": a representative block of plain unoptimised content.
Use a subtle negative/warning color indicator from the existing token set.
Style the content block like a plain document or raw text editor.

RIGHT — "After": the same content restructured for AEO.
Direct-answer format, clear headings, citation-ready structure.
Use a subtle success/positive color indicator from the existing token set.

Both blocks must be inside bordered cards.
The contrast between Before and After must be immediately obvious at a glance.

---

### 7. Strategic Advantage
Place: After the existing Testimonials section

Section eyebrow + heading: "The Strategic Advantage"

Two-column side-by-side layout:
LEFT — "Traditional SEO Agency": list of limitations.
Use a subtle muted/negative indicator per bullet (X or minus).
RIGHT — "Chandan's AEO Consulting": list of advantages.
Use accent-colored checkmarks per bullet.
Right column has an accent border to make it stand out.
Add a "Recommended" badge above the right column header —
use the existing badge component or the badge pattern found in the codebase.

On mobile: right column (Chandan's) shown first.

---

### 8. Predictable Investment
Place: After Strategic Advantage

Section eyebrow + heading: "Predictable Investment"

3 pricing tier cards side by side on desktop, stacked on mobile.

Tier 1 — Audit: $3.5k
Tier 2 — Growth: $7.5k (Most Popular — featured card)
Tier 3 — Enterprise: Custom

Growth card is visually elevated:
- Use the featured/highlighted card treatment found elsewhere in the codebase
- Add a "Most Popular" badge using the existing badge pattern
- Its CTA button must use the primary CTA button variant (the gold/primary token)

Audit and Enterprise cards:
- Use the secondary outlined button variant

Each card includes: tier name, price (large), 5–6 included items as a bullet list,
one CTA button.

On mobile: Growth card appears first.

---

## GLOBAL DESIGN RULES
## Apply every rule below to ALL sections — new and existing

**Card Borders — most important visual fix on this page:**
Look at the current page. The card borders are either missing or too faint.
Every card on this page must have a clearly visible border.
Find the border token in tailwind.config or globals.css that best matches a
subtle-but-visible border in the accent color at low opacity.
Apply it to every card. Existing cards on the page that are borderless must be updated.
Cards with hover states: increase border opacity on hover.
Do not touch the navbar or footer.

**Section Eyebrow Labels:**
Every single section must have an eyebrow label above the main heading.
Find the exact eyebrow label component or className pattern used on the homepage
and replicate it identically. Do not create a new pattern.

**Section Spacing:**
Match the section padding, heading margin, and content gap to whatever rhythm
the homepage and other pages use. Do not introduce new spacing values.

**Hover States:**
All interactive cards: find the hover pattern used on other cards in the codebase
and apply it consistently. At minimum: border opacity increases, subtle upward translate.
Match the transition duration and easing to what already exists in the config.

**Scroll Animations:**
If a scroll reveal or fade-in utility already exists in the codebase, apply it to
new sections in the same way it is used on existing sections. If it does not exist,
do not add one.

**Mobile First:**
Every section: single column on mobile, 2-col on md, full layout on lg+.
Tables: overflow-x-auto wrapper on mobile.
Stat counter strip: 2×2 on mobile.
Pricing: stack vertically on mobile, Growth card first.
Hero visual/chat mockup: if it causes overflow on mobile, hide it on mobile
or stack it below the headline.

**Typography:**
Use only the heading sizes and weights you found in the existing pages.
Do not introduce new font sizes. Do not change the font families.

**Buttons:**
Primary CTA (gold/primary token): maximum one per section, only for the main
conversion action in that section.
Secondary CTA (outlined/secondary variant): for softer actions.
Find both button variants in the existing component library and use them directly.

**Testimonials (existing section):**
If the existing testimonials section does not use cards with a visible border,
update it to match the card border rule above.
Each testimonial card should have a subtle left accent border using the accent color token.
Do not change testimonial content.

---

## DO NOT TOUCH

- Navbar
- Footer
- Page routing and URL
- Any existing TypeScript interfaces or data structures that are working
- FAQ section content (visual styling improvements only if misaligned)

---

## BEFORE YOU FINISH

Run through this checklist yourself before considering the task complete:

- Every color value comes from tailwind.config or globals.css — no hardcoded hex
- Every font comes from the existing typography tokens
- Every spacing value matches the existing rhythm
- All cards across the entire page have a visible border
- Every section has an eyebrow label in the same pattern as the homepage
- All 8 new sections exist and are in the correct order
- The page looks and feels like it was built alongside every other page on the site
- No new packages were installed
- TypeScript compiles without errors
- The page is fully responsive — verified mentally for every section at mobile, tablet, desktop
- All existing sections are intact and unchanged in content

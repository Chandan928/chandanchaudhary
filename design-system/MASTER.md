# DESIGN SYSTEM — Chandan Chaudhary
# Theme: Midnight & Violet
# Style: Dark Modern SaaS
# Last updated: March 2026

---

## Colors

### Dark Mode (Default)
| Role | Hex | Usage |
|------|-----|-------|
| Background | #0F0F1A | Page background |
| Surface | #1A1A2E | Cards, navbar, footer |
| Surface 2 | #16213E | Elevated cards, hover states |
| Border | #2A2A4A | Dividers, card borders |
| Border Strong | #3A3A5C | Emphasized borders |
| Text Primary | #E8E8F0 | Headings, strong copy |
| Text Secondary | #A0A0B8 | Body copy, descriptions |
| Text Muted | #6060808 | Captions, labels, placeholders |
| Accent | #6C63FF | CTAs, links, highlights |
| Accent Hover | #8075FF | Hover state for accent |
| Accent Subtle | rgba(108,99,255,0.12) | Accent backgrounds, badge fills |
| Accent Border | rgba(108,99,255,0.25) | Accent borders |

### Light Mode
| Role | Hex | Usage |
|------|-----|-------|
| Background | #F8F8FF | Page background |
| Surface | #FFFFFF | Cards, navbar |
| Surface 2 | #F0F0FA | Subtle sections |
| Border | #E0E0F0 | Dividers, card borders |
| Border Strong | #C8C8E8 | Emphasized borders |
| Text Primary | #0F0F1A | Headings, strong copy |
| Text Secondary | #3A3A5A | Body copy |
| Text Muted | #7070908 | Captions, labels |
| Accent | #5B52F0 | CTAs, links (slightly darker for light bg contrast) |
| Accent Hover | #4A42D8 | Hover state |
| Accent Subtle | rgba(91,82,240,0.08) | Badge fills |
| Accent Border | rgba(91,82,240,0.2) | Badge borders |

---

## Typography

### Fonts
- **Display / Headings:** `Sora` — clean, modern, geometric. Used for H1, H2
- **Body:** `DM Sans` — humanist sans-serif, highly readable. Used for all body copy, UI elements
- **Mono:** `JetBrains Mono` — code snippets, technical labels

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
```

### Scale
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 | Sora | clamp(2.5rem, 5vw, 3.75rem) | 600 | 1.1 |
| H2 | Sora | clamp(1.75rem, 3vw, 2.5rem) | 600 | 1.2 |
| H3 | DM Sans | clamp(1.25rem, 2vw, 1.5rem) | 600 | 1.3 |
| H4 | DM Sans | 1.125rem | 600 | 1.4 |
| Body Large | DM Sans | 1.125rem | 400 | 1.75 |
| Body | DM Sans | 1rem | 400 | 1.75 |
| Small | DM Sans | 0.875rem | 400 | 1.6 |
| Label | DM Sans | 0.75rem | 600 | 1 |
| Mono | JetBrains Mono | 0.875rem | 400 | 1.6 |

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 0.25rem | Tight gaps |
| --space-2 | 0.5rem | Icon gaps |
| --space-3 | 0.75rem | Small padding |
| --space-4 | 1rem | Base unit |
| --space-6 | 1.5rem | Component padding |
| --space-8 | 2rem | Section internal spacing |
| --space-12 | 3rem | Between components |
| --space-16 | 4rem | Small sections |
| --space-24 | 6rem | Full sections |
| --space-32 | 8rem | Hero padding |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 0.375rem | Badges, pills |
| --radius-md | 0.5rem | Buttons, inputs |
| --radius-lg | 0.875rem | Cards |
| --radius-xl | 1.25rem | Large cards |
| --radius-full | 9999px | Pill badges |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| --shadow-sm | 0 1px 3px rgba(0,0,0,0.4) | Subtle lift |
| --shadow-md | 0 4px 16px rgba(0,0,0,0.4) | Cards |
| --shadow-lg | 0 12px 40px rgba(0,0,0,0.5) | Modals, dropdowns |
| --shadow-accent | 0 4px 24px rgba(108,99,255,0.3) | CTA buttons |

---

## Components

### Buttons
- **Primary:** bg accent, white text, shadow-accent on hover, translateY(-1px)
- **Secondary:** transparent bg, accent border, accent text, fill on hover
- **Ghost:** transparent, muted text, surface-2 bg on hover
- **Size default:** padding 0.8125rem 1.875rem, font-size 0.9375rem, font-weight 600
- **Size sm:** padding 0.625rem 1.25rem, font-size 0.875rem

### Cards
- bg: surface, border: 1px solid border-color
- border-radius: radius-lg
- padding: 1.75rem
- hover: border-color → accent-border, translateY(-2px), shadow-md

### Badges
- radius-full, font-size 0.75rem, font-weight 600
- Accent variant: accent-subtle bg, accent text, accent-border border
- Muted variant: surface-2 bg, muted text

### Section Label (eyebrow)
- font: DM Sans, 0.6875rem, weight 700
- letter-spacing: 0.12em, uppercase
- color: accent
- ::before line: 1.5rem wide, 2px tall, accent color

---

## Layout Pattern (Homepage)

1. **Hero** — Full viewport, centered or left-aligned, headline + subtext + 2 CTAs + stats row
2. **Logo Strip** — Auto-scrolling brand logos, surface-2 bg
3. **Problem → Solution** — 2 column grid, pain points vs solutions
4. **Services** — 3-col card grid (2 tablet, 1 mobile)
5. **Results** — Dark accent section, 3 case study cards
6. **Testimonials** — 3 quote cards with blockquote + cite
7. **CTA** — Full-width, accent-subtle bg, centered

---

## Key Effects

- **Transitions:** 250ms cubic-bezier(0.4, 0, 0.2, 1) on all interactive elements
- **Hover cards:** translateY(-2px) + border-color change
- **CTA hover:** translateY(-1px) + shadow-accent glow
- **Navbar scroll:** transparent → surface bg + backdrop-blur(12px) + border
- **Active nav link:** accent color + accent underline 2px
- **Logo strip:** CSS @keyframes scrollLeft infinite, pause on hover
- **Stat numbers:** Sora font, large, text-primary

---

## Dark / Light Mode Toggle

- Controlled via `data-theme="dark"` or `data-theme="light"` on `<html>`
- All colors as CSS custom properties, redefined per theme
- Toggle button in navbar — sun/moon icon (Lucide)
- Preference saved to localStorage
- Default: dark mode

---

## Anti-patterns — strictly avoid

- No purple/pink gradients (AI cliché)
- No emojis as icons — use Lucide React only
- No serif fonts anywhere
- No inline styles for colors — CSS variables only
- No more than one H1 per page
- No layout-shifting hover effects
- No low contrast text (minimum 4.5:1 WCAG AA)
- No Inter or Roboto — use Sora + DM Sans only
- No hardcoded hex values in components

---

## Pre-delivery Checklist

- [ ] All colors via CSS variables
- [ ] Dark/light mode toggle works and persists
- [ ] Sora loaded for headings, DM Sans for body
- [ ] One H1 per page
- [ ] All interactive elements have cursor-pointer
- [ ] Focus states visible (keyboard nav)
- [ ] Hover transitions 200–250ms
- [ ] WCAG AA contrast in both modes
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No emojis — Lucide icons only
- [ ] Lucide icons max 20px in nav, 24px in cards

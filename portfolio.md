# Portfolio Website — Build Spec

A build brief for a personal portfolio site showcasing your projects. Hand this file to Claude Code (or any developer) as the full specification. Replace every `{{PLACEHOLDER}}` with your own content before or after building.

> Inspired by the *structure* of modern designer portfolios (dark theme, hero, video-preview work cards, process section). All copy, imagery, branding and projects must be your own.

---

## 1. Goals

- Present you and your projects clearly in under 10 seconds of scanning.
- Drive one action: **book a call / get in touch**.
- Feel polished: smooth motion, strong typography, fast load, fully accessible.

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS variables for theme tokens |
| Animation | Framer Motion (optionally GSAP + ScrollTrigger for scroll effects) |
| Content | MDX or typed JSON files in `/content` (projects, services) |
| Media | `<video>` (webm + mp4 fallback) and `next/image` |
| Forms | Server action or Formspree/Resend for the contact form |
| Hosting | Vercel |
| Analytics | Plausible or Vercel Analytics (cookie-light) |

## 3. Site Map

| Route | Purpose |
|---|---|
| `/` | Home: hero, highlights, selected work, process, services, CTA |
| `/work` | Grid of all projects |
| `/work/[slug]` | Individual case study |
| `/about` | Story, skills, experience, photo |
| `/services` | What you offer, with anchors per service |
| `/contact` | Form + email + socials |
| `/privacy` | Privacy policy |

## 4. Design Tokens

```css
:root {
  --bg: #141414;
  --bg-elevated: #1c1c1c;
  --text: #f5f5f0;
  --text-muted: #a1a1a1;
  --border: #2a2a2a;
  --accent: {{ACCENT_COLOR}};      /* e.g. #c8ff5a */
  --radius: 16px;
  --container: 1200px;
}
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --bg: #fafaf7; --bg-elevated: #fff; --text: #141414;
    --text-muted: #5c5c5c; --border: #e4e4df;
  }
}
```

**Typography**
- Display / headings: `{{DISPLAY_FONT}}` (e.g. a characterful serif or grotesk), large, tight tracking, `clamp()` sizing (hero ≈ `clamp(2.5rem, 7vw, 6rem)`).
- Body: `{{BODY_FONT}}` (e.g. Inter), 16–18px, 1.6 line height.
- Load via `next/font` with fallbacks.

**Spacing:** 8px base scale. Generous vertical rhythm (sections ≈ 96–160px apart on desktop).

## 5. Global Components

- **Header:** logo/name left, nav (Work, About, Services) center or right, `Contact` as a pill button. Sticky with blur backdrop on scroll. Mobile: full-screen menu overlay with staggered link animation.
- **Footer:** large name, one-line positioning statement, email, LinkedIn/GitHub/Dribbble links, copyright, Privacy link, Cookie preferences (if analytics requires consent).
- **Skip link** to `#main-content`.
- **Page transitions:** subtle fade/translate between routes.
- **Cursor / hover states:** scale or label on project cards (desktop only, disabled for reduced motion).

## 6. Home Page Sections (in order)

### 6.1 Hero
- Eyebrow: `{{ROLE}} · {{SPECIALTY}}`
- H1: `{{HEADLINE}}` (one sentence, outcome-focused)
- Subline: `{{ONE_SENTENCE_VALUE_PROP}}`
- Primary CTA: "View my work" → `/work`; secondary: "Get in touch" → `/contact`
- Optional: small award/feature badge linking to `{{AWARD_OR_PRESS_URL}}`
- Entrance: headline reveals line by line (mask + translateY), CTAs fade in after.

### 6.2 Credentials Marquee
Infinite horizontal scroll of 3–5 short facts, e.g.:
- `{{N}}+ years of experience`
- `{{FOCUS_AREA}}`
- `{{NOTABLE_ACHIEVEMENT}}`

Duplicate the list for a seamless loop; pause on hover; static list when `prefers-reduced-motion`.

### 6.3 Selected Work
Show 3 featured projects as large cards stacked vertically (or 2-col grid). Each card:
- Looping muted preview video (`autoplay muted loop playsinline`), lazy-loaded, with a poster image
- Separate mobile and desktop video sources via `<source media>`
- Tag chips (e.g. `Web App`, `Branding`, `Research`)
- One-line result headline with a metric: *"{{WHAT_YOU_BUILT}} — {{MEASURABLE_RESULT}}."*
- Whole card links to `/work/[slug]`
- Hover: slight scale on media, arrow icon slides in

### 6.4 How I Work
Numbered list (01–04), each with a short heading and 1–2 sentence description:
1. `{{PRINCIPLE_1}}`
2. `{{PRINCIPLE_2}}`
3. `{{PRINCIPLE_3}}`
4. `{{PRINCIPLE_4}}`

Sticky left title, right column scrolls; each item fades in as it enters the viewport.

### 6.5 Services
Two or three cards, each with: title, "For whom" line, 1–2 sentence description, "Learn more" link to `/services#slug`.

### 6.6 Closing CTA
Large heading: `{{CTA_HEADLINE}}` + button "Book a free call" → `/contact` (or your Calendly/Cal.com URL).

## 7. Work Page (`/work`)
- Page title + short intro
- Filter chips by tag (client-side, animated layout change)
- Responsive grid: 1 col mobile, 2 col desktop
- Same card component as home

## 8. Case Study Template (`/work/[slug]`)

Front-matter (MDX or JSON):

```yaml
title: "{{PROJECT_TITLE}}"
slug: "{{project-slug}}"
tagline: "{{ONE_LINE_RESULT}}"
tags: ["{{TAG_1}}", "{{TAG_2}}"]
year: {{YEAR}}
role: "{{YOUR_ROLE}}"
client: "{{CLIENT_OR_PERSONAL}}"
duration: "{{DURATION}}"
cover: "/media/projects/{{slug}}/cover.jpg"
videoDesktop: "/media/projects/{{slug}}/grid-desktop.webm"
videoMobile: "/media/projects/{{slug}}/grid-mobile.webm"
featured: true
```

Body sections:
1. **Overview**: context, the problem, your role
2. **Challenge**: what made it hard
3. **Approach**: process, key decisions, trade-offs (with images)
4. **Solution**: final product, screens, short video/GIF
5. **Results**: 2–4 metrics in large type
6. **Reflection**: what you learned
7. **Next project** link at the bottom

## 9. About Page
- Portrait photo + short personal intro (`{{BIO}}`)
- Timeline or list of experience
- Skills / tools grouped by category
- Optional: "Currently" block (what you're working on, reading, etc.)
- CTA to contact

## 10. Services Page
For each service (anchored with `id`):
- Name, who it's for, what's included, how engagements work, typical outcome
- Optional pricing model or "starting from"
- CTA to contact

## 11. Contact Page
- Short intro line
- Form: name, email, message, optional "project type" select. Validate client + server side, honeypot field for spam, success/error states
- Direct email: `{{EMAIL}}`
- Socials: `{{LINKEDIN}}`, `{{GITHUB}}`, `{{OTHER}}`
- Optional embedded scheduler link

## 12. Motion Guidelines
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`; durations 400–800ms for reveals, 150–250ms for hovers.
- Animate `transform` and `opacity` only.
- Reveal on scroll once (don't replay).
- **Respect `prefers-reduced-motion`:** disable parallax, marquee, and auto-playing video where appropriate.

## 13. Accessibility
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page
- WCAG AA contrast on both themes
- Visible focus rings; full keyboard navigation (menu, filters, cards)
- Videos: decorative previews are `aria-hidden` with muted autoplay; case study videos get controls and captions if they have audio
- Meaningful `alt` text on all images
- Form labels, error messages tied with `aria-describedby`

## 14. Performance Targets
- Lighthouse ≥ 95 on Performance, Accessibility, SEO, Best Practices
- LCP < 2.5s; CLS < 0.1
- Preview videos ≤ 1.5 MB each, compressed (`ffmpeg -crf 34`), lazy-load below the fold
- Use `next/image`, AVIF/WebP, correct `sizes`
- Self-host fonts, subset if possible

## 15. SEO & Sharing
- Unique `title` + `meta description` per page
- Open Graph + Twitter card images (1200×630), generated per case study via `opengraph-image.tsx`
- `sitemap.xml`, `robots.txt`, canonical URLs
- JSON-LD `Person` schema on home/about
- `theme-color` meta matching `--bg`

## 16. Folder Structure

```
/app
  layout.tsx
  page.tsx
  /work
    page.tsx
    /[slug]/page.tsx
  /about/page.tsx
  /services/page.tsx
  /contact/page.tsx
  /privacy/page.tsx
  opengraph-image.tsx
/components
  Header.tsx  Footer.tsx  Hero.tsx  Marquee.tsx
  ProjectCard.tsx  ProcessList.tsx  ServiceCard.tsx
  ContactForm.tsx  Reveal.tsx
/content
  projects/*.mdx
  services.json
/public/media/projects/<slug>/...
/styles/globals.css
```

## 17. Content Checklist (you provide)

- [ ] Name, role, one-line positioning statement
- [ ] Hero headline + subline
- [ ] 3–5 credential facts for the marquee
- [ ] 3+ projects: title, tags, result metric, cover image, 5–10 s preview video (webm + mp4), full case study copy
- [ ] 4 working principles
- [ ] 2–3 services
- [ ] Bio + portrait photo
- [ ] Contact email, social links, scheduler URL
- [ ] Privacy policy text
- [ ] Logo / favicon / OG image

## 18. Acceptance Criteria

- All routes render and are linked from nav/footer
- Home, Work, and one full case study are complete with real content
- Responsive from 360px to 1920px with no horizontal scroll
- Reduced-motion and keyboard-only usage work
- Contact form delivers to `{{EMAIL}}`
- Lighthouse targets met on the production deploy
- No content, imagery, or branding copied from any other person's site

## 19. Prompt to Start the Build

> Read `portfolio-website-spec.md` and scaffold the project with Next.js (App Router), TypeScript, and Tailwind. Implement the design tokens, global layout, and the home page first using placeholder content from the spec. Then build `/work`, the case study template, `/about`, `/services`, and `/contact`. Ask me for any missing `{{PLACEHOLDER}}` values before finalizing.
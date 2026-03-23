# Portfolio Website Structure — rtorrico.com

Based on v2 profile content. Every decision below is justified by the
best practices research in `portfolio-best-practices.md`.

---

## Layout

Single-page design with smooth scroll navigation.
Two-column layout on desktop: sticky left sidebar (nav + identity) + scrollable right content.
Stacks to single column on mobile (mobile-first responsive).

> **Why this layout:** Brittany Chiang's two-column pattern is the most cited
> best-in-class portfolio layout. Sticky nav means the user is never lost.
> Single-page keeps friction low — recruiters spend ~30 seconds on a portfolio.

---

## Left Sidebar (sticky)

```
Rodrigo Torrico Del Castillo
Senior Fullstack Engineer | AI-Augmented Development

[professional photo]

Nav (5 items max — best practice):
  - About
  - Experience
  - Projects
  - Community
  - Contact

Social icons (always visible — Brittany Chiang pattern):
  GitHub | LinkedIn | Email

Resume: [Download PDF]
Dark/Light mode toggle
```

**Best practices applied:**
- Nav reduced to 5 items (was 6 — removed Skills as a standalone section; skills are shown in context within Experience and Projects instead, per research: "Top portfolios rarely list skills in a plain bullet list. Skills are shown in context.")
- Social links always visible in sidebar, not buried in footer (Brittany Chiang pattern)
- Resume download in sidebar — recruiters expect to find it within 5 seconds
- Dark/light mode toggle visible at all times (increasingly expected in dev community)
- Professional photo increases trust and personality
- Scroll-spy highlights active nav item as user scrolls

**Accessibility:**
- `<nav>` with `aria-label="Main navigation"`
- Skip-to-content link as very first focusable element: `<a href="#content" class="sr-only focus:not-sr-only">Skip to content</a>`
- All nav items keyboard-focusable with visible focus ring
- Social links have `aria-label` (e.g. "GitHub profile", not just an icon)
- Theme toggle has `aria-label="Toggle dark mode"`

---

## Right Content (scrollable sections)

### Section 1: Hero / About

**HTML element:** `<section id="about" aria-label="About">`

```
Headline (h1 — only one per page):
  "I build scalable fullstack systems — from real-time APIs to cloud
   infrastructure — for products used by millions."

Narrative (3 paragraphs):
  I started building things in university — organizing programming contests
  with IEEE, competing in ACM ICPC, and speaking at Google Developers Group
  events. That was 2015. I haven't stopped since.

  My first job took me into serverless backends for a travel company, where
  I learned to build systems that scale without thinking about servers.
  Then I moved to NICE CXone and discovered what enterprise scale really
  means — 600 million health tests a year running through the frontend I
  was rebuilding. Now at Unosquare, I design real-time architectures with
  Node.js and Go, build AWS infrastructure from the ground up, and maintain
  frontend experiences for over 6 million users.

  Over 7 years I've shipped across healthcare, education, tourism, and
  customer experience platforms. I still organize Angular Bolivia and
  speak at GDG events — because the best engineers I know are the ones
  who share what they learn. I value clean systems, honest communication,
  and teams that ship together.
```

**Best practices applied:**
- **Hero headline extracted from about text** — one punchy sentence above the fold that answers "what does this person do?" in under 3 seconds. (Brittany Chiang: "I build accessible, pixel-perfect digital experiences for the web.")
- First-person narrative, not third-person (best practice: "A portfolio about section should always be first-person")
- Mentions current role + company with link to Unosquare
- Human details woven in: community organizing, GDG speaking, values
- "Unosquare" linked to company website (best practice: link to current employer)
- No generic phrases ("passionate", "team player") — every sentence is specific
- 3 paragraphs max (best practice: 2–4 paragraphs)

**Visual design:**
- Generous whitespace around text — do not crowd
- Subtle entrance animation on load (Framer Motion `fadeIn` + slight `translateY`)
- Animation respects `prefers-reduced-motion` — no animation if user prefers reduced motion

**Performance:**
- No hero image to block LCP — text renders instantly
- Fonts preloaded in `<head>` with `font-display: swap`

---

### Section 2: Experience

**HTML element:** `<section id="experience" aria-label="Work experience">`

Three entries, reverse chronological. Each entry has a one-line story + impact bullets + tech tags.

```
[Nov 2022 – Present]  Senior Software Engineer — Unosquare (linked)
  Story: "I joined to take ownership of infrastructure and architecture —
  and ended up building the entire cloud foundation for a real-time
  platform from scratch."

  - Real-time feature management system (Node + Go)
  - 6M users — stability + UX improvements
  - AWS infrastructure from the ground up
  - 4 weeks → 4 days project setup time (Terraform, Docker, K8s)
  - Team lead: 1:1s, career dev, delivery, code reviews
  - JS/TS technical interviewer

  Tech: [Node.js] [Go] [AWS] [Terraform] [Docker] [K8s] [Angular] [React]

---

[Jul 2021 – Jun 2022]  Software Engineer — NICE CXone (linked)
  Story: "I came here to work on something at a bigger scale — and learned
  what it takes to ship at enterprise level."

  - Frontend rebuild for 600M health tests/year
  - Led code quality in Angular
  - Test coverage 30% → 80%

  Tech: [Angular] [TypeScript] [NgRx] [AWS] [Docker]

---

[Dec 2018 – Jul 2021]  Software Developer — Special Tours (linked)
  Story: "This was where I learned to build from zero — serverless backends,
  reusable component libraries, and systems that had to work regardless of
  how many users showed up."

  - Serverless Firebase backends
  - 35% processing speed increase
  - 400+ travel circuits supported

  Tech: [Angular] [Node.js] [Nest.js] [Firebase] [Docker]
```

**Best practices applied:**
- Reverse chronological order
- 2–4 impact bullets per role (best practice: keep concise)
- Metrics in every role: 6M users, 600M tests, 35% speed increase, 30→80% coverage, 4wk→4d
- Tech stack shown as visual pill/chip tags per role — scannable in 2 seconds
- Company names linked to websites
- One-line story per role adds narrative thread without adding length
- Unosquare bullets trimmed from 6 to a scannable list (best practice: 2–4 bullets — exception for current role with leadership responsibilities)

**Visual design:**
- Timeline layout: date on the left, content on the right
- On hover, each entry gets a subtle background highlight (Brittany Chiang pattern)
- Tech pills use the accent color
- "View Full Résumé" link at the bottom of this section → downloads PDF

**Accessibility:**
- Each entry is an `<article>` with a heading
- Dates use `<time datetime="2022-11">`
- Tech tags are `<span>` elements, not links (no false affordance)

---

### Section 3: Projects

**HTML element:** `<section id="projects" aria-label="Projects">`

Card grid. Currently 1 project, designed to scale to 3–6.

```
[solveOS]
  Thumbnail: screenshot of the landing page (WebP, lazy loaded)
  Title: "solveOS"
  Description: "A problem-solving framework for humans and AI agents.
  Plan → Build → Ship with validation gates."
  Tech: [Next.js] [TypeScript] [Tailwind CSS]
  Links: [Live Site ↗] [GitHub ↗]

[Future project 2]
  — placeholder slot —

[Future project 3]
  — placeholder slot —
```

**Best practices applied:**
- Screenshot/thumbnail for every project (best practice: "Include a screenshot or visual thumbnail — first impressions matter")
- Live URL required (best practice: "Show at least one project with a live URL")
- GitHub link required (best practice: "Links to your open-source GitHub contributions")
- Tech stack as visible tags
- One-line description that explains what it does, not what tech it uses
- Card grid scales from 1 to 6 without redesign
- Link to full project archive at bottom: "View all projects on GitHub →" (best practice: "Separate featured projects from a full archive")

**Visual design:**
- Cards with subtle border, rounded corners
- Hover effect: slight lift + link overlay appears
- External link icon (↗) on live site and GitHub links
- Thumbnails use `aspect-ratio: 16/9` to prevent CLS

**Performance:**
- Images in WebP format with AVIF fallback
- Lazy loading with `loading="lazy"` for below-fold images
- Explicit `width` and `height` attributes to prevent CLS
- Thumbnails served at 2x resolution max (no oversized images)

**Accessibility:**
- Each card is an `<article>` with heading
- External links have `aria-label` including destination (e.g. "View solveOS live site, opens in new tab")
- Images have descriptive `alt` text (e.g. "solveOS landing page showing the Plan, Build, Ship framework cycle")

---

### Section 4: Community & Awards

**HTML element:** `<section id="community" aria-label="Community and awards">`

Merges volunteering + awards into one section (both are trust signals).

```
Community:
  Organizer — Angular Bolivia (Dec 2024 – Present)
  Speaker — Google Developers Group (Feb 2015 – Present, 11 years)
    "Workshops, events, and conferences focused on Angular, Firebase,
     and Android."

Awards:
  1st Place — Startup Weekend Cochabamba 2018
    "Pet collars with QR + GPS tracking. Designed the interface, gave the pitch."
  1st Place — HackBo 2017
    "AI safety solution for dangerous street situations. Designed the prototype, gave the pitch."

Groups:
  AWS User Group Cochabamba
  IxDF Local Group Cochabamba
```

**Best practices applied:**
- Community involvement is a strong trust signal (best practice: "conference talks, meetup organizing")
- Awards are trust signals (best practice: "Awards, recognitions, or hackathon wins")
- Merged into one section to reduce nav items and keep the page focused
- GDG/Angular Bolivia logos add visual credibility (best practice: "Client or employer logos — tasteful")
- Groups listed briefly — shows ecosystem involvement without taking space

**Visual design:**
- Two-column layout: Community roles on left, Awards on right (stacks on mobile)
- Optional: small logos for GDG, Angular Bolivia, AWS UG
- Award entries are compact cards with one-line descriptions

---

### Section 5: Recommendations

**HTML element:** `<section id="recommendations" aria-label="Recommendations">`

```
"Exceptional Software Engineer, reliable teammate who meets deadlines
 and delivers high-quality results."
 — Daniel Oropeza Soria, Full-stack Software Engineer
   Oct 2023

"Skilled developer with a leader mentality, strong communication
 skills, and vast experience in agile environments."
 — Pedro Moriel Enriquez, Sr. Engineer Tech Lead at Unosquare
   Jun 2023

"9 recommendations on LinkedIn →" (linked)
```

**Best practices applied:**
- Testimonials are trust signals (best practice: "even 2–3 quotes carry weight")
- Real names, real titles, real dates — verifiable
- Link to LinkedIn for full list — lets curious visitors verify
- Keep to 2–3 featured quotes max, don't overwhelm

**Visual design:**
- Large quotation mark as decorative element
- Cards with subtle background, name + title below quote
- Subtle slide-in animation on scroll

---

### Section 6: Contact (footer)

**HTML element:** `<footer id="contact" aria-label="Contact">`

```
Headline: "Let's talk."
Subtext: "I'm always open to discussing new projects, interesting
ideas, or opportunities to collaborate."

Email: rodrigo.torricodelcastillo@gmail.com (mailto: link + copy button)
LinkedIn: linkedin.com/in/tokidev
GitHub: github.com/t0k1dev

Location: Cochabamba, Bolivia (Remote)
Languages: Spanish (Native) | English (Full Professional)

[Download Resume PDF]
```

**Best practices applied:**
- Short personal note increases response rate (best practice: "I'm currently open to new opportunities")
- Email as `mailto:` link AND with a copy-to-clipboard button — do not hide behind a form only (best practice: "Make the email address copyable and/or a mailto: link")
- Resume download repeated here (some users scroll to bottom first)
- No complex contact form — friction-free (best practice: "most top portfolios avoid complex contact forms")
- Social links repeated from sidebar for mobile users who don't see the sidebar

**Visual design:**
- Clean, minimal footer
- Accent color on the "Let's talk" headline
- Generous padding above and below

**Accessibility:**
- `<footer>` element with `role="contentinfo"`
- All links have descriptive text, not just icons
- Copy button has `aria-label="Copy email address"` and announces "Copied!" to screen readers

---

## Visual Design System

**Best practices applied from research:**

### Color
- Dark theme as default with one accent color used consistently (Brittany Chiang pattern)
- Light mode toggle — implemented with CSS custom properties (`--color-bg`, `--color-text`, `--color-accent`)
- Accent color used for: nav active state, tech pills, links on hover, headings emphasis
- WCAG AA contrast minimum 4.5:1 for all text, 3:1 for large text

### Typography
- 2 typefaces maximum (best practice):
  - **Body:** Inter — clean, highly legible, widely used in top portfolios
  - **Code/accent:** JetBrains Mono or Fira Code — for tech tags and code references
- Font sizes use a modular scale (e.g. 1.25 ratio)
- Line height: 1.6 for body text, 1.2 for headings
- Fonts served with `font-display: swap` to prevent invisible text

### Spacing
- Generous whitespace (best practice: "crowded portfolios signal poor design sense")
- Consistent spacing scale using Tailwind's default (4px base)
- Sections separated by `py-24` minimum on desktop
- Content max-width: `max-w-2xl` for text readability (~65 characters per line)

### Micro-interactions
- Nav items: underline slides in on hover
- Experience entries: subtle background highlight on hover (Brittany Chiang)
- Project cards: slight `translateY(-4px)` lift on hover
- Tech pills: slight scale on hover
- All transitions: `duration-200 ease-in-out`
- All animations disabled when `prefers-reduced-motion: reduce`

---

## Accessibility (a11y) Specification

**All best practices from research applied:**

### Semantic HTML structure
```html
<body>
  <a href="#content" class="sr-only focus:not-sr-only">Skip to content</a>
  <aside>         <!-- Sidebar -->
    <header>      <!-- Name, title, photo -->
    <nav>         <!-- Main navigation -->
    <div>         <!-- Social links + resume -->
  </aside>
  <main id="content">
    <section id="about" aria-label="About">
    <section id="experience" aria-label="Work experience">
    <section id="projects" aria-label="Projects">
    <section id="community" aria-label="Community and awards">
    <section id="recommendations" aria-label="Recommendations">
    <footer id="contact" aria-label="Contact">
  </main>
</body>
```

### Checklist
- [ ] Skip-to-content link (first focusable element)
- [ ] One `<h1>` per page (the hero headline)
- [ ] Heading hierarchy: h1 → h2 (section titles) → h3 (entries)
- [ ] All images have descriptive `alt` text
- [ ] All interactive elements focusable via keyboard with visible focus ring
- [ ] `aria-label` on all `<section>` and `<nav>` elements
- [ ] External links announce "opens in new tab" via `aria-label` or visually hidden text
- [ ] Color contrast WCAG AA (4.5:1 text, 3:1 large text)
- [ ] `prefers-reduced-motion` respected — no animation when set
- [ ] `prefers-color-scheme` detected for initial theme
- [ ] Theme toggle persists choice in `localStorage`
- [ ] Tested with VoiceOver (macOS/iOS) and NVDA (Windows)
- [ ] Focus order follows visual order (no `tabindex` hacks)

---

## Performance Specification

**All Core Web Vitals targets from web.dev research:**

### Targets
- **LCP (Largest Contentful Paint):** < 2.5s — hero text renders immediately (no blocking images)
- **CLS (Cumulative Layout Shift):** < 0.1 — all images have explicit dimensions, fonts use `font-display: swap`
- **INP (Interaction to Next Paint):** < 200ms — minimal JS, no heavy interactivity
- **Lighthouse score:** 90+ in all 4 categories (Performance, Accessibility, Best Practices, SEO)

### Implementation
- **Rendering:** Next.js App Router with static generation (`generateStaticParams`) — HTML pre-rendered at build time, no client-side rendering needed for portfolio content
- **Images:** WebP with AVIF fallback, served via Next.js `<Image>` component (automatic optimization, lazy loading, explicit dimensions)
- **Fonts:** Preloaded in `<head>`, subset to Latin characters only, `font-display: swap`
- **JavaScript:** Minimal client JS — only for theme toggle, scroll-spy, copy-to-clipboard, and Framer Motion entrance animations. No heavy frameworks for a static portfolio.
- **CSS:** Tailwind CSS with PurgeCSS — only used classes shipped
- **Deployment:** Vercel Edge Network (CDN + edge caching)
- **Asset hints:** `<link rel="preload">` for hero font, `<link rel="dns-prefetch">` for external domains (GitHub, LinkedIn)

### Bundle budget
- Total JS: < 50KB gzipped (portfolio doesn't need more)
- Total CSS: < 15KB gzipped (Tailwind purged)
- First paint: < 1s on 3G

---

## SEO & Metadata Specification

**All best practices from research applied:**

### `<head>` tags
```html
<title>Rodrigo Torrico — Senior Fullstack Engineer</title>
<meta name="description" content="Senior Fullstack Engineer building scalable systems — from real-time APIs to cloud infrastructure — for products used by millions. 7+ years across healthcare, education, and tourism." />
<link rel="canonical" href="https://rtorrico.com" />
```

### Open Graph (social sharing previews)
```html
<meta property="og:title" content="Rodrigo Torrico — Senior Fullstack Engineer" />
<meta property="og:description" content="I build scalable fullstack systems for products used by millions." />
<meta property="og:image" content="https://rtorrico.com/og-image.png" />
<meta property="og:url" content="https://rtorrico.com" />
<meta property="og:type" content="website" />
```

### Twitter/X card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Rodrigo Torrico — Senior Fullstack Engineer" />
<meta name="twitter:description" content="I build scalable fullstack systems for products used by millions." />
<meta name="twitter:image" content="https://rtorrico.com/og-image.png" />
```

### JSON-LD Person schema (improves Google Knowledge Panel)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rodrigo Torrico Del Castillo",
  "jobTitle": "Senior Fullstack Engineer",
  "url": "https://rtorrico.com",
  "email": "rodrigo.torricodelcastillo@gmail.com",
  "sameAs": [
    "https://linkedin.com/in/tokidev",
    "https://github.com/t0k1dev"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Unosquare"
  },
  "knowsLanguage": ["Spanish", "English"],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Universidad Católica Boliviana"
  }
}
```

### Files
- `/sitemap.xml` — auto-generated by Next.js
- `/robots.txt` — `Allow: /` with sitemap reference
- `/og-image.png` — 1200x630px, name + title + accent color background (design to match site theme)

### Domain
- Custom domain: `rtorrico.com` (not `.github.io` or `.vercel.app`)
- HTTPS enforced via Vercel

---

## Trust Signals Summary

Every trust signal from the research is accounted for in this structure:

| Trust Signal | Where it appears | Status |
|---|---|---|
| Real, deployed projects with live URLs | Projects section (solveOS) | Present |
| GitHub contributions | Sidebar social link + project GitHub links | Present |
| Employer logos/links | Experience section — company names linked | Present |
| Recommendations/testimonials | Recommendations section — 2 featured quotes | Present |
| Awards/hackathon wins | Community section — 2 first places | Present |
| Community involvement | Community section + About narrative | Present |
| Professional photo | Sidebar | Pending (add to todo) |
| Resume/CV download | Sidebar + Contact footer | Pending (add to todo) |
| Active GitHub graph | Optional: embed via GitHub API | Future |

---

## Technical Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Gold standard for dev portfolios (Brittany Chiang, Lee Robinson, Josh W. Comeau all use it). Static generation = fast, SEO-friendly. |
| Styling | Tailwind CSS | Utility-first, consistent, small bundle with purge. Used by all 3 reference portfolios. |
| Animation | Framer Motion | Lightweight entrance animations, built-in `prefers-reduced-motion` support. |
| Fonts | Inter + JetBrains Mono | Inter is the most used font in top portfolios. JetBrains Mono for code/tech accent. |
| Icons | Lucide React | Tree-shakeable, accessible SVG icons. |
| Deploy | Vercel | Edge CDN, preview deployments per PR, zero-config with Next.js. |
| Analytics | Plausible or Vercel Analytics | Privacy-friendly, no cookie banners needed. |
| CI/CD | GitHub Actions | Lint + build + Lighthouse audit on every push. |
| Domain | rtorrico.com | Custom domain — not a subdomain of a hosting provider. |

---

## Anti-patterns avoided

From the research "Common Mistakes to Avoid":

| Mistake | How this structure avoids it |
|---|---|
| No live URL for projects | solveOS has live URL + GitHub |
| Listing 50+ skills as badges | Skills shown in context (experience tech tags), no standalone skills section |
| Using skill rating bars | Not used anywhere |
| No clear contact method | Email in sidebar (always visible) + footer + mailto link |
| Autoplay video or heavy animations | No video. Animations are subtle, respect reduced-motion |
| Generic phrases | Every sentence in the about is specific and backed by numbers |
| No mobile responsiveness | Mobile-first responsive design, sidebar stacks to header |
| No dark mode | Dark/light toggle in sidebar |
| Outdated content | Structure designed for easy updates (data-driven sections) |
| No resume/CV link | Resume in sidebar + footer (2 locations) |

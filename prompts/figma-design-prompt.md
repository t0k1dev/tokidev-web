# Figma Design Prompt — rtorrico.com Portfolio

Design a developer portfolio website for **Rodrigo Torrico Del Castillo**, a Senior Fullstack Engineer. The site needs dark and light themes, bilingual support (English/Spanish), and a blog section. The primary design reference is **Brittany Chiang's portfolio (brittanychiang.com)** — a two-column layout with a sticky sidebar and scrollable content.

---

## Design System

### Color Tokens

Create a Figma **local variable collection** called "Theme" with two modes: **Dark** (default) and **Light**.

**Dark Mode (Default):**
| Token Name | Hex | Usage |
|---|---|---|
| `bg` | `#0f172a` | Page background |
| `surface` | `#1e293b` | Cards, elevated surfaces |
| `text` | `#e2e8f0` | Primary body text |
| `text-muted` | `#94a3b8` | Secondary/dimmed text, dates, descriptions |
| `accent` | `#38bdf8` | Links, active nav, tech pills, "Let's talk" headline, interactive elements |
| `accent-hover` | `#7dd3fc` | Hover state for accent elements |
| `border` | `#334155` | Card borders, dividers |

**Light Mode:**
| Token Name | Hex | Usage |
|---|---|---|
| `bg` | `#ffffff` | Page background |
| `surface` | `#f8fafc` | Cards, elevated surfaces |
| `text` | `#0f172a` | Primary body text |
| `text-muted` | `#64748b` | Secondary/dimmed text |
| `accent` | `#0284c7` | Links, active nav, tech pills |
| `accent-hover` | `#0369a1` | Hover state |
| `border` | `#e2e8f0` | Card borders, dividers |

All text/background combinations must pass **WCAG AA contrast** (4.5:1 normal text, 3:1 large text).

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Body & Headings | **Inter** | 400 (body), 500 (medium), 600 (semibold), 700 (bold) | Primary typeface |
| Code / Tech pills | **JetBrains Mono** | 500 | Monospace for tech tags |

**Type Scale (1.25 ratio):**
- h1 (Hero): 48px / bold / line-height 1.1 / tracking tight / `text-balance`
- h2 (Section titles): 14px / bold / uppercase / letter-spacing widest (on desktop, visible as sticky mobile headers; visually hidden on desktop via sr-only)
- h3 (Entry titles): 16px / medium / line-height 1.4
- Body: 14px / regular / line-height 1.6
- Small/meta: 12px / regular or semibold / line-height 1.5
- Tech pill: 12px / medium / JetBrains Mono

**Line heights:** 1.6 for body, 1.2 for headings. Max ~65 characters per line.

### Spacing

- Base unit: **4px**
- Section vertical padding: **96px** (py-24) minimum on desktop
- Content padding: 24px on mobile, 48px on tablet, 24px within sidebar offset on desktop
- Card internal padding: 24px
- Gap between cards: 24px
- Generous whitespace everywhere — never crowded

### Breakpoints

| Name | Width | Layout |
|---|---|---|
| Mobile | < 1024px | Single column, hamburger menu header |
| Desktop | >= 1024px | Two-column: 420px sidebar + scrollable content |

---

## Pages to Design

Create **4 frames** per theme mode (8 total, or use Figma variable modes to switch):

1. **Homepage — Desktop** (1440 x auto)
2. **Homepage — Mobile** (390 x auto)
3. **Blog Index — Desktop** (1440 x auto)
4. **Blog Post — Desktop** (1440 x auto)

Design the **Dark mode first** (it's the default). Then swap variables for Light mode.

---

## Page 1: Homepage — Desktop (1440px wide)

### Layout

Two columns:
- **Left sidebar:** Fixed 420px wide, full viewport height, vertically centered content between top/bottom sections. Padding: 48px horizontal, 80px vertical.
- **Right content area:** Scrollable, offset by 420px from left. Max content width ~672px (max-w-2xl). Padding: 24px horizontal, 80px vertical.

### Left Sidebar (sticky, full height)

**Top section:**
1. **Name:** "Rodrigo Torrico" — 36px, bold, `text` color
2. **Title:** "Senior Fullstack Engineer" — 18px, medium, `text` color
3. **Subtitle:** "AI-Augmented Development" — 14px, regular, `text-muted` color
4. *(16px spacer)*
5. **Navigation** — vertical list, each item has:
   - A horizontal line indicator (32px wide, 1px height, `text-muted` color; active: 64px wide, `text` color)
   - Label text (14px, medium, `text-muted`; active: `text`)
   - Items: About, Experience, Projects, Community, Contact
   - Blog (separate, same style but links to /blog/ page)
   - Vertical gap between items: 4px

**Bottom section:**
1. **Social icons row:** GitHub, LinkedIn, Email — 20px Lucide SVG icons, `text-muted`, hover: `accent`. Gap: 16px between icons.
2. *(16px spacer)*
3. **Row:** Theme toggle (sun/moon icon, 20px) + Language picker ("EN" / "ES" text links, active: `accent`, inactive: `text-muted` at 70% opacity). Gap: 12px.

### Right Content Area — Sections

Each section is separated by 64-96px of vertical space. Scroll-triggered entrance animations (fade in + translateY 20px, 600ms ease-out).

---

#### Section 1: Hero / About
- **h1:** "I build scalable fullstack systems — from real-time APIs to cloud infrastructure — for products used by millions."
  - 48px (mobile: 30px), bold, `text` color, tracking tight, `text-balance`
- *(32px spacer)*
- **3 paragraphs** (14px, `text-muted`, line-height 1.6, 16px gap between paragraphs):
  - Para 1: "I started building things in university — organizing programming contests with IEEE, competing in ACM ICPC, and speaking at Google Developers Group events. That was 2015. I haven't stopped since."
  - Para 2: "My first job took me into serverless backends for a travel company, where I learned to build systems that scale without thinking about servers. Then I moved to NICE CXone and discovered what enterprise scale really means — 600 million health tests a year running through the frontend I was rebuilding. Now at Unosquare, I design real-time architectures with Node.js and Go, build AWS infrastructure from the ground up, and maintain frontend experiences for over 6 million users."
  - Para 3: "Over 7 years I've shipped across healthcare, education, tourism, and customer experience platforms. I still organize Angular Bolivia and speak at GDG events — because the best engineers I know are the ones who share what they learn. I value clean systems, honest communication, and teams that ship together."

---

#### Section 2: Experience

**Section header** (mobile-only sticky bar, sr-only on desktop):
- "EXPERIENCE" — 14px, bold, uppercase, widest letter-spacing, `text` color

**3 entries** in a timeline layout. Each entry is a row:

**Left column (date):** ~25% width
- "Nov 2022 — Present" / "Jul 2021 — Jun 2022" / "Dec 2018 — Jul 2021"
- 12px, semibold, uppercase, widest tracking, `text-muted`

**Right column (content):** ~75% width

**Entry 1 — Unosquare:**
- Title line: "Senior Software Engineer · [Unosquare↗](link)" — 16px, medium. Role in `text`, company in `accent` with arrow-up-right icon (14px)
- Story: "I joined to take ownership of infrastructure and architecture — and ended up building the entire cloud foundation for a real-time platform from scratch." — 14px, `text-muted`
- Bullet list (6 items): Each bullet has a small `accent`-colored dot (6px circle, vertically centered), then text in 14px `text-muted`:
  - "Designed and implemented a real-time feature management system using Node and Go"
  - "Improved stability and UX for over 6 million users by fixing production bugs on legacy Angular code"
  - "Built AWS infrastructure from the ground up to support real-time APIs with Terraform, Docker, and Kubernetes"
  - "Reduced project setup time from 4 weeks to 4 days through infrastructure automation"
  - "Led a development team: 1:1s, career development, delivery management, and code reviews"
  - "Served as JS/TS technical interviewer evaluating architecture and problem-solving skills"
- **Tech pills row:** Node.js, Go, AWS, Terraform, Docker, Kubernetes, Angular, React, TypeScript, DynamoDB, WebSocket, GitHub Actions
  - Each pill: rounded-full, 12px JetBrains Mono medium, `accent` bg at 85% opacity, `bg` text color, px-12 py-4

**Entry 2 — NICE CXone:**
- Title: "Software Engineer · [NICE CXone↗](link)"
- Story: "I came here to work on something at a bigger scale — and learned what it takes to ship at enterprise level, leading code quality for a team handling 600 million health tests a year."
- 3 bullets:
  - "Rebuilt the frontend with NgRx and TypeScript for a network handling 600M health tests annually"
  - "Led code quality and development practices in Angular for the team"
  - "Improved test coverage from 30% to 80% by adding unit tests with Jasmine"
- Tech: Angular, TypeScript, NgRx, RxJS, AWS, Docker, Jasmine

**Entry 3 — Special Tours:**
- Title: "Software Developer · Stealth (Special Tours)"
- Story: "This was where I learned to build from zero — serverless backends, reusable component libraries, and systems that had to work regardless of how many users showed up."
- 3 bullets:
  - "Built scalable serverless backends on Firebase infrastructure"
  - "Increased processing speed by 35% with video and image processing features using Node and Nest.js"
  - "Created reusable Angular components and a shared library supporting 400+ travel circuits"
- Tech: Angular, Node.js, Nest.js, Firebase, Docker, MongoDB, TypeScript

**Bottom link:** "View Full Resume ↗" — 14px medium, `accent` color

**Hover interaction:** Show a subtle background highlight (surface color at ~50% opacity with rounded corners) over the entire entry on hover (Brittany Chiang pattern). The entire list of entries dims slightly (opacity 0.5) except the hovered one.

---

#### Section 3: Projects

**Section header** (mobile-only, sr-only desktop): "PROJECTS"

**Card grid** — 1 column (designed to scale to 2-3 columns when more projects added):

**solveOS card:**
- Container: `surface` bg, 1px `border`, rounded-lg (8px), 24px padding
- *(No thumbnail image yet — leave space for 16:9 ratio image placeholder at top)*
- Title: "solveOS" — 18px, semibold, `text`
- Description: "A problem-solving framework for humans and AI agents. Provides a repeatable Plan, Build, Ship cycle with validation gates, where AI executes and the human decides." — 14px, `text-muted`
- Tech pills row: Astro, TypeScript, Tailwind CSS
- Links row (16px gap): "Live Site ↗" and "GitHub ↗" — 14px medium, `accent`, with arrow-up-right icon

**Hover:** Card lifts translateY(-4px) with subtle shadow.

**Bottom link:** "View all projects on GitHub ↗" — 14px medium, `accent`

---

#### Section 4: Community & Awards

**Section header** (mobile-only, sr-only desktop): "COMMUNITY & AWARDS"

**Two-column grid** (stacks on mobile):

**Left column — Community:**
- Sub-heading: "COMMUNITY" — 14px, semibold, uppercase, wider tracking, `text`
- Card 1: `surface` bg, `border`, rounded-lg, 16px padding
  - "Organizer — Angular Bolivia" — 14px medium, `text`
  - "Dec 2024 – Present" — 12px, `text-muted`
- Card 2: `surface` bg, `border`, rounded-lg, 16px padding
  - "Speaker — Google Developers Group" — 14px medium, `text`
  - "Feb 2015 – Present" — 12px, `text-muted`
  - "Workshops, events, and conferences focused on Angular, Firebase, and Android." — 12px, `text-muted`
- **Groups sub-section:**
  - "GROUPS" — 12px, semibold, uppercase, `text-muted`
  - "AWS User Group Cochabamba" — 12px, `text-muted`
  - "IxDF Local Group Cochabamba" — 12px, `text-muted`

**Right column — Awards:**
- Sub-heading: "AWARDS" — 14px, semibold, uppercase, wider tracking, `text`
- Card 1: `surface` bg, `border`, rounded-lg, 16px padding
  - "1st Place — Startup Weekend Cochabamba 2018" — 14px medium, `text`
  - "Seed Seeds · Nov 2018" — 12px, `text-muted`
  - "Pet collars with QR + GPS tracking to help owners find lost pets. Designed the interface, gave the pitch." — 12px, `text-muted`
  - Tech pills: Sketch, Angular, Firebase
- Card 2: `surface` bg, `border`, rounded-lg, 16px padding
  - "1st Place — HackBo 2017" — 14px medium, `text`
  - "Clubes de Ciencia Bolivia · Jun 2017" — 12px, `text-muted`
  - "AI-powered safety solution for dangerous street situations. Designed the prototype, gave the pitch." — 12px, `text-muted`
  - Tech pills: Unity, Arduino, Adobe XD

---

#### Section 5: Recommendations

**Section header** (mobile-only, sr-only desktop): "RECOMMENDATIONS"

**Two-column grid** of quote cards:

**Each card:** `surface` bg, `border`, rounded-lg, 24px padding, relative positioning
- **Decorative quotation mark:** Large `"` character, 60px serif font, `accent` at 30% opacity, positioned top-left overlapping the card edge slightly. `aria-hidden="true"` (note for devs).
- **Quote text:** Italic, 14px, `text`, line-height 1.6
  - Card 1: "Exceptional Software Engineer, a reliable teammate who meets deadlines and delivers high-quality results."
  - Card 2: "Skilled developer with a leader mentality, strong communication skills, and vast experience in agile environments across many technologies."
- **Attribution:**
  - Name: 14px medium, `text` — "Daniel Oropeza Soria" / "Pedro Moriel Enriquez"
  - Title: 12px, `text-muted` — "Full-stack Software Engineer" / "Senior Software Engineer Technical Lead at Unosquare"
  - Date: 12px, `text-muted` — "Oct 2023" / "Jun 2023"

**Bottom link:** "9 recommendations on LinkedIn ↗" — 14px medium, `accent`

---

#### Section 6: Contact (Footer)

**Section header** (mobile-only, sr-only desktop): "CONTACT"

- **Headline:** "Let's talk." — 36px (mobile: 30px), bold, `accent` color
- *(16px spacer)*
- **Subtext:** "I'm always open to discussing new projects, interesting ideas, or opportunities to collaborate." — 14px, `text-muted`, max-width ~512px
- *(32px spacer)*
- **Email row:** "[rodrigo.torricodelcastillo@gmail.com](mailto:)" in 14px medium `accent` + "Copy email address" button (outlined, `accent` text, `border` border, 14px, with clipboard icon 16px, rounded-md, px-12 py-6)
- **Location:** "Cochabamba, Bolivia (Remote)" — 14px, `text-muted`
- **Languages:** "Spanish (Native) | English (Full Professional)" — 14px, `text-muted`
- *(32px spacer)*
- **Social icons row** (repeated from sidebar for mobile visibility): GitHub, LinkedIn, Email — same style as sidebar

---

## Page 2: Homepage — Mobile (390px wide)

Same content as desktop but:
- **No sidebar.** Replace with a **sticky top header bar:**
  - Left: "R. Torrico" (18px bold, `text`)
  - Right: theme toggle icon + "EN"/"ES" picker + hamburger menu icon
  - Background: `bg` with bottom `border`
- **Hamburger menu** opens full-width dropdown with:
  - Nav links (same 5 + Blog)
  - Social icons
- **Section headers** become **sticky mobile bars**: semi-transparent `bg` with backdrop-blur, showing section name in uppercase
- All content stacks single-column
- Community & Awards: stacks vertically (community first, then awards)
- Recommendations: stacks vertically
- Hero h1: 30px instead of 48px

---

## Page 3: Blog Index — Desktop

- **Layout:** Same BaseLayout (sidebar + content) but content shows blog post list
- **Title:** "Blog" — 30px bold, `text`
- **Post cards** (vertical stack, 24px gap):
  - Each card: `surface` bg, `border`, rounded-lg, 24px padding
  - Title: 18px semibold, `text` (hover: underline)
  - Meta row: date + reading time — 12px, `text-muted`
  - Description: 14px, `text-muted`
  - Tag pills row: outlined pills (`surface` bg, `accent` text, `border` border, 12px, rounded-full, px-8 py-2)
- **Empty state** (if no posts): "No posts yet. Check back soon." — 14px, `text-muted`

---

## Page 4: Blog Post — Desktop

- **Layout:** Centered content, max-width ~768px (max-w-3xl), no sidebar
- **Back link:** "← Back to blog" — 14px medium, `accent`
- *(32px spacer)*
- **Post title:** 36px bold, `text`, tracking tight
- **Meta row:** "Published on March 21, 2026" — 14px, `text-muted`
- **Tags row:** Same outlined pills as blog index
- *(32px spacer)*
- **Article body:** Standard prose styles — 16px body, `text` color, generous line-height (1.7), heading sizes for h2/h3/h4, code blocks with `surface` bg and monospace font, blockquotes with left `accent` border

---

## Component Library

Create these as **reusable Figma components** with variants:

1. **TechPill** — variants: default, hover (scale 1.05)
2. **ExperienceCard** — variants: default, hover (background highlight)
3. **ProjectCard** — variants: default, hover (translateY -4px + shadow)
4. **RecommendationCard** — with decorative quote mark
5. **PostCard** (blog) — variants: default, hover (title underline)
6. **NavItem** — variants: default, active (wider indicator + text color change)
7. **SocialIcon** — variants: github, linkedin, email; states: default, hover
8. **ThemeToggle** — variants: dark mode (sun icon), light mode (moon icon)
9. **LanguagePicker** — variants: EN active, ES active
10. **CopyEmailButton** — variants: default, copied (with checkmark icon)
11. **MobileHeader** — with hamburger toggle open/closed states
12. **SectionHeader** (mobile sticky) — semi-transparent backdrop-blur bar

---

## Interactions to Prototype

1. **Scroll-spy:** Nav indicator moves to active section as user scrolls
2. **Theme toggle:** Swap all color variables between dark/light
3. **Mobile menu:** Hamburger opens/closes nav dropdown
4. **Experience hover:** Background highlight on entry, other entries dim
5. **Project card hover:** Lift effect
6. **Tech pill hover:** Slight scale
7. **Copy email:** Button shows "Copied!" state briefly
8. **Language switch:** Navigate to /es/ equivalent (show Spanish content variants)

---

## OG Image (separate frame)

- **Dimensions:** 1200 x 630px
- **Background:** `#0f172a` (dark bg)
- **Content:**
  - "Rodrigo Torrico" — 64px, bold, Inter, `#e2e8f0`
  - "Senior Fullstack Engineer" — 32px, medium, Inter, `#38bdf8`
- **Style:** Minimal, matches site theme. Optional subtle geometric accent.

---

## Notes

- Use **Auto Layout** everywhere for responsive behavior
- Set up **Figma variables** for colors so dark/light mode is a single toggle
- The site is designed as **dark-first** — make dark mode the primary design, light is the variant
- All interactive states (hover, focus, active) should be documented as component variants
- Focus rings: 2px solid `accent`, 2px offset — show on buttons/links in a "focused" variant
- Selection color: `accent` bg with `bg` text color

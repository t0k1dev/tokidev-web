# Portfolio Best Practices for Web Developers
> Research based on top developer portfolios: Brittany Chiang (brittanychiang.com), Lee Robinson (leerob.io), Josh W. Comeau (joshwcomeau.com), and award-winning portfolios from Awwwards — cross-referenced with web.dev performance standards.

---

## Portfolios Studied

| Developer | URL | Why Notable |
|---|---|---|
| Brittany Chiang | brittanychiang.com | 6k+ GitHub stars on v4, praised for design/accessibility, works at Klaviyo |
| Lee Robinson | leerob.io | Works at Cursor (ex-Vercel), widely cited as a model portfolio by the dev community |
| Josh W. Comeau | joshwcomeau.com | Known for interactive, whimsical design; one of the most technically impressive dev blogs |
| Matt Farley | mattfarley.ca | Frequently cited in top 15 developer portfolio lists for its clean, intentional layout |
| Jacek Jeznach | jacekjeznach.com | FreeCodeCamp top 15, praised for front-end and WordPress work |
| Awwwards Portfolio winners | awwwards.com/websites/portfolio | Industry benchmark for visual + technical excellence |

---

## 1. Hero / Above-the-Fold

**What the best do:**
- Lead with a clear, direct value proposition — who you are, what you do, and for whom.
- Brittany Chiang opens with: *"I build accessible, pixel-perfect digital experiences for the web."* — one sentence, no ambiguity.
- Lee Robinson keeps it personal and story-driven: role, passion, and a human detail (last song listened to).
- Avoid generic phrases like "passionate developer" or "problem solver". Be specific.

**Best practices:**
- One headline that describes your specialty (not just "Software Engineer").
- A two-to-three line description that communicates your value and personality.
- Visible, direct call-to-action: link to work, resume, or contact.
- A subtle but memorable visual element (ambient animation, custom cursor, or unique layout) — do not overdo it.

---

## 2. Navigation & Structure

**What the best do:**
- Single-page or minimal-page layout with smooth anchor navigation (About, Experience, Projects, Contact).
- Brittany Chiang uses a fixed two-column layout: sticky nav on the left, scrollable content on the right — highly cited as a best-in-class pattern.
- Josh W. Comeau uses clean category-based navigation suited to a content-heavy blog.

**Best practices:**
- Keep navigation items to 4–5 maximum: About, Experience, Projects, (Writing/Blog), Contact.
- Use sticky/fixed navigation so the user is never lost.
- Provide a clear path to resume/CV — either a direct download link or a dedicated page.
- Scroll-spy to highlight the active section in the nav.
- Skip-to-content link for accessibility.

---

## 3. About Section

**What the best do:**
- Short, first-person narrative — not a biography, but a personality introduction.
- Mentions current role and company.
- Adds a human side: hobbies, interests, values — something memorable beyond skills.
- Brittany Chiang mentions climbing, tennis, and searching for Korok seeds (Zelda reference) — memorable and personal.

**Best practices:**
- 2–4 paragraphs maximum.
- Mention your specialty and the type of problems you solve.
- Include 1–2 human details that make you memorable.
- Link to your current employer.
- Optional: a high-quality professional photo — increases trust and personality.

---

## 4. Experience Section

**What the best do:**
- Listed in reverse chronological order.
- Each role includes: company (linked), title, dates, and 2–4 impact-focused bullet points.
- Brittany Chiang uses a clean timeline with tech tags per role — easy to scan.
- Emphasis on *impact*, not just responsibilities ("improved test coverage from 30% to 80%", not "wrote unit tests").

**Best practices:**
- Use numbers and metrics wherever possible (users impacted, performance gains, time saved).
- Include the tech stack per role as tags/chips — visually scannable.
- Keep descriptions concise: 2–4 bullets per role.
- Link company names to their websites.
- Include a "View Full Résumé" link (PDF download).
- Do not list every role — focus on the last 3–5 relevant positions.

---

## 5. Projects Section

**What the best do:**
- Curated, not exhaustive — quality over quantity (3–6 featured projects).
- Each project includes: name, description, tech stack, live link, and GitHub link.
- Brittany Chiang uses project cards with screenshots, tech tags, and external links.
- Josh W. Comeau showcases interactive projects that demonstrate deep technical knowledge.
- Lee Robinson links to real, deployed products used by others.

**Best practices:**
- Show at least one project with a live URL.
- Include a screenshot or visual thumbnail — first impressions matter.
- List the tech stack used as visible tags.
- Prioritize projects that solve real problems or serve real users.
- Separate "featured" projects from a full archive (link to `/archive` or GitHub).
- Show open-source contributions or community impact (stars, forks, installs).

---

## 6. Writing / Blog (Optional but High-Value)

**What the best do:**
- Josh W. Comeau's entire personal brand is built around his interactive blog posts.
- Lee Robinson writes about engineering, AI, and career growth — positions him as a thought leader.
- Brittany Chiang links to published articles on Medium and Klaviyo's engineering blog.

**Best practices:**
- Even 3–5 quality articles signal credibility and communication skills.
- Write about what you actually know and have built — tutorials, case studies, lessons learned.
- Cross-post on DEV.to, Medium, or LinkedIn to increase reach.
- A blog section on the portfolio acts as proof of expertise, not just a list of skills.

---

## 7. Skills Section

**What the best do:**
- Top portfolios rarely list skills in a plain bullet list.
- Skills are shown *in context* — embedded in experience/project descriptions.
- If listed, they are grouped by category (Languages, Frameworks, Tools, Cloud).

**Best practices:**
- Avoid listing 50+ skills — it signals lack of depth.
- Prefer showing skills via projects and experience rather than isolated badges.
- If you include a skills section, group and prioritize: core stack first, then secondary tools.
- Avoid rating bars (5/5 stars, etc.) — they are subjective and look amateur.

---

## 8. Contact Section

**What the best do:**
- Simple and friction-free.
- Brittany Chiang provides social links in the sidebar (GitHub, LinkedIn, CodePen) visible throughout the entire page.
- Lee Robinson provides a direct mailto link.
- Most top portfolios avoid complex contact forms — a direct email or a single short form is enough.

**Best practices:**
- Always show: email, GitHub, LinkedIn.
- Optional: Twitter/X, Dribbble, personal blog RSS.
- A short personal note ("I'm currently open to new opportunities" or "Always happy to talk about...") increases response rate.
- Make the email address copyable and/or a `mailto:` link — do not hide it behind a form only.

---

## 9. Visual Design

**What the best do:**
- Brittany Chiang: dark theme with teal accent — consistent, minimal, and polished.
- Josh W. Comeau: light/dark mode, playful micro-interactions, custom illustrations.
- Awwwards winners: bold typography, intentional whitespace, smooth scroll behaviors.

**Best practices:**
- Choose one primary accent color and use it consistently.
- Favor whitespace — crowded portfolios signal poor design sense.
- Use a maximum of 2 typefaces: one for headings, one for body.
- Prefer system fonts or well-known web fonts (Inter, DM Sans, Fira Code) for performance.
- Dark mode support is increasingly expected — implement it using CSS variables.
- Micro-interactions (hover effects, smooth transitions) add polish without hurting performance.
- Avoid autoplay video or aggressive animations — they distract and slow load time.

---

## 10. Accessibility (a11y)

**What the best do:**
- Brittany Chiang is a web accessibility specialist — her site is a model for WCAG compliance.
- Josh W. Comeau writes about accessibility regularly and practices what he preaches.

**Best practices:**
- Sufficient color contrast (WCAG AA minimum: 4.5:1 for text).
- All interactive elements reachable and operable via keyboard.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- All images have descriptive `alt` text.
- Skip-to-content link at the top.
- ARIA labels where native semantics are insufficient.
- No motion for users who prefer reduced motion (`prefers-reduced-motion` media query).
- Screen-reader tested (VoiceOver / NVDA).

---

## 11. Performance (Core Web Vitals)

**Standards from web.dev / Google:**
- **LCP (Largest Contentful Paint):** < 2.5s — the largest visible element loads fast.
- **CLS (Cumulative Layout Shift):** < 0.1 — no unexpected layout jumps.
- **INP (Interaction to Next Paint):** < 200ms — interactions feel instant.

**Best practices:**
- Use a static site generator or SSR framework (Next.js, Astro, Gatsby) — avoid client-side-only rendering for portfolio content.
- Optimize images: use WebP/AVIF format, lazy loading, explicit width/height attributes.
- Serve fonts with `font-display: swap` to prevent invisible text.
- Minimize JavaScript bundle size — portfolios do not need heavy frameworks.
- Use a CDN and edge deployment (Vercel, Netlify, Cloudflare Pages).
- Preload critical assets (hero image, main font).
- Aim for a Lighthouse score of 90+ in all categories (Performance, Accessibility, Best Practices, SEO).

---

## 12. SEO & Metadata

**Best practices:**
- A unique, descriptive `<title>` tag: `"Rodrigo Torrico — Senior Fullstack Engineer"`.
- A `<meta name="description">` of 150–160 characters summarizing who you are.
- Open Graph tags (`og:title`, `og:description`, `og:image`) for social sharing previews.
- A `/sitemap.xml` and `/robots.txt`.
- Canonical URLs to avoid duplicate content issues.
- Structured data (JSON-LD) for a Person schema — improves Google Knowledge Panel appearance.
- A custom domain — not `username.github.io` or `username.vercel.app`.

---

## 13. Deployment & Tech Stack

**What the best use:**
- Brittany Chiang: Next.js + Tailwind CSS, deployed on Vercel.
- Lee Robinson: Next.js, deployed on Vercel.
- Josh W. Comeau: Custom Next.js blog with MDX, deployed on Vercel.

**Best practices:**
- Next.js or Astro are the current gold standard for developer portfolios.
- Tailwind CSS for utility-first, consistent styling.
- MDX for blog posts if you want to embed interactive components.
- Vercel or Netlify for zero-config deployment with preview URLs per PR.
- GitHub Actions for CI/CD (lint, build, test on push).
- Keep dependencies minimal — a portfolio does not need a heavy CMS or database.

---

## 14. Trust Signals

**What makes visitors trust you immediately:**
- Real, deployed projects with live URLs.
- Links to your open-source GitHub contributions.
- Client or employer logos (tasteful, not a wall of logos).
- Recommendations / testimonials — even 2–3 quotes carry weight.
- Awards, recognitions, or hackathon wins.
- Community involvement (open source contributions, conference talks, meetup organizing).
- Active GitHub (green contribution graph visible via API or screenshot).

---

## 15. Common Mistakes to Avoid

| Mistake | Why It Hurts |
|---|---|
| No live URL for projects | Recruiters cannot verify the work |
| Listing 50+ skills as badges | Signals breadth over depth, looks cluttered |
| Using skill rating bars | Subjective and considered unprofessional |
| No clear contact method | Missed opportunities |
| Autoplay video or heavy animations | Hurts performance and accessibility |
| Generic phrases ("passionate", "team player") | Every portfolio says this — meaningless |
| No mobile responsiveness | ~60% of traffic is mobile |
| No dark mode | Increasingly expected in the dev community |
| Outdated content | Shows inactivity — update at least annually |
| No resume/CV link | Makes it harder for recruiters |

---

## Summary Checklist

### Content
- [ ] Clear headline with specialty
- [ ] Short, human about section
- [ ] Experience with impact metrics
- [ ] 3–6 curated projects with live links
- [ ] Resume/CV download link
- [ ] Visible contact: email + GitHub + LinkedIn

### Design
- [ ] Consistent color palette (1 accent color)
- [ ] 2 typefaces max
- [ ] Generous whitespace
- [ ] Dark/light mode
- [ ] Responsive (mobile-first)
- [ ] Subtle micro-interactions

### Technical
- [ ] Lighthouse 90+ (Performance, A11y, SEO, Best Practices)
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Semantic HTML
- [ ] Keyboard navigable
- [ ] Images optimized (WebP/AVIF, lazy load)
- [ ] Open Graph meta tags
- [ ] Custom domain
- [ ] HTTPS
- [ ] Sitemap + robots.txt

---

*Research conducted: March 2026. Sources: brittanychiang.com, leerob.io, joshwcomeau.com, awwwards.com/websites/portfolio, freecodecamp.org, web.dev/performance.*

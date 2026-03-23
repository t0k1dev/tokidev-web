# Google Stitch Design Prompts — rtorrico.com Portfolio

Use these prompts in [Google Stitch](https://stitch.withgoogle.com) to generate UI designs for each screen. Paste one prompt at a time. After generating, you can iterate by asking Stitch to adjust colors, spacing, or layout.

**Design reference:** Brittany Chiang's portfolio (brittanychiang.com) — minimal two-column developer portfolio with sticky sidebar.

---

## Color Reference

Paste this at the start of any prompt (or include inline) so Stitch knows the palette:

> Dark theme: background #0f172a, card surfaces #1e293b, primary text #e2e8f0, muted text #94a3b8, accent sky-blue #38bdf8, accent hover #7dd3fc, borders #334155. Fonts: Inter for body/headings, JetBrains Mono for code/tech tags.

---

## Prompt 1: Homepage — Desktop Dark Mode

```
Design a dark-themed developer portfolio homepage at 1440px wide. Background color #0f172a.

Two-column layout:
- Left column: 420px wide sticky sidebar, full viewport height, vertically distributed content with top and bottom sections. Background same as page (#0f172a). Horizontal padding 48px, vertical padding 80px.
- Right column: scrollable content area, max content width 672px, padding 24px horizontal and 80px vertical.

LEFT SIDEBAR — Top section:
- Name: "Rodrigo Torrico" in 36px bold Inter, color #e2e8f0
- Below: "Senior Fullstack Engineer" in 18px medium Inter, color #e2e8f0
- Below: "AI-Augmented Development" in 14px regular Inter, color #94a3b8
- 16px gap
- Vertical navigation list with 5 items: About, Experience, Projects, Community, Contact — plus "Blog" separated slightly. Each item has a horizontal line indicator (32px wide, 1px tall, #94a3b8; the active item "About" has a 64px wide line in #e2e8f0 and bolder text). Labels are 14px medium Inter, inactive #94a3b8, active #e2e8f0. 4px vertical gap between items.

LEFT SIDEBAR — Bottom section (pinned to bottom):
- Row of 3 social icons (GitHub, LinkedIn, Email) as simple 20px line icons, color #94a3b8. 16px gap between them.
- 16px below: a row with a sun icon (theme toggle, 20px, #94a3b8) and text links "EN" (active, #38bdf8) and "ES" (inactive, #94a3b8 at 70% opacity). 12px gap between elements.

RIGHT CONTENT — Section 1 (Hero/About):
- Large heading: "I build scalable fullstack systems — from real-time APIs to cloud infrastructure — for products used by millions." in 48px bold Inter, color #e2e8f0, tight letter-spacing, text-wrap balance.
- 32px below: three paragraphs of body text in 14px regular Inter, color #94a3b8, line-height 1.6, 16px gap between paragraphs. First paragraph starts with "I started building things in university..." Second starts with "My first job took me into serverless backends..." Third starts with "Over 7 years I've shipped across healthcare..."

RIGHT CONTENT — Section 2 (Experience), separated by 96px:
- Three experience entries in a timeline layout. Each entry is a row with a left date column (~25% width) and right content column (~75% width).
- Date format: "Nov 2022 — Present" in 12px semibold uppercase Inter, widest letter-spacing, color #94a3b8.
- Entry content: title "Senior Software Engineer · Unosquare" where company name is #38bdf8 with a small arrow-up-right icon. Below: a one-line story paragraph in 14px #94a3b8. Below: 6 bullet points with small #38bdf8 accent dots, text in 14px #94a3b8. Below: a row of rounded pill tags ("Node.js", "Go", "AWS", "Terraform", "Docker", "Kubernetes", "Angular", "React", "TypeScript", "DynamoDB", "WebSocket", "GitHub Actions") in 12px medium JetBrains Mono, background #38bdf8 at 85% opacity, text #0f172a, rounded-full, small padding.
- Show 3 entries total (Unosquare, NICE CXone, Special Tours) with similar structure.
- At the bottom: "View Full Resume →" link in 14px medium #38bdf8.
- Hover effect concept: on hover over an entry, show a subtle #1e293b background highlight with rounded corners on that entry.

RIGHT CONTENT — Section 3 (Projects), separated by 96px:
- One project card: #1e293b background, 1px #334155 border, 8px border-radius, 24px padding.
- Inside: a 16:9 placeholder image area at top (gray placeholder). Below: "solveOS" in 18px semibold #e2e8f0. Below: description text in 14px #94a3b8. Below: tech pill tags (Astro, TypeScript, Tailwind CSS) same style as experience pills. Below: "Live Site →" and "GitHub →" links in 14px medium #38bdf8.
- Below the card: "View all projects on GitHub →" link in 14px medium #38bdf8.

RIGHT CONTENT — Section 4 (Community & Awards), separated by 96px:
- Two-column grid.
- Left column headed "COMMUNITY" (14px semibold uppercase #e2e8f0). Two small cards (#1e293b bg, #334155 border, rounded, 16px padding): "Organizer — Angular Bolivia" with date, and "Speaker — Google Developers Group" with date and description. Below cards: "GROUPS" sub-heading (12px semibold uppercase #94a3b8) with two group names in 12px #94a3b8.
- Right column headed "AWARDS" (14px semibold uppercase #e2e8f0). Two cards: "1st Place — Startup Weekend Cochabamba 2018" with project description and tech pills (Sketch, Angular, Firebase), and "1st Place — HackBo 2017" with description and tech pills (Unity, Arduino, Adobe XD).

RIGHT CONTENT — Section 5 (Recommendations), separated by 96px:
- Two-column grid of quote cards (#1e293b bg, #334155 border, rounded-lg, 24px padding).
- Each card has a large decorative quotation mark character in #38bdf8 at 30% opacity at top-left. Quote text in italic 14px #e2e8f0. Attribution below: name in 14px medium #e2e8f0, title and date in 12px #94a3b8.
- Card 1: "Exceptional Software Engineer, a reliable teammate..." — Daniel Oropeza Soria
- Card 2: "Skilled developer with a leader mentality..." — Pedro Moriel Enriquez
- Below: "9 recommendations on LinkedIn →" in 14px medium #38bdf8.

RIGHT CONTENT — Section 6 (Contact), separated by 96px:
- "Let's talk." in 36px bold Inter, color #38bdf8.
- Below: "I'm always open to discussing new projects, interesting ideas, or opportunities to collaborate." in 14px #94a3b8, max-width 512px.
- Below: email address "rodrigo.torricodelcastillo@gmail.com" as a #38bdf8 link, next to a "Copy email address" outlined button (#334155 border, #38bdf8 text, clipboard icon, rounded).
- Below: "Cochabamba, Bolivia (Remote)" and "Spanish (Native) | English (Full Professional)" in 14px #94a3b8.
- Below: social icons row (GitHub, LinkedIn, Email) same style as sidebar.

Overall style: minimal, clean, generous whitespace, no decorative elements beyond the quote marks. Dark and professional. Inspired by brittanychiang.com.
```

---

## Prompt 2: Homepage — Mobile Dark Mode

```
Design a dark-themed mobile developer portfolio at 390px wide. Background #0f172a.

Single-column layout, no sidebar.

STICKY HEADER at top:
- Left: "R. Torrico" in 18px bold Inter, #e2e8f0
- Right: sun icon (20px, #94a3b8), "EN" text (#38bdf8), hamburger menu icon (20px, #94a3b8)
- Background: #0f172a with bottom border #334155
- Height: ~56px, padding 16px horizontal

CONTENT below header, 24px horizontal padding:

Section 1 (Hero):
- Heading: "I build scalable fullstack systems — from real-time APIs to cloud infrastructure — for products used by millions." in 30px bold Inter, #e2e8f0, tight tracking.
- Three body paragraphs below in 14px #94a3b8, line-height 1.6.

Section 2 (Experience):
- Sticky section header bar: semi-transparent #0f172a background with backdrop-blur, showing "EXPERIENCE" in 14px bold uppercase #e2e8f0, widest letter-spacing. Full-width, 12px vertical padding.
- Experience entries stacked vertically (no side-by-side date column). Date appears above the entry title. Same content as desktop: 3 entries with titles, stories, bullets, and tech pills.

Section 3 (Projects):
- Sticky header: "PROJECTS"
- solveOS card, full width, same styling as desktop.

Section 4 (Community & Awards):
- Sticky header: "COMMUNITY & AWARDS"
- Stacked vertically: community cards first, then awards cards. No two-column grid.

Section 5 (Recommendations):
- Sticky header: "RECOMMENDATIONS"
- Quote cards stacked vertically, full width.

Section 6 (Contact):
- "Let's talk." in 30px bold #38bdf8.
- Same content as desktop, stacked vertically.
- Social icons row at bottom.

Style: same dark minimal aesthetic as desktop version. Generous vertical spacing between sections (64px).
```

---

## Prompt 3: Homepage — Desktop Light Mode

```
Take the exact same desktop portfolio layout from Prompt 1 and change only the colors to a light theme:

- Background: #ffffff
- Card surfaces: #f8fafc
- Primary text: #0f172a
- Muted text: #64748b
- Accent: #0284c7
- Accent hover: #0369a1
- Borders: #e2e8f0

Everything else (layout, typography sizes, spacing, content) stays identical. The theme toggle in the sidebar should show a moon icon instead of sun. The overall feel should be clean and bright but still minimal and professional.
```

---

## Prompt 4: Blog Index — Desktop Dark Mode

```
Design a dark-themed blog index page at 1440px wide. Background #0f172a.

Same two-column layout as the portfolio homepage:
- Left: 420px sticky sidebar with name "Rodrigo Torrico", title, navigation (with "Blog" as the active nav item — 64px indicator line, #e2e8f0 text), social icons, theme toggle, and language picker. Same styling as homepage sidebar.
- Right: scrollable content area, max-width 672px.

RIGHT CONTENT:
- Page title: "Blog" in 30px bold Inter, #e2e8f0.
- 32px below: vertical stack of blog post preview cards, 24px gap between them.

Each post card:
- Background #1e293b, 1px border #334155, 8px border-radius, 24px padding.
- Post title: "Hello World" in 18px semibold Inter, #e2e8f0 (underline on hover).
- Meta row below title: "March 21, 2026 · 3 min read" in 12px Inter, #94a3b8.
- Description: "A brief introduction to who I am and what this blog will cover." in 14px Inter, #94a3b8.
- Tags row: outlined pill tags ("introduction", "personal") with #1e293b background, #38bdf8 text, 1px #334155 border, 12px JetBrains Mono, rounded-full, small padding.

If the blog has no posts, show empty state: "No posts yet. Check back soon." centered in 14px #94a3b8.

Style: same dark minimal aesthetic. Clean, spacious.
```

---

## Prompt 5: Blog Post — Desktop Dark Mode

```
Design a dark-themed blog post reading page at 1440px wide. Background #0f172a.

Centered single-column layout, no sidebar. Max content width 768px, centered horizontally. Padding 48px horizontal, 80px vertical.

TOP:
- "← Back to blog" link in 14px medium Inter, #38bdf8.
- 32px below: post title "Hello World" in 36px bold Inter, #e2e8f0, tight letter-spacing.
- Below: "Published on March 21, 2026" in 14px Inter, #94a3b8.
- Below: tag pills ("introduction", "personal") — outlined style, #1e293b bg, #38bdf8 text, #334155 border, rounded-full.

32px below: article body content in 16px Inter, #e2e8f0, line-height 1.7. Show sample prose content with:
- An h2 heading in 24px bold #e2e8f0
- A regular paragraph
- A code block with #1e293b background, 16px padding, rounded, JetBrains Mono font, 14px
- A blockquote with a 3px left border in #38bdf8, italic text, 16px left padding
- Another paragraph

Style: optimized for reading. Generous line-height, comfortable width, clear hierarchy. Dark and clean.
```

---

## Prompt 6: Mobile Hamburger Menu — Open State

```
Design the open hamburger menu overlay for a mobile dark-themed portfolio at 390px wide. Background #0f172a.

The sticky header shows "R. Torrico" on the left and an X (close) icon on the right.

Below the header, a full-width dropdown panel with #0f172a background and bottom border #334155:
- Vertical navigation links: About, Experience, Projects, Community, Contact, Blog — each in 16px medium Inter, #94a3b8 (active item "About" in #e2e8f0). 16px vertical padding per item. Each item has a subtle bottom border #334155.
- 24px below the nav: a row of social icons (GitHub, LinkedIn, Email) — 20px line icons, #94a3b8. Centered horizontally.

The content behind the menu is dimmed with a semi-transparent black overlay.

Style: clean, minimal. Smooth appearance.
```

---

## Prompt 7: OG Image

```
Design a social media Open Graph image at 1200x630px.

Background: solid #0f172a (dark navy).
Content centered vertically and horizontally:
- "Rodrigo Torrico" in 64px bold Inter, color #e2e8f0.
- Below: "Senior Fullstack Engineer" in 32px medium Inter, color #38bdf8.

Minimal style, no decorative elements. Clean and professional. Optional: a very subtle geometric accent line or dot pattern in #334155 in a corner, barely visible.
```

---

## Iteration Tips

After generating each screen in Stitch, you can refine with follow-up prompts like:

- "Make the spacing between sections larger"
- "Make the accent color slightly more vibrant"
- "Add a subtle hover state glow to the project card"
- "Switch to light mode: background #ffffff, text #0f172a, accent #0284c7, muted text #64748b, borders #e2e8f0, surfaces #f8fafc"
- "Show the experience entry hover state — highlight the hovered entry background with #1e293b and dim the other entries to 50% opacity"

---

## Exporting from Stitch

Once you're happy with the designs:
1. Export each screen as PNG or SVG for reference
2. Use the designs as a visual guide when comparing against the live Astro site
3. The actual implementation is already built in `app/` — these designs serve as the visual spec to validate against

01 — Design Principles
Core Philosophy
The interface should feel minimal, editorial, architectural, premium, calm, precise, spacious, timeless, image-driven, and typography-driven. Prefer large typography, strong whitespace, simple geometry, monochrome colors, high-quality imagery, subtle motion, asymmetric composition, clear hierarchy, and strong alignment.

Avoid
Excessive gradients, excessive shadows, glassmorphism, large rounded cards, excessive borders, bright accent colors, generic SaaS patterns, dense dashboards, overly decorative UI, excessive icons, excessive animations, and multiple competing font styles.

The 5 Rules
Typography is a visual element.
Space is intentional.
Images should breathe.
Color should be restrained.
Motion should be quiet.
02 — Color System
Base Colors
Token	Value
Background	
#F4F3EF
Surface	
#FFFFFF
Foreground	
#111111
Muted	
#777777
Subtle	
#A0A09C
Border	
#D8D7D2
Inverse background	
#111111
Inverse text	
#F4F3EF
Usage
Use 
#F4F3EF as the primary page background, 
#111111 for primary text and major UI elements, 
#777777 for secondary metadata, and 
#D8D7D2 for subtle separators. Create hierarchy through tone rather than decoration.

03 — Typography
Font Direction
Preferred: Neue Montreal, Helvetica Neue, Inter, Arial, system sans-serif. Fallback: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif.

Weights
Use 400 Regular, 500 Medium, and 600 Semibold. Avoid heavy 700–900 weights unless specifically required.

Scale
Style	Size	Line height	Notes
Display (desktop)	clamp(72px, 10vw, 160px)	0.9	letter-spacing -0.055em, weight 400
Display (mobile)	clamp(48px, 15vw, 80px)	0.9	
H1	clamp(56px, 7vw, 110px)	0.92	
H2	clamp(40px, 5vw, 72px)	0.95	
H3	clamp(28px, 3vw, 44px)	1	
Body	17px (mobile 16px)	1.5	
Small	12px	1.3	
Label	11px	—	uppercase, letter-spacing 0.08em
04 — Spacing System
Base
8px base system: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160, 200, 240px.

Sections
Desktop: small 80px, normal 120px, large 160px, hero separation 200px+.
Mobile: small 56px, normal 80px, large 100px.
Do not make every section identical in height.
05 — Grid System
Desktop: 12 columns, 24px gutters, 32px outer margin. Max content width 1600px.
Tablet: 8 columns, 20px gutters.
Mobile: 4 columns, 16px gutters, 16px page margins.
06 — Layout Philosophy
Avoid making every section symmetrical. Use asymmetric layouts, offset images, variable widths, editorial alignment, and large negative space. Every offset should have a reason.

07 — Header
Desktop: logo left, navigation right, minimal vertical padding, transparent background where appropriate. Spacing 24–32px top, 32px horizontal.
Navigation: 12px type with slight tracking. Avoid pill-shaped navigation and filled navigation buttons.
Mobile: logo left, text-based MENU right. Avoid rounded containers and shadows.
08 — Hero
Structure: Metadata → huge statement → supporting description → visual.
Rules: very large typography, significant whitespace, one primary message, one dominant visual. Avoid multiple CTA buttons, large gradients, decorative blobs, and excessive badges.
09 — Project / Works Card
Structure: Image → Project Name → Category → Location → Year.
Images: preferred ratios 4:3, 3:2, 16:10, occasional 1:1 for rhythm. Avoid identical ratios for every project.
Hover: image scale 1 → 1.03 over 500–700ms using cubic-bezier(0.22, 1, 0.36, 1). Metadata may move 4px upward.
10 — Project Grid
Curated sequence: large/full-width project → two-column projects → offset/large project → another two-column set. Do not force every project into identical cards.

11 — Project Detail Page
Structure: Project title → metadata → hero image → introduction → large image → description → gallery → technical information → next project.
Gallery: varying image sizes and editorial spreads, not an Instagram-style grid.
12 — About / Studio
Make About feel like a statement. Large philosophy text and smaller supporting information, optionally paired with an image.

13 — Expertise
Numbered sections, e.g. 01 Contextual Design, 02 Clarity & Simplicity, 03 Material Honesty, 04 Human-Centered Design. Keep numbers visually subtle.

14 — Clients
Understated. Prefer typography and spacing over colorful logo walls, cards, and giant logo animations.

15 — News
Editorial index. Desktop rows: date | category | title | arrow. Mobile stacks date/category above the title.

16 — Contact
Strong closing statement. Make the primary email visually prominent. Avoid generic SaaS CTA styling.

17 — Buttons & Links
Primary button: 
#111111 background, 
#F4F3EF text, 14px × 20px padding, 0px radius.
Secondary actions: text links, e.g. VIEW ALL WORKS →.
Links: visually quiet. Hover may use opacity, underline, or slight arrow movement. Do not over-animate.
18 — Image System
Quality: high-resolution architecture/editorial photography, natural lighting, neutral colors, strong composition. Avoid generic stock imagery and low-resolution assets.
Treatment: object-fit: cover by default. No global filters. Border radius 0px.
19 — Motion
Timing: fast 200ms, normal 400ms, slow 700ms, editorial reveal 900–1200ms.
Easing: cubic-bezier(0.22, 1, 0.36, 1). Use ease-out for entering content.
Entrance: opacity 0 → 1 and translateY(16px) → 0 over 600–800ms.
Image reveal: overflow hidden; image scale(1.05) → scale(1), opacity 0 → 1 over ~900ms.
Hover: image scale 1.03, arrow translateX(4px), text opacity 0.7 → 1.
Avoid bounce, elastic movement, large rotation, and flashes.
20 — Scroll & Cursor
Scroll: avoid excessive parallax; if used, keep movement around 10–30px.
Cursor: optional desktop-only custom cursor — small, monochrome, subtle, disabled on touch devices. Never the primary interaction.
21 — Footer
Logo → short statement → navigation → social → locations → legal. Large whitespace; avoid a dense sitemap dump.

22 — Responsive Design
Breakpoints: mobile 640px, tablet 768px, desktop 1024px, wide 1440px.
Desktop: 12-column grid, large typography, asymmetric layouts, generous whitespace, large images, hover interactions.
Tablet: 8-column grid, reduced typography, simplified composition, fewer offsets.
Mobile: 4-column grid, 16px margins, stacked content, reduced display type, simplified navigation, no custom cursor, no hover-only interactions.
23 — Accessibility
Sufficient contrast. Visible keyboard focus. Respect prefers-reduced-motion by disabling parallax and reducing large transitions/image animations.

24 — Component Principles
Recommended components: Layout, Header, Navigation, Page, Hero, Section, SectionHeading, ProjectGrid, ProjectCard, ProjectMeta, ImageReveal, TextBlock, ImageBlock, ExpertiseList, NewsList, NewsItem, ContactSection, Footer.
Naming: descriptive names only. Avoid Box1, Container2, Thing, BigCard, CoolSection, TestComponent.
25 — Design Tokens
css
:root {
  --background: #F4F3EF;
  --surface: #FFFFFF;
  --foreground: #111111;
  --muted: #777777;
  --subtle: #A0A09C;
  --border: #D8D7D2;
  --radius-none: 0px;

  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-4xl: 128px;
  --space-5xl: 160px;
  --space-6xl: 240px;

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 700ms;
  --duration-reveal: 1000ms;
}
26 — Page Architecture
Pages: Home, Works, Project, Studio, Expertise, News, Contact. Optional: People, Clients, Partners, Awards. Keep navigation simple.
Home order: Header → Hero → Selected Works → Studio Intro → Expertise → Featured Image → Clients → News → Contact → Footer.
27 — Editorial Rhythm
Pattern: alternate large typography, large image, small metadata, whitespace, two-column content, image, list, and large statement.
Hierarchy: 1 Main statement · 2 Hero/project image · 3 Section heading · 4 Project title · 5 Supporting text · 6 Metadata · 7 Navigation · 8 Legal.
28 — Dark Sections
#111111 background with 
#F4F3EF text. Use strategically for Contact, Footer, major transitions, or special project sections. Do not make the entire site dark.

29 — Content & Microcopy
Content: concise, confident, clear, human, editorial. Avoid clichés: revolutionary, game-changing, next-generation, world-class, best-in-class.
Buttons: prefer VIEW PROJECT →, VIEW ALL WORKS →, READ MORE →, GET IN TOUCH →, EXPLORE →. Avoid CLICK HERE, LEARN MORE NOW!!!, START NOW, BUY NOW.
30 — Performance
Lazy-load below-the-fold images, responsive image sizes, prefer WebP/AVIF, preload only critical hero imagery, avoid huge original image files.

31 — Implementation Rules
Follow DESIGN.md before inventing new styles. Reuse tokens. Prefer existing components. Do not introduce new colors without a reason. Avoid gradients, excessive radius, unnecessary shadows, inconsistent typography, excessive animation, and inaccessible interactions.

32 — Anti-Patterns (never introduce without approval)
Glassmorphism, neon gradients, huge rounded cards, floating dashboard cards, excessive shadows, rainbow gradients, excessive blur, 3D blobs, generic SaaS heroes, excessive pill buttons, emoji-heavy UI, excessive iconography, bouncy animations, auto-playing background videos, random asymmetry, excessive borders.

33 — Final Checklist
Typography: clear hierarchy; large enough display text; intentional tracking; restrained weights.
Layout: consistent grid; correct alignment; intentional whitespace; no unnecessary symmetry.
Color: monochromatic palette; accessible contrast; no unnecessary accent colors.
Images: high quality; intentional ratios; optimized; descriptive alt text.
Interaction: subtle hover; visible focus; smooth animation; reduced-motion support.
Responsive: desktop, tablet, mobile work; navigation works; typography scales; no horizontal overflow.
Quality: no random values, duplicate components, unnecessary CSS, visual clutter, or generic template feeling.
34 — Final Design Statement
Quiet, precise, spacious, and intentional. The design should never try too hard to look premium. Premium emerges from Typography + Whitespace + Grid + Photography + Consistency + Restraint.

Decision rule: between two design decisions, choose the simpler one. Between adding and removing, remove. Between louder and quieter, choose quieter. The interface should feel designed, not decorated.


Claude sedang merespons

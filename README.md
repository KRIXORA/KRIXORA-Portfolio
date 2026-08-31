# KRIXORA-Portfolio

<p align="center">
  <strong>KRISH</strong><br>
  Krish Parmar · Creative Developer
</p>

<p align="center">
  A futuristic, cinematic and responsive personal developer portfolio focused on real projects, thoughtful UI/UX and production-quality frontend engineering.
</p>

<p align="center">
  <a href="https://krixora-portfolio.vercel.app">Live Site</a> ·
  <a href="https://github.com/KRIXORA">GitHub</a> ·
  <a href="https://flowora-ai.vercel.app">Flowora</a> ·
  <a href="https://cashora-os.vercel.app">Cashora</a> ·
  <a href="https://coursora-os.vercel.app">Coursora</a>
</p>

---

## ✦ Overview

**KRIXORA-Portfolio** is the personal developer portfolio of **Krish Parmar**, presenting his development journey, technical skills, selected projects and creative approach to building digital products.

The portfolio is intentionally designed as more than a conventional landing page. Its visual language combines:

- near-black cinematic surfaces
- electric-blue atmospheric lighting
- subtle purple accents
- glass-inspired software panels
- restrained futuristic details
- responsive layouts
- smooth scroll interactions
- accessible UI patterns
- production-oriented frontend architecture

The goal is simple:

> **Build a personal digital identity that feels as intentional as the products it showcases.**

---

## ✦ Design Direction

The portfolio follows a dark, cinematic and technical visual system.

### Visual principles

- **Dark-first:** near-black backgrounds form the foundation.
- **Light as accent:** electric blue is primarily used as illumination rather than a dominant fill color.
- **Controlled glow:** lighting creates depth without excessive neon.
- **Software-inspired surfaces:** cards use subtle borders, translucent surfaces and restrained shadows.
- **Strong typography:** Inter provides a clean, modern and highly readable typographic system.
- **Motion with purpose:** animations communicate hierarchy and depth rather than distracting from content.
- **Responsive by default:** the experience is designed for phones, tablets and desktop screens.

---

## ✦ Sections

The portfolio is organized into a focused long-form experience:

1. **Hero** — brand identity, Creative Developer introduction and primary calls to action.
2. **About** — personal introduction and development philosophy.
3. **Philosophy** — Problem Solving, Creative Thinking, Attention to Detail and Continuous Learning.
4. **Skills** — categorized technologies and tools.
5. **Projects** — selected real-world work with live demos and repositories.
6. **Journey** — development and learning timeline.
7. **Toolbox** — everyday tools used to design, develop and ship projects.
8. **Contact** — social links and collaboration/contact interface.
9. **Footer** — navigation, brand statement and supporting links.

---

## ✦ Featured Projects

### Flowora

**Productivity & Life Planner**

Tasks, habits, goals, focus, and review — offline-first with AI coach support. Installable PWA.

**Technology:** HTML5 · CSS3 · JavaScript · PWA

**Live Demo:** https://flowora-ai.vercel.app  
**Repository / GitHub:** https://github.com/KRIXORA

---

### Cashora

**Personal Finance Dashboard**

Track income, spending, budgets, goals, and net worth in one calm dashboard. Private by design. Installable PWA.

**Technology:** HTML5 · CSS3 · JavaScript · PWA

**Live Demo:** https://cashora-os.vercel.app  
**Repository / GitHub:** https://github.com/KRIXORA

---

### Coursora

**Course Discovery Platform**

Discover free & paid courses from Udemy, Coursera, edX, and more — 125+ courses in one installable PWA.

**Technology:** HTML5 · CSS3 · JavaScript · PWA

**Live Demo:** https://coursora-os.vercel.app  
**Repository / GitHub:** https://github.com/KRIXORA

---

## ✦ Technology

The portfolio itself is built as a lightweight frontend project.

### Core

- HTML5
- CSS3
- JavaScript (ES6+)

### UI / Icons

- Inter
- Lucide Icons
- CSS custom properties
- Responsive CSS
- Native browser APIs

### Browser APIs / Frontend Systems

- Local Storage
- IntersectionObserver
- `prefers-reduced-motion`
- Native smooth scrolling
- Responsive image loading
- Web App Manifest / PWA metadata

The project deliberately avoids unnecessary frameworks and heavy dependencies so the portfolio remains understandable, portable and performant.

---

## ✦ Key Features

### 🎨 Premium Visual System

- Futuristic dark interface
- Electric-blue atmospheric lighting
- Subtle purple accents
- Glass-inspired cards
- Cinematic background layers
- Responsive spacing system

### 🌓 Theme System

- Dark mode as the primary experience
- Light-mode adaptation
- Saved theme preference
- System theme fallback
- Theme flash prevention during initial load

### 🧭 Navigation

- Sticky/floating navigation
- Smooth section navigation
- Active-section detection
- Scroll progress indicator
- Responsive mobile navigation
- Keyboard-accessible menu behavior

### ✨ Motion

- Scroll-triggered reveals
- Staggered card entrances
- Subtle atmospheric movement
- Project image interactions
- Timeline progression
- Back-to-top interaction
- Reduced-motion support

### ♿ Accessibility

- Semantic HTML
- Skip navigation
- Visible keyboard focus
- Accessible icon buttons
- ARIA labels where required
- Accessible modal behavior
- Reduced-motion support
- Responsive touch targets

### ⚡ Performance

- Lazy-loaded project imagery
- Async image decoding
- Lightweight JavaScript
- Cached DOM references where appropriate
- IntersectionObserver for reveal animations
- No unnecessary animation libraries

### 🔍 SEO

- Descriptive title and meta description
- Open Graph + Twitter/X card metadata
- JSON-LD structured data (Person)
- `robots.txt` and `sitemap.xml`
- Canonical URL

### 🔐 Security-minded Frontend

- No API keys or secrets embedded in the portfolio
- External links use safe `noopener noreferrer` behavior
- Configurable external integrations
- No fake credentials or private tokens

---

## ✦ Project Structure

```text
KRIXORA-Portfolio/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   ├── lifeflow-ai.png
│   │   ├── finpulse-os.png
│   │   ├── coursefinder.png
│   │   └── og-preview.png
│   │
│   └── icons/
│       ├── krixora-logo.svg
│       ├── krixora-k-mark-transparent.png
│       └── favicon files
│
├── README.md
├── LICENSE
├── .gitignore
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

> The structure may evolve as the portfolio is progressively modularized and production improvements are added.

---

## ✦ Local Development

No build system is required for the current standalone frontend.

### 1. Clone the repository

```bash
git clone https://github.com/KRIXORA/KRIXORA-Portfolio.git
cd KRIXORA-Portfolio
```

### 2. Run a local server

A local HTTP server is recommended instead of opening `index.html` directly.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also use the **Live Server** extension in VS Code.

---

## ✦ Configuration

Personal and external information should be kept centralized whenever possible.

Before deployment, review:

- social profile URLs
- project URLs
- resume path
- contact form integration
- canonical URL
- Open Graph URL
- sitemap URL
- robots.txt
- favicon assets
- PWA metadata

### Important

Do not place private API keys, passwords, tokens or other secrets inside frontend files.

If a service requires a secret, use an appropriate server-side or secure integration instead.

---

## ✦ SEO

The portfolio includes a production-oriented SEO foundation:

- descriptive page title
- meta description
- author metadata
- theme color
- canonical URL
- Open Graph metadata (with absolute image URL)
- Twitter/X card metadata
- JSON-LD structured data
- sitemap
- robots.txt

Live domain:

```text
https://krixora-portfolio.vercel.app
```

If the deployment domain ever changes, update it everywhere it appears: `index.html` (canonical, Open Graph, Twitter, JSON-LD), `robots.txt` and `sitemap.xml`.

---

## ✦ Responsive Design

The interface is intended to remain usable across:

```text
320px
360px
390px
430px
768px
1024px
1280px
1440px+
```

Mobile adaptations include:

- compact navigation
- hamburger menu
- stacked layouts
- touch-friendly controls
- responsive project cards
- single-column contact layout
- simplified motion
- no intentional horizontal overflow

---

## ✦ Browser Support

The project targets modern browsers with support for the core platform features used by the site.

Recommended:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- modern Chromium-based browsers

---

## ✦ Accessibility & Reduced Motion

The site treats motion as progressive enhancement.

When a visitor has enabled:

```css
prefers-reduced-motion: reduce
```

non-essential animations and parallax effects should be reduced or disabled.

The website should remain navigable and readable without relying on animation.

---

## ✦ Deployment

The portfolio is deployed on **Vercel**:

```text
https://krixora-portfolio.vercel.app
```

It also remains suitable for other static hosting platforms such as:

- GitHub Pages
- Netlify
- Cloudflare Pages
- other standards-compliant static hosts

After deployment, verify:

- all navigation links
- project links
- favicon
- social links
- Open Graph preview
- canonical URL
- sitemap
- robots.txt
- mobile layout
- theme persistence
- console errors
- contact integration

---

## ✦ Development Philosophy

```text
Real information > invented information

Real functionality > visual fake functionality

Premium simplicity > unnecessary complexity

Accessibility > decorative effects

Performance > unnecessary libraries

Maintainability > duplicated code

Brand identity > generic portfolio templates
```

The portfolio is intended to evolve alongside the developer.

New features should improve the experience without destroying the established visual identity.

---

## ✦ Roadmap

Planned / ongoing improvements may include:

- further modularization of CSS and JavaScript
- enhanced cinematic scroll system
- refined atmospheric hero layers
- improved project case-study modal
- stronger project filtering
- verified social/contact integrations
- real resume integration
- deeper PWA improvements
- additional performance audits
- Lighthouse/accessibility optimization
- custom 404 experience

The roadmap is intentionally flexible. Only verified and genuinely implemented functionality should be presented as complete.

---

## ✦ Credits

**Designed and developed by Krish Parmar**

Brand:

**KRISH** — building as **KRIXORA**

GitHub:

https://github.com/KRIXORA

---

## ✦ License

The source code in this repository is licensed under the [MIT License](./LICENSE).

The portfolio's original visual design, written content, branding, personal assets (photos, logo, wordmark) and project case-study copy are the personal work of Krish Parmar and should not be reused or redistributed without permission — the MIT license covers the code, not the personal brand or content.

Third-party libraries and assets remain subject to their respective licenses.

---

<p align="center">
  <strong>KRISH</strong><br>
  <sub>Building digital experiences that are unique, useful and unforgettable.</sub>
</p>

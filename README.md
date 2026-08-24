# The Solutionist Design — Website

A production-ready, multi-page agency website for **The Solutionist Design** built with React + Vite + Tailwind CSS. Premium **black + gold** theme, full SEO/AEO/GEO setup, a working contact form (with optional HubSpot), blog, portfolio, and 10 service pages.

---

## 1. Quick start

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> /dist
npm run preview  # preview the production build
```

---

## 2. Project structure

```
.
├── index.html                  # Page title, meta, favicon, fonts
├── public/
│   ├── robots.txt              # Crawler rules
│   └── sitemap.xml             # All site URLs
├── src/
│   ├── data/                   # <<< ALL EDITABLE CONTENT LIVES HERE >>>
│   │   ├── site.js             # Business info, logo, contact, social, stats, nav, legal links
│   │   ├── services.js         # 10 service pages + "What We Do" categories
│   │   ├── projects.js         # Portfolio / case studies
│   │   ├── posts.js            # Blog articles
│   │   └── hubspot.js          # HubSpot connection config (portalId / formId)
│   ├── lib/
│   │   └── hubspot.js          # HubSpot submission helper (no secrets)
│   ├── components/
│   │   ├── Layout.jsx          # Page shell (header + footer wrapper)
│   │   ├── Header.jsx          # Desktop + mobile navigation
│   │   ├── Footer.jsx          # Footer
│   │   ├── Logo.jsx            # Logo component
│   │   ├── SocialIcons.jsx     # Social links
│   │   ├── Seo.jsx             # Meta tags + JSON-LD schema
│   │   ├── sections/           # Reusable page sections (Hero, CTA, cards, etc.)
│   │   └── ui/                 # Buttons, Section, Eyebrow, shadcn primitives
│   ├── pages/                  # One file per route
│   ├── index.css              # <<< COLORS / FONTS (design tokens) >>>
│   ├── App.jsx                 # Routes
│   └── main.jsx                # Entry point
├── tailwind.config.js          # Tailwind theme (maps color tokens -> classes)
├── HUBSPOT.md                  # HubSpot setup guide
└── README.md                   # This file
```

---

## 3. How to edit (no code knowledge needed)

Almost everything you'll want to change lives in **`src/data/`** and **`src/index.css`**. You rarely need to touch component code.

### Logo & favicon
- Logo URL: `src/data/site.js` → `site.logo`
- Favicon: `index.html` → the two `<link rel="icon">` / `<link rel="apple-touch-icon">` tags.
- Use a high-resolution PNG (at least 2× the display height) for sharpness. The logo is rendered with `object-contain` so it never stretches.

### Colors (theme)
All colors are defined once as tokens in **`src/index.css`**:
```css
--gold-400: 39 59% 64%;   /* light gold */
--gold-500: 41 52% 52%;   /* main gold  (#C59D46) */
--gold-600: 42 56% 42%;   /* dark gold  */
```
Change these three values and the gold accent updates everywhere (buttons, headings, icons, borders, hover states). Background is pure black (`bg-black` / `#000000`). These tokens are mapped to Tailwind classes `gold-400`, `gold-500`, `gold-600` in `tailwind.config.js`.

### Fonts
Loaded in `index.html` (Google Fonts) and assigned in `src/index.css` (`--font-heading`, `--font-body`, `--font-display`). Default: **Sora** (headings) + **Inter** (body).

### Text & headings
- Home page: composed from sections in `src/components/sections/` — each has its own copy at the top of the file.
- Service pages: `src/data/services.js` (title, tagline, summary, intro, capabilities, benefits, process, FAQs).
- Portfolio: `src/data/projects.js`.
- Blog: `src/data/posts.js`.
- About / Contact / legal pages: their files in `src/pages/`.

### Contact details, social links, stats
All in `src/data/site.js` (`phone`, `email`, `address`, `social`, `stats`).

### Services
Add/edit/remove an object in `src/data/services.js` — the service page, URL (`/services/<slug>`), and footer links are generated automatically.

### Portfolio / Our Work
Add/edit/remove an object in `src/data/projects.js` — the card and case-study page (`/our-work/<slug>`) are generated automatically.

### Blog
Add/edit/remove an object in `src/data/posts.js` — the listing and article page (`/blog/<slug>`) are generated automatically. Body blocks support `p`, `h2`, and `list`.

### Images
Images are referenced by URL (real assets hosted on `the-solutionist.design`). To swap one, replace the `image` URL in the relevant data file (`projects.js`, `site.js`) or section component.

### Hero background video
Set in `src/components/sections/Hero.jsx` → `VIDEO_SRC` constant at the top of the file. Replace the URL to change the video. It autoplays muted and loops behind a dark overlay for readability.

---

## 4. HubSpot integration

The contact form saves every enquiry to the app database **and** optionally pushes it to HubSpot. No private credentials are stored — HubSpot public forms only need a Portal ID and Form ID.

See **`HUBSPOT.md`** for the full step-by-step setup. In short: open `src/data/hubspot.js` and fill in `portalId` and `formId`. Leave them empty to keep HubSpot disabled.

---

## 5. SEO / AEO / GEO

- Per-page meta titles & descriptions via `src/components/Seo.jsx`.
- JSON-LD structured data (Organization, WebSite, Service, BlogPosting, BreadcrumbList, ContactPage) on relevant pages.
- `public/sitemap.xml` and `public/robots.txt` — update the domain if you change it from `https://the-solutionist.design`.
- Semantic HTML, descriptive alt text, and accessible headings throughout.

---

## 6. Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/:slug` | Service detail (10 pages) |
| `/our-work` | Portfolio |
| `/our-work/:slug` | Project case study |
| `/blog` | Blog listing |
| `/blog/:slug` | Blog article |
| `/contact` | Contact |
| `/thank-you` | Enquiry confirmation |
| `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy` | Legal |
| `*` | 404 |

---

## 7. Creating the downloadable ZIP

This project is the full editable source. To package it as a ZIP, run from the project root:

```bash
# macOS / Linux
zip -r solutionist-design.zip . \
  -x "node_modules/*" -x "dist/*" -x ".git/*" -x "*.zip"

# Windows (PowerShell)
Compress-Archive -Path * -DestinationPath solutionist-design.zip -Force
```
Then exclude `node_modules`, `dist`, and `.git` manually if needed.

Anyone who receives the ZIP runs:
```bash
unzip solutionist-design.zip
npm install
npm run dev
```

---

## 8. Deployment

Build with `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.). This project also runs on the Base44 platform, which handles hosting, the database for contact submissions, and the serverless backend.  
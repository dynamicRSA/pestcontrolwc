# Pest Control Pros West Coast — Modern Site Refresh

A modernized, high-performance, mobile-responsive web experience for **Pest Control Pros West Coast** ([pestcontrolwc.co.za](https://pestcontrolwc.co.za/)).

---

## 🌟 Highlights of the Refresh

1. **Brand Identity & Modern Vector Logos**:
   - Replaced dated, pixelated logos with custom scalable vector SVG graphics (`logo.svg`, `logo-white.svg`, `favicon.svg`).
   - Modernized the brand shield emblem combining the intertwined `P` and `C` crest, protective shield, and eco-leaf curves in forest emerald (`#047857`) and vibrant lime (`#84cc16`).
   - Retina-crisp at any resolution, dark/light variants.

2. **Streamlined Single-Page Architecture (Zero Bloat)**:
   - Eradicated the broken 404 subpages and failed WordPress/Elementor/Ninja Forms plugins of the legacy site.
   - Unified all 12+ pest categories and 24+ West Coast towns into an interactive, fast, and intuitive single-page application.
   - 100/100 Google PageSpeed capability: Zero bloated external JavaScript frameworks.

3. **High-Converting Lead Generation**:
   - **One-Tap WhatsApp Integration**: Pre-formats quote parameters (Name, Area, Pest, Urgency, Property Type) directly into a WhatsApp message dispatched to `082 39 666 92`.
   - **Email Backup Form**: Direct form submission via FormSubmit or mailto fallback.
   - **Click-to-Call Everywhere**: High-visibility direct dispatch hotline.

4. **Interactive Features**:
   - **Pest Solutions Explorer**: Tabbed switcher for Termites (flagship specialty), Cockroaches, Rodents, Ants/Fleas, and Commercial/HACCP.
   - **Real-Time West Coast Area Search**: Searchable and region-filtered directory of 24 towns across Saldanha Bay, Bergrivier, and Swartland.
   - **FAQ Accordion**: Answering client questions regarding pet safety, SABS compliance, Act 36 of 1947, and municipal pre-construction certificates.

5. **Accreditation & Trust Elements**:
   - Official Department of Agriculture (Act 36 of 1947) certification highlights.
   - SABS standards and PCO (Pest Control Operator) compliance.
   - 100% on-site supervision guarantee (no unsupervised staff).

---

## 📁 Project Structure

```
pestcontrolwc/
├── assets/
│   └── images/
│       ├── logo.svg                   # Modern primary vector logo
│       ├── logo-white.svg             # High-contrast white logo for dark footer
│       ├── favicon.svg                # Vector browser favicon
│       ├── hero.jpg                   # High-res professional coastal technician hero
│       ├── termite-specialist.jpg     # Thermal inspection & foundation specialty
│       ├── commercial.jpg             # HACCP kitchen & commercial inspection
│       ├── badge-dept-agric.webp      # Dept. of Agriculture Act 36 badge
│       ├── badge-sabs.webp            # SABS standards badge
│       ├── badge-verified.webp        # 3Best verified badge
│       └── logo-original.png          # Legacy reference logo
├── index.html                         # Semantic HTML5 with JSON-LD SEO schema
├── style.css                          # Modern Vanilla CSS design system
├── script.js                          # Lightweight interactive JS (tabs, search, quote)
├── robots.txt                         # SEO crawler rules
├── sitemap.xml                        # XML sitemap
└── README.md                          # Documentation
```

---

## 🚀 Local Development & Preview

To preview locally using Python's built-in HTTP server:

```bash
cd /Users/svenprinsloo/.gemini/antigravity-ide/scratch/pestcontrolwc
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in any browser.

---

## 🌐 Deployment Options

- **GitHub Pages**: Push to `dynamicRSA/pestcontrolwc` and enable GitHub Pages in repo settings.
- **Cloudflare Pages / Vercel / Netlify**: Connect repository for instant automatic global CDN deployment.
- **cPanel / Apache / Nginx**: Drop all files into `public_html` directly on the existing host.

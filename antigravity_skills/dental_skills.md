# 🦷 Dentovilla — AI Skill File
# Antigravity Project Skill Definition

> **Purpose:** This file is the authoritative single source of truth for the Dentovilla dental website project. Any AI agent working on this codebase must read and strictly follow all rules, context, and patterns defined here before writing a single line of code.

---

## 1. Project Identity

| Property         | Value                                              |
|------------------|----------------------------------------------------|
| **Project Name** | Dentovilla Dental Clinic Website                   |
| **Client**       | Dr. Pranav Pradhan                                 |
| **Clinic Name**  | Dentovilla                                         |
| **Type**         | Premium 3D Interactive Single-Page Application     |
| **Stack**        | React 19 + TypeScript + Vite + Three.js + R3F      |
| **Status**       | In Progress — Upgrading from 2D to 3D              |
| **Workspace**    | `c:\Users\HP\Documents\dental\Website`             |

---

## 2. Client Content (Locked — Do Not Change)

These are the real, verified details of the client. Never fabricate or modify these.

### Doctor & Clinic
- **Doctor:** Dr. Pranav Pradhan
- **Qualification:** BDS, Dr. G.D. Pol Foundation YMT College of Management
- **Registration:** A 31123, Maharashtra State Dental Council (2015)
- **Experience:** 11+ Years
- **Specialization:** Clear Aligners, Painless Root Canals, Pediatric Dentistry, Comprehensive Oral Rehabilitation
- **Approach:** Patient Comfort Focused, Family & Child Friendly, Clear Treatment Explanations

### Services Offered
1. Painless Root Canal
2. Smile Makeovers & Veneers
3. Clear Aligners
4. Full Mouth Implants
5. Pediatric Care (Milk Teeth)
6. Wisdom Tooth Removal
7. Professional Scaling
8. Safe Teeth Whitening

### Key Taglines
- **Hero Headline:** "Confidence in Every Bite."
- **Hero Subtext:** "Transform your smile with Dr. Pranav Pradhan. Skip the anxiety—experience painless, advanced, and reliable dental care."
- **Services Headline:** "Transform Your Smile"
- **Services Subtext:** "Advanced Multispeciality Dental Care You Can Trust"
- **Gallery Headline:** "Smile Transformations"
- **Gallery Subtext:** "Real results from Dentovilla"
- **Educational Headline:** "Dr. Pradhan's Educational Hub"
- **Educational Subtext:** "Myths, Facts, and Tips for a Healthier Smile"

### Navigation Links
`About Dr. Pradhan` | `Treatments` | `Results` | `Reviews` | `Visit Us` | `Call Now` | `Book Visit`

---

## 3. Design System (Immutable Rules)

> **✅ CLIENT CONFIRMED:** The following color palette, UI philosophy, CSS Variables, and Accessibility rules are all finalized, mandatory requirements approved by the client.

---

### 3A. UI Philosophy & Design Ratio

This is the most important design rule for Dentovilla. The page must feel **clean, medical-grade, and premium** — NOT like a game or tech startup.

| Rule | Specification |
|---|---|
| **3D vs Standard UI Ratio** | **25% 3D, 75% Standard UI.** The 3D element appears in the Hero only. The rest of the 13 sections are clean, standard, high-quality UI. |
| **Visual Feel** | Clean, medical-grade. Think Apple + a dental clinic. Minimal clutter, maximum trust. |
| **3D Sections** | Must use **high contrast** — dark background behind the 3D model so the white tooth pops visually. |
| **Transitions** | Smooth gradient transitions between dark (3D Hero) and light (standard sections). No abrupt or hard cuts. |
| **Typography** | Use generous spacing (`line-height`, `letter-spacing`, padding) and the Inter font to create a premium, editorial feel. |
| **Buttons** | Rounded, bold, clearly blue. Primary CTA buttons draw the eye immediately. |

---

### 3B. CSS Variables ✅ (Finalized Color Palette)

**WHY WE USE THEM:** Instead of writing `#2563EB` (the blue) 50+ times across files, we define it ONCE as a named variable. One change updates the entire site. This also ensures 100% consistency.

**All CSS variables must be defined in `src/index.css` inside `:root {}`:**

```css
/* ============================================
   DENTOVILLA — FINALIZED GLOBAL CSS VARIABLES
   Approved by client. Define once. Use everywhere.
   ============================================ */
:root {
  /* --- Backgrounds (White & Fresh Light Blue) --- */
  --color-white:        #FFFFFF;    /* Primary page background — clean, hygienic */
  --color-bg-light-blue:#E0F2FE;   /* Section alternating background — fresh, calming */
  --color-bg-3d:        #0A0F1E;   /* Dark background ONLY for the 3D Hero section */

  /* --- Primary Brand Blue (Trust & Action) --- */
  --color-blue-primary: #2563EB;   /* Buttons, links, active nav, key highlights */
  --color-blue-hover:   #1D4ED8;   /* Hover state for blue buttons/links */
  --color-blue-light:   #EFF6FF;   /* Very pale blue — badge and card backgrounds */

  /* --- Accent: Mint Green (Fresh & Healthy) --- */
  --color-green-accent: #10B981;   /* Checkmarks, success badges, WhatsApp button */
  --color-green-soft:   #D1FAE5;   /* Light mint — highlight backgrounds, tags */

  /* --- Text (High Readability) --- */
  --color-text-heading: #0F172A;   /* All headings — near-black, maximum contrast */
  --color-text-body:    #334155;   /* Body paragraphs — dark slate, readable */
  --color-text-muted:   #64748B;   /* Captions, subtitles, supporting text */
  --color-text-on-dark: #F1F5F9;   /* Text used on the dark 3D hero background */

  /* --- Glassmorphism (Cards over images/dark bg) --- */
  --color-glass-bg:     rgba(255, 255, 255, 0.10);
  --color-glass-border: rgba(255, 255, 255, 0.20);

  /* --- Shape, Spacing & Depth --- */
  --border-radius-sm:   8px;
  --border-radius-md:   14px;       /* Buttons and small cards */
  --border-radius-lg:   24px;       /* Section cards and hero containers */
  --shadow-soft:        0 4px 24px rgba(0, 0, 0, 0.07);
  --shadow-blue:        0 4px 20px rgba(37, 99, 235, 0.18);  /* Blue glow on CTA buttons */
  --shadow-card:        0 2px 12px rgba(15, 23, 42, 0.08);

  /* --- Transitions (Smooth, Never Jarring) --- */
  --transition-fast:    all 0.2s ease;
  --transition-smooth:  all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  /* --- Typography Scale --- */
  --font-family:        'Inter', sans-serif;
  --font-size-hero:     clamp(2.5rem, 5vw, 4rem);    /* Responsive hero headline */
  --font-size-h2:       clamp(1.8rem, 3vw, 2.5rem);
  --font-size-body:     1rem;
  --line-height-loose:  1.8;        /* Used for body paragraphs — premium feel */
  --letter-spacing-wide: 0.02em;   /* Used for section labels — premium feel */
}
```

**Usage rule (strictly enforced):**
```css
/* ✅ CORRECT */
.btn-primary { background-color: var(--color-blue-primary); }
.section-heading { color: var(--color-text-heading); }

/* ❌ WRONG — never do this in any component file */
.btn-primary { background-color: #2563EB; }
```

---

### 3C. Accessibility ✅ (Confirmed Requirement)

**WHY WE USE IT:**
1. 🔍 **Google SEO:** Google rewards accessible websites with higher rankings. More patients find Dentovilla when searching "best dentist near me".
2. 👴 **More Patients:** Elderly patients or differently-abled patients can use the website confidently.
3. ⭐ **Professional Standard:** Premium clinic websites are accessible. It signals quality.

**Mandatory Accessibility Rules for every element:**

| Element | Rule | Example |
|---|---|---|
| `<img>` | Must have `alt` text | `<img src="tooth.png" alt="3D model of a healthy molar tooth" />` |
| `<button>` | Must have `aria-label` if no visible text | `<button aria-label="Book a dental appointment">Book</button>` |
| `<a>` links | Must describe the destination | `<a href="/contact" aria-label="Contact Dentovilla clinic">` |
| Color contrast | Text must be dark enough to read | Never use light gray text on white background |
| Headings | One `<h1>` per page, then `<h2>`, `<h3>` in order | Never skip heading levels |
| Focus states | Keyboard navigation must show a visible blue outline | Never use `outline: none` on buttons/links |
| 3D Canvas | Must have a text description for screen readers | `<div role="img" aria-label="Interactive 3D rotating tooth model">` |

---

### 3C. Accessibility ✅ (Confirmed Requirement)

**WHY WE USE IT:**
1. 🔍 **Google SEO:** Google rewards accessible websites with higher rankings. More patients find Dentovilla when searching "best dentist near me".
2. 👴 **More Patients:** Elderly patients or differently-abled patients can use the website confidently.
3. ⭐ **Professional Standard:** Premium clinic websites are accessible. It signals quality.

**Mandatory Accessibility Rules for every element:**

| Element | Rule | Example |
|---|---|---|
| `<img>` | Must have `alt` text | `<img src="tooth.png" alt="3D model of a healthy molar tooth" />` |
| `<button>` | Must have `aria-label` if no visible text | `<button aria-label="Book a dental appointment">Book</button>` |
| `<a>` links | Must describe the destination | `<a href="/contact" aria-label="Contact Dentovilla clinic">` |
| Color contrast | Text must be dark enough to read | `--color-text-heading` on `--color-white` is always safe |
| Headings | One `<h1>` per page, then `<h2>`, `<h3>` in order | Never skip heading levels |
| Focus states | Keyboard navigation must show a visible blue outline | Never use `outline: none` on buttons/links |
| 3D Canvas | Must have a text description for screen readers | `<div role="img" aria-label="Interactive 3D rotating tooth model">` |

---

### 3D. Typography & Visual Motifs
- **Font Family:** `var(--font-family)` → `'Inter', sans-serif` (loaded in `index.html` from Google Fonts)
- **Hero Heading:** `var(--font-size-hero)`, weight 800, color `var(--color-text-on-dark)` (white on dark hero bg)
- **Section Headings:** `var(--font-size-h2)`, weight 700, color `var(--color-text-heading)` (`#0F172A`)
- **Body text:** `var(--font-size-body)`, `var(--line-height-loose)`, color `var(--color-text-body)`
- **Brand name "Dentovilla":** Always `var(--color-blue-primary)`, bold.
- **Glassmorphism:** Frosted glass cards (`backdrop-filter: blur(12px)`) over dark/image backgrounds.
- **Rounded Corners:** `var(--border-radius-md)` on buttons and cards. `var(--border-radius-lg)` on hero containers.
- **Shadows:** `var(--shadow-soft)` on standard cards. `var(--shadow-blue)` on primary CTA buttons.
- **Animations:** Scroll-triggered fade-in + slide-up. Use `var(--transition-smooth)` for all hover states.

---

## 4. Page Architecture (14 Sections)

The entire landing page must flow through exactly **14 sections** in this strict order. Each section maps to a reference screenshot (`S1`–`S14`) stored in `ref__ss/`.

| # | Section Name               | Key Reference File | 3D Asset Used?                    |
|---|----------------------------|--------------------|-----------------------------------|
| 1 | **3D Hero**                | `ChatGPT Image...png`, `S1.png` | ✅ `human_teeth.glb` floats on right |
| 2 | **Trust Badges Strip**     | `S2.png`           | ❌                                |
| 3 | **About Dr. Pradhan**      | `S3.png`           | ❌                                |
| 4 | **Core Services (1)**      | `S4.png`           | ❌                                |
| 5 | **Core Services (2)**      | `S5.png`           | ❌                                |
| 6 | **Family Parallax Banner** | `1a71e9f5...jpg`   | ❌ (parallax scroll depth)        |
| 7 | **Smile Transformations**  | `S7.png`           | ❌                                |
| 8 | **Educational Hub Intro**  | `S8.png`           | ❌                                |
| 9 | **Fact & Myth Cards**      | `S9.png`           | ❌                                |
| 10| **Advanced Technology**    | `S10.png`          | ❌                                |
| 11| **Patient Reviews**        | `S11.png`          | ❌                                |
| 12| **Final CTA**              | `S12.png`          | ❌                                |
| 13| **Location & Map**         | `S13.png`          | ❌                                |
| 14| **Footer**                 | `S14.png`          | ❌                                |

> **Global Elements** (always visible):
> - Sticky Navbar with "Book Visit" CTA
> - Floating WhatsApp Button (green, bottom-right)
> - Reception Chatbot widget (planned - Phase 2)

---

## 5. 3D Integration Rules ("No-Mess Policy")

These rules are mandatory to prevent the 3D model from overlapping or breaking the layout.

### Available 3D Assets
All `.glb` files are in `public/dental_img/`:
| File | Size | Recommended Use |
|------|------|-----------------|
| `human_teeth.glb` | ~6.7 MB | ✅ **PRIMARY** — Use in Hero section |
| `2._soap_tooth_model_31.glb` | ~5.9 MB | Optional — secondary section use |
| `types_of_human_teeth.glb` | ~20 MB | ⚠️ Large — use only if needed |

### Rules
1. **Containment:** The Three.js `<Canvas>` must always be enclosed inside a CSS Grid or Flexbox container with a fixed `width` and `height`. It must **never** have `position: absolute` that could overlap text.
2. **Lighting:** Use blue-tinted lighting to give a premium "medical scan" feel — not cartoonish warm colors.
3. **Suspense:** Always wrap `<Canvas>` with `<Suspense fallback={<LoadingSpinner />}>` for graceful loading.
4. **Controls:** Use `autoRotate` from `OrbitControls`. Set `enableZoom={false}` and `enablePan={false}`.
5. **Mobile:** On screens below `768px`, the 3D canvas must either hide or reduce to a small display. Never let it block mobile text.
6. **Required Packages:**
   ```bash
   npm install three @react-three/fiber @react-three/drei
   npm install -D @types/three
   ```

---

## 6. File & Folder Structure

```
Website/
├── public/
│   ├── dental_img/          ← All .glb 3D models live here
│   │   ├── human_teeth.glb  ← PRIMARY 3D asset
│   │   ├── 2._soap_tooth_model_31.glb
│   │   └── types_of_human_teeth.glb
│   ├── favicon.svg
│   └── icons.svg
├── ref__ss/                 ← Reference screenshots (S1-S14) — READ ONLY, not in build
│   ├── S1.png → S14.png     ← Design reference for each section
│   ├── ChatGPT Image...png  ← Target design reference
│   └── 1a71e9f5...jpg       ← Family photo for parallax background
├── src/
│   ├── assets/              ← Static images used by components
│   ├── components/          ← Reusable UI components (Navbar, Footer, etc.)
│   ├── sections/            ← One file per landing page section (Hero, Services, etc.)
│   ├── App.tsx              ← Main app entry — imports all 14 sections
│   ├── App.css
│   ├── index.css            ← Global styles and CSS variables
│   └── main.tsx
├── antigravity_skills/
│   └── dental_skills.md     ← THIS FILE — always read before working
├── README.md                ← Project overview
└── package.json
```

---

## 7. Coding Rules & Best Practices

1. **Language:** Always use TypeScript (`.tsx`). Never use plain `.js` files in `src/`.
2. **CSS Variables ✅:** Always use `var(--variable-name)` from Section 3A. **Never write raw hex color codes in any component file.** All color and spacing values must come from the `:root` variables in `index.css`.
3. **Accessibility ✅:** Every image needs a descriptive `alt`. Every button/link needs an `aria-label`. The 3D canvas needs a `role="img"` wrapper with `aria-label`. Never use `outline: none`. Always maintain heading hierarchy (`h1` → `h2` → `h3`).
4. **Component Isolation:** Each of the 14 sections must be its own file in `src/sections/`. No section logic should be written directly inside `App.tsx`.
5. **Content Accuracy:** Every text string — doctor name, clinic name, taglines, services — must match exactly what is defined in Section 2 of this file.
6. **No Placeholder Text:** Never use "Lorem Ipsum". All text must be real Dentovilla content.
7. **Image Paths:** Reference images from `ref__ss/` are for development reference only. They must never be imported into the production build. Background assets go in `src/assets/` or `public/`.
8. **Performance:** Images used in the build must be optimized. The 3D canvas should use `frameloop="demand"` where auto-rotation is not needed.

---

## 8. What To Never Do

- ❌ Do not change the clinic name from "Dentovilla".
- ❌ Do not change the doctor's name or credentials.
- ❌ Do not use warm orange or red as primary colors (breaks trust in medical branding).
- ❌ Do not place the 3D canvas with `position: absolute` or `fixed` without a strict bounding container.
- ❌ Do not import files from `ref__ss/` into production code.
- ❌ Do not skip the `<Suspense>` wrapper on any component that loads a `.glb` file.
- ❌ Do not use placeholder/lorem ipsum text anywhere.
- ❌ Do not add libraries that conflict with `@react-three/fiber` (e.g., avoid other WebGL renderers).

---

## 9. Phase Roadmap

### ✅ Phase 0 — Planning & Assets (COMPLETE)
- Project requirements gathered
- Reference screenshots collected (`S1`–`S14`)
- 3D GLB models downloaded to `public/dental_img/`
- Background image acquired (`ref__ss/1a71e9f5...jpg`)
- README updated
- This skill file created

### 🔄 Phase 1 — 3D Frontend Build (NEXT)
- [ ] Install Three.js packages
- [ ] Build the 3D Hero section with `human_teeth.glb`
- [ ] Build all 14 sections following the reference screenshots
- [ ] Apply the color palette, glassmorphism, and animations
- [ ] Ensure full mobile responsiveness

### 🔜 Phase 2 — Reception Chatbot
- [ ] Select chatbot approach (Tidio embed OR `react-chatbot-kit`)
- [ ] Train bot with Dentovilla FAQs and appointment flow
- [ ] Integrate into global layout

### 🔜 Phase 3 — Final QA & Deployment
- [ ] Cross-browser testing
- [ ] Performance audit (Lighthouse score > 85)
- [ ] Production deployment

# Resilient Minds Foundation — Website Documentation

> **Project:** Resilient Minds Foundation Marketing Website  
> **Version:** 0.0.0  
> **Last Updated:** August 2026  
> **Stack:** React 19 · Vite 8 · React Router v6 · Tailwind CSS v4 · CSS Modules

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Getting Started](#3-getting-started)
4. [Folder Structure](#4-folder-structure)
5. [Routing & Pages](#5-routing--pages)
6. [Design System](#6-design-system)
7. [Component Library](#7-component-library)
8. [Navigation & Footer](#8-navigation--footer)
9. [Page-by-Page Breakdown](#9-page-by-page-breakdown)
10. [Images & Assets](#10-images--assets)
11. [Forms & Integrations](#11-forms--integrations)
12. [Known Limitations](#12-known-limitations)
13. [Issue Resolution Log](#13-issue-resolution-log)
14. [Remaining Work](#14-remaining-work)

---

## 1. Project Overview

The **Resilient Minds Foundation** website is a multi-page marketing and community site for a non-profit mental wellness organization. It communicates the foundation's mission, showcases programs, shares impact stories, provides resources, and connects visitors with ways to get involved or seek support.

### Goals
- Educate visitors about mental wellness and the foundation's programs
- Convert visitors into donors, volunteers, and program participants
- Provide accessible resources for individuals seeking mental health support
- Build community trust through transparent impact reporting

### Site Structure (8 pages)
```
/ (Home)
/about
/programs
/who-we-help
/impact
/resources
/get-involved
/contact
```

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 19.x |
| Bundler | Vite | 8.x |
| Routing | React Router DOM | 6.x |
| Styling (new pages) | CSS Modules | — |
| Styling (inner pages) | Tailwind CSS | 4.x |
| Icons | react-icons + lucide-react | 5.x / 1.x |
| Email / Contact | EmailJS Browser | 4.x |
| Linting | oxlint | 1.x |
| Deployment | Vercel (SPA rewrites) | — |

### Fonts (Google Fonts)
| Role | Font |
|------|------|
| Headings | Playfair Display |
| Body text | Inter / Open Sans |
| UI labels | Montserrat |
| Script accents | Great Vibes |

---

## 3. Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Production build (outputs to /dist)
npm run build

# Preview production build locally
npm run preview

# Lint the codebase
npm run lint
```

### Deployment
The project is configured for **Vercel** with a SPA rewrite rule (`vercel.json`) so all routes fall back to `index.html`, enabling client-side routing on direct URL access and refreshes.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 4. Folder Structure

```
Resilent-MINDS-foundation/
├── public/                        # Static assets served as-is
│   ├── favicon.svg
│   ├── child.jpeg                 # Used in StoriesOfStrength (home)
│   ├── group.jpeg
│   ├── books.jpeg
│   ├── laptop.jpeg
│   ├── leaf.jpeg / leaf1.jpeg
│   └── home banner.webp
│
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Router config — all 8 routes defined here
│   ├── index.css                  # Global styles + Tailwind theme tokens
│   │
│   ├── styles/
│   │   └── tokens.css             # CSS custom properties (colors, fonts, spacing)
│   │
│   ├── assets/
│   │   ├── logo-placeholder.svg   # Current logo (used in Navbar + Footer)
│   │   ├── logo.webp / logo.png   # Legacy — not in use
│   │   └── images/                # Local image assets
│   │       ├── program-section.webp
│   │       ├── hands-join.webp
│   │       ├── impact-section.jpeg
│   │       ├── hero-bg.webp
│   │       ├── about-bg.webp
│   │       ├── programs-bg.webp
│   │       ├── who-we-hero.webp
│   │       ├── CTA-img.webp
│   │       ├── impact-bg.webp
│   │       └── section-img.webp
│   │
│   ├── pages/                     # One file per route
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── programsPage.jsx
│   │   ├── WhoWeHelpPage.jsx
│   │   ├── ImpactPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── GetInvolvedPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx       # 404 catch-all
│   │
│   └── components/
│       ├── layout/                # App shell
│       │   └── Layout.jsx         # Wraps all pages: Navbar + <Outlet> + Footer
│       │
│       ├── Navbar/                # Site header + mobile menu
│       ├── Footer/                # Site footer + newsletter form
│       ├── Button/                # CSS Modules button (home/new pages)
│       ├── SectionLabel/          # Lined section label component
│       ├── icons/                 # 22 custom SVG icon components
│       │
│       ├── Hero/                  # Home hero section
│       ├── WhyWeExist/            # Home "Why We Exist" section
│       ├── CoreValues/            # Home core values strip
│       ├── programs/              # Home programs grid + Programs page components
│       ├── impact/                # Home impact banner + Impact page components
│       ├── StoriesOfStrength/     # Home stories section
│       ├── GetInvolved/           # Home get-involved section
│       ├── SupportBanner/         # Home donate CTA banner
│       │
│       ├── about/                 # About page section components
│       ├── who-we-help/           # Who We Help page section components
│       ├── get-involved/          # Get Involved page section components
│       ├── resources/             # Resources page section components
│       ├── contact/               # Contact page section components
│       │
│       └── ui/                    # Shared Tailwind UI primitives
│           ├── Button.jsx
│           ├── Card.jsx
│           ├── Container.jsx
│           ├── Eyebrow.jsx
│           ├── FAQItem.jsx
│           ├── Grid.jsx
│           ├── IconCircle.jsx
│           ├── ImgPlaceholder.jsx
│           ├── Section.jsx
│           └── Stat.jsx
```

---

## 5. Routing & Pages

All routes are defined in `src/App.jsx` using React Router v6 `BrowserRouter`. Every route is wrapped in the shared `Layout` shell (Navbar + Footer).

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index          element={<HomePage />} />
      <Route path="about"   element={<AboutPage />} />
      <Route path="programs" element={<ProgramsPage />} />
      <Route path="who-we-help" element={<WhoWeHelpPage />} />
      <Route path="impact"  element={<ImpactPage />} />
      <Route path="resources" element={<ResourcesPage />} />
      <Route path="get-involved" element={<GetInvolvedPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*"       element={<NotFoundPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Page → Component Map

| Route | Page File | Sections (in order) |
|-------|-----------|---------------------|
| `/` | `HomePage.jsx` | Hero → WhyWeExist → CoreValues → Programs → Impact → StoriesOfStrength → GetInvolved → SupportBanner |
| `/about` | `AboutPage.jsx` | AboutHero → OurStory → MissionVision → CoreValuesList → AboutStats |
| `/programs` | `programsPage.jsx` | ProgramsHero → Intro+Image → FocusAreas → ProgramsList → ProgramsCTA |
| `/who-we-help` | `WhoWeHelpPage.jsx` | WhoWeHelpHero → HelpGroups → WhoWeHelpCTA |
| `/impact` | `ImpactPage.jsx` | ImpactHero → StoriesGrid → CommunityImpact → TogetherSection → MeasureImpact |
| `/resources` | `ResourcesPage.jsx` | ResourcesHero → ResourceTypes → FeaturedResources → ResourcesCTA |
| `/get-involved` | `GetInvolvedPage.jsx` | GetInvolvedHero → WaysToHelp → InvolvementImpact → GetInvolvedCTA |
| `/contact` | `ContactPage.jsx` | ContactHero → WaysToConnect → ContactForm + SideCard → FAQSection |
| `/*` | `NotFoundPage.jsx` | 404 message + nav links |

---

## 6. Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--rm-burgundy` | `#6E2839` | Primary CTA buttons, accents, headings |
| `--rm-burgundy-dark` | `#591F2D` | Button hover state |
| `--rm-forest` | `#2E5D49` | Secondary brand color, section backgrounds |
| `--rm-forest-dark` | `#234739` | Darker forest hover states |
| `--rm-gold` | `#C79949` | Eyebrow labels, icon accents, highlight text |
| `--rm-gold-dark` | `#B8873A` | Gold hover state |
| `--rm-ivory` | `#FEF9F2` | Page background, section bands |
| `--rm-ink` | `#2B2420` | Primary body text |
| `--rm-ink-soft` | `#5B5148` | Secondary / muted text |
| `--rm-line` | `#E7DFD2` | Card borders, dividers |

### Typography

| Role | Font | Weight |
|------|------|--------|
| `h1`–`h4` | Playfair Display | 700 |
| Body `p` | Open Sans / Inter | 400 |
| UI buttons / labels | Montserrat | 600 |
| Script decorations | Great Vibes | 400 |

### Spacing & Layout

| Token | Value |
|-------|-------|
| Max container width | `1280px` |
| Container gutter (desktop) | `40px` |
| Container gutter (mobile) | `24px` |
| Section padding (desktop) | `100px` top/bottom → overridden to `64px` in Tailwind pages |
| Card border radius | `10px` |
| Button border radius | `50px` (pill) |

### Section Utility Classes

```css
.section          /* 64px padding top/bottom */
.section--forest  /* Forest green background, white text */
.section--burgundy /* Burgundy background, white text */
.section--band    /* Ivory background */
.card             /* White card with border, shadow, 14px radius */
.eyebrow          /* Gold uppercase tracking label */
```

---

## 7. Component Library

### Button Systems

There are **two** Button components depending on which styling system a page uses:

#### A. `components/Button/Button.jsx` (CSS Modules — used on Home page)

```jsx
<Button
  variant="primary|outline|outlineForest|gold|ivory"
  size="sm|md|lg"
  to="/path"       // renders as React Router <Link>
  href="https://…" // renders as <a>
  heart            // shows heart icon prefix
  arrow            // shows arrow icon suffix
  onClick={fn}
>
  Label
</Button>
```

#### B. `components/ui/Button.jsx` (Tailwind — used on all other pages)

```jsx
<Button
  variant="primary|outline|outlineLight|gold|burgundy|white"
  size="sm|default|lg"
  to="/path"
  href="https://…"
  className="custom overrides"
>
  Label
</Button>
```

### Shared UI Components (`components/ui/`)

| Component | Props | Purpose |
|-----------|-------|---------|
| `Container` | `className` | Max-width wrapper with responsive gutter |
| `Grid` | `cols`, `className` | CSS Grid wrapper (2–4 cols) |
| `Card` | `className` | White bordered card with shadow |
| `Eyebrow` | `className` | Gold uppercase section label |
| `Stat` | `number`, `label` | Impact stat display (gold number + label) |
| `IconCircle` | `bgColor`, `textColor`, `className` | Circular icon container |
| `FAQItem` | `question`, `answer` | Accordion-style FAQ row |
| `Section` | `className`, `style` | Generic section wrapper |
| `ImgPlaceholder` | `label`, `className` | Gradient placeholder for missing images |

### Icon Components (`components/icons/`)

22 custom SVG icon components, each accepting `size` and `color` props:

`IconArrowRight` · `IconClose` · `IconMenu` · `IconHeart` · `IconLeafDecor` ·
`IconFacebook` · `IconInstagram` · `IconLinkedIn` · `IconYouTube` ·
`IconCalendar` · `IconHeartDove` · `IconPeople` · `IconHandshake` ·
`IconMentor` · `IconSponsor` · `IconSupportMission` · `IconVolunteer` ·
`IconCompassion` · `IconEmpowerment` · `IconHope` · `IconInclusion` ·
`IconResilience`

---

## 8. Navigation & Footer

### Navbar (`components/Navbar/Navbar.jsx`)

- Sticky header with logo, desktop nav links, and two CTA buttons
- Mobile hamburger menu with full-screen overlay panel
- Active link highlighting via React Router `NavLink`
- Locks `body` scroll when mobile menu is open

**Navigation Links:**
```
Home / About / Programs / Who We Help / Impact / Resources / Get Involved / Contact
```

**CTA Buttons:**
| Button | Variant | Route |
|--------|---------|-------|
| Get Support | Outline | `/contact` |
| Donate | Primary + Heart | `/get-involved` |

> **Note:** There is no dedicated `/donate` page. "Donate" routes to the Get Involved page where donation options are listed.

### Footer (`components/Footer/Footer.jsx`)

Four link columns + newsletter signup + social icons.

| Column | Links (routes) |
|--------|---------------|
| Foundation | About Us, Our Mission, Why We Exist (`/about`), Our Impact (`/impact`), Transparency (`/about`) |
| Programs | All Programs, Youth Programs, Community Programs, Workplace Wellness (`/programs`), Hope Resource Hub (`/resources`) |
| Support | Volunteer, Become a Mentor, Community Ambassador, Partner With Us, Sponsor a Program (all → `/get-involved`) |
| Connect | Contact Us, Get Support (`/contact`), Resources (`/resources`), Donate (`/get-involved`) |

**Social links** — currently point to platform homepages. Update with real profile URLs:
```jsx
// Footer.jsx — SOCIAL array
{ label: 'Facebook',  href: 'https://www.facebook.com/'  },
{ label: 'Instagram', href: 'https://www.instagram.com/' },
{ label: 'LinkedIn',  href: 'https://www.linkedin.com/'  },
{ label: 'YouTube',   href: 'https://www.youtube.com/'   },
```

---

## 9. Page-by-Page Breakdown

### Home (`/`)
**File:** `src/pages/HomePage.jsx`

| Section | Component | Key CTAs |
|---------|-----------|----------|
| Hero | `Hero/Hero.jsx` | Donate Today → `/get-involved`, Get Support → `/contact` |
| Why We Exist | `WhyWeExist/WhyWeExist.jsx` | Learn About Our Mission → `/about` |
| Core Values | `CoreValues/CoreValues.jsx` | Display only |
| Programs | `programs/Programs.jsx` | Learn More → `/programs`, Explore Resources → `/resources` |
| Impact Stats | `impact/Impact.jsx` | See Our Impact → `/impact` |
| Stories of Strength | `StoriesOfStrength/StoriesOfStrength.jsx` | Read More Stories → `/impact`, Share Your Story → `/contact` |
| Get Involved | `GetInvolved/GetInvolved.jsx` | 5 ways → `/get-involved`, Join Our Movement → `/get-involved` |
| Support Banner | `SupportBanner/SupportBanner.jsx` | Give Hope Today → `/get-involved` |

---

### About (`/about`)
**File:** `src/pages/AboutPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `about/AboutHero.jsx` | Background image with 60% ivory overlay |
| Our Story | `about/OurStory.jsx` | 4-image grid + copy |
| Mission & Vision | `about/MissionVission.jsx` | Two-column: Forest green (Mission) + Burgundy (Vision) |
| Core Values | `about/CoreValueList.jsx` | 6 values in a grid |
| Stats | `about/AboutStats.jsx` | ⚠️ Contains placeholder stat labels — needs real copy |

---

### Programs (`/programs`)
**File:** `src/pages/programsPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `programs/ProgramsHero.jsx` | "Explore Programs" scrolls to `#programs-list` |
| Intro + Image | `programsPage.jsx` (inline) | Left text + right image |
| Focus Areas | `programs/FocusAreas.jsx` | 5 pillars: Education, Connection, Empowerment, Support, Resilience |
| Programs List | `programs/ProgramsList.jsx` | 5 program cards; all "Learn More" → `/contact` (no detail pages yet) |
| CTA Sections | `programs/ProgramCTA.jsx` | Join Movement → `/get-involved`, Donate Today → `/get-involved` |

**Programs listed:**
1. Resilient Minds Academy → `/contact`
2. Youth Strong Program → `/contact`
3. Community Healing Circles → `/contact`
4. Workplace Wellness Initiative → `/contact`
5. Hope Resource Hub → `/resources`

---

### Who We Help (`/who-we-help`)
**File:** `src/pages/WhoWeHelpPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `who-we-help/WhoWeHelpHero.jsx` | 50% ivory overlay |
| Help Groups | `who-we-help/HelpGroups.jsx` | 5 audience cards with images |
| CTA | `who-we-help/WhoWeHelpCTA.jsx` | Get Support → `/contact`, Explore Programs → `/programs` |

**Audiences served:** Youth & Young Adults · Families · Individuals Facing Transitions · Communities Experiencing Hardship · Caregivers & Support Networks

---

### Impact (`/impact`)
**File:** `src/pages/ImpactPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `impact/ImpactHero.jsx` | Share Your Story → `/contact`, See How We Create Change → `/programs` |
| Stories Grid | `impact/StoriesGrid.jsx` | 3-column masonry of quotes + images |
| Community Impact | `impact/CommunityImpact.jsx` | 4 stat icon cards |
| Together Section | `impact/TogetherSection.jsx` | Image + text + CTA → `/get-involved` |
| Measure Impact | `impact/MeasureImpact.jsx` | 5 metric icons + transparency CTA → `/about` |

---

### Resources (`/resources`)
**File:** `src/pages/ResourcesPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `resources/ResourcesHero.jsx` | "Browse All Resources" scrolls to `#featured-resources` |
| Resource Types | `resources/ResourceTypes.jsx` | 5 type cards — all clickable links |
| Featured Resources | `resources/FeaturedResources.jsx` | 5 resource cards — all links → `/contact` |
| CTA (Forest) | `resources/ResourcesCTA.jsx` | Get Support Now → `/contact` |
| CTA (White Card) | `resources/ResourcesCTA.jsx` | Contact Us → `/contact` |

**Resource types:** Articles · Guides & Toolkits · Tools & Worksheets · Videos & Webinars · Support Resources

---

### Get Involved (`/get-involved`)
**File:** `src/pages/GetInvolvedPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `get-involved/GetInvolvedHero.jsx` | "Find Your Way" scrolls to `#ways-to-help` |
| Ways to Help | `get-involved/WaysToHelp.jsx` | 5 ways — all links → `/contact` |
| Involvement Impact | `get-involved/InvolvementImpact.jsx` | Stats + image |
| CTA Cards | `get-involved/GetInvolvedCTA.jsx` | Icon cards → `/contact` or `/get-involved` |
| CTA Banner | `get-involved/GetInvolvedCTA.jsx` | Donate Now → `/get-involved` |

**Ways to help:** Volunteer · Become a Mentor · Community Ambassador · Partner With Us · Sponsor a Program

---

### Contact (`/contact`)
**File:** `src/pages/ContactPage.jsx`

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `contact/ContactHero.jsx` | "Get in Touch" scrolls to `#contact-form` |
| Ways to Connect | `contact/WaysToConnect.jsx` | Email, Phone, Location, Support, Social |
| Contact Form | `contact/ContactForm.jsx` | Powered by **EmailJS** |
| Side Info Card | `ContactPage.jsx` (inline) | Compassionate Support, Confidential, Timely Response |
| FAQ Section | `contact/FAQSection.jsx` | 5 accordion FAQs |

**Contact info (from `WaysToConnect.jsx`):**
- Email: `info@resilientmindsfoundation.ca`
- Phone: `403-404-9380`
- Hours: Mon–Fri, 9:00 AM – 5:00 PM
- Address: 1220 N. Market Street, Wilmington, DE 19801, USA

---

## 10. Images & Assets

### Local Assets (`src/assets/images/`)

| File | Used In | Status |
|------|---------|--------|
| `program-section.webp` | Programs page intro | ✅ Active |
| `hands-join.webp` | WhoWeHelpCTA | ✅ Active |
| `impact-section.jpeg` | TogetherSection (Impact page) | ✅ Active |
| `about-bg.webp` | Not referenced in active code | ⚠️ Unused |
| `hero-bg.webp` | Not referenced in active code | ⚠️ Unused |
| `impact-bg.webp` | Not referenced in active code | ⚠️ Unused |
| `programs-bg.webp` | Not referenced in active code | ⚠️ Unused |
| `who-we-hero.webp` | Not referenced in active code | ⚠️ Unused |
| `CTA-img.webp` | Not referenced in active code | ⚠️ Unused |
| `section-img.webp` | Legacy home only (unused) | ⚠️ Unused |

### Public Assets (`/public/`)

| File | Used In |
|------|---------|
| `favicon.svg` | `index.html` |
| `child.jpeg` | StoriesOfStrength (home) |
| `group.jpeg` | Available — not currently referenced |
| `books.jpeg` | Available — not currently referenced |
| `laptop.jpeg` | Available — not currently referenced |
| `leaf.jpeg` / `leaf1.jpeg` | Available — not currently referenced |

### Logo
Currently using `src/assets/logo-placeholder.svg` in both Navbar and Footer.  
**To replace:** swap the `src` in `Navbar.jsx` and `Footer.jsx`:
```jsx
// Navbar.jsx & Footer.jsx
import logo from '../../assets/logo.webp'; // or logo.png
```

### Image Guidelines
- All hero backgrounds use Unsplash URLs with `?auto=format&fit=crop&w=1920&q=80`
- All card/section images use `?auto=format&fit=crop&w=600&q=80`
- Use `loading="lazy"` on all non-hero images
- Use `onError` fallback on program/resource cards

---

## 11. Forms & Integrations

### Contact Form (EmailJS)
**File:** `src/components/contact/ContactForm.jsx`

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend.

```jsx
// Current credentials in ContactForm.jsx
const SERVICE_ID  = 'service_sk7p1h8';
const TEMPLATE_ID = 'template_mw17ujk';
const USER_ID     = 'jjZ3z_Iy5FqVvqjZH';
```

**Fields:** First Name · Last Name · Email · Phone · Message

> ⚠️ These credentials are hard-coded in the component. For production, move them to environment variables:
> ```
> VITE_EMAILJS_SERVICE_ID=service_xxx
> VITE_EMAILJS_TEMPLATE_ID=template_xxx
> VITE_EMAILJS_USER_ID=xxxxx
> ```

### Newsletter Form (Footer)
**File:** `src/components/Footer/Footer.jsx`

The subscribe button currently only calls `event.preventDefault()`. No backend or third-party integration is connected.

**To integrate:** Connect Mailchimp, ConvertKit, or a serverless function endpoint.

---

## 12. Known Limitations

| Area | Description |
|------|-------------|
| Individual program pages | No detail pages exist for Academy, Youth Strong, Healing Circles, Workplace Wellness. "Learn More" links currently go to `/contact` |
| Individual resource pages | No detail pages for articles, guides, or worksheets. Card links go to `/contact` |
| Donate page | No `/donate` route exists. All "Donate" CTAs route to `/get-involved` |
| Real social media URLs | Social icons link to platform homepages, not the organization's actual profiles |
| Organization logo | Still using `logo-placeholder.svg` |
| Newsletter integration | Footer "Subscribe" button has no backend — fires `preventDefault` only |
| AboutStats copy | Labels contain placeholder text ("Tested", "Workhorse Delivered", etc.) — needs real copy |
| Transparency section | Footer links "Transparency" to `/about` — no dedicated section exists |
| Mockup alignment | Current design may not fully match approved mockups — verification requires mockup assets |
| No backend / CMS | All content is hard-coded in JSX — no CMS or database |
| EmailJS credentials exposed | Service credentials are in component source — move to `.env` for production |

---

## 13. Issue Resolution Log

The following issues were identified during QA testing (August 2026) and resolved:

### Resolved — Navigation & Routing
| # | Issue | Fix |
|---|-------|-----|
| 1 | Programs "Learn More" → blank page (`/academy`, etc.) | Rerouted to `/contact` |
| 2 | ProgramCTA "Donate Today" → `/donate` (missing route) | Changed to `/get-involved` |
| 3 | WhoWeHelpCTA `to="/contact "` trailing space — navigation broken | Trimmed to `/contact` |
| 4 | GetInvolvedCTA "Donate Now" `<a href="/contact">` — full reload + wrong page | Changed to `<Link to="/get-involved">` |
| 5 | No 404 page — unknown URLs render blank | Created `NotFoundPage.jsx` with nav links |

### Resolved — Hash Scroll CTAs
| # | Issue | Fix |
|---|-------|-----|
| 6 | ProgramsHero "Explore Our Programs" → `<Link to="#programs-list">` (unreliable) | Changed to `<a href="#programs-list">` |
| 7 | GetInvolvedHero "Find Your Way" → `<Link to="#ways-to-help">` | Changed to native `<a>` |
| 8 | ResourcesHero "Browse All Resources" → `<Link to="#featured-resources">` | Changed to native `<a>` |
| 9 | ContactHero "Get in Touch" → `#contact-form` — no section with that id existed | Native `<a>` + added `id="contact-form"` to section |

### Resolved — Non-Clickable Elements
| # | Issue | Fix |
|---|-------|-----|
| 10 | ResourceTypes items — `<span>` tags, not clickable | Converted to `<Link>` components |
| 11 | FeaturedResources card links — `<span>` tags, not clickable | Converted to `<Link to="/contact">` |
| 12 | GetInvolvedCTA icon cards — `<div>` tags, not clickable | Converted to `<Link>` components |
| 13 | Footer social icons — `href="#"` scroll to top | Updated to real platform URLs |
| 14 | Contact page social icons — `href="#"` | Updated to real platform URLs |

### Resolved — Hero Readability
| # | Issue | Fix |
|---|-------|-----|
| 15 | Programs Hero overlay 85% → background invisible | Reduced to 60% |
| 16 | About Hero overlay 85% | Reduced to 60% |
| 17 | Resources, Get Involved, Contact heroes overlay 80% | Reduced to 60% |
| 18 | Impact Hero overlay 80% | Reduced to 55% |
| 19 | Who We Help Hero opacity 70% | Reduced to 50% |

### Resolved — Images
| # | Issue | Fix |
|---|-------|-----|
| 20 | Same Unsplash image (`1529156069898`) used in 8+ components | Replaced each with unique image |
| 21 | ProgramsHero + ProgramCTA on same page use identical image | ProgramsHero changed to education classroom image |
| 22 | ImpactHero + StoriesGrid column 1 on same page use identical image | StoriesGrid column 1 updated |
| 23 | FeaturedResources "Video" card = GetInvolvedHero background | Video card updated |
| 24 | Home Programs section used `picsum.photos` placeholders | Replaced with real Unsplash images |
| 25 | SupportBanner used `picsum.photos` placeholder | Replaced with real Unsplash image |

### Resolved — Button Variants
| # | Issue | Fix |
|---|-------|-----|
| 26 | `variant="burgundy"` used but undefined in `ui/Button.jsx` | Added `burgundy` variant |
| 27 | `variant="white"` used but undefined in `ui/Button.jsx` | Added `white` variant |

---

## 14. Remaining Work

The following items have been identified but require additional input or development effort:

### Needs Content / Design Input
| # | Task | Required Input |
|---|------|----------------|
| 1 | Replace organization logo | Final logo file (SVG/WebP) |
| 2 | Fix AboutStats placeholder copy ("People Tested", etc.) | Real stat labels from the team |
| 3 | Update social media links to real profiles | Organization's social media handles/URLs |
| 4 | Align design with approved mockups | Mockup files (Figma / PDF / screenshots) |
| 5 | Fix improperly cropped images | Visual review of each page against mockup |

### Needs New Development
| # | Task | Complexity |
|---|------|-----------|
| 6 | Individual program detail pages (`/academy`, `/youth-strong`, `/healing-circles`, `/workplace`) | Medium — 4 new pages with content |
| 7 | Individual resource pages (articles, guides, worksheets, videos) | High — content + potentially downloadable files |
| 8 | Dedicated Donate page (`/donate`) with payment integration | High — payment gateway (Stripe, PayPal, etc.) |
| 9 | Newsletter form backend integration | Medium — Mailchimp API or serverless function |
| 10 | Move EmailJS credentials to `.env` file | Low — 30-minute task |
| 11 | Transparency section on About page | Low–Medium |
| 12 | Real blog/articles CMS integration | High — requires CMS (Contentful, Sanity, etc.) |

### Recommended Priority Order
```
1. Logo replacement            — visual identity
2. Fix placeholder copy        — credibility
3. Real social media URLs      — discoverability
4. Donate page                 — revenue
5. Program detail pages        — conversion
6. Newsletter integration      — audience building
7. Move credentials to .env    — security
```

---

*Documentation generated: August 21, 2026*  
*Project: Resilient Minds Foundation Website — `d:\resilant-minds\Resilent-MINDS-foundation`*

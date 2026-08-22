# UI Design Spec — Homepage

This document maps every homepage visual value to the exact CSS variable, class, and file used in code. Use it to adjust sizing, spacing, or colors without re-inspecting the mockups.

**Tech:** React + CSS Modules (homepage, navbar, footer). Other site pages still use the existing Tailwind setup.

**Source_Content.pdf** was not present in the repository. Homepage copy was taken from the existing site components and the supplied mockups. Conflicts should be resolved against `Source_Content.pdf` when it is available.

---

## Global tokens

**File:** `src/styles/tokens.css`  
**Imported from:** `src/index.css`

| Token | Value | CSS variable |
|---|---|---|
| Burgundy | `#6E2839` | `--rm-burgundy` |
| Burgundy hover | `#591F2D` | `--rm-burgundy-dark` |
| Forest Green | `#2E5D49` | `--rm-forest` |
| Forest hover | `#234739` | `--rm-forest-dark` |
| Antique Gold | `#C79949` | `--rm-gold` |
| Gold hover | `#B8873A` | `--rm-gold-dark` |
| Warm Ivory | `#FEF9F2` | `--rm-ivory` |
| White | `#FFFFFF` | `--rm-white` |
| Text dark | `#222222` | `--rm-text-dark` |
| Text body | `#333333` | `--rm-text-body` |
| Text muted | `#4A4A4A` | `--rm-text-muted` |
| Text light | `#666666` | `--rm-text-light` |
| Line | `#E7DFD2` | `--rm-line` |
| Heading font | Playfair Display | `--rm-font-heading` |
| Body font | Inter | `--rm-font-body` |
| UI / labels font | Montserrat | `--rm-font-ui` |
| Script font | Great Vibes | `--rm-font-script` |
| Container max-width | `1280px` | `--rm-container` (class `.rm-container`) |
| Side gutter | `40px` / `24px` at `768px` | `--rm-gutter` |
| Section vertical | `100px` / `60px` at `768px` | `--rm-section-y` |
| Pill radius | `50px` | `--rm-radius-pill` |
| Card radius | `10px` | `--rm-radius-card` |
| Card gap | `20px` | `--rm-card-gap` |
| Card shadow | `0 4px 15px rgba(0,0,0,0.05)` | `--rm-shadow-card` |

**Fonts loaded in:** `index.html` (Google Fonts).

**Shared components**

| Component | Files |
|---|---|
| Button | `src/components/Button/Button.jsx` + `Button.module.css` |
| SectionLabel | `src/components/SectionLabel/SectionLabel.jsx` + `SectionLabel.module.css` |
| Icons | `src/components/icons/Icon*.jsx` |

**Button variants (class on `Button.module.css`)**

| Variant | Padding / size | Colors |
|---|---|---|
| `.sm` | `10px 24px`, `14px` | used by navbar |
| `.md` | `12px 28px`, `16px` | default |
| `.lg` | `18px 36px`, `18px` | hero |
| `.primary` | — | bg `--rm-burgundy`, text white |
| `.outline` | `1.5px` burgundy border | transparent, text `--rm-text-dark` |
| `.gold` | — | bg `--rm-gold`, text `--rm-forest` |
| `.ivory` | — | bg `--rm-ivory`, text `--rm-forest` |

**ASSUMPTION:** Hover states (darken / fill) are inferred; they are not visible in the static mockups.

---

## 1. Navbar

**Files:** `src/components/Navbar/Navbar.jsx`, `Navbar.module.css`  
**Wired in:** `src/components/layout/Layout.jsx`

| Property | Value | Class |
|---|---|---|
| Height | `88px` (`80px` below `1179px`) | `.header` |
| Background | `--rm-ivory` | `.header` |
| Inner max-width | `1440px` | `.inner` |
| Horizontal padding | `40px` (`24px` mobile) | `.inner` |
| Layout | flex, space-between, center | `.inner` |
| Logo size | `160×80` (`130×64` mobile) | `.logo` |
| Nav gap | `24px` | `.nav` |
| Link size / weight | `14px` / `500` | `.link` |
| Link color | `--rm-forest` | `.link` |
| Active color + underline | `--rm-burgundy` + `2px` `--rm-gold` | `.active` |
| Action gap | `16px` | `.actions` |

**Logo swap:** replace `src/assets/logo-placeholder.svg` (imported in `Navbar.jsx`). Keep `160×80` box.

**ASSUMPTION:** Navbar collapses at `1179px`, not `768px`, because eight links plus two CTAs cannot fit at tablet widths. Sticky positioning is inferred (mockup shows it at the top of the page).

---

## 2. Hero

**Files:** `src/components/Hero/Hero.jsx`, `Hero.module.css`

| Property | Value | Class |
|---|---|---|
| Min-height | `720px` | `.hero` / `.grid` |
| Columns | `55% / 45%` | `.grid` |
| Left padding | `60px 40px 120px 80px` | `.content` |
| Heading | `64px` / `700` / `1.1` / `--rm-forest` | `.heading` |
| “Hopeful” | Great Vibes italic / `--rm-gold` | `.accent` |
| Body | `18px` / `1.6` / `--rm-forest` / max `500px` | `.body` |
| Heading→body gap | `24px` | `.body { margin-top }` |
| Body→buttons gap | `40px` | `.actions { margin-top }` |
| Button gap | `20px` | `.actions` |
| Overlay script | `42px` Great Vibes / ivory | `.script` |
| Gold underline | `2px` under “Hope Ahead.” | `.scriptLine::after` |

**Image placeholder:** `https://picsum.photos/id/64/800/1000` in `Hero.jsx` (`HERO_IMAGE`). Size `800×1000`. Class `.image`.

**Icon placeholders:** `IconHeart` (18px in lg button), `IconArrowRight` (20px), `IconLeafDecor` (`.leaf`).

**ASSUMPTION:** “Hopeful” uses Great Vibes in antique gold. One mockup frame used burgundy italic Playfair; the tighter hero crop used gold script. Overlay line sits under “Hope Ahead.” only.

---

## 3. Why We Exist

**Files:** `src/components/WhyWeExist/WhyWeExist.jsx`, `WhyWeExist.module.css`

| Property | Value | Class |
|---|---|---|
| Columns | `55% / 45%` | `.section` |
| Min-height | `650px` | `.section` |
| Image min-height | `600px` | `.image` |
| Content padding | `80px 80px 80px 48px` | `.content` |
| Gold tick | `40×2px` | `.tick` |
| Label | SectionLabel `14px` / `700` / `0.15em` / gold | `SectionLabel.module.css .label` |
| Heading | `52px` / `700` / `1.15` / forest | `.heading` |
| Label→heading | `16px` | `.heading { margin-top }` |
| Heading→body | `24px` | `.body { margin }` |
| Body→button | `40px` | `.body { margin-bottom }` |
| Body | `18px` / `1.6` / forest / max `550px` | `.body` |

**Image placeholder:** `https://picsum.photos/id/1012/900/700` (`MISSION_IMAGE`). Right edge uses an SVG CSS mask on `.media`.

**ASSUMPTION:** Body copy was reconciled from existing site + mockup language. Replace from `Source_Content.pdf` if it differs.

---

## 4. Core Values

**Files:** `src/components/CoreValues/CoreValues.jsx`, `CoreValues.module.css`

| Property | Value | Class |
|---|---|---|
| Section padding | `60px 0 80px` | `.section` |
| Columns | 5 equal | `.row` |
| Column gap | `32px` | `.row` |
| Icon circle | `88×88px`, white | `.iconWrap` |
| Icon SVG | `48×48`, forest | `IconCompassion` etc. |
| Icon→title | `16px` | `.iconWrap { margin-bottom }` |
| Title | `20px` / `700` / forest / Montserrat | `.title` |
| Title→desc | `8px` | `.title { margin-bottom }` |
| Desc | `15px` / `1.5` / `--rm-text-muted` | `.desc` |
| Divider | `1×40px` gold | `.divider` |

**Icon swap:** replace SVGs in `src/components/icons/IconCompassion.jsx`, `IconResilience.jsx`, `IconEmpowerment.jsx`, `IconInclusion.jsx`, `IconHope.jsx`. Keep the `88×88` wrapper.

Homepage shows five values (Compassion, Resilience, Empowerment, Inclusion, Hope). The About page still lists a sixth “Community” value — homepage follows the mockup.

---

## 5. Our Programs

**Files:** `src/components/Programs/Programs.jsx`, `Programs.module.css`

| Property | Value | Class |
|---|---|---|
| Section padding | `40px 0 100px` | `.section` |
| Header bottom | `60px` | `.header` |
| Heading | `48px` / `700` / forest | `.heading` |
| Subhead | `20px` / muted | `.sub` |
| Label lines | `40×2px` gold, both sides | `SectionLabel` `.line` |
| Grid | 5 columns, `20px` gap | `.grid` |
| Card radius / shadow | `10px` / `--rm-shadow-card` | `.card` |
| Image | `4:3`, `400×300` placeholders | `.image` |
| Body padding | `24px` | `.body` |
| Card title | `18px` / `700` / forest | `.title` |
| Card body | `14px` / `1.5` / muted | `.desc` |
| Link | `15px` / `700` / burgundy | `.link` |

**Image placeholders (do not reuse across sections):**

| Card | URL | Dimensions | Swap in |
|---|---|---|---|
| Academy | `picsum.photos/id/24/400/300` | 400×300 | `PROGRAMS[0].image` |
| Youth Strong | `picsum.photos/id/1011/400/300` | 400×300 | `PROGRAMS[1].image` |
| Healing Circles | `picsum.photos/id/996/400/300` | 400×300 | `PROGRAMS[2].image` |
| Workplace | `picsum.photos/id/180/400/300` | 400×300 | `PROGRAMS[3].image` |
| Hope Hub | `picsum.photos/id/28/400/300` | 400×300 | `PROGRAMS[4].image` |

Fifth card CTA is **Explore Resources** → `/resources` (mockup).

---

## 6. Our Impact

**Files:** `src/components/Impact/Impact.jsx`, `Impact.module.css`

| Property | Value | Class |
|---|---|---|
| Banner fill | `--rm-forest` | `.banner` |
| Wave height | `80px` | `.wave` |
| Inner padding | `40px 0 48px` plus wave | `.banner` |
| Heading | `48px` / ivory / Playfair | `.heading` |
| Body | `18px` / `1.5` / ivory | `.body` |
| Heading→body | `16px` | `.body { margin-top }` |
| Copy / stats split | `40% / 60%`, gap `80px` | `.top` |
| Stat icon | `40×40`, gold | `IconPeople`, `IconCalendar`, `IconHeartDove` |
| Stat number | `42px` / ivory / Playfair | `.number` |
| Stat label | `14px` / ivory | `.label` |
| Gold divider | `1×60px`, 50% gold | `.rule` |
| Top row → CTA | `60px` | `.cta { margin-top }` |

**ASSUMPTION:** `1,000+ / 100+ / 50+` are mockup/example figures, not confirmed results. Confirm before treating them as verified impact.

**Icon swap:** `IconPeople.jsx`, `IconCalendar.jsx`, `IconHeartDove.jsx`. Leaf watermark: `IconLeafDecor` on `.leaf`.

---

## 7. Stories of Strength

**Files:** `src/components/StoriesOfStrength/StoriesOfStrength.jsx`, `StoriesOfStrength.module.css`

| Property | Value | Class |
|---|---|---|
| Top green wave | `90px` SVG | `.topWave` |
| Columns | `48% / 52%` | `.layout` |
| Image min-height | `560px` | `.image` |
| Right fade | linear mask `68% → 100%` | `.image` |
| Content padding | `40px 80px 40px 40px` | `.content` |
| Heading | `52px` / forest | `.heading` |
| Quote | `20px` italic / body color | `.quote` |
| Attribution | `16px` | `.attr` |
| Quote→attr | `8px` | `.attr { margin-top }` |
| Attr→buttons | `40px` | `.actions { margin-top }` |
| Button gap | `20px` | `.actions` |

**Image placeholder:** `https://picsum.photos/id/838/700/800` (`STORY_IMAGE`).

**ASSUMPTION:** Testimonial is an illustrative quote from the mockup/existing site, not a verified published story.

---

## 8. Get Involved

**Files:** `src/components/GetInvolved/GetInvolved.jsx`, `GetInvolved.module.css`

| Property | Value | Class |
|---|---|---|
| Padding | `80px 0 60px` | `.section` |
| Heading | `36px` / forest / Playfair | `.heading` |
| Subhead | `18px` / forest | `.sub` |
| Heading→sub | `8px` | `.heading { margin-bottom }` |
| Header→icons | `60px` | `.row { margin-top }` |
| Icon size | `48×48` forest | `.icon` |
| Icon→label | `20px` | `.item { gap }` |
| Label | `16px` / `700` / forest | `.label` |
| Columns | 5 | `.row` |
| Column gap | `40px` | `.row` |

**Icon swap:** `IconVolunteer.jsx`, `IconMentor.jsx`, `IconHandshake.jsx`, `IconSponsor.jsx`, `IconSupportMission.jsx`.

---

## 9. Support Banner

**Files:** `src/components/SupportBanner/SupportBanner.jsx`, `SupportBanner.module.css`

| Property | Value | Class |
|---|---|---|
| Top wave | `80px` burgundy SVG | `.wave` |
| Banner min-height | `400px` | `.banner` |
| Columns | `55% / 45%` | `.banner` |
| Background | `--rm-burgundy` | `.banner` |
| Copy padding | `80px` | `.copy` |
| Heading | `48px` / ivory | `.heading` |
| Body | `20px` / ivory / max `600px` | `.body` |
| Heading→body | `20px` | `.body { margin }` |
| Body→button | `30px` | `.body { margin }` |
| Image fade | left-edge mask into burgundy | `.image` |

**Image placeholder:** `https://picsum.photos/id/106/800/600` (`SUPPORT_IMAGE`). Unique from program/hero/story images.

---

## 10. Footer

**Files:** `src/components/Footer/Footer.jsx`, `Footer.module.css`

| Property | Value | Class |
|---|---|---|
| Background | `--rm-ivory` | `.footer` |
| Gold top rule | `4px` `--rm-gold` | `.footer { border-top }` |
| Top padding | `80px` | `.footer` |
| Grid | `1.2fr + 4×0.9fr + 1.4fr`, gap `40px` | `.top` |
| Logo | `180×80` | `.logo` |
| Social button | `32×32` forest circle | `.socialBtn` |
| Social gap | `12px` | `.social` |
| Column title | `16px` / `700` / forest | `.colTitle` |
| Links | `14px` / `line-height 2` / forest | `.link` |
| Newsletter title | `18px` / `700` | `.newsTitle` |
| Input | white, forest `1px` border, `25px` radius | `.form` |
| Subscribe | forest fill, `20px` radius | `.subscribe` |
| Bottom rule | `1px` forest at 20% | `.bottom` |
| Copyright | `13px` | `.copy` |
| Tagline | `16px` italic Playfair; “Brighter Futures” gold | `.tagline` / `.gold` |

**Logo swap:** same `src/assets/logo-placeholder.svg` imported in `Footer.jsx`.

**ASSUMPTION:** Social URLs are `#` placeholders. Newsletter does not submit anywhere yet. Copyright year is `2026` (current year). One mockup showed `2024`. Contact details are not invented.

---

## Responsive map

| Breakpoint | Behavior |
|---|---|
| `>1179px` | Full desktop navbar |
| `≤1179px` | Hamburger menu |
| `≤1100px` | Programs 3-col; footer 3-col |
| `≤1024px` | Two-column sections stack; values 3-col; Get Involved 3-col |
| `≤768px` | Single column; heading sizes ~32px; section padding `--rm-section-y: 60px`; gutter `24px` |

---

## Asset swap checklist

| Asset | Current placeholder | Swap location |
|---|---|---|
| Logo | `src/assets/logo-placeholder.svg` | `Navbar.jsx`, `Footer.jsx` |
| Hero portrait | picsum `id/64` `800×1000` | `Hero.jsx` `HERO_IMAGE` |
| Why We Exist group | picsum `id/1012` `900×700` | `WhyWeExist.jsx` `MISSION_IMAGE` |
| Program cards | picsum ids `24, 1011, 996, 180, 28` | `Programs.jsx` `PROGRAMS[].image` |
| Story portrait | picsum `id/838` `700×800` | `StoriesOfStrength.jsx` `STORY_IMAGE` |
| Support plant | picsum `id/106` `800×600` | `SupportBanner.jsx` `SUPPORT_IMAGE` |
| All icons | `src/components/icons/*.jsx` | Keep wrapper sizes in CSS |

Do not repeat the same photograph across sections. Crop with `object-fit: cover` and the `object-position` already set so faces are not clipped at the documented breakpoints.

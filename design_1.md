# Portfolio Design System — "Chartreuse & Charcoal"

> Source: Figma file `portfolio` (spec pages: Color System Spec, Design System Spec)
> High-contrast editorial layout system. Soft lime/chartreuse canvas, deep charcoal active elements, rich black typography. WCAG AAA compliant.

---

## 1. Brand Overview

| | |
|---|---|
| **Style** | High-contrast, editorial, brutalist-leaning corporate |
| **Accent color** | `#EAEF7A` (chartreuse) |
| **Primary structural color** | `#1C1C1E` (charcoal) |
| **Contrast compliance** | WCAG AAA |
| **Breakpoints supported** | Desktop & Mobile |
| **Display font** | Space Grotesk (bold editorial headers) |
| **Body font** | Inter (precision UI copy) |

---

## 2. Color Tokens

### 2.1 Foundations

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-canvas` | `#EAEF7A` | Default page background — soft, low-contrast chartreuse |
| `--sys-color-surface` | `#FCFCF9` | Elevated container / card background |
| `--sys-color-surface-hover` | `#F5F5F0` | Hover tint for interactive surfaces |
| `--sys-color-surface-active` | `#EBEBE3` | Pressed state for surface structures |
| `--sys-color-border-subtle` | `#E1E1D7` | Default divider stroke / internal card borders |
| `--sys-color-border-strong` | `#1C1C1E` | Thick editorial borders, inputs, brutalist framing |

### 2.2 Text

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-text-primary` | `#000000` | Headings, body copy, dense UI labels |
| `--sys-color-text-secondary` | `#555550` | Supporting text, metadata, captions |
| `--sys-color-text-tertiary` | `#8E8E88` | Disabled text, placeholders |
| `--sys-color-text-inverse` | `#FCFCF9` | Light text on dark backgrounds / primary action labels |
| `--sys-color-text-link` | `#1C1C1E` | Default anchor color |
| `--sys-color-text-link-hover` | `#EAEF7A` | Background pill revealed on inline link hover |

### 2.3 Buttons — Primary

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-btn-primary-bg` | `#1C1C1E` | Default background (solid charcoal) |
| `--sys-color-btn-primary-text` | `#EAEF7A` | Default text (bright chartreuse) |
| `--sys-color-btn-primary-hover` | `#000000` | Hover background (pure black) |
| `--sys-color-btn-primary-active` | `#2C2C2E` | Active/pressed background |
| `--sys-color-btn-primary-disabled` | `#E1E1D7` | Disabled background |
| `--sys-color-btn-primary-disabled-text` | `#8E8E88` | Disabled text |

### 2.4 Buttons — Secondary (Outline)

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-btn-secondary-bg` | `#FCFCF9` | Default background (warm white) |
| `--sys-color-btn-secondary-border` | `#1C1C1E` | Default border |
| `--sys-color-btn-secondary-text` | `#1C1C1E` | Default text |
| `--sys-color-btn-secondary-hover` | `#F5F5F0` | Hover background |
| `--sys-color-btn-secondary-active` | `#EBEBE3` | Active background |
| `--sys-color-btn-secondary-disabled-border` | `#E1E1D7` | Disabled border |

### 2.5 Buttons — Ghost / Tertiary

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-btn-ghost-text` | `#1C1C1E` | Default text, transparent bg |
| `--sys-color-btn-ghost-hover` | `#EAEF7A4D` (30% opacity) | Hover overlay |
| `--sys-color-btn-ghost-active` | `#EAEF7A99` (60% opacity) | Active/press overlay |

### 2.6 Interactive States

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-state-focus` | `#1C1C1E` | Accessibility focus ring |
| `--sys-color-state-selected` | `#1C1C1E` | Active tab/toggle/menu item |
| `--sys-color-state-hover-overlay` | `#0000000D` (5%) | Black overlay for list item hover |
| `--sys-color-state-pressed-overlay` | `#0000001A` (10%) | Black overlay for pressed states |

### 2.7 Feedback

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-feedback-success` | `#3E6B27` | Success (deep organic green) |
| `--sys-color-feedback-warning` | `#C18E17` | Warning (deep amber gold) |
| `--sys-color-feedback-error` | `#B83A25` | Error (rust/crimson) |
| `--sys-color-feedback-info` | `#555550` | Info (muted dark gray) |

### 2.8 Accent Variants

| Token | Hex | Usage |
|---|---|---|
| `--sys-color-accent-default` | `#EAEF7A` | Core brand chartreuse |
| `--sys-color-accent-hover` | `#DFE46C` | Darker/saturated hover lime |
| `--sys-color-accent-muted` | `#EAEF7A26` (15%) | Tag/badge background |
| `--sys-color-accent-on-dark` | `#EAEF7D` | Chartreuse tuned to pop on black |

---

## 3. Typography

Fonts: **Space Grotesk** (Display/H1–H5 headers), **Inter** (body/caption/overline).

### 3.1 Desktop scale

| Style | Size / Line height | Weight |
|---|---|---|
| Display | 72px / 80px | Bold |
| H1 | 56px / 64px | Bold |
| H2 | 40px / 48px | Bold |
| H3 | 32px / 40px | Bold |
| H4 | 24px / 32px | Bold |
| H5 | 20px / 28px | Bold |
| Body Large | 18px / 28px | Regular |
| Body | 16px / 24px | Regular |
| Body Small | 14px / 20px | Regular |
| Caption | 12px / 16px | Regular |
| Overline | 12px / 16px | Regular, uppercase, 1.5px letter-spacing |

### 3.2 Mobile scale

| Style | Size / Line height | Weight |
|---|---|---|
| Display | 48px / 56px | Bold |
| H1 | 36px / 44px | Bold |
| H2 | 28px / 36px | Bold |
| H3 | 24px / 32px | Bold |
| H4 | 20px / 28px | Bold |
| H5 | 18px / 24px | Bold |
| Body Large | 16px / 24px | Regular |
| Body | 15px / 22px | Regular |
| Body Small | 13px / 18px | Regular |
| Caption | 11px / 14px | Regular |
| Overline | 11px / 14px | Regular, uppercase, 1.5px letter-spacing |

---

## 4. Spacing Scale

Proportional token scale used for gaps, container padding, and alignment grids:

| Token | Value |
|---|---|
| `space-4` | 4px |
| `space-8` | 8px |
| `space-12` | 12px |
| `space-16` | 16px |
| `space-24` | 24px |
| `space-32` | 32px |
| `space-48` | 48px |
| `space-64` | 64px |
| `space-96` | 96px |
| `space-128` | 128px |

---

## 5. Layout Grid

| | Desktop (12-column) | Mobile (4-column) |
|---|---|---|
| Max width | 1200px | 100% fluid |
| Gutter | 24px | 16px |
| Margins | 80px | 20px |

---

## 6. Corner Radius Tokens

| Token | Value |
|---|---|
| Small | 4px |
| Medium | 8px |
| Large | 12px |
| XL | 16px |
| Full | 9999px |

---

## 7. Components

### 7.1 Buttons

**Shape:** Pill (fully rounded, `border-radius: 9999px`)
**Padding:** `12px` vertical, `20px` horizontal
**Gap** (icon ↔ label): `12px`
**Label text:** 16px, Inter, semibold (default/disabled) or bold (hover)
**Icon slots:** left icon by default; optional right icon supported

| State | Background | Text color | Text weight | Icon color |
|---|---|---|---|---|
| Default | `#1C1C1E` | `#EAEF7A` | Semibold | Chartreuse |
| Hover | `#000000` | `#EAEF7A` | Bold | Chartreuse |
| Disabled | `#E1E1D7` | `#8E8E88` | Semibold | Muted gray |

Reference implementation (React + Tailwind, from Figma Code Connect — adapt to your stack):

```tsx
type ButtonsProps = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  state?: "Default" | "hover" | "disabled";
};

export default function Buttons({ className, iconLeft = true, iconRight = false, state = "Default" }: ButtonsProps) {
  const isDisabled = state === "disabled";
  const isHover = state === "hover";

  const bg = isDisabled ? "bg-[#e1e1d7]" : isHover ? "bg-black" : "bg-[#1c1c1e]";
  const textColor = isDisabled ? "text-[#8e8e88]" : "text-[#eaef7a]";
  const textWeight = isHover ? "font-bold" : "font-semibold";

  return (
    <button
      disabled={isDisabled}
      className={className || `flex gap-[12px] items-center px-[20px] py-[12px] rounded-full ${bg}`}
    >
      {iconLeft && <DownloadIcon className="w-4 h-[18px]" />}
      <span className={`text-[16px] whitespace-nowrap ${textColor} ${textWeight}`}>
        Download CV
      </span>
      {iconRight && <DownloadIcon className="w-4 h-[18px]" />}
    </button>
  );
}
```

> Note: this button was documented with "Download CV" as its label/icon in the source file — treat the icon slot as generic (swap for any icon) but keep the padding, radius, and state color mapping consistent across all pill buttons in the portfolio.

### 7.2 Icons
- Download
- LinkedIn
- View

### 7.3 Chips / Company tags
Example variants seen in the file: `LH`, `Aplo`, `Freelance` — used as small pill-style tags (likely for project/role/company labeling on case studies or a timeline).

---

## 8. Voice & Tone (inferred from copy in spec)

The example headline copy ("Creative systems engineered with clarity," "Structural typography is layout's spine," "Systematic scaling rules") suggests a confident, technical, editorial tone — well suited to a design/engineering portfolio that wants to read as precise and intentional rather than playful.

---

## 9. Page Structure — Home ("portfolio-brutalist")

Full homepage layout pulled from Figma (`node-id 27:919`). Outer frame: `2px solid black` border, background `#FAFAF7`.

### 9.1 Navigation
- Horizontal nav, items: **Home / Work / About / Play**
- Each item: Space Grotesk Bold, 20px/28px, color `#6E6E6A` (muted gray, not full black — likely for an "inactive" state)
- Each item padded `40px` horizontal / `16px` vertical, `4px` radius (small) on hover/press target

### 9.2 Hero
- Container: `80px` horizontal padding, `60px` vertical padding, fixed height `900px` on desktop, content justified between (nav top, hero middle, scroll-indicator bottom)
- Headline: Space Grotesk Bold, 40px, line-height 1.1, black — "Hi, I'm jack, a hands-on UX designer and strategist who ensures people are at the core of tech products"
- Full-width horizontal divider rule below headline
- Two-column row below the divider:
  - **Left (flex, ~941px):** intro paragraph, Space Grotesk Regular, 24px, line-height 1.4, black
  - **Right (fixed column, gap 20px):** two stacked pill CTAs:
    - `Download CV` — background `#EAEF7A` (chartreuse), text `#0F0F0C` (near-black), icon left, Inter Semibold 16px
    - `Contact me on LinkedIn` — same style, icon left
- Small chevron/scroll-indicator icon centered at hero bottom

> **Note:** this hero CTA style (chartreuse background + near-black text `#0F0F0C`) is a variant not defined in the §2.3 Primary Button tokens (which specify charcoal bg / chartreuse text as the default). Treat this as an **"Accent" button variant** — bright fill, dark text — and add it to the component library as `btn-accent` alongside the existing primary/secondary/ghost set.

### 9.3 Work Section (project list)
- Section container: `112px` vertical padding
- Repeating **project row**, alternating left/right image placement:
  - Row padding: `80px` horizontal / `60px` vertical, `40px` gap between text and image
  - Image placeholder: `600×400px`, flat gray (`#D9D9D9`)
  - Text column (flex-1) contains, top to bottom, `24px` gap:
    1. Eyebrow / role — Inter Regular, 18px/28px, black (e.g. "Lendhub UX/UI Manager")
    2. Title — Space Grotesk Bold, 20px/28px, black (e.g. "Designing a better way to enquire and manage loans")
    3. **Tag chip** — background `#EADEFF`, border `1px solid #7E3CFA`, radius `8px` (medium), padding `16px`/`8px`, label Inter Medium 14px, color `#7E3CFA` (e.g. "UI design")
    4. Description — Inter Regular, 16px/24px, black
    5. **"View project" button** — pill, background `#1C1C1E`, text `#EAEF7A` Inter Semibold 16px, small trailing arrow icon (12×16px)
- Rows alternate: image-right / image-left / image-right / image-left

> **Note:** the chip's color is tied to the **company**, not the skill/category — the label text ("UI design" etc.) is independent of the color, which is keyed off which company the project belongs to.

**Chip component — company color variants** (shape shared across all: `1px` solid border, `8px` radius/medium, `16px`/`8px` padding, Inter Medium 14px label):

| Company | Background | Border + Text |
|---|---|---|
| **LH** (Lendhub) | `#EADEFF` | `#7E3CFA` (purple) |
| **Aplo** | `#A7E8E2` | `#339A99` (teal — matches the EDU SA brand on the Education case study) |
| **Freelance** | `#F8E3C9` | `#E5850F` (orange) |

```tsx
type ChipsProps = { company?: "Aplo" | "LH" | "Freelance"; label: string };

const chipStyles = {
  LH:        { bg: "#eadeff", border: "#7e3cfa", text: "#7e3cfa" },
  Aplo:      { bg: "#a7e8e2", border: "#339a99", text: "#339a99" },
  Freelance: { bg: "#f8e3c9", border: "#e5850f", text: "#e5850f" },
};

export default function Chip({ company = "LH", label }: ChipsProps) {
  const s = chipStyles[company];
  return (
    <span
      className="inline-flex items-start px-4 py-2 rounded-lg border text-sm font-medium"
      style={{ backgroundColor: s.bg, borderColor: s.border, color: s.text }}
    >
      {label}
    </span>
  );
}
```

### 9.4 Reference implementation (React + Tailwind, from Figma — adapt to your stack)

```tsx
export default function Home() {
  return (
    <div className="bg-[#fafaf7] border-2 border-black flex flex-col items-center w-full">
      {/* Hero */}
      <div className="flex flex-col h-[900px] items-center justify-between px-20 py-[60px] w-full">
        <nav className="flex gap-2 items-center">
          {["Home", "Work", "About", "Play"].map((item) => (
            <a key={item} className="px-10 py-4 rounded text-[#6e6e6a] font-bold text-xl">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-20 items-start w-full">
          <h1 className="font-bold text-[40px] leading-[1.1] text-black">
            Hi, I'm jack, a hands-on UX designer and strategist who ensures
            people are at the core of tech products
          </h1>
          <hr className="w-full border-black" />
          <div className="flex gap-10 items-start w-full">
            <p className="flex-1 text-2xl leading-[1.4] text-black max-w-[941px]">
              UX designer with over 5 years of experience turning ambiguous
              problems into clear solutions that connect to the business
              objectives. Expertise in working in enterprise, agency and
              in-house roles. Currently based out of London.
            </p>
            <div className="flex flex-col gap-5 items-start justify-center">
              <button className="flex gap-3 items-center px-5 py-3 rounded-full bg-[#eaef7a] text-[#0f0f0c] font-semibold text-base">
                <DownloadIcon /> Download CV
              </button>
              <button className="flex gap-3 items-center px-5 py-3 rounded-full bg-[#eaef7a] text-[#0f0f0c] font-semibold text-base">
                <LinkedInIcon /> Contact me on LinkedIn
              </button>
            </div>
          </div>
        </div>

        <ChevronDownIcon className="w-[75px] h-[37.5px]" />
      </div>

      {/* Work list */}
      <section className="flex flex-col items-start py-28 w-full">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`flex gap-10 items-center px-20 py-[60px] w-full ${
              i % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 flex flex-col gap-6 items-start">
              <p className="text-lg leading-7 text-black">{project.role}</p>
              <h3 className="font-bold text-xl leading-7 text-black">{project.title}</h3>
              <span className="bg-[#eadeff] border border-[#7e3cfa] rounded-lg px-4 py-2 text-[#7e3cfa] text-sm font-medium">
                {project.category}
              </span>
              <p className="text-base leading-6 text-black">{project.description}</p>
              <button className="flex gap-3 items-center px-5 py-3 rounded-full bg-[#1c1c1e] text-[#eaef7a] font-semibold text-base">
                View project <ArrowIcon className="w-4 h-3" />
              </button>
            </div>
            <div className="w-[600px] h-[400px] bg-[#d9d9d9] shrink-0" />
          </div>
        ))}
      </section>
    </div>
  );
}
```

---

## 10. Implementation Notes

- Build tokens as CSS custom properties (names above map 1:1 to suggested CSS variable names).
- Respect AAA contrast — chartreuse (`#EAEF7A`) should generally sit behind charcoal/black text or serve as a background/accent, not as a text color on light surfaces.
- Ghost button states rely on alpha-blended chartreuse overlays (30%/60%) rather than solid colors — implement with `rgba()` or hex-with-alpha.
- Two breakpoints only (desktop/mobile) — no separate tablet scale was specified, so plan for a fluid step between the two type scales or a simple breakpoint switch.

---

*This file was generated from the Figma "portfolio" file's design-system documentation pages. Update it if the source file changes — component states (hover/pressed/disabled) and detailed icon/chip visuals should be re-inspected in Figma directly if you need exact spacing/padding on those elements, since this pass covers system-spec metadata only.*

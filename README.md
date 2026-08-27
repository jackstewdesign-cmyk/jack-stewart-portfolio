# Jack — Portfolio

A portfolio site built from the Figma design
["portfolio"](https://www.figma.com/design/DuFsCU6TwIH0LK6A5QaYpx/portfolio?node-id=27-919):
a single-page home (node `27:919`) plus a per-project case-study template
(node `32:142`). React + Vite + Tailwind CSS v4 + React Router.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. `npm run build` outputs a static site to
`dist/` — deployable to Vercel, Netlify, GitHub Pages, or any static host.
Since this is a client-routed SPA (`/work/:id` case-study pages), the host
needs to rewrite unknown paths to `index.html` for direct/refreshed loads to
work — already set up here via `vercel.json` and `public/_redirects`
(Netlify); other hosts will need their own equivalent.

## Structure

- `src/pages/HomePage.tsx` — the single-page home: `Hero`, `WorkSection`,
  `AboutSection`, `PlaySection`.
- `src/pages/CaseStudyPage.tsx` — the `/work/:id` case-study template (Figma
  node 32:142), rendered per project from `project.caseStudy`.
- `src/components/` — `Nav`, `Hero`, `WorkSection`, `AboutSection`,
  `PlaySection`, plus shared `PillButton` and `Chip`.
- `src/data/projects.ts` — the work-section entries, each with a `caseStudy`
  object feeding its case-study page. `lendhub-property-loans` (top of the
  list) is a fully written real case study with real screenshots (Figma node
  46:1320) — use it as the reference for filling in the other four, which
  are still placeholders.
- `src/ScrollToHash.tsx` — scrolls to a section when the URL has a hash
  (e.g. clicking "Work" in the nav from a case-study page), since React
  Router doesn't do this itself.
- `src/index.css` — design tokens (`@theme`) mapped from `design_1.md`:
  colors, and the Space Grotesk / Inter font stack. Also carries a separate
  `--color-case-*` trio for the case-study template, which uses its own
  near-identical but distinct near-black/gray pair in the source Figma node.
- `src/assets/` — icons and images exported from the Figma file.

## Before you launch — placeholders to replace

The design file itself uses placeholder content in several places; this build
keeps it as-is so you can see the exact layout, then swap in the real thing:

- **CV file** — `Download CV` buttons link to `/Jackstewart_resume_Aug26_.pdf`,
  served from `public/Jackstewart_resume_Aug26_.pdf`. To swap in a newer CV,
  replace that file (keep the name, or update the `href` in
  [`Hero.tsx`](src/components/Hero.tsx) / [`AboutSection.tsx`](src/components/AboutSection.tsx)).
- **LinkedIn URL** — currently `https://www.linkedin.com/` in `Hero.tsx`.
- **Work section** — `src/data/projects.ts` has 4 duplicate placeholder
  entries (all "Lendhub UX/UI Manager") below the real `lendhub-property-loans`
  entry, and each still shows a flat gray box instead of a project image
  (set `image` on the project, as `lendhub-property-loans` does, to swap it
  in). Each `View project` button links to `/work/:id`, which renders that
  entry's `caseStudy` field through `CaseStudyPage.tsx` — the 4 placeholders
  share the same sample "MetroFlow Systems" write-up from the Figma file
  (client, timeline, pain points, process steps, metrics, etc.). Write your
  own per project — `*ImageSrc` fields on `caseStudy` (hero/process/outcome)
  and on each `processShowcase` item take a real screenshot import; leave
  them unset to keep the gray placeholder box.
- **About section** — placeholder body copy ("This is placeholder text…")
  and a stock photo in `AboutSection.tsx`.
- **Play section** — the same stock photo repeated + a demo SoundCloud-style
  waveform image in `PlaySection.tsx`.

Everything marked with a `TODO` comment in the components is worth a look
before going live.

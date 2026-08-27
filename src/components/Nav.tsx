import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  // { label: "Play", href: "/#play" }, // hidden for now — see HomePage.tsx
];

/**
 * Site header — sticky to the top of the viewport across every section
 * (not just the hero), with the nav centered on the page. Links always
 * point at the home page (with a hash for Work/About/Play) so they work
 * the same whether you're on the home page or a /work/:id case study —
 * see ScrollToHash for how the actual scrolling happens.
 */
export default function Nav() {
  return (
    <header id="top" className="sticky top-0 z-50 w-full border-b border-black/10 bg-canvas">
      <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-1 py-2 lg:gap-[7px] lg:py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="rounded-sm px-4 py-2 font-display text-base font-bold leading-[28px] text-ink-muted transition-colors hover:bg-black/5 hover:text-ink lg:px-10 lg:py-4 lg:text-[20px]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

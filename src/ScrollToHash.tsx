import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Nav links point at hashes (e.g. "/#work") so they work the same whether
 * you're already on the home page or navigating there from a case-study
 * page. React Router doesn't scroll for us on either a route change or a
 * hash change, so this does it: jump to the target section if the URL has
 * a hash, otherwise reset to the top of the new page.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // A timeout (not requestAnimationFrame) — rAF only runs once the
      // browser schedules a paint, which it can defer indefinitely for a
      // backgrounded/inactive tab. setTimeout still fires, so the scroll
      // isn't silently dropped when a route change happens in that state.
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

/**
 * Site footer — Figma node 62:14207 ("foter"): a centered "Drop me a line,
 * anytime" heading beside an email link. Desktop lays the two side by side
 * with a 67px gap; below `lg` they stack.
 */
export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-8 px-5 py-16 text-ink lg:flex-row lg:gap-[67px] lg:py-28">
      <p className="font-display text-[32px] font-bold leading-[48px] lg:text-[40px]">
        Drop me a line, anytime
      </p>
      <div className="flex items-center gap-5">
        <span className="font-display text-2xl font-bold leading-8" aria-hidden="true">
          📧
        </span>
        <a href="mailto:jackstewdesign@gmail.com" className="font-body text-base leading-6 underline">
          jackstewdesign@gmail.com
        </a>
      </div>
    </footer>
  );
}

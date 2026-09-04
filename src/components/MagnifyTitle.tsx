import { Fragment, useCallback, useEffect, useRef } from "react";

/**
 * Title that "lenses" under the cursor: characters near the pointer scale up,
 * peaking at 68px (per Figma node 114:791) and easing back to the base size
 * with distance. Pointer-fine devices only, and it bows out for
 * `prefers-reduced-motion`.
 */

const PEAK_PX = 60; // largest a glyph gets, directly under the cursor
const RADIUS = 120; // px falloff radius around the cursor

type Props = {
  text: string;
  className?: string;
};

export default function MagnifyTitle({ text, className }: Props) {
  const rootRef = useRef<HTMLHeadingElement | null>(null);
  const probeRef = useRef<HTMLSpanElement | null>(null);
  const charEls = useRef<(HTMLSpanElement | null)[]>([]);
  const centers = useRef<{ x: number; y: number }[]>([]);
  const peakScale = useRef(PEAK_PX / 40);
  const raf = useRef(0);
  const enabled = useRef(false);

  const measure = useCallback(() => {
    const base = rootRef.current
      ? parseFloat(getComputedStyle(rootRef.current).fontSize) || 40
      : 40;
    peakScale.current = PEAK_PX / base;

    // Pin the scale transform to each glyph's text baseline (measured off a
    // zero-size inline-block probe whose bottom edge sits on the baseline) so
    // magnified letters grow about the baseline instead of drifting below it.
    const probe = probeRef.current;
    const firstChar = charEls.current.find(Boolean) ?? null;
    if (probe && firstChar) {
      const charRect = firstChar.getBoundingClientRect();
      const baselineFromTop = probe.getBoundingClientRect().bottom - charRect.top;
      if (charRect.height > 0 && baselineFromTop > 0 && baselineFromTop < charRect.height * 2) {
        const origin = `50% ${baselineFromTop.toFixed(2)}px`;
        const els = charEls.current;
        for (let i = 0; i < els.length; i++) {
          const el = els[i];
          if (el) el.style.transformOrigin = origin;
        }
      }
    }

    centers.current = charEls.current.map((el) => {
      if (!el) return { x: -1e9, y: -1e9 };
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      enabled.current = fine.matches && !reduce.matches;
    };
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    measure();
    const ro = new ResizeObserver(measure);
    if (rootRef.current) ro.observe(rootRef.current);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);

    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf.current);
    };
  }, [measure]);

  const paint = useCallback((cx: number, cy: number) => {
    const els = charEls.current;
    const cs = centers.current;
    const peak = peakScale.current;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const c = cs[i];
      if (!el || !c) continue;
      const d = Math.hypot(c.x - cx, c.y - cy);
      let scale = 1;
      if (d < RADIUS) {
        const t = 1 - d / RADIUS;
        const eased = t * t * (3 - 2 * t); // smoothstep
        scale = 1 + eased * (peak - 1);
      }
      el.style.transform = scale > 1.001 ? `scale(${scale.toFixed(3)})` : "";
    }
  }, []);

  const reset = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const els = charEls.current;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (el) el.style.transform = "";
    }
  }, []);

  const onPointerEnter = useCallback(
    (e: React.PointerEvent) => {
      if (!enabled.current) return;
      measure();
      paint(e.clientX, e.clientY);
    },
    [measure, paint],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!enabled.current) return;
      const { clientX, clientY } = e;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => paint(clientX, clientY));
    },
    [paint],
  );

  let idx = 0;
  const words = text.split(" ");

  return (
    <h1
      ref={rootRef}
      aria-label={text}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={className}
    >
      <span aria-hidden="true">
        <span
          ref={probeRef}
          className="inline-block h-0 w-0 align-baseline"
        />
        {words.map((word, wi) => (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {[...word].map((ch) => {
                const i = idx++;
                return (
                  <span
                    key={i}
                    ref={(el) => {
                      charEls.current[i] = el;
                    }}
                    className="inline-block origin-bottom align-baseline transition-transform duration-200 ease-out"
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
            {wi < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </h1>
  );
}

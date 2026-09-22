import { useEffect, useRef, useState } from "react";

/**
 * Test spike — a dot that spring-follows the pointer, matching the feel of
 * https://motion.dev/examples/react-follow-pointer-with-spring
 *
 * No dependency: a small spring integrator (stiffness/damping tuned to the
 * loose, floaty config from that example) drives a fixed-position dot via a
 * rAF loop. Disabled for touch and reduced-motion.
 */
const SIZE = 40;
const STIFFNESS = 450;
const DAMPING = 38;

export default function PointerFollower() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    const vel = { x: 0, y: 0 };
    let visible = false;
    let raf = 0;
    let last = performance.now();

    function onMove(e: PointerEvent) {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        pos.x = target.x;
        pos.y = target.y;
      }
      if (dotRef.current) dotRef.current.style.opacity = "1";
    }

    function onLeave() {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    }

    function onEnter() {
      if (visible && dotRef.current) dotRef.current.style.opacity = "1";
    }

    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.064);
      last = now;
      for (const axis of ["x", "y"] as const) {
        const a = STIFFNESS * (target[axis] - pos[axis]) - DAMPING * vel[axis];
        vel[axis] += a * dt;
        pos[axis] += vel[axis] * dt;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - SIZE / 2}px, ${
          pos.y - SIZE / 2
        }px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("blur", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full opacity-0 transition-opacity duration-200 ease-out"
      style={{ width: SIZE, height: SIZE, backgroundColor: "#1C1C1E" }}
    />
  );
}

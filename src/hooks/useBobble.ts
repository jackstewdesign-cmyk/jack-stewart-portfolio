import { useCallback, useEffect, useRef } from "react";

/**
 * "Bobble hover" — as the cursor sweeps across an element it springs to life,
 * with the bounce driven by pointer velocity (faster sweep => bigger wobble).
 * Ported in spirit from https://motion.dev/examples/react-bobble-hover, but
 * hand-rolled with a small semi-implicit-Euler spring so we don't pull in a
 * motion library for one effect.
 */

type Vec = { x: number; y: number };

// --- shared pointer-velocity tracker (one window listener for the whole page) ---
let pointerVelocity: Vec = { x: 0, y: 0 };
let lastSample: { x: number; y: number; t: number } | null = null;
let listening = false;

function handlePointerMove(e: PointerEvent) {
  const now = performance.now();
  if (lastSample) {
    const dt = (now - lastSample.t) / 1000;
    if (dt > 0) {
      // light smoothing so a single jittery sample doesn't dominate
      const vx = (e.clientX - lastSample.x) / dt;
      const vy = (e.clientY - lastSample.y) / dt;
      pointerVelocity = {
        x: pointerVelocity.x * 0.4 + vx * 0.6,
        y: pointerVelocity.y * 0.4 + vy * 0.6,
      };
    }
  }
  lastSample = { x: e.clientX, y: e.clientY, t: now };
}

function ensureListening() {
  if (listening || typeof window === "undefined") return;
  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  listening = true;
}

function currentPointerVelocity(): Vec {
  // stale sample => pointer has stopped, treat as at rest
  if (!lastSample || performance.now() - lastSample.t > 90) return { x: 0, y: 0 };
  return pointerVelocity;
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const REST = { x: 0, y: 0, rotate: 0, scale: 1 } as const;

// spring feel — a touch of overshoot, settles quickly
const STIFFNESS = 320;
const DAMPING = 14;

export function useBobble<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const anim = useRef({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    vx: 0,
    vy: 0,
    vRotate: 0,
    vScale: 0,
    raf: 0,
    last: 0,
    running: false,
  });

  useEffect(() => {
    ensureListening();
    const state = anim.current;
    return () => cancelAnimationFrame(state.raf);
  }, []);

  const frame = useCallback(function frame(now: number) {
    const s = anim.current;
    const el = ref.current;
    const dt = clamp((now - s.last) / 1000, 0.001, 1 / 30);
    s.last = now;

    const step = (value: number, velocity: number, target: number) => {
      const accel = -STIFFNESS * (value - target) - DAMPING * velocity;
      const nextV = velocity + accel * dt;
      return [value + nextV * dt, nextV] as const;
    };

    [s.x, s.vx] = step(s.x, s.vx, REST.x);
    [s.y, s.vy] = step(s.y, s.vy, REST.y);
    [s.rotate, s.vRotate] = step(s.rotate, s.vRotate, REST.rotate);
    [s.scale, s.vScale] = step(s.scale, s.vScale, REST.scale);

    const atRest =
      Math.abs(s.x) < 0.05 &&
      Math.abs(s.vx) < 0.05 &&
      Math.abs(s.y) < 0.05 &&
      Math.abs(s.vy) < 0.05 &&
      Math.abs(s.rotate) < 0.05 &&
      Math.abs(s.vRotate) < 0.05 &&
      Math.abs(s.scale - 1) < 0.002 &&
      Math.abs(s.vScale) < 0.02;

    if (atRest) {
      s.x = 0;
      s.y = 0;
      s.rotate = 0;
      s.scale = 1;
      s.vx = s.vy = s.vRotate = s.vScale = 0;
      s.running = false;
      if (el) {
        el.style.transform = "";
        el.style.willChange = "";
      }
      return;
    }

    if (el) {
      el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0) rotate(${s.rotate.toFixed(2)}deg) scale(${s.scale.toFixed(3)})`;
    }
    s.raf = requestAnimationFrame(frame);
  }, []);

  const bobble = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const s = anim.current;
    const pv = currentPointerVelocity();

    // inject a slice of the pointer's speed as spring velocity; a resting
    // pointer entering the tile still gets a small guaranteed pop
    s.vx += clamp(pv.x * 0.18, -1300, 1300);
    s.vy += clamp(pv.y * 0.18, -1300, 1300);
    s.vRotate += clamp(pv.x * 0.06, -280, 280);
    s.vScale += 2.6 + clamp(Math.hypot(pv.x, pv.y) * 0.0006, 0, 2.4);

    if (!s.running) {
      s.running = true;
      s.last = performance.now();
      const el = ref.current;
      if (el) el.style.willChange = "transform";
      s.raf = requestAnimationFrame(frame);
    }
  }, [frame]);

  return { ref, onPointerEnter: bobble };
}

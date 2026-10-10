"use client";

import { RefObject, useEffect, useState } from "react";
import { CycleState, RESET_START, RESOLVED_STATE, stateAt } from "./cycle";

/**
 * One requestAnimationFrame clock for the whole section.
 *
 * - Server render and first client render use the static improved state,
 *   so markup matches and there is no hydration mismatch.
 * - The clock starts at the reset segment, so that improved state fades
 *   out and the first full cycle begins naturally.
 * - It pauses while the section is off screen and stops entirely for
 *   prefers-reduced-motion (falling back to the static improved state).
 * - Elapsed time is accumulated from frame deltas (capped), so returning
 *   to a background tab never makes the animation jump.
 */
export function useProcessCycle(target: RefObject<HTMLElement>): CycleState {
  const [state, setState] = useState<CycleState>(RESOLVED_STATE);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let running = false;
    let visible = true;
    let last: number | null = null;
    let elapsed = RESET_START;

    const tick = (now: number) => {
      if (last !== null) elapsed += Math.min(now - last, 100);
      last = now;
      setState(stateAt(elapsed));
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || motion.matches || !visible) return;
      running = true;
      last = null;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      last = null;
      cancelAnimationFrame(frame);
    };

    const onMotionChange = () => {
      if (motion.matches) {
        stop();
        setState(RESOLVED_STATE);
      } else {
        start();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    if (target.current) observer.observe(target.current);

    motion.addEventListener("change", onMotionChange);
    start();

    return () => {
      stop();
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, [target]);

  return state;
}

/**
 * Shared timing for the four Delivery Partner illustrations.
 *
 * One clock drives everything: the From/To bar and all four SVGs read
 * the same state object, so they can never drift out of sync.
 *
 * Cycle (the bar fills ONCE, left to right, from the start of fromFill to
 * the end of toFill: one starting point, one end state):
 *   fromFill  illustration draws into its problem state, FROM highlighted
 *   fromHold  problem state holds
 *   toGrey    label emphasis moves FROM -> TO
 *   toFill    illustration transforms into its improved state
 *   toHold    improved state holds, bar full
 *   reset     bar fades to grey, label returns to FROM, illustration fades out
 */

// ---- Tunable timing (ms) ---------------------------------------------
export const TIMING = {
  fromFill: 3200,
  fromHold: 1100,
  toGrey: 700,
  toFill: 3400,
  toHold: 2000,
  reset: 800,
};

const ORDER = ["fromFill", "fromHold", "toGrey", "toFill", "toHold", "reset"] as const;
type Segment = (typeof ORDER)[number];

export const CYCLE = ORDER.reduce((sum, k) => sum + TIMING[k], 0);

// Elapsed time at which the reset segment begins. The client clock starts
// here so the server-rendered (improved) state fades out smoothly.
export const RESET_START = CYCLE - TIMING.reset;

export type CycleState = {
  /** Bar fill width, 0..1 */
  fill: number;
  /** Bar fill opacity, fades to 0 to return the bar to grey */
  fillOpacity: number;
  /** Label emphasis: 0 = FROM highlighted, 1 = TO highlighted */
  labelMix: number;
  /** Problem-state build-up, 0..1 (FROM phase) */
  draw: number;
  /** Transformation into the improved state, 0..1 (TO phase) */
  morph: number;
  /** Overall illustration opacity (fades out during reset) */
  opacity: number;
  /** Elapsed ms, for gentle ambient motion */
  time: number;
  /** False for the static (server / reduced-motion) state */
  animated: boolean;
};

/** Static improved state: used for SSR and prefers-reduced-motion. */
export const RESOLVED_STATE: CycleState = {
  fill: 1,
  fillOpacity: 1,
  labelMix: 1,
  draw: 1,
  morph: 1,
  opacity: 1,
  time: 0,
  animated: false,
};

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** Smooth, calm easing (no overshoot). */
export const ease = (t: number) => -(Math.cos(Math.PI * clamp(t)) - 1) / 2;

/** Maps t from [start, end] to 0..1. */
export const range = (t: number, start: number, end: number) =>
  clamp((t - start) / (end - start));

// The bar travels once across these four segments
const BAR_SPAN = TIMING.fromFill + TIMING.fromHold + TIMING.toGrey + TIMING.toFill;

export function stateAt(elapsed: number): CycleState {
  const position = ((elapsed % CYCLE) + CYCLE) % CYCLE;
  let t = position;
  let segment: Segment = "fromFill";
  for (const key of ORDER) {
    if (t < TIMING[key]) {
      segment = key;
      break;
    }
    t -= TIMING[key];
  }
  const p = clamp(t / TIMING[segment]);
  const e = ease(p);
  // Steady, linear sweep: one journey from the starting point to the end state
  const fill = position < BAR_SPAN ? position / BAR_SPAN : 1;
  const base = { time: elapsed, animated: true, opacity: 1, fill, fillOpacity: 1 };

  switch (segment) {
    case "fromFill":
      return { ...base, labelMix: 0, draw: e, morph: 0 };
    case "fromHold":
      return { ...base, labelMix: 0, draw: 1, morph: 0 };
    case "toGrey":
      return { ...base, labelMix: e, draw: 1, morph: 0 };
    case "toFill":
      return { ...base, labelMix: 1, draw: 1, morph: e };
    case "toHold":
      return { ...base, labelMix: 1, draw: 1, morph: 1 };
    case "reset":
    default:
      return { ...base, fillOpacity: 1 - e, labelMix: 1 - e, draw: 1, morph: 1, opacity: 1 - e };
  }
}

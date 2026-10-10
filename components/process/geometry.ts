export type Pt = [number, number];

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const lerpPt = (p: Pt, q: Pt, t: number): Pt => [lerp(p[0], q[0], t), lerp(p[1], q[1], t)];

export function cumulative(pts: Pt[]): number[] {
  const out = [0];
  for (let i = 1; i < pts.length; i++) {
    out.push(out[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  return out;
}

/** The first fraction f (0..1) of a polyline, measured by length. */
export function partialByLength(pts: Pt[], f: number): Pt[] {
  if (f <= 0) return [pts[0]];
  if (f >= 1) return pts;
  const cum = cumulative(pts);
  const target = cum[cum.length - 1] * f;
  const out: Pt[] = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    if (cum[i] < target) {
      out.push(pts[i]);
    } else {
      const seg = cum[i] - cum[i - 1];
      out.push(lerpPt(pts[i - 1], pts[i], seg ? (target - cum[i - 1]) / seg : 0));
      break;
    }
  }
  return out;
}

/** The first fraction f of a sampled curve, measured by sample index. */
export function partialByParam(pts: Pt[], f: number): Pt[] {
  if (f <= 0) return [pts[0]];
  if (f >= 1) return pts;
  const n = (pts.length - 1) * f;
  const i = Math.floor(n);
  return [...pts.slice(0, i + 1), lerpPt(pts[i], pts[i + 1], n - i)];
}

/** Position of fraction f along a polyline, by length. */
export function pointAt(pts: Pt[], f: number): Pt {
  const part = partialByLength(pts, f);
  return part[part.length - 1];
}

/** Length fraction at which a polyline reaches vertex `index`. */
export function fractionAtVertex(pts: Pt[], index: number): number {
  const cum = cumulative(pts);
  return cum[index] / cum[cum.length - 1];
}

export const toPath = (pts: Pt[]) =>
  pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(" ");

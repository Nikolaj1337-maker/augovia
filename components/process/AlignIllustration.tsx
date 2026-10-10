import { CycleState, ease, range } from "./cycle";
import { lerpPt, partialByParam, Pt, toPath } from "./geometry";
import { COLORS, SMALL_R, STROKE } from "./palette";

/**
 * ALIGN: from competing priorities to a common direction.
 * FROM: lines enter from different heights, loop and cross, converge at one
 *       crowded point, then scatter again to the right.
 * TO:   the same lines, keeping their colours, run as evenly spaced parallels.
 */

const SAMPLES = 64;
const CENTER: Pt = [120, 70];

const LINES = [
  { color: COLORS.stone, y0: 16, y1: 30, ry: 46, A: 14, B: 18, f: 1, phi: 0.4 },
  { color: COLORS.mist, y0: 124, y1: 112, ry: 62, A: 16, B: 15, f: 1.25, phi: 4.0 },
  { color: COLORS.foliage, y0: 58, y1: 98, ry: 78, A: 10, B: 8, f: 1.5, phi: 2.1 },
  { color: COLORS.shadow, y0: 92, y1: 48, ry: 94, A: 12, B: 7, f: 1, phi: 5.3 },
];

function problemPoint(line: (typeof LINES)[number], t: number): Pt {
  const base =
    t < 0.5
      ? lerpPt([12, line.y0], CENTER, t / 0.5)
      : lerpPt(CENTER, [228, line.y1], (t - 0.5) / 0.5);
  // Envelope is zero at both ends and at the centre, so every line still
  // passes through the shared crossing point.
  const env = Math.abs(Math.sin(2 * Math.PI * t));
  const angle = 2 * Math.PI * 2 * line.f * t + line.phi;
  return [base[0] + line.B * Math.cos(angle) * env, base[1] + line.A * Math.sin(angle) * env];
}

const PROBLEM = LINES.map((line) =>
  Array.from({ length: SAMPLES }, (_, k) => problemPoint(line, k / (SAMPLES - 1)))
);
const RESOLVED = LINES.map((line) =>
  Array.from({ length: SAMPLES }, (_, k): Pt => [12 + 216 * (k / (SAMPLES - 1)), line.ry])
);

export default function AlignIllustration({ state }: { state: CycleState }) {
  return (
    <>
      {LINES.map((line, i) => {
        // Slight stagger: perspectives fall into line one after another
        const m = ease(range(state.morph, i * 0.06, 0.82 + i * 0.06));
        const pts = PROBLEM[i].map((p, k) => lerpPt(p, RESOLVED[i][k], m));
        const visible = partialByParam(pts, state.draw);
        const tip = visible[visible.length - 1];
        return (
          <g key={line.color}>
            <path
              d={toPath(visible)}
              stroke={line.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {state.draw > 0.01 && (
              <circle cx={tip[0]} cy={tip[1]} r={SMALL_R} fill={line.color} />
            )}
          </g>
        );
      })}
    </>
  );
}

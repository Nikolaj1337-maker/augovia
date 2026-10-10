import { CycleState, ease, range } from "./cycle";
import { lerpPt, Pt } from "./geometry";
import { COLORS, NODE_R, SMALL_R, STROKE } from "./palette";

/**
 * DESIGN: from disconnected ideas to a coherent strategic structure.
 * FROM: dots, squares and a diamond drift independently; a few weak,
 *       dashed links join unrelated elements.
 * TO:   the same elements settle into three clusters around a central
 *       logic (the diamond). Meaningful links strengthen, weak ones fade.
 */

type Shape = "diamond" | "circle" | "square";
type El = { shape: Shape; color: string; r: number; from: Pt; to: Pt; parent?: number };

const H0 = COLORS.stone;
const H1 = COLORS.mist;
const H2 = COLORS.shadow;

const ELEMENTS: El[] = [
  // 0: central strategic logic
  { shape: "diamond", color: COLORS.foliage, r: 5, from: [150, 96], to: [120, 72] },
  // 1-3: cluster hubs
  { shape: "circle", color: H0, r: NODE_R + 0.6, from: [40, 100], to: [66, 50], parent: 0 },
  { shape: "circle", color: H1, r: NODE_R + 0.6, from: [110, 26], to: [174, 50], parent: 0 },
  { shape: "circle", color: H2, r: NODE_R + 0.6, from: [200, 74], to: [120, 108], parent: 0 },
  // 4-12: ideas, three per cluster
  { shape: "circle", color: H0, r: SMALL_R, from: [20, 40], to: [40, 32], parent: 1 },
  { shape: "square", color: H0, r: SMALL_R, from: [78, 62], to: [38, 64], parent: 1 },
  { shape: "circle", color: H0, r: SMALL_R, from: [60, 128], to: [66, 20], parent: 1 },
  { shape: "square", color: H1, r: SMALL_R, from: [214, 22], to: [200, 32], parent: 2 },
  { shape: "circle", color: H1, r: SMALL_R, from: [132, 58], to: [202, 64], parent: 2 },
  { shape: "square", color: H1, r: SMALL_R, from: [186, 40], to: [174, 20], parent: 2 },
  { shape: "circle", color: H2, r: SMALL_R, from: [170, 122], to: [92, 120], parent: 3 },
  { shape: "square", color: H2, r: SMALL_R, from: [92, 104], to: [148, 120], parent: 3 },
  { shape: "circle", color: H2, r: SMALL_R, from: [28, 76], to: [120, 132], parent: 3 },
];

// Weak links between unrelated ideas (the noise that fades away)
const WEAK: [number, number][] = [
  [4, 10],
  [2, 8],
  [5, 0],
  [7, 11],
  [1, 12],
];

function Glyph({ el, at, opacity }: { el: El; at: Pt; opacity: number }) {
  const [x, y] = at;
  if (el.shape === "diamond") {
    return (
      <rect
        x={x - el.r}
        y={y - el.r}
        width={el.r * 2}
        height={el.r * 2}
        fill={el.color}
        opacity={opacity}
        transform={`rotate(45 ${x} ${y})`}
      />
    );
  }
  if (el.shape === "square") {
    return (
      <rect
        x={x - el.r}
        y={y - el.r}
        width={el.r * 2}
        height={el.r * 2}
        fill={el.color}
        opacity={opacity}
      />
    );
  }
  return <circle cx={x} cy={y} r={el.r} fill={el.color} opacity={opacity} />;
}

export default function DesignIllustration({ state }: { state: CycleState }) {
  const settle = ease(range(state.morph, 0, 0.7));
  const drift = state.animated ? 1 - settle : 0;

  const positions = ELEMENTS.map((el, i): Pt => {
    const p = lerpPt(el.from, el.to, settle);
    return [
      p[0] + 3 * Math.sin(state.time / 1300 + i) * drift,
      p[1] + 3 * Math.cos(state.time / 1700 + i * 1.7) * drift,
    ];
  });
  const appear = ELEMENTS.map((_, i) => ease(range(state.draw, i * 0.045, i * 0.045 + 0.4)));

  const weakFade = 1 - ease(range(state.morph, 0, 0.4));
  const hubLinks = ease(range(state.morph, 0.35, 0.75));
  const leafLinks = ease(range(state.morph, 0.5, 0.95));

  return (
    <>
      {/* Weak, irrelevant connections */}
      {WEAK.map(([a, b]) => (
        <line
          key={`w-${a}-${b}`}
          x1={positions[a][0]}
          y1={positions[a][1]}
          x2={positions[b][0]}
          y2={positions[b][1]}
          stroke={COLORS.ink}
          strokeWidth={1}
          strokeDasharray="2 3"
          opacity={0.3 * Math.min(appear[a], appear[b]) * weakFade}
        />
      ))}

      {/* Meaningful connections grow from each element toward its parent */}
      {ELEMENTS.map((el, i) => {
        if (el.parent === undefined) return null;
        const e = el.parent === 0 ? hubLinks : leafLinks;
        if (e <= 0) return null;
        const end = lerpPt(positions[i], positions[el.parent], e);
        return (
          <line
            key={`s-${i}`}
            x1={positions[i][0]}
            y1={positions[i][1]}
            x2={end[0]}
            y2={end[1]}
            stroke={el.color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            opacity={0.85 * e}
          />
        );
      })}

      {ELEMENTS.map((el, i) => (
        <Glyph key={`e-${i}`} el={el} at={positions[i]} opacity={appear[i]} />
      ))}
    </>
  );
}

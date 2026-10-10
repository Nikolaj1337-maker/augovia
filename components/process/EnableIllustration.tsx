import { CycleState, ease, range } from "./cycle";
import { lerp, lerpPt, pointAt, Pt } from "./geometry";
import { COLORS, NODE_R, STROKE } from "./palette";

/**
 * ENABLE: from isolated teams to equipped, coordinated teams.
 * FROM: three groups of hollow nodes pulse on their own rhythm, slightly
 *       out of place; links between them are faint and stop short.
 * TO:   links complete and strengthen, the groups activate one after
 *       another from the strategy point (diamond), and pulse together.
 *       A small signal then travels the path from strategy to execution.
 */

const ORIGIN: Pt = [18, 70];
const COLS = [78, 138, 198];
const ROWS = [36, 70, 104];
const GROUP_COLORS = [COLORS.stone, COLORS.mist, COLORS.shadow];

const JITTER: Pt[] = [
  [-6, 4], [5, -7], [-3, 8],
  [7, 5], [-8, -4], [4, 9],
  [-5, -6], [6, 3], [-4, -8],
];

type Edge = { from: number | "origin"; to: number; stage: number; partial: number };
const node = (col: number, row: number) => col * 3 + row;

const EDGES: Edge[] = [
  { from: "origin", to: node(0, 0), stage: 0, partial: 0.35 },
  { from: "origin", to: node(0, 1), stage: 0, partial: 0.55 },
  { from: "origin", to: node(0, 2), stage: 0, partial: 0.25 },
  { from: node(0, 0), to: node(1, 0), stage: 1, partial: 0.4 },
  { from: node(0, 1), to: node(1, 1), stage: 1, partial: 0.2 },
  { from: node(0, 2), to: node(1, 2), stage: 1, partial: 0.5 },
  { from: node(0, 0), to: node(1, 1), stage: 1, partial: 0.3 },
  { from: node(1, 0), to: node(2, 0), stage: 2, partial: 0.25 },
  { from: node(1, 1), to: node(2, 1), stage: 2, partial: 0.45 },
  { from: node(1, 2), to: node(2, 2), stage: 2, partial: 0.3 },
  { from: node(1, 2), to: node(2, 1), stage: 2, partial: 0.2 },
];

export default function EnableIllustration({ state }: { state: CycleState }) {
  const activation = [0, 1, 2].map((c) => ease(range(state.morph, c * 0.22, c * 0.22 + 0.4)));

  const nodes = Array.from({ length: 9 }, (_, k) => {
    const col = Math.floor(k / 3);
    const row = k % 3;
    const a = activation[col];
    const pos: Pt = [
      COLS[col] + JITTER[k][0] * (1 - a),
      ROWS[row] + JITTER[k][1] * (1 - a),
    ];
    // Independent rhythms cross-fade into one shared rhythm
    const own = Math.sin(state.time / (520 + k * 70) + k * 1.7);
    const shared = Math.sin(state.time / 560);
    const pulse = state.animated ? (1 - a) * own * 0.9 + a * shared * 0.45 : 0;
    const appear = ease(range(state.draw, 0.05 + k * 0.04, 0.45 + k * 0.04));
    return { pos, col, a, r: NODE_R + pulse, appear };
  });

  const at = (ref: number | "origin"): Pt => (ref === "origin" ? ORIGIN : nodes[ref].pos);

  // Signal travelling from strategy to execution once everything is connected
  const signalOpacity = state.animated ? range(state.morph, 0.75, 1) : 0;
  const signalPath: Pt[] = [ORIGIN, nodes[node(0, 1)].pos, nodes[node(1, 1)].pos, nodes[node(2, 1)].pos];
  const trip = (state.time % 2400) / 2400;
  const signal = pointAt(signalPath, trip);
  // Fade in at the origin and out at the end, so the loop never snaps back
  const signalFade = Math.sin(Math.PI * trip);

  return (
    <>
      {EDGES.map((edge, i) => {
        const a = activation[edge.stage];
        const length = lerp(edge.partial, 1, a) * ease(range(state.draw, 0.1, 0.9));
        if (length <= 0) return null;
        const start = at(edge.from);
        const end = lerpPt(start, at(edge.to), length);
        return (
          <line
            key={i}
            x1={start[0]}
            y1={start[1]}
            x2={end[0]}
            y2={end[1]}
            stroke={GROUP_COLORS[edge.stage]}
            strokeWidth={STROKE}
            strokeLinecap="round"
            opacity={lerp(0.28, 0.85, a)}
          />
        );
      })}

      {/* Strategy origin */}
      <rect
        x={ORIGIN[0] - 5}
        y={ORIGIN[1] - 5}
        width={10}
        height={10}
        fill={COLORS.foliage}
        transform={`rotate(45 ${ORIGIN[0]} ${ORIGIN[1]})`}
        opacity={ease(range(state.draw, 0, 0.2))}
      />

      {nodes.map((n, k) => (
        <g key={k} opacity={n.appear}>
          <circle
            cx={n.pos[0]}
            cy={n.pos[1]}
            r={n.r}
            fill={COLORS.ivory}
            stroke={GROUP_COLORS[n.col]}
            strokeWidth={STROKE}
          />
          <circle
            cx={n.pos[0]}
            cy={n.pos[1]}
            r={n.r}
            fill={GROUP_COLORS[n.col]}
            opacity={n.a}
          />
        </g>
      ))}

      {signalOpacity > 0 && (
        <circle cx={signal[0]} cy={signal[1]} r={2.2} fill={COLORS.foliage} opacity={signalOpacity * signalFade} />
      )}
    </>
  );
}

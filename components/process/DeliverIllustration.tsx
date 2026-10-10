import { CycleState, clamp, ease, range } from "./cycle";
import { fractionAtVertex, partialByLength, Pt, toPath } from "./geometry";
import { COLORS, NODE_R, STROKE } from "./palette";

/**
 * DELIVER: from stalled initiatives to visible, tangible progress.
 * FROM: three workstreams set off together but stall at different points
 *       (marked with a short stop bar); milestones stay hollow.
 * TO:   the same paths resume, pass their milestones in sequence (each
 *       fills as it is reached) and converge on one clear endpoint.
 */

const START_X = 14;
const MILESTONE_X = [72, 124, 176];
const END: Pt = [224, 70];

const PATHS = [
  { color: COLORS.stone, y: 38, stop: 0.32 },
  { color: COLORS.mist, y: 70, stop: 0.58 },
  { color: COLORS.shadow, y: 102, stop: 0.18 },
].map((p) => {
  const pts: Pt[] = [[START_X, p.y], ...MILESTONE_X.map((x): Pt => [x, p.y]), END];
  return {
    ...p,
    pts,
    milestones: MILESTONE_X.map((_, i) => fractionAtVertex(pts, i + 1)),
  };
});

export default function DeliverIllustration({ state }: { state: CycleState }) {
  const progress = PATHS.map((p, i) => {
    // FROM: all set off at the same speed and stall at their own stop point
    const started = Math.min(p.stop, state.draw * 0.62);
    // TO: resume from the stop point, slightly staggered, to the endpoint
    const resume = ease(range(state.morph, i * 0.08, 0.84 + i * 0.08));
    return started + (1 - p.stop) * resume;
  });

  const stallMarkers = 1 - ease(range(state.morph, 0, 0.25));
  const reached = clamp((Math.min(...progress) - 0.97) / 0.03);
  const milestonesVisible = ease(range(state.draw, 0, 0.35));
  const countsAsDone = ease(range(state.morph, 0, 0.15));

  return (
    <>
      {PATHS.map((p, i) => {
        const visible = partialByLength(p.pts, progress[i]);
        const tip = visible[visible.length - 1];
        const stalled = state.draw * 0.62 >= p.stop;
        return (
          <g key={p.color}>
            {/* Faint guide of the route still ahead */}
            <path
              d={toPath(p.pts)}
              stroke={p.color}
              strokeWidth={1}
              opacity={0.15 * milestonesVisible}
              strokeDasharray="1.5 3"
            />
            <path
              d={toPath(visible)}
              stroke={p.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Stop bar where the work stalled */}
            <line
              x1={tip[0] + 3}
              y1={tip[1] - 5}
              x2={tip[0] + 3}
              y2={tip[1] + 5}
              stroke={p.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
              opacity={stalled ? stallMarkers : 0}
            />
            {p.milestones.map((m, k) => {
              // Milestones only count once work resumes: hollow in FROM,
              // filled in sequence as each path reaches them in TO.
              const fill = clamp((progress[i] - m) / 0.04) * countsAsDone;
              return (
                <g key={k} opacity={milestonesVisible}>
                  <circle
                    cx={MILESTONE_X[k]}
                    cy={p.y}
                    r={NODE_R}
                    fill={COLORS.ivory}
                    stroke={p.color}
                    strokeWidth={STROKE}
                  />
                  <circle cx={MILESTONE_X[k]} cy={p.y} r={NODE_R} fill={p.color} opacity={fill} />
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Endpoint */}
      <g opacity={milestonesVisible}>
        <circle
          cx={END[0]}
          cy={END[1]}
          r={6}
          fill={COLORS.ivory}
          stroke={COLORS.foliage}
          strokeWidth={STROKE}
        />
        <circle cx={END[0]} cy={END[1]} r={6} fill={COLORS.foliage} opacity={reached} />
      </g>
    </>
  );
}

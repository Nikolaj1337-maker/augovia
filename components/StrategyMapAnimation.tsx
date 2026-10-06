"use client";

/**
 * StrategyMapAnimation
 *
 * An abstract, editorial motion graphic for the hero section: a loose
 * network of nodes and connections that quietly resolves into a single
 * clear path, then drifts back to its scattered state and repeats.
 *
 * Pure SVG + CSS keyframes, no animation library. Respects
 * prefers-reduced-motion by freezing on the resolved composition.
 *
 * Easy-to-adjust parameters are grouped below.
 */

// ---- Tunable parameters -----------------------------------------------
const DURATION = "11s"; // full loop duration
const NODE_RADIUS = 4.5;
const FINAL_NODE_RADIUS = 6;
const LINE_WIDTH = 1;
const RESOLVED_LINE_WIDTH = 1.25;
const ACCENT = "#763626"; // Autumn Foliage, used once, on the final node only
const INK = "#101522";
const STONE = "#336B87";
const COMPLEXITY_OPACITY = 0.3;
const RESOLVED_OPACITY = 0.9;

// Node positions (viewBox 0 0 440 360)
const nodes = {
  n1: { x: 36, y: 262 },
  n2: { x: 92, y: 118 },
  n3: { x: 150, y: 304 },
  n4: { x: 168, y: 74 },
  n5: { x: 236, y: 198 },
  n6: { x: 276, y: 54 },
  n7: { x: 298, y: 300 },
  n8: { x: 358, y: 150 },
  n9: { x: 404, y: 186 }, // final destination node
};

// Loosely scattered connections: the "many possible paths" state
const complexityLines: [keyof typeof nodes, keyof typeof nodes][] = [
  ["n1", "n2"],
  ["n2", "n4"],
  ["n1", "n3"],
  ["n3", "n5"],
  ["n2", "n5"],
  ["n4", "n6"],
  ["n5", "n7"],
  ["n6", "n8"],
  ["n7", "n8"],
  ["n5", "n8"],
  ["n4", "n5"],
];

// The single clear path the system resolves into
const resolvedPath: (keyof typeof nodes)[] = ["n1", "n5", "n8", "n9"];

const nodeKeys = Object.keys(nodes) as (keyof typeof nodes)[];
const driftVariants = ["a", "b", "c"];

export default function StrategyMapAnimation() {
  return (
    <div className="hidden md:block" aria-hidden="true">
      <svg
        viewBox="0 0 440 360"
        className="h-auto w-full max-w-lg"
        fill="none"
      >
        {/* Scattered, loosely connected state */}
        <g className="augovia-sm-complexity" stroke={STONE}>
          {complexityLines.map(([a, b], i) => (
            <line
              key={`c-${i}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              strokeWidth={LINE_WIDTH}
            />
          ))}
        </g>

        {/* Resolved, convergent path */}
        <g className="augovia-sm-resolved" stroke={INK}>
          {resolvedPath.slice(0, -1).map((key, i) => {
            const a = nodes[key];
            const b = nodes[resolvedPath[i + 1]];
            return (
              <line
                key={`r-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                strokeWidth={RESOLVED_LINE_WIDTH}
              />
            );
          })}
        </g>

        {/* Nodes */}
        {nodeKeys.map((key, i) => {
          const isFinal = key === "n9";
          const variant = driftVariants[i % driftVariants.length];
          return (
            <circle
              key={key}
              cx={nodes[key].x}
              cy={nodes[key].y}
              r={isFinal ? FINAL_NODE_RADIUS : NODE_RADIUS}
              fill={isFinal ? ACCENT : INK}
              fillOpacity={isFinal ? 1 : 0.75}
              className={
                isFinal
                  ? "augovia-sm-node augovia-sm-final"
                  : `augovia-sm-node augovia-sm-drift-${variant}`
              }
              style={{
                transformOrigin: `${nodes[key].x}px ${nodes[key].y}px`,
                animationDelay: `${(i % 5) * 0.6}s`,
              }}
            />
          );
        })}
      </svg>

      <style>{`
        .augovia-sm-complexity {
          animation: augovia-sm-complexity-fade ${DURATION} ease-in-out infinite;
        }
        .augovia-sm-complexity line {
          opacity: ${COMPLEXITY_OPACITY};
        }
        .augovia-sm-resolved {
          animation: augovia-sm-resolved-fade ${DURATION} ease-in-out infinite;
        }
        .augovia-sm-resolved line {
          opacity: 0;
        }
        .augovia-sm-node {
          animation-duration: ${DURATION};
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .augovia-sm-drift-a { animation-name: augovia-sm-drift-a; }
        .augovia-sm-drift-b { animation-name: augovia-sm-drift-b; }
        .augovia-sm-drift-c { animation-name: augovia-sm-drift-c; }
        .augovia-sm-final {
          animation-name: augovia-sm-final-pulse;
        }

        @keyframes augovia-sm-complexity-fade {
          0%   { opacity: 1; }
          30%  { opacity: 1; }
          48%  { opacity: 0.12; }
          72%  { opacity: 0.12; }
          92%  { opacity: 1; }
          100% { opacity: 1; }
        }
        .augovia-sm-complexity line { opacity: ${COMPLEXITY_OPACITY}; }

        @keyframes augovia-sm-resolved-fade {
          0%   { opacity: 0; }
          40%  { opacity: 0; }
          58%  { opacity: ${RESOLVED_OPACITY}; }
          78%  { opacity: ${RESOLVED_OPACITY}; }
          96%  { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes augovia-sm-final-pulse {
          0%   { opacity: 0.55; transform: scale(1); }
          40%  { opacity: 0.55; transform: scale(1); }
          58%  { opacity: 1; transform: scale(1.18); }
          72%  { opacity: 1; transform: scale(1); }
          92%  { opacity: 0.55; transform: scale(1); }
          100% { opacity: 0.55; transform: scale(1); }
        }

        @keyframes augovia-sm-drift-a {
          0%   { transform: translate(0px, 0px); }
          50%  { transform: translate(3px, -4px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes augovia-sm-drift-b {
          0%   { transform: translate(0px, 0px); }
          50%  { transform: translate(-4px, 3px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes augovia-sm-drift-c {
          0%   { transform: translate(0px, 0px); }
          50%  { transform: translate(2px, 4px); }
          100% { transform: translate(0px, 0px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .augovia-sm-complexity,
          .augovia-sm-node {
            animation: none !important;
            transform: none !important;
          }
          .augovia-sm-complexity line { opacity: 0.08 !important; }
          .augovia-sm-resolved { animation: none !important; }
          .augovia-sm-resolved line { opacity: ${RESOLVED_OPACITY} !important; }
          .augovia-sm-final {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        }
      `}</style>
    </div>
  );
}

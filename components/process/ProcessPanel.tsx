import { ReactNode } from "react";
import { CycleState } from "./cycle";
import { COLORS } from "./palette";

/** Shared illustration frame: fixed-ratio SVG on ivory, From/To bar below. */
export function ProcessPanel({
  label,
  state,
  children,
}: {
  label: string;
  state: CycleState;
  children?: ReactNode;
}) {
  return (
    <div role="img" aria-label={label} className="rounded-2xl bg-ivory p-4">
      <svg
        viewBox="0 0 240 140"
        className="block h-auto w-full"
        fill="none"
        aria-hidden="true"
      >
        <g opacity={state.opacity}>{children}</g>
      </svg>
      <FromToBar state={state} />
    </div>
  );
}

/** One continuous bar: FROM on the left, TO on the right, the bar is the progress. */
export function FromToBar({ state }: { state: CycleState }) {
  const fromOpacity = 1 - 0.65 * state.labelMix;
  const toOpacity = 0.35 + 0.65 * state.labelMix;
  const label = "text-[10px] font-medium uppercase leading-none tracking-[0.16em] text-ink";

  return (
    <div className="mt-3 flex items-center gap-3" aria-hidden="true">
      <span className={label} style={{ opacity: fromOpacity }}>
        From
      </span>
      <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-ink/10">
        <div
          className="absolute inset-0 origin-left rounded-full"
          style={{
            transform: `scaleX(${state.fill})`,
            opacity: state.fillOpacity,
            backgroundColor: state.tone === "from" ? COLORS.mist : COLORS.stone,
          }}
        />
      </div>
      <span className={label} style={{ opacity: toOpacity }}>
        To
      </span>
    </div>
  );
}

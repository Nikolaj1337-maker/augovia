"use client";

import { useEffect, useState } from "react";

// ---- Tunable parameters -----------------------------------------------
// The full stop is part of each animated string, so it is deleted first
// and typed last, exactly like any other character.
const WORDS = ["delivery.", "execution.", "impact."];
const LEAD = "Strategy, followed through to ";

// [min, max] in milliseconds
const TIMING = {
  type: [80, 120],
  erase: [50, 90],
  hold: [2500, 3000],
  gap: [300, 500],
};

// Longest string (including the full stop) reserves the horizontal space so nothing ever shifts
const LONGEST = WORDS.reduce((a, b) => (b.length > a.length ? b : a));

const rand = ([min, max]: number[]) => min + Math.random() * (max - min);

export default function AnimatedHeroHeadline({
  className = "",
}: {
  className?: string;
}) {
  // Starts as "delivery" so server and client markup match (no hydration issues)
  const [text, setText] = useState(WORDS[0]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let timer: ReturnType<typeof setTimeout>;
    let current = WORDS[0];
    let index = 0;

    const show = (t: string) => {
      current = t;
      setText(t);
    };
    const later = (fn: () => void, ms: number) => {
      timer = setTimeout(fn, ms);
    };

    const hold = () => later(erase, rand(TIMING.hold));

    const erase = () => {
      const next = current.slice(0, -1);
      show(next);
      if (next.length > 0) {
        later(erase, rand(TIMING.erase));
      } else {
        index = (index + 1) % WORDS.length;
        later(type, rand(TIMING.gap));
      }
    };

    const type = () => {
      const target = WORDS[index];
      show(target.slice(0, current.length + 1));
      if (current.length < target.length) {
        later(type, rand(TIMING.type));
      } else {
        hold();
      }
    };

    hold();

    // If the user switches on reduced motion later, stop and reset
    const onChange = () => {
      if (mq.matches) {
        clearTimeout(timer);
        show(WORDS[0]);
      }
    };
    mq.addEventListener("change", onChange);

    return () => {
      clearTimeout(timer);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <h1 className={className}>
      {/* Screen readers get the stable sentence, not the typing */}
      <span className="sr-only">{LEAD + WORDS[0]}</span>
      <span aria-hidden="true">
        {LEAD}
        <span className="relative inline-block">
          {/* Invisible sizer reserves the width of the longest word */}
          <span className="invisible">{LONGEST}</span>
          <span className="absolute left-0 top-0 whitespace-nowrap">
            {text}
          </span>
        </span>
      </span>
    </h1>
  );
}

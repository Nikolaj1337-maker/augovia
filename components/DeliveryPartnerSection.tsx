"use client";

import { ComponentType, Fragment, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { CycleState } from "./process/cycle";
import { useProcessCycle } from "./process/useProcessCycle";
import { ProcessPanel } from "./process/ProcessPanel";
import AlignIllustration from "./process/AlignIllustration";
import DesignIllustration from "./process/DesignIllustration";
import EnableIllustration from "./process/EnableIllustration";
import DeliverIllustration from "./process/DeliverIllustration";

type Step = {
  n: string;
  title: string;
  quote: string;
  /** Read by screen readers in place of the animation */
  label: string;
  Illustration: ComponentType<{ state: CycleState }>;
};

const steps: Step[] = [
  {
    n: "1",
    title: "Align",
    quote: "It doesn’t remove different perspectives. It gives them a common direction.",
    label: "From competing priorities to a common direction.",
    Illustration: AlignIllustration,
  },
  {
    n: "2",
    title: "Design",
    quote: "The answer isn’t more ideas. It’s a structure that connects them.",
    label: "From disconnected ideas to a coherent strategic structure.",
    Illustration: DesignIllustration,
  },
  {
    n: "3",
    title: "Enable",
    quote: "Teams have the clarity, capabilities and connections to act.",
    label: "From isolated teams to equipped, coordinated teams.",
    Illustration: EnableIllustration,
  },
  {
    n: "4",
    title: "Deliver",
    quote: "Progress is tangible. The work continues beyond the strategy itself.",
    label: "From stalled initiatives to visible, tangible progress.",
    Illustration: DeliverIllustration,
  },
];

export default function DeliveryPartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // One shared clock keeps all four bars and illustrations in sync
  const state = useProcessCycle(sectionRef);

  return (
    <section ref={sectionRef} className="bg-shadow px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[2.75rem] italic leading-[1.05] md:text-6xl">
            Not just advice. Delivery.
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-ivory/70 md:text-[20px]">
            Augovia combines strategic perspective with hands-on execution.
            From facilitating leadership workshops and shaping strategic
            narratives to training field teams and supporting implementation,
            the work does not stop when the strategy is finished.
          </p>
        </div>

        {/* One grid row: card, arrow, card, arrow, card, arrow, card.
            Cards stretch to the same height and share one internal structure. */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {steps.map((step, i) => (
            <Fragment key={step.n}>
              <div className="mx-auto flex h-full w-full min-w-0 max-w-md flex-col rounded-3xl border border-ivory/15 bg-ivory/[0.04] p-5 lg:max-w-none">
                <ProcessPanel label={step.label} state={state}>
                  <step.Illustration state={state} />
                </ProcessPanel>
                <div className="px-2">
                  <p className="mt-6 text-[13px] leading-5 text-mist">{step.n}</p>
                  <h3 className="mt-1 min-h-[1.75rem] text-[19px] font-medium leading-7">
                    {step.title}
                  </h3>
                </div>
                <div className="mx-2 mt-auto pt-6">
                  <p className="border-t border-ivory/10 pt-5 font-serif text-[18px] italic leading-snug text-ivory/85">
                    {step.quote}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <>
                  <ArrowRight
                    className="hidden h-5 w-5 shrink-0 self-center text-ivory/30 lg:block"
                    strokeWidth={1.5}
                  />
                  <ArrowDown
                    className="h-5 w-5 shrink-0 justify-self-center text-ivory/30 lg:hidden"
                    strokeWidth={1.5}
                  />
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

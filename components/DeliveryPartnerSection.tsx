import { Fragment } from "react";
import { Target, PenTool, GraduationCap, Rocket, ArrowRight, ArrowDown, LucideIcon } from "lucide-react";

type Step = {
  n: string;
  title: string;
  copy: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    n: "1",
    title: "Align",
    copy: "Clarify the challenge and align leadership.",
    icon: Target,
  },
  {
    n: "2",
    title: "Design",
    copy: "Build the strategy, model or plan.",
    icon: PenTool,
  },
  {
    n: "3",
    title: "Enable",
    copy: "Equip teams with the tools, capabilities and direction to execute.",
    icon: GraduationCap,
  },
  {
    n: "4",
    title: "Deliver",
    copy: "Stay close to implementation where hands-on support is needed.",
    icon: Rocket,
  },
];

export default function DeliveryPartnerSection() {
  return (
    <section className="bg-shadow px-6 py-20 text-ivory md:px-10 md:py-28">
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
              <div className="flex h-full min-w-0 flex-col rounded-3xl border border-ivory/15 bg-ivory/[0.04] p-7">
                <step.icon
                  className="h-6 w-6 shrink-0 text-mist"
                  strokeWidth={1.5}
                />
                <p className="mt-5 text-[13px] leading-5 text-mist">{step.n}</p>
                <h3 className="mt-1 min-h-[1.75rem] text-[19px] font-medium leading-7">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">
                  {step.copy}
                </p>
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

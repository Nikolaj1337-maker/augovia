import {
  Factory,
  FlaskConical,
  TrendingUp,
  Stethoscope,
  Scale,
  BarChart3,
  Microscope,
} from "lucide-react";

const whoWeWorkWith = [
  {
    name: "Pharma",
    icon: Factory,
    copy: "Strategic and commercial challenges across the pharmaceutical value chain.",
  },
  {
    name: "Biotech",
    icon: FlaskConical,
    copy: "Hands-on support for clinical-stage and growth-stage biotech organizations.",
  },
];

// Functions we work with (kept short: what we do with them is under "What we do")
const whereWeWork = [
  { name: "Commercial", icon: TrendingUp, copy: "Brand, launch and field teams." },
  {
    name: "Medical",
    icon: Stethoscope,
    copy: "Medical affairs and scientific engagement.",
  },
  {
    name: "Market Access",
    icon: Scale,
    copy: "Pricing, reimbursement and payer access.",
  },
  { name: "Analytics", icon: BarChart3, copy: "Insights, data and forecasting." },
];

export default function FocusSection() {
  return (
    <section id="focus" className="bg-shadow px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-[2.75rem] italic leading-[1.05] md:text-6xl">
          Our focus
        </h2>
        <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-ivory/70 md:text-[20px]">
          Senior strategic support across the life sciences value chain, with
          particular depth in Pharma and Biotech.
        </p>

        <div className="mt-16">
          <p className="text-[15px] text-mist">Who we work with</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {whoWeWorkWith.map((area) => (
              <div
                key={area.name}
                className="rounded-3xl border border-ivory/15 p-7"
              >
                <area.icon className="h-6 w-6 text-mist" strokeWidth={1.5} />
                <h3 className="mt-5 text-[20px] font-medium">{area.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/60">
                  {area.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="text-[15px] text-mist">Where we work</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whereWeWork.map((area) => (
              <div
                key={area.name}
                className="rounded-3xl border border-ivory/15 p-7"
              >
                <area.icon className="h-6 w-6 text-mist" strokeWidth={1.5} />
                <h3 className="mt-5 text-[18px] font-medium">{area.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ivory/60">
                  {area.copy}
                </p>
              </div>
            ))}
          </div>

          {/* Connector: the four functions work closely with R&D */}
          <div className="mx-auto h-8 w-px bg-ivory/20" aria-hidden="true" />
          <div className="flex flex-col gap-4 rounded-3xl border border-mist/40 bg-ivory/[0.04] p-7 md:flex-row md:items-center md:gap-8">
            <div className="flex items-center gap-4 md:w-56 md:shrink-0">
              <Microscope className="h-6 w-6 shrink-0 text-mist" strokeWidth={1.5} />
              <h3 className="text-[20px] font-medium">R&amp;D</h3>
            </div>
            <p className="text-[16px] leading-relaxed text-ivory/70">
              Close collaboration with R&amp;D, so that development teams can
              take a long-term view and build what will count later into the
              R&amp;D program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

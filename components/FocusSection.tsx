import {
  Factory,
  FlaskConical,
  TrendingUp,
  Stethoscope,
  Scale,
  BarChart3,
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

// Functions we work with (name only; what we do with them is under "What we do")
const functions = [
  { name: "Commercial", icon: TrendingUp },
  { name: "Medical Affairs", icon: Stethoscope },
  { name: "Market Access", icon: Scale },
  { name: "Analytics", icon: BarChart3 },
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

        <p className="mt-16 max-w-xl text-[18px] leading-relaxed text-ivory/70 md:text-[20px]">
          Focus on the later stages of the value chain, while working closely
          with R&amp;D to ensure that long-term market needs and value drivers
          are integrated into development priorities early on.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {functions.map((fn) => (
            <div
              key={fn.name}
              className="rounded-3xl border border-ivory/15 p-6 md:p-7"
            >
              <fn.icon className="h-6 w-6 text-mist" strokeWidth={1.5} />
              <h3 className="mt-5 text-[17px] font-medium md:text-[18px]">
                {fn.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

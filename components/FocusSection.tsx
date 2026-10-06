import { Factory, FlaskConical, TrendingUp, Stethoscope, BarChart3 } from "lucide-react";

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

const whereWeHelp = [
  {
    name: "Commercial",
    icon: TrendingUp,
    copy: "Strategy, launch, brand, field excellence and commercial transformation.",
  },
  {
    name: "Medical & Market Access",
    icon: Stethoscope,
    copy: "Cross-functional strategic alignment across Medical, Market Access and Commercial.",
  },
  {
    name: "Analytics & Insights",
    icon: BarChart3,
    copy: "Data and insight work that grounds strategic and commercial decisions.",
  },
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
          <p className="text-[15px] text-mist">Where we help</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {whereWeHelp.map((area) => (
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
        </div>
      </div>
    </section>
  );
}

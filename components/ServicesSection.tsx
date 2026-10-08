import { Compass, Users, Building2, UserCog, LucideIcon } from "lucide-react";

type Group = {
  n: string;
  title: string;
  icon: LucideIcon;
  items: string[];
};

const groups: Group[] = [
  {
    n: "1",
    title: "Strategy",
    icon: Compass,
    items: [
      "Launch Strategy",
      "Brand Planning & Positioning",
      "Portfolio Management",
      "Wargaming & Competitive response",
      "Forecasting & Data-driven planning",
    ],
  },
  {
    n: "2",
    title: "Commercial & Field Excellence",
    icon: Users,
    items: [
      "Commercial Narrative & Discourse Development",
      "Field Force Training",
      "Commercial & Medical Interaction",
      "Commercial Excellence",
      "AI-driven analytics",
    ],
  },
  {
    n: "3",
    title: "Organizational Transformation",
    icon: Building2,
    items: [
      "Organizational Assessment",
      "Transformation Planning",
      "Post-Merger Integration",
      "PMO & Change Management",
      "Operating Model Design",
    ],
  },
  {
    n: "4",
    title: "Interim & Embedded Advisory",
    icon: UserCog,
    items: [
      "Interim Leadership Support",
      "Embedded Strategic Support",
      "Launch & Transformation Leadership",
      "Long-term Advisory Support",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-serif text-[2.75rem] italic leading-[1.05] text-ink md:text-6xl">
            What we do
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-ink/70 md:text-[20px]">
            From strategic questions to hands-on execution, Augovia supports
            leadership teams where decisions need to translate into action.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.n}
              className="relative overflow-hidden rounded-3xl bg-[#EFE9DC] p-8"
            >
              <span className="pointer-events-none absolute right-6 top-2 font-serif text-8xl italic text-ink/[0.06]">
                {group.n}
              </span>
              <group.icon
                className="h-6 w-6 text-stone"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 text-[20px] font-medium text-ink">
                {group.title}
              </h3>
              <ul className="relative mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-relaxed text-ink/65"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

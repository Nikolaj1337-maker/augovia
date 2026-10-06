const groups = [
  {
    n: "01",
    title: "Strategy",
    items: [
      "Launch Strategy",
      "Brand Planning & Positioning",
      "Portfolio Management",
      "Wargaming & Competitor Analysis",
      "Forecasting & Strategic Planning",
    ],
  },
  {
    n: "02",
    title: "Commercial & Field Excellence",
    items: [
      "Commercial Narrative & Discourse Development",
      "Field Force Training",
      "Commercial & Medical Interaction",
      "Commercial Excellence",
    ],
  },
  {
    n: "03",
    title: "Organizational Transformation",
    items: [
      "Organizational Assessment",
      "Transformation Planning",
      "Post-Merger Integration",
      "PMO & Change Management",
      "Operating Model Design",
    ],
  },
  {
    n: "04",
    title: "Interim & Embedded Advisory",
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
    <section id="services" className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl italic text-ink md:text-5xl">
            What we do
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/70">
            From strategic questions to hands-on execution, Augovia supports
            leadership teams where decisions need to translate into action.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.n} className="border-t border-ink/10 pt-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] text-stone">{group.n}</span>
                <h3 className="text-[19px] font-medium text-ink">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5">
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

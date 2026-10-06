const areas = [
  {
    name: "Pharma",
    copy: "Strategic and commercial challenges across the pharmaceutical value chain.",
  },
  {
    name: "Biotech",
    copy: "Hands-on support for clinical-stage and growth-stage biotech organizations.",
  },
  {
    name: "Commercial",
    copy: "Strategy, launch, brand, field excellence and commercial transformation.",
  },
  {
    name: "Medical & Market Access",
    copy: "Cross-functional strategic alignment across Medical, Market Access and Commercial.",
  },
  {
    name: "Analytics & Insights",
    copy: "Data and insight work that grounds strategic and commercial decisions.",
  },
];

export default function FocusSection() {
  return (
    <section id="focus" className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <h2 className="font-serif text-4xl italic text-ink md:text-5xl">
              Our focus
            </h2>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ink/70">
              Senior strategic support across the life sciences value chain —
              with particular depth in Pharma and Biotech.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-t border-ink/10 md:border-t-0">
            {areas.map((area) => (
              <div
                key={area.name}
                className="grid gap-2 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-8"
              >
                <h3 className="text-[17px] font-medium text-ink">
                  {area.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/65">
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

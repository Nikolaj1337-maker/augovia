const metrics = [
  { value: "10+", label: "Years of experience" },
  {
    value: "5+",
    label: "Experience working with 5+ of the world's top 10 pharmaceutical companies",
  },
  { value: "8+", label: "Therapeutic areas" },
];

const areas = [
  "Oncology",
  "Hematology",
  "Neurology",
  "Psychiatry",
  "Dermatology",
  "Ophthalmology",
  "Virology",
  "and others",
];

export default function ExperienceSection() {
  return (
    <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-14 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-serif text-5xl italic text-ink md:text-6xl">
                {metric.value}
              </div>
              <p className="mt-3 max-w-[22ch] text-[15px] leading-relaxed text-ink/65">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <p className="text-[15px] text-stone">
              Europe · US · Selected African &amp; Asian markets
            </p>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {areas.map((area, i) => (
              <span key={area} className="text-[15px] text-ink/65">
                {area}
                {i < areas.length - 1 && <span className="text-ink/25"> · </span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

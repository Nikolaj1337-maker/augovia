const therapeuticAreas = [
  "Oncology",
  "Hematology",
  "Neurology",
  "Psychiatry",
  "Dermatology",
  "Ophthalmology",
  "Virology",
  "and others",
];

export default function GeographySection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <GlobeBackdrop />

      <div className="relative mx-auto max-w-content">
        <p className="text-[15px] text-stone">Where we work</p>
        <h2 className="mt-5 max-w-3xl font-serif text-[2.5rem] italic leading-[1.08] text-ink sm:text-[3.5rem] md:text-[4.5rem]">
          Europe · US · Selected African &amp; Asian markets
        </h2>

        <div className="mt-16 flex flex-wrap gap-x-3 gap-y-2">
          {therapeuticAreas.map((area, i) => (
            <span key={area} className="text-[15px] text-ink/60">
              {area}
              {i < therapeuticAreas.length - 1 && (
                <span className="text-ink/25"> · </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobeBackdrop() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="pointer-events-none absolute -right-20 -top-16 h-[480px] w-[480px] opacity-[0.14] sm:h-[560px] sm:w-[560px] md:-right-10 md:-top-24 md:h-[640px] md:w-[640px]"
      aria-hidden="true"
    >
      <g stroke="#336B87" strokeWidth="1.5" fill="none">
        <circle cx="400" cy="250" r="220" />
        <ellipse cx="400" cy="250" rx="90" ry="220" />
        <ellipse cx="400" cy="250" rx="180" ry="220" />
        <line x1="180" y1="250" x2="620" y2="250" />
        <ellipse cx="400" cy="250" rx="220" ry="90" />
        <ellipse cx="400" cy="250" rx="220" ry="160" />
      </g>
    </svg>
  );
}

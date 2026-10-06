export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
      <div className="mx-auto grid max-w-content gap-14 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10">
        <div>
          <p className="mb-6 text-[16px] text-stone md:text-[17px]">
            Strategic advisory for Pharma, Biotech &amp; Healthcare
          </p>
          <h1 className="max-w-2xl font-serif text-[3.25rem] italic leading-[1.02] text-ink sm:text-[4.25rem] md:text-[5.25rem] lg:text-[6rem]">
            Strategy, followed through to delivery.
          </h1>
          <p className="mt-9 max-w-xl text-[19px] leading-relaxed text-ink/70 md:text-[21px]">
            Augovia advises Pharma, Biotech and Healthcare leaders on strategy,
            transformation and execution, from critical decisions to
            hands-on delivery.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-pill bg-ink px-7 py-3.5 text-center text-[16px] text-ivory transition-colors hover:bg-shadow"
            >
              Let&rsquo;s talk
            </a>
            <a
              href="#services"
              className="rounded-pill border border-ink/25 px-7 py-3.5 text-center text-[16px] text-ink transition-colors hover:border-ink/60"
            >
              Explore our work
            </a>
          </div>
        </div>

        <HeroDiagram />
      </div>
    </section>
  );
}

function HeroDiagram() {
  const stops = [
    { label: "Align", x: 40, y: 230 },
    { label: "Design", x: 150, y: 150 },
    { label: "Enable", x: 260, y: 170 },
    { label: "Deliver", x: 370, y: 60 },
  ];

  return (
    <div className="hidden md:block" aria-hidden="true">
      <svg
        viewBox="0 0 410 280"
        className="h-auto w-full max-w-md"
        fill="none"
      >
        <path
          d="M40 230 C 90 210, 110 160, 150 150 S 230 185, 260 170 S 330 90, 370 60"
          stroke="#336B87"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "augovia-draw 1.8s 0.2s ease-out forwards",
          }}
        />
        {stops.map((s, i) => (
          <g key={s.label}>
            <circle
              cx={s.x}
              cy={s.y}
              r="5"
              fill={i === stops.length - 1 ? "#763626" : "#101522"}
              style={{
                opacity: 0,
                animation: `augovia-dot 0.5s ${0.4 + i * 0.4}s ease-out forwards`,
              }}
            />
            <text
              x={s.x}
              y={s.y - 16}
              fontSize="13"
              fill="#101522"
              fillOpacity="0.55"
              textAnchor="middle"
              style={{
                opacity: 0,
                animation: `augovia-dot 0.5s ${0.4 + i * 0.4}s ease-out forwards`,
              }}
            >
              {s.label}
            </text>
          </g>
        ))}
      </svg>
      <style>{`
        @keyframes augovia-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes augovia-dot {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

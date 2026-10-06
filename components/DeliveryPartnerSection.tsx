const steps = [
  {
    n: "01",
    title: "Align",
    copy: "Clarify the challenge and align leadership.",
  },
  {
    n: "02",
    title: "Design",
    copy: "Build the strategy, model or plan.",
  },
  {
    n: "03",
    title: "Enable",
    copy: "Equip teams with the tools, capabilities and direction to execute.",
  },
  {
    n: "04",
    title: "Deliver",
    copy: "Stay close to implementation where hands-on support is needed.",
  },
];

export default function DeliveryPartnerSection() {
  return (
    <section className="bg-shadow px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl italic md:text-5xl">
            Not just advice. Delivery.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ivory/70">
            Augovia combines strategic perspective with hands-on execution.
            From facilitating leadership workshops and shaping strategic
            narratives to training field teams and supporting implementation,
            the work does not stop when the strategy is finished.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`pt-6 ${
                i > 0 ? "border-t border-ivory/15 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0" : ""
              }`}
            >
              <span className="text-[13px] text-mist">{step.n}</span>
              <h3 className="mt-3 text-[19px] font-medium">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

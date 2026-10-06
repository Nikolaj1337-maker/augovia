export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-content">
        <p className="mb-6 text-[15px] text-stone">
          Strategic advisory for Pharma, Biotech &amp; Healthcare
        </p>
        <h1 className="max-w-3xl font-serif text-[3rem] italic leading-[1.05] text-ink sm:text-[3.75rem] md:text-[4.75rem]">
          Strategy, followed through to delivery.
        </h1>
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink/70 md:text-lg">
          Augovia advises Pharma, Biotech and Healthcare leaders on strategy,
          transformation and execution — from critical decisions to
          hands-on delivery.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-pill bg-ink px-7 py-3.5 text-center text-[15px] text-ivory transition-colors hover:bg-shadow"
          >
            Let&rsquo;s talk
          </a>
          <a
            href="#services"
            className="rounded-pill border border-ink/25 px-7 py-3.5 text-center text-[15px] text-ink transition-colors hover:border-ink/60"
          >
            Explore our work
          </a>
        </div>
      </div>
    </section>
  );
}

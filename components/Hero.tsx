import StrategyMapAnimation from "./StrategyMapAnimation";
import AnimatedHeroHeadline from "./AnimatedHeroHeadline";

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-content gap-14 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10">
        <div>
          <p className="mb-6 text-[16px] text-stone md:text-[17px]">
            Strategic advisory for Pharma, Biotech &amp; Healthcare
          </p>
          <AnimatedHeroHeadline className="max-w-2xl font-serif text-[3.25rem] italic leading-[1.02] text-ink sm:text-[4.25rem] md:text-[5.25rem] lg:text-[6rem]" />
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

        <StrategyMapAnimation />
      </div>
    </section>
  );
}

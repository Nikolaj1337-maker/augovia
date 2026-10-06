export default function FounderSection() {
  return (
    <section id="founder" className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <h2 className="font-serif text-4xl italic text-ink md:text-5xl">
              The founder
            </h2>
            <p className="mt-6 text-[17px] font-medium text-ink">
              [FOUNDER NAME]
            </p>
            <p className="text-[15px] text-ink/60">Founder, Augovia</p>
            <a
              href="[LINKEDIN URL]"
              className="mt-4 inline-block text-[15px] text-stone underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>

          <div className="max-w-xl space-y-6 text-[17px] leading-relaxed text-ink/70">
            <p>
              [FOUNDER NAME] brings more than 10 years of experience across
              strategy consulting, Pharma, Biotech and healthcare delivery —
              including time at Monitor Deloitte, Merck and OVID, alongside
              work in multinational strategy consulting, the pharmaceutical
              industry, a biotech start-up, and co-founding a private clinic.
            </p>
            <p>
              Having worked across consulting, Pharma, Biotech and healthcare
              delivery, [FOUNDER NAME] brings a perspective that connects
              strategic thinking with the realities of execution — built
              across Europe, the US and selected African and Asian markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

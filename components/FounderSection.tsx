import { Linkedin } from "lucide-react";

export default function FounderSection() {
  return (
    <section id="founder" className="bg-shadow px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <h2 className="font-serif text-[2.75rem] italic leading-[1.05] md:text-6xl">
              The founder
            </h2>
            <p className="mt-8 text-[19px] font-medium">[FOUNDER NAME]</p>
            <p className="text-[15px] text-ivory/60">Founder, Augovia</p>
            <a
              href="[LINKEDIN URL]"
              className="mt-5 inline-flex items-center gap-2 text-[15px] text-mist underline underline-offset-4"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              LinkedIn
            </a>
          </div>

          <div className="max-w-xl space-y-6 text-[18px] leading-relaxed text-ivory/70 md:text-[19px]">
            <p>
              [FOUNDER NAME] brings more than 10 years of experience across
              strategy consulting, Pharma, Biotech and healthcare delivery,
              including time at Monitor Deloitte, Merck and OVID, alongside
              work in multinational strategy consulting, the pharmaceutical
              industry, a biotech start-up, and co-founding a private clinic.
            </p>
            <p>
              Having worked across consulting, Pharma, Biotech and healthcare
              delivery, [FOUNDER NAME] brings a perspective that connects
              strategic thinking with the realities of execution, built
              across Europe, the US and selected African and Asian markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

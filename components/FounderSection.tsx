import { Linkedin } from "lucide-react";
import { site, hasLinkedIn } from "@/lib/site";

export default function FounderSection() {
  return (
    <section id="founder" className="bg-shadow px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <h2 className="font-serif text-[2.75rem] italic leading-[1.05] md:text-6xl">
              The founder
            </h2>
            <p className="mt-8 text-[19px] font-medium">{site.founderFullName}</p>
            <p className="text-[15px] text-ivory/60">Founder, Augovia</p>
            {hasLinkedIn && (
              <a
                href={site.linkedinUrl}
                className="mt-5 inline-flex items-center gap-2 text-[15px] text-mist underline underline-offset-4"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </a>
            )}
          </div>

          <div className="max-w-xl space-y-6 text-[18px] leading-relaxed text-ivory/70 md:text-[19px]">
            <p>
              {site.founderFirstName} brings more than 10 years of experience across strategy
              consulting, Pharma, Biotech and healthcare delivery, including
              time at multinational strategy consulting firm Monitor
              Deloitte, pharmaceutical company Merck, setting up a mental
              health clinic in Berlin with OVID, and as CEO of a biotech
              start-up.
            </p>
            <p>
              Having worked across consulting, pharma, biotech and care
              delivery, {site.founderFirstName} brings a perspective that connects strategic
              thinking with the realities of execution.
            </p>
            <p>
              {site.founderFirstName} has worked on pharma topics across
              Europe and the US, as well as in selected markets in Africa, the
              Middle East, South America and Asia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

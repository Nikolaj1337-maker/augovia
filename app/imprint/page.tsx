import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Augovia",
};

// NOTE TO EDITOR: all bracketed placeholders below are legal
// information that must be supplied and reviewed before launch.
export default function ImprintPage() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-content">
          <h1 className="font-serif text-4xl italic text-ink md:text-5xl">
            Imprint
          </h1>

          <div className="mt-10 max-w-xl space-y-6 text-[15px] leading-relaxed text-ink/70">
            <p>
              [LEGAL COMPANY NAME]
              <br />
              [ADDRESS]
            </p>
            <p>
              Managing Director / Owner: [MANAGING DIRECTOR / OWNER]
            </p>
            <p>Registration details: [REGISTRATION DETAILS]</p>
            <p>VAT ID: [VAT ID]</p>
            <p>
              Email: <a href="mailto:[EMAIL]" className="text-stone underline underline-offset-4">[EMAIL]</a>
            </p>
            <p className="text-[13px] text-ink/40">
              This page contains placeholder legal content and must be
              reviewed and completed by qualified counsel before the site is
              published.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
